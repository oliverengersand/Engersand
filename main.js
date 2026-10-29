/* Galleries load on first open. Videos play in the page dialog. Relative paths only. */
(function () {
  "use strict";

  const NAMES = { street: "Street", fog: "Fog", bouldering: "Bouldering" };
  const root = document.documentElement;
  let opener = null;
  let galleries = null;

  function lock() { root.classList.add("is-locked"); }
  function unlock() { root.classList.remove("is-locked"); }
  function openDialog(d) {
    if (typeof d.showModal === "function") d.showModal();
    else d.setAttribute("open", "");
    lock();
  }

  function loadGalleries() {
    if (galleries) return Promise.resolve(galleries);
    if (window.GALLERIES) { galleries = window.GALLERIES; return Promise.resolve(galleries); }
    return fetch("assets/photos/galleries.json").then(function (r) {
      if (!r.ok) throw new Error("gallery");
      return r.json();
    }).then(function (data) {
      galleries = data;
      return data;
    });
  }

  /* Current section in the sticky nav. */
  const navLinks = document.querySelectorAll(".site-header nav a[href^='#']");
  if ("IntersectionObserver" in window && navLinks.length) {
    const map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!map[en.target.id]) return;
        if (en.isIntersecting) {
          Object.keys(map).forEach(function (id) { map[id].removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        } else {
          map[en.target.id].removeAttribute("aria-current");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  /* Hero preview. Empty data-mp4 keeps the poster until a clip exists. */
  const hv = document.querySelector(".hero__video");
  if (hv) {
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = navigator.connection && navigator.connection.saveData;
    const toggle = document.querySelector(".preview-toggle");
    var fadeSec = 0.4;
    var running = false;
    function paintFade() {
      if (!running) return;
      if (hv.paused || !hv.duration) { running = false; return; }
      var edge = Math.min(hv.currentTime, Math.max(0, hv.duration - hv.currentTime));
      hv.style.opacity = edge >= fadeSec ? "1" : String(Math.max(0, edge / fadeSec));
      requestAnimationFrame(paintFade);
    }
    function startFade() {
      if (running || calm) return;
      running = true;
      requestAnimationFrame(paintFade);
    }
    if (!calm && !save && hv.dataset.mp4) {
      addEventListener("load", function () {
        var markup = "";
        if (hv.dataset.webm) markup += '<source src="' + hv.dataset.webm + '" type="video/webm">';
        markup += '<source src="' + hv.dataset.mp4 + '" type="video/mp4">';
        hv.innerHTML = markup;
        hv.preload = "metadata";
        hv.load();
        hv.play().catch(function () {});
        if (toggle) toggle.hidden = false;
      });
    }
    hv.addEventListener("playing", function () {
      hv.classList.add("is-playing");
      var screen = hv.closest(".window__screen");
      if (screen) screen.classList.add("is-live");
      startFade();
    });
    hv.addEventListener("pause", function () {
      running = false;
      if (hv.currentTime > 0) hv.style.opacity = "1";
    });
    if (toggle) {
      toggle.addEventListener("click", function () {
        if (hv.paused) {
          hv.play();
          toggle.textContent = "Pause preview";
          toggle.setAttribute("aria-pressed", "true");
        } else {
          hv.pause();
          toggle.textContent = "Play preview";
          toggle.setAttribute("aria-pressed", "false");
        }
      });
    }
  }

  /* In-page YouTube player. The href still works with no JS. */
  const player = document.getElementById("player");
  if (player) {
    const frame = player.querySelector(".player__frame");
    const out = player.querySelector(".player__out");
    const ttl = player.querySelector(".window__title");
    document.querySelectorAll(".play-link[data-yt]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        opener = a;
        const id = a.dataset.yt;
        const name = a.dataset.title || "Video";
        frame.style.aspectRatio = a.dataset.ratio || "16/9";
        frame.classList.toggle("player__frame--tall", a.dataset.ratio === "9/16");
        const f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
        f.title = name;
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.allowFullscreen = true;
        f.referrerPolicy = "strict-origin-when-cross-origin";
        frame.replaceChildren(f);
        ttl.textContent = name.toLowerCase().replace(/\s+/g, "_") + ".mp4";
        out.href = a.href;
      openDialog(player);
      player.querySelector(".player__close").focus();
    });
  });
  function closePlayer() {
    if (typeof player.close === "function" && player.open) player.close();
    else {
      player.removeAttribute("open");
      frame.replaceChildren();
      unlock();
      if (opener) opener.focus();
    }
  }
  player.querySelectorAll(".player__close, .player__close-text").forEach(function (btn) {
    btn.addEventListener("click", closePlayer);
  });
  player.addEventListener("click", function (e) { if (e.target === player) closePlayer(); });
  player.addEventListener("close", function () {
    frame.replaceChildren();
    unlock();
    if (opener) opener.focus();
  });
}

  /* Photo lightbox */
  const lb = document.getElementById("lightbox");
  if (lb) {
    const img = lb.querySelector(".lightbox__img");
    const count = lb.querySelector(".lightbox__count");
    const title = lb.querySelector("#lightbox-title");
    const thumbs = lb.querySelector(".lightbox__thumbs");
    const stage = lb.querySelector(".lightbox__stage");
    let list = [];
    let index = 0;

    function preload(i) {
      const p = list[(i + list.length) % list.length];
      if (p) {
        const im = new Image();
        im.src = p.src1280 || p.src;
      }
    }

    function show(i) {
      index = (i + list.length) % list.length;
      const p = list[index];
      img.src = p.src1280 || p.src;
      img.alt = p.alt;
      img.width = p.w;
      img.height = p.h;
      if (p.src1280) {
        img.srcset = p.src1280 + " 1280w, " + p.src + " " + p.w + "w";
        img.sizes = "100vw";
      } else {
        img.removeAttribute("srcset");
      }
      count.textContent = (index + 1) + " / " + list.length;
      thumbs.querySelectorAll(".lightbox__thumb").forEach(function (b, n) {
        b.setAttribute("aria-current", n === index ? "true" : "false");
        if (n === index) b.scrollIntoView({ block: "nearest", inline: "center" });
      });
      preload(index + 1);
      preload(index - 1);
    }

    function open(name, start) {
      list = (galleries && galleries[name]) || [];
      if (!list.length) return;
      title.textContent = NAMES[name] || name;
      thumbs.replaceChildren();
      list.forEach(function (p, n) {
        const li = document.createElement("li");
        const b = document.createElement("button");
        b.type = "button";
        b.className = "lightbox__thumb";
        b.setAttribute("aria-label", "Photo " + (n + 1) + " of " + list.length);
        const t = document.createElement("img");
        t.src = p.micro || p.thumb;
        t.alt = "";
        t.width = 160;
        t.height = 106;
        t.loading = "lazy";
        b.appendChild(t);
        b.addEventListener("click", function () { show(n); });
        li.appendChild(b);
        thumbs.appendChild(li);
      });
      openDialog(lb);
      show(start || 0);
      lb.querySelector(".lightbox__nav--next").focus();
    }

    function close() {
      if (lb.open) lb.close();
      else lb.removeAttribute("open");
    }

    lb.addEventListener("close", function () {
      unlock();
      img.removeAttribute("src");
      img.removeAttribute("srcset");
      if (opener) opener.focus();
    });
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { show(index - 1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { show(index + 1); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
    });
    stage.addEventListener("click", function (e) {
      if (e.target === stage || e.target.classList.contains("lightbox__figure")) close();
    });

    let x0 = null;
    let y0 = 0;
    stage.addEventListener("touchstart", function (e) {
      if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }
    }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });

    document.querySelectorAll("[data-collection]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        opener = a;
        loadGalleries().then(function () {
          open(a.dataset.collection, 0);
        }, function () {
          window.location.href = a.href;
        });
      });
    });
  }

  /* Copy email fallback for machines with no mail app. */
  const toast = document.querySelector(".toast");
  let toastTimer = 0;
  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 2200);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, fail) {
      const t = document.createElement("textarea");
      t.value = text;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      const done = document.execCommand("copy");
      t.remove();
      done ? ok() : fail();
    });
  }
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      copyText(b.dataset.copy).then(
        function () { say("Copied " + b.dataset.copy); },
        function () { say("Couldn't copy. The address is " + b.dataset.copy); }
      );
    });
  });
})();
