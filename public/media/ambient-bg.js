// <am-ambient-bg> — subtle animated brand background (canvas, pointer-events none).
// Attributes: density (0.5–2), speed (0.2–2), mode (network|helix|both), theme (light|dark)
(function () {
  class AmbientBg extends HTMLElement {
    static get observedAttributes() { return ['density', 'speed', 'mode', 'theme']; }
    connectedCallback() {
      this.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;display:block;';
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'width:100%;height:100%;display:block;';
      this.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.mouse = { x: 0.5, y: 0.5 };
      this.onMove = (e) => {
        this.mouse.x = e.clientX / innerWidth;
        this.mouse.y = e.clientY / innerHeight;
      };
      addEventListener('mousemove', this.onMove);
      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(this);
      this.resize();
      this.t = 0;
      this.raf = requestAnimationFrame((ts) => this.tick(ts));
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      removeEventListener('mousemove', this.onMove);
      this.ro.disconnect();
    }
    attributeChangedCallback() { this.nodes = null; }
    resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      this.w = this.clientWidth; this.h = this.clientHeight;
      this.canvas.width = this.w * dpr; this.canvas.height = this.h * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.nodes = null;
    }
    seed() {
      const density = parseFloat(this.getAttribute('density') || '1');
      const n = Math.round((this.w * this.h) / 26000 * density);
      this.nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * this.w, y: Math.random() * this.h,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: 1.4 + Math.random() * 1.8, p: Math.random() * Math.PI * 2,
      }));
    }
    tick(ts) {
      this.raf = requestAnimationFrame((t2) => this.tick(t2));
      const speed = parseFloat(this.getAttribute('speed') || '1');
      const mode = this.getAttribute('mode') || 'both';
      const dark = (this.getAttribute('theme') || 'light') === 'dark';
      const ctx = this.ctx, w = this.w, h = this.h;
      if (!w || !h) return;
      if (!this.nodes) this.seed();
      this.t += 0.016 * speed;
      const t = this.t;
      ctx.clearRect(0, 0, w, h);
      const ink = dark ? '255,255,255' : '10,37,64';
      const blue = dark ? '91,155,255' : '31,111,235';
      const px = (this.mouse.x - 0.5) * 24, py = (this.mouse.y - 0.5) * 16;

      if (mode !== 'network') { // helix ribbons drifting across
        for (let s = 0; s < 2; s++) {
          const yBase = h * (0.30 + s * 0.42) + py * (s ? -1 : 1);
          const amp = h * 0.055, phase = t * 0.5 + s * Math.PI;
          for (let strand = 0; strand < 2; strand++) {
            ctx.beginPath();
            for (let x = -20; x <= w + 20; x += 8) {
              const y = yBase + Math.sin(x * 0.008 + phase + strand * Math.PI) * amp;
              x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(${strand ? blue : ink},${dark ? 0.11 : 0.09})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
          // rungs where strands cross
          for (let x = 0; x <= w; x += 90) {
            const y1 = yBase + Math.sin(x * 0.008 + phase) * amp;
            const y2 = yBase + Math.sin(x * 0.008 + phase + Math.PI) * amp;
            ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2);
            ctx.strokeStyle = `rgba(${blue},${dark ? 0.08 : 0.068})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mode !== 'helix') { // drifting node network
        const nodes = this.nodes, link = 130;
        for (const n of nodes) {
          n.x += n.vx * speed; n.y += n.vy * speed;
          if (n.x < -10) n.x = w + 10; if (n.x > w + 10) n.x = -10;
          if (n.y < -10) n.y = h + 10; if (n.y > h + 10) n.y = -10;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
            const d = Math.hypot(dx, dy);
            if (d < link) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x + px, nodes[i].y + py);
              ctx.lineTo(nodes[j].x + px, nodes[j].y + py);
              ctx.strokeStyle = `rgba(${ink},${(1 - d / link) * (dark ? 0.11 : 0.105)})`;
              ctx.stroke();
            }
          }
        }
        for (const n of nodes) {
          const tw = 0.5 + 0.5 * Math.sin(t * 1.6 + n.p);
          ctx.beginPath();
          ctx.arc(n.x + px, n.y + py, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${blue},${(dark ? 0.24 : 0.21) + 0.16 * tw})`;
          ctx.fill();
        }
      }
    }
  }
  if (!customElements.get('am-ambient-bg')) customElements.define('am-ambient-bg', AmbientBg);
})();
