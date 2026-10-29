/* Photo galleries and click-to-play videos. No dependencies, relative paths only. */
(function () {
  "use strict";

  const GALLERIES = {
   "street": [
    {
     "src": "assets/photos/street/street-01.webp",
     "thumb": "assets/photos/street/street-01-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "A figure walks down a dim passageway towards a bright courtyard"
    },
    {
     "src": "assets/photos/street/street-02.webp",
     "thumb": "assets/photos/street/street-02-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Three friends lying on the ground with their skateboards"
    },
    {
     "src": "assets/photos/street/street-03.webp",
     "thumb": "assets/photos/street/street-03-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Three friends sitting against a concrete wall"
    },
    {
     "src": "assets/photos/street/street-04.webp",
     "thumb": "assets/photos/street/street-04-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "A young man sits on a ledge under a graffiti wall"
    },
    {
     "src": "assets/photos/street/street-05.webp",
     "thumb": "assets/photos/street/street-05-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Three friends sitting on a ledge with their skateboards"
    },
    {
     "src": "assets/photos/street/street-06.webp",
     "thumb": "assets/photos/street/street-06-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A skater does a trick on the grass while a friend watches"
    },
    {
     "src": "assets/photos/street/street-07.webp",
     "thumb": "assets/photos/street/street-07-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "Two friends posing on a concrete ramp"
    },
    {
     "src": "assets/photos/street/street-08.webp",
     "thumb": "assets/photos/street/street-08-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "One friend sits up in a birch tree while another stands below"
    },
    {
     "src": "assets/photos/street/street-09.webp",
     "thumb": "assets/photos/street/street-09-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Two friends messing around on a lawn in front of a brick building"
    },
    {
     "src": "assets/photos/street/street-10.webp",
     "thumb": "assets/photos/street/street-10-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "A skater jumps off his board on the grass"
    },
    {
     "src": "assets/photos/street/street-11.webp",
     "thumb": "assets/photos/street/street-11-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "A school building behind a wide, empty lawn"
    }
   ],
   "fog": [
    {
     "src": "assets/photos/fog/fog-01.webp",
     "thumb": "assets/photos/fog/fog-01-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A floodlight lights up the fog above a shipping container at night"
    },
    {
     "src": "assets/photos/fog/fog-02.webp",
     "thumb": "assets/photos/fog/fog-02-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "Streetlights glow through fog on a road with a yellow centre line"
    },
    {
     "src": "assets/photos/fog/fog-03.webp",
     "thumb": "assets/photos/fog/fog-03-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A streetlight turns into a bright ball of light in thick fog"
    },
    {
     "src": "assets/photos/fog/fog-04.webp",
     "thumb": "assets/photos/fog/fog-04-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "Bare trees fading into mist"
    },
    {
     "src": "assets/photos/fog/fog-05.webp",
     "thumb": "assets/photos/fog/fog-05-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A lit walkway along a long building at night"
    },
    {
     "src": "assets/photos/fog/fog-06.webp",
     "thumb": "assets/photos/fog/fog-06-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "Mist drifting between trees in a dark forest"
    },
    {
     "src": "assets/photos/fog/fog-07.webp",
     "thumb": "assets/photos/fog/fog-07-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A small stream under bare trees at dusk"
    },
    {
     "src": "assets/photos/fog/fog-08.webp",
     "thumb": "assets/photos/fog/fog-08-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A foggy road curving past streetlights at night"
    },
    {
     "src": "assets/photos/fog/fog-09.webp",
     "thumb": "assets/photos/fog/fog-09-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "A single streetlight above a quiet road in the fog"
    },
    {
     "src": "assets/photos/fog/fog-10.webp",
     "thumb": "assets/photos/fog/fog-10-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Light spills across a foggy field at night"
    },
    {
     "src": "assets/photos/fog/fog-11.webp",
     "thumb": "assets/photos/fog/fog-11-thumb.webp",
     "w": 2000,
     "h": 1333,
     "alt": "Dark trees against glowing fog"
    },
    {
     "src": "assets/photos/fog/fog-12.webp",
     "thumb": "assets/photos/fog/fog-12-thumb.webp",
     "w": 1333,
     "h": 2000,
     "alt": "Faint streetlights almost lost in the fog"
    }
   ],
   "bouldering": [
    {
     "src": "assets/photos/bouldering/bouldering-01.webp",
     "thumb": "assets/photos/bouldering/bouldering-01-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "A climber reaches across a wall covered in holds"
    },
    {
     "src": "assets/photos/bouldering/bouldering-02.webp",
     "thumb": "assets/photos/bouldering/bouldering-02-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber reaches for a purple hold"
    },
    {
     "src": "assets/photos/bouldering/bouldering-03.webp",
     "thumb": "assets/photos/bouldering/bouldering-03-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber stretches out between pink and purple volumes"
    },
    {
     "src": "assets/photos/bouldering/bouldering-04.webp",
     "thumb": "assets/photos/bouldering/bouldering-04-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber kicks a leg out for balance on a steep wall"
    },
    {
     "src": "assets/photos/bouldering/bouldering-05.webp",
     "thumb": "assets/photos/bouldering/bouldering-05-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber moves between big holds on a steep wall"
    },
    {
     "src": "assets/photos/bouldering/bouldering-06.webp",
     "thumb": "assets/photos/bouldering/bouldering-06-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber hangs from one hand below a pink volume"
    },
    {
     "src": "assets/photos/bouldering/bouldering-07.webp",
     "thumb": "assets/photos/bouldering/bouldering-07-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber hangs under a steep overhang"
    },
    {
     "src": "assets/photos/bouldering/bouldering-08.webp",
     "thumb": "assets/photos/bouldering/bouldering-08-thumb.webp",
     "w": 2048,
     "h": 1365,
     "alt": "A climber stretches sideways across the overhang"
    },
    {
     "src": "assets/photos/bouldering/bouldering-09.webp",
     "thumb": "assets/photos/bouldering/bouldering-09-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber on the overhang, seen from below"
    },
    {
     "src": "assets/photos/bouldering/bouldering-10.webp",
     "thumb": "assets/photos/bouldering/bouldering-10-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber works his way up the edge of a wall full of holds"
    },
    {
     "src": "assets/photos/bouldering/bouldering-11.webp",
     "thumb": "assets/photos/bouldering/bouldering-11-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber hangs from the overhang with his feet off the wall"
    },
    {
     "src": "assets/photos/bouldering/bouldering-12.webp",
     "thumb": "assets/photos/bouldering/bouldering-12-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber hangs at full stretch from the top of the wall"
    },
    {
     "src": "assets/photos/bouldering/bouldering-13.webp",
     "thumb": "assets/photos/bouldering/bouldering-13-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber reaches up on a wall packed with holds"
    },
    {
     "src": "assets/photos/bouldering/bouldering-14.webp",
     "thumb": "assets/photos/bouldering/bouldering-14-thumb.webp",
     "w": 1365,
     "h": 2048,
     "alt": "A climber pulls through the holds near the top of the wall"
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
    const cap = lb.querySelector(".lightbox__caption");
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
      cap.textContent = p.alt;
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

  /* ---------- videos (youtube-nocookie, loaded only on click) ---------- */
  function iframe(id, title) {
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&playsinline=1";
    f.title = title + " (YouTube video)";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.referrerPolicy = "strict-origin-when-cross-origin";
    return f;
  }

  const player = document.getElementById("player");
  const frame = player && player.querySelector(".player__frame");
  if (player) {
    player.querySelector(".lightbox__close").addEventListener("click", function () { player.close(); });
    player.addEventListener("close", function () { frame.innerHTML = ""; unlock(); if (opener) opener.focus(); });
  }

  /* YouTube refuses embeds on pages opened straight from disk (file://), so there the links just go to YouTube */
  const canEmbed = location.protocol !== "file:";

  document.querySelectorAll("[data-yt]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (!canEmbed) return;
      const id = a.dataset.yt, title = a.dataset.title || "Video";
      if (a.classList.contains("play-link--inline")) {
        e.preventDefault();
        a.replaceWith((function () { const w = document.createElement("div"); w.className = "play-link"; w.appendChild(iframe(id, title)); return w; })());
        return;
      }
      if (!player || typeof player.showModal !== "function") return; /* fall back to the YouTube link */
      e.preventDefault();
      opener = a;
      frame.innerHTML = "";
      frame.classList.toggle("is-vertical", a.hasAttribute("data-vertical"));
      frame.appendChild(iframe(id, title));
      player.querySelector(".lightbox__title").textContent = title;
      player.querySelector(".player__yt").href = a.href;
      openDialog(player);
      player.querySelector(".lightbox__close").focus();
    });
  });
})();
