/* Photo galleries. Videos are plain links that open YouTube in a new tab. No dependencies, relative paths only. */
(function () {
  "use strict";

  const GALLERIES = {
   "street": [
    {
     "src": "assets/photos/street/street-01.webp",
     "thumb": "assets/photos/street/street-01-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 1"
    },
    {
     "src": "assets/photos/street/street-02.webp",
     "thumb": "assets/photos/street/street-02-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 2"
    },
    {
     "src": "assets/photos/street/street-03.webp",
     "thumb": "assets/photos/street/street-03-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 3"
    },
    {
     "src": "assets/photos/street/street-04.webp",
     "thumb": "assets/photos/street/street-04-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 4"
    },
    {
     "src": "assets/photos/street/street-05.webp",
     "thumb": "assets/photos/street/street-05-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 5"
    },
    {
     "src": "assets/photos/street/street-06.webp",
     "thumb": "assets/photos/street/street-06-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 6"
    },
    {
     "src": "assets/photos/street/street-07.webp",
     "thumb": "assets/photos/street/street-07-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 7"
    },
    {
     "src": "assets/photos/street/street-08.webp",
     "thumb": "assets/photos/street/street-08-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 8"
    },
    {
     "src": "assets/photos/street/street-09.webp",
     "thumb": "assets/photos/street/street-09-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 9"
    },
    {
     "src": "assets/photos/street/street-10.webp",
     "thumb": "assets/photos/street/street-10-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 10"
    },
    {
     "src": "assets/photos/street/street-11.webp",
     "thumb": "assets/photos/street/street-11-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 11"
    },
    {
     "src": "assets/photos/street/street-12.webp",
     "thumb": "assets/photos/street/street-12-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 12"
    },
    {
     "src": "assets/photos/street/street-13.webp",
     "thumb": "assets/photos/street/street-13-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 13"
    },
    {
     "src": "assets/photos/street/street-14.webp",
     "thumb": "assets/photos/street/street-14-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 14"
    },
    {
     "src": "assets/photos/street/street-15.webp",
     "thumb": "assets/photos/street/street-15-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 15"
    },
    {
     "src": "assets/photos/street/street-16.webp",
     "thumb": "assets/photos/street/street-16-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 16"
    },
    {
     "src": "assets/photos/street/street-17.webp",
     "thumb": "assets/photos/street/street-17-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 17"
    },
    {
     "src": "assets/photos/street/street-18.webp",
     "thumb": "assets/photos/street/street-18-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 18"
    },
    {
     "src": "assets/photos/street/street-19.webp",
     "thumb": "assets/photos/street/street-19-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 19"
    },
    {
     "src": "assets/photos/street/street-20.webp",
     "thumb": "assets/photos/street/street-20-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 20"
    },
    {
     "src": "assets/photos/street/street-21.webp",
     "thumb": "assets/photos/street/street-21-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Street, photo 21"
    },
    {
     "src": "assets/photos/street/street-22.webp",
     "thumb": "assets/photos/street/street-22-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 22"
    },
    {
     "src": "assets/photos/street/street-23.webp",
     "thumb": "assets/photos/street/street-23-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 23"
    },
    {
     "src": "assets/photos/street/street-24.webp",
     "thumb": "assets/photos/street/street-24-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Street, photo 24"
    }
   ],
   "fog": [
    {
     "src": "assets/photos/fog/fog-01.webp",
     "thumb": "assets/photos/fog/fog-01-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 1"
    },
    {
     "src": "assets/photos/fog/fog-02.webp",
     "thumb": "assets/photos/fog/fog-02-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 2"
    },
    {
     "src": "assets/photos/fog/fog-03.webp",
     "thumb": "assets/photos/fog/fog-03-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 3"
    },
    {
     "src": "assets/photos/fog/fog-04.webp",
     "thumb": "assets/photos/fog/fog-04-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 4"
    },
    {
     "src": "assets/photos/fog/fog-05.webp",
     "thumb": "assets/photos/fog/fog-05-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 5"
    },
    {
     "src": "assets/photos/fog/fog-06.webp",
     "thumb": "assets/photos/fog/fog-06-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 6"
    },
    {
     "src": "assets/photos/fog/fog-07.webp",
     "thumb": "assets/photos/fog/fog-07-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 7"
    },
    {
     "src": "assets/photos/fog/fog-08.webp",
     "thumb": "assets/photos/fog/fog-08-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 8"
    },
    {
     "src": "assets/photos/fog/fog-09.webp",
     "thumb": "assets/photos/fog/fog-09-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 9"
    },
    {
     "src": "assets/photos/fog/fog-10.webp",
     "thumb": "assets/photos/fog/fog-10-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Fog, photo 10"
    },
    {
     "src": "assets/photos/fog/fog-11.webp",
     "thumb": "assets/photos/fog/fog-11-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Fog, photo 11"
    },
    {
     "src": "assets/photos/fog/fog-12.webp",
     "thumb": "assets/photos/fog/fog-12-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 12"
    },
    {
     "src": "assets/photos/fog/fog-13.webp",
     "thumb": "assets/photos/fog/fog-13-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 13"
    },
    {
     "src": "assets/photos/fog/fog-14.webp",
     "thumb": "assets/photos/fog/fog-14-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 14"
    },
    {
     "src": "assets/photos/fog/fog-15.webp",
     "thumb": "assets/photos/fog/fog-15-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 15"
    },
    {
     "src": "assets/photos/fog/fog-16.webp",
     "thumb": "assets/photos/fog/fog-16-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 16"
    },
    {
     "src": "assets/photos/fog/fog-17.webp",
     "thumb": "assets/photos/fog/fog-17-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 17"
    },
    {
     "src": "assets/photos/fog/fog-18.webp",
     "thumb": "assets/photos/fog/fog-18-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Fog, photo 18"
    }
   ],
   "bouldering": [
    {
     "src": "assets/photos/bouldering/bouldering-01.webp",
     "thumb": "assets/photos/bouldering/bouldering-01-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Bouldering, photo 1"
    },
    {
     "src": "assets/photos/bouldering/bouldering-02.webp",
     "thumb": "assets/photos/bouldering/bouldering-02-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 2"
    },
    {
     "src": "assets/photos/bouldering/bouldering-03.webp",
     "thumb": "assets/photos/bouldering/bouldering-03-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 3"
    },
    {
     "src": "assets/photos/bouldering/bouldering-04.webp",
     "thumb": "assets/photos/bouldering/bouldering-04-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 4"
    },
    {
     "src": "assets/photos/bouldering/bouldering-05.webp",
     "thumb": "assets/photos/bouldering/bouldering-05-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 5"
    },
    {
     "src": "assets/photos/bouldering/bouldering-06.webp",
     "thumb": "assets/photos/bouldering/bouldering-06-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 6"
    },
    {
     "src": "assets/photos/bouldering/bouldering-07.webp",
     "thumb": "assets/photos/bouldering/bouldering-07-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 7"
    },
    {
     "src": "assets/photos/bouldering/bouldering-08.webp",
     "thumb": "assets/photos/bouldering/bouldering-08-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "Bouldering, photo 8"
    },
    {
     "src": "assets/photos/bouldering/bouldering-09.webp",
     "thumb": "assets/photos/bouldering/bouldering-09-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 9"
    },
    {
     "src": "assets/photos/bouldering/bouldering-10.webp",
     "thumb": "assets/photos/bouldering/bouldering-10-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 10"
    },
    {
     "src": "assets/photos/bouldering/bouldering-11.webp",
     "thumb": "assets/photos/bouldering/bouldering-11-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 11"
    },
    {
     "src": "assets/photos/bouldering/bouldering-12.webp",
     "thumb": "assets/photos/bouldering/bouldering-12-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 12"
    },
    {
     "src": "assets/photos/bouldering/bouldering-13.webp",
     "thumb": "assets/photos/bouldering/bouldering-13-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 13"
    },
    {
     "src": "assets/photos/bouldering/bouldering-14.webp",
     "thumb": "assets/photos/bouldering/bouldering-14-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 14"
    },
    {
     "src": "assets/photos/bouldering/bouldering-15.webp",
     "thumb": "assets/photos/bouldering/bouldering-15-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 15"
    },
    {
     "src": "assets/photos/bouldering/bouldering-16.webp",
     "thumb": "assets/photos/bouldering/bouldering-16-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 16"
    },
    {
     "src": "assets/photos/bouldering/bouldering-17.webp",
     "thumb": "assets/photos/bouldering/bouldering-17-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 17"
    },
    {
     "src": "assets/photos/bouldering/bouldering-18.webp",
     "thumb": "assets/photos/bouldering/bouldering-18-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 18"
    },
    {
     "src": "assets/photos/bouldering/bouldering-19.webp",
     "thumb": "assets/photos/bouldering/bouldering-19-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 19"
    },
    {
     "src": "assets/photos/bouldering/bouldering-20.webp",
     "thumb": "assets/photos/bouldering/bouldering-20-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 20"
    },
    {
     "src": "assets/photos/bouldering/bouldering-21.webp",
     "thumb": "assets/photos/bouldering/bouldering-21-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 21"
    },
    {
     "src": "assets/photos/bouldering/bouldering-22.webp",
     "thumb": "assets/photos/bouldering/bouldering-22-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 22"
    },
    {
     "src": "assets/photos/bouldering/bouldering-23.webp",
     "thumb": "assets/photos/bouldering/bouldering-23-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 23"
    },
    {
     "src": "assets/photos/bouldering/bouldering-24.webp",
     "thumb": "assets/photos/bouldering/bouldering-24-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 24"
    },
    {
     "src": "assets/photos/bouldering/bouldering-25.webp",
     "thumb": "assets/photos/bouldering/bouldering-25-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 25"
    },
    {
     "src": "assets/photos/bouldering/bouldering-26.webp",
     "thumb": "assets/photos/bouldering/bouldering-26-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 26"
    },
    {
     "src": "assets/photos/bouldering/bouldering-27.webp",
     "thumb": "assets/photos/bouldering/bouldering-27-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 27"
    },
    {
     "src": "assets/photos/bouldering/bouldering-28.webp",
     "thumb": "assets/photos/bouldering/bouldering-28-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "Bouldering, photo 28"
    }
   ]
  };
  const NAMES = { street: "Street", fog: "Fog", bouldering: "Bouldering" };
  const root = document.documentElement;
  let opener = null;

  function lock() { root.classList.add("is-locked"); }
  function unlock() { root.classList.remove("is-locked"); }
  function openDialog(d) {
    if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
    lock();
  }

  /* ---------- photo lightbox ---------- */
  const lb = document.getElementById("lightbox");
  if (lb) {
    const img = lb.querySelector(".lightbox__img");
    const count = lb.querySelector(".lightbox__count");
    const title = lb.querySelector(".lightbox__title");
    const thumbs = lb.querySelector(".lightbox__thumbs");
    const stage = lb.querySelector(".lightbox__stage");
    let list = [], index = 0;

    function preload(i) { const p = list[(i + list.length) % list.length]; if (p) { const im = new Image(); im.src = p.src; } }

    function show(i) {
      index = (i + list.length) % list.length;
      const p = list[index];
      img.src = p.src; img.alt = p.alt; img.width = p.w; img.height = p.h;
      count.textContent = (index + 1) + " / " + list.length;
      thumbs.querySelectorAll(".lightbox__thumb").forEach(function (b, n) {
        b.setAttribute("aria-current", n === index ? "true" : "false");
        if (n === index) b.scrollIntoView({ block: "nearest", inline: "center" });
      });
      preload(index + 1); preload(index - 1);
    }

    function open(name, start) {
      list = GALLERIES[name] || [];
      if (!list.length) return;
      title.textContent = NAMES[name] || name;
      thumbs.innerHTML = "";
      list.forEach(function (p, n) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "lightbox__thumb"; b.setAttribute("role", "listitem");
        b.setAttribute("aria-label", "Photo " + (n + 1) + " of " + list.length);
        const t = document.createElement("img"); t.src = p.thumb; t.alt = ""; t.loading = "lazy";
        b.appendChild(t);
        b.addEventListener("click", function () { show(n); });
        thumbs.appendChild(b);
      });
      openDialog(lb);
      show(start || 0);
      lb.querySelector(".lightbox__nav--next").focus();
    }

    function close() { if (lb.open) lb.close(); else lb.removeAttribute("open"); }

    lb.addEventListener("close", function () {
      unlock(); img.removeAttribute("src");
      if (opener) opener.focus();
    });
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { show(index - 1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { show(index + 1); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
      else if (e.key === "Escape" && !lb.open) { close(); }
    });
    /* click on the empty area around the photo closes the gallery */
    stage.addEventListener("click", function (e) { if (e.target === stage || e.target.classList.contains("lightbox__figure")) close(); });

    /* swipe on touch screens */
    let x0 = null, y0 = 0;
    stage.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });

    document.querySelectorAll("[data-collection]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault(); opener = a; open(a.dataset.collection, 0);
      });
    });
  }
})();
