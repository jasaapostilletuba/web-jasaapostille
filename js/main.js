const names = ["Legalisasi Apostille","Terjemah Resmi","Terjemah Tersumpah","Dokumen Pendidikan","Dokumen Kependudukan","Dokumen Hukum & Bisnis","Layanan Express 24 Jam"];
const panels = document.querySelectorAll('.svc-panel');
const list = document.getElementById('svcList');
let svc = 0;
function renderServices(){
  list.innerHTML = '';
  names.forEach((n, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-pressed', i === svc);
    const l = document.createElement('span'); l.textContent = n;
    const a = document.createElement('span'); a.textContent = i === svc ? '→' : '';
    b.append(l, a);
    b.onclick = () => { svc = i; renderServices(); };
    list.appendChild(b);
  });
  panels.forEach((p, i) => p.hidden = i !== svc);
}
renderServices();

const quotes = document.querySelectorAll('.quote');
let t = 0;
function renderQuote(){ quotes.forEach((q, i) => q.hidden = i !== t); }
document.getElementById('prev').onclick = () => { t = (t + quotes.length - 1) % quotes.length; renderQuote(); };
document.getElementById('next').onclick = () => { t = (t + 1) % quotes.length; renderQuote(); };
renderQuote();

const count = document.querySelector('.years .count');
if (count && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const target = Number(count.dataset.target);
  const duration = 900;
  const start = performance.now();
  function animateCount(now) {
    const progress = Math.min((now - start) / duration, 1);
    count.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(animateCount);
  }
  requestAnimationFrame(animateCount);
} else if (count) {
  count.textContent = count.dataset.target;
}

const copyrightYear = document.getElementById('copyrightYear');
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
function setMenu(open){
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  menuBtn.textContent = open ? '✕' : '☰';
}
menuBtn.onclick = () => setMenu(!menu.classList.contains('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
