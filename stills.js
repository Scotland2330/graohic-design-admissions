/* Found film stills for the Baldessari Booth.
   Drawn in code (no stock photos to license) and shared by index.html and print.html.
   Each scene returns the face positions so dots can be placed on them automatically. */
function rand(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }

function figure(g, x, y, s, tone, faceTone) {
  // body
  g.fillStyle = tone;
  g.beginPath();
  g.moveTo(x - 46*s, y + 230*s);
  g.quadraticCurveTo(x - 50*s, y + 60*s, x - 30*s, y + 48*s);
  g.lineTo(x + 30*s, y + 48*s);
  g.quadraticCurveTo(x + 50*s, y + 60*s, x + 46*s, y + 230*s);
  g.closePath(); g.fill();
  // collar / shirt
  g.fillStyle = "#e9e6df";
  g.beginPath(); g.moveTo(x - 10*s, y + 48*s); g.lineTo(x, y + 80*s); g.lineTo(x + 10*s, y + 48*s); g.fill();
  // neck + head
  g.fillStyle = faceTone;
  g.fillRect(x - 9*s, y + 22*s, 18*s, 28*s);
  g.beginPath(); g.ellipse(x, y, 25*s, 30*s, 0, 0, Math.PI*2); g.fill();
  // hair
  g.fillStyle = "#1b1b1b";
  g.beginPath(); g.ellipse(x, y - 14*s, 26*s, 17*s, 0, Math.PI, Math.PI*2); g.fill();
  return { x, y, r: 36*s };
}

function finishStill(g, w, h, seed) {
  // grain + vignette = "found photo" feel
  const r = rand(seed), img = g.getImageData(0, 0, w, h), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - .5) * 26;
    d[i] += n; d[i+1] += n; d[i+2] += n;
  }
  g.putImageData(img, 0, 0);
  const v = g.createRadialGradient(w/2, h/2, w*.3, w/2, h/2, w*.75);
  v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.45)");
  g.fillStyle = v; g.fillRect(0, 0, w, h);
}

const SCENES = [
  { name: "The handshake", draw(g, w, h) {
      g.fillStyle = "#8d8a84"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#a9a59d"; g.fillRect(0, 0, w, h*.62);
      g.fillStyle = "#6c6964"; g.fillRect(90, 90, 230, 320);          // window
      g.fillStyle = "#c9c5bc"; g.fillRect(105, 105, 200, 290);
      g.fillStyle = "#5c5a56"; g.fillRect(560, 130, 300, 190);         // framed picture
      const f = [figure(g, 360, 330, 1.9, "#2a2a2c", "#bdb6aa"), figure(g, 600, 340, 1.85, "#3b3a38", "#c7c0b3")];
      g.strokeStyle = "#bdb6aa"; g.lineWidth = 22; g.lineCap = "round";
      g.beginPath(); g.moveTo(420, 560); g.lineTo(480, 610); g.lineTo(540, 570); g.stroke();
      return f;
  }},
  { name: "Class photo", draw(g, w, h) {
      g.fillStyle = "#9b978f"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#7c7871"; g.fillRect(0, h*.7, w, h*.3);
      const f = [];
      [150, 330, 510, 690, 870].forEach((x, i) => f.push(figure(g, x - 40, 300 + (i%2)*12, 1.05, i%2 ? "#3c3b39" : "#262628", "#c2bbae")));
      [110, 290, 470, 650, 830].forEach((x, i) => f.push(figure(g, x + 30, 520 + (i%2)*10, 1.15, i%2 ? "#2b2b2d" : "#4a4845", "#cbc4b7")));
      return f;
  }},
  { name: "Dinner party", draw(g, w, h) {
      g.fillStyle = "#57554f"; g.fillRect(0, 0, w, h);
      const lamp = g.createRadialGradient(w/2, 120, 10, w/2, 300, 600);
      lamp.addColorStop(0, "rgba(255,250,235,.55)"); lamp.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = lamp; g.fillRect(0, 0, w, h);
      const f = [figure(g, 210, 360, 1.5, "#1e1e20", "#bfb8ab"), figure(g, 410, 300, 1.35, "#33322f", "#c8c1b4"),
                 figure(g, 560, 300, 1.35, "#2a2a2b", "#b9b2a5"), figure(g, 750, 360, 1.5, "#3a3936", "#c4bdb0")];
      g.fillStyle = "#e8e4dc"; g.fillRect(60, 600, w - 120, 360);       // tablecloth
      g.fillStyle = "#cfcac0"; g.fillRect(60, 600, w - 120, 18);
      g.fillStyle = "#f5f2ec";
      [200, 400, 560, 760].forEach(x => { g.beginPath(); g.ellipse(x, 690, 60, 20, 0, 0, Math.PI*2); g.fill(); });
      g.fillStyle = "#3a3936"; [300, 660].forEach(x => g.fillRect(x, 560, 14, 110));   // candles
      return f;
  }},
  { name: "The crowd", draw(g, w, h) {
      g.fillStyle = "#b3afa7"; g.fillRect(0, 0, w, h);
      const r = rand(7), f = [];
      for (let row = 0; row < 4; row++) {
        const s = .55 + row * .2, y = 140 + row * 190;
        for (let x = 40 + (row%2)*60; x < w; x += 125 * s + 30) {
          const t = Math.floor(30 + r()*40);
          f.push(figure(g, x + r()*20, y + r()*20, s, `rgb(${t},${t},${t+2})`, `rgb(${180+r()*30|0},${172+r()*30|0},${160+r()*30|0})`));
        }
      }
      return f;
  }},
];

function makeStill(i, size = 940) {
  const c = document.createElement("canvas"); c.width = c.height = size;
  const g = c.getContext("2d");
  const faces = SCENES[i].draw(g, c.width, c.height);
  finishStill(g, c.width, c.height, 1234 + i);
  return { canvas: c, faces };
}
