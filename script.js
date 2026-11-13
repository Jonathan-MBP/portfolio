// Script sans dépendance externe, aucune donnée collectée.

/* ============================================================
   TES PROJETS : modifie / ajoute / supprime ici.
   - category : "soc", "web", "data" ou "dev" (les filtres se créent tout seuls)
   - image    : chemin d'une image dans assets/images/
   - details  : liste de points affichés dans la fenêtre de détail
   - link     : lien vers le dépôt GitHub du projet ("#" = pas de bouton)
   - exemple  : true = projet fictif (badge "exemple")
   Les 3 premiers de la liste apparaissent sur l'accueil.
   ============================================================ */
const PROJECTS = [
  {
    title: "HarmBench – Red Teaming LLM & SIEM ELK",
    category: "soc",
    status: "Réalisé",
    image: "assets/images/projets/serveur-rack.jpg",
    summary: "Stack SIEM temps réel conteneurisée et moteur automatisé d'évaluation de la sécurité des LLM.",
    details: [
      "Déploiement d'une stack SIEM temps réel conteneurisée (Elasticsearch, Logstash, Kibana) avec Docker Compose pour la collecte, le parsing et la corrélation d'événements de sécurité.",
      "Conception d'un moteur d'évaluation de sécurité automatisé : détection de jailbreaks et scoring de criticité sur 5 niveaux.",
      "Pipeline d'intégration continue CI/CD via GitHub Actions.",
    ],
    tags: ["Python", "Docker", "ELK", "CI/CD"],
    link: "#",
  },
  {
    title: "ECE Ciné & gestion de stages – Sécurité web & RBAC",
    category: "web",
    status: "Réalisé",
    image: "assets/images/projets/laptop-code.jpg",
    summary: "Plateforme PHP à 4 espaces étanches, conçue selon les bonnes pratiques OWASP Top 10.",
    details: [
      "Gestion des accès basée sur les rôles (RBAC) avec 4 espaces étanches : Étudiant, Enseignant, Personnel administratif et Administrateur général.",
      "Application stricte des bonnes pratiques OWASP Top 10 : requêtes préparées PDO contre les injections SQL et hachage des mots de passe avec BCrypt.",
      "Workflow de sécurité avec validation obligatoire des comptes par l'administrateur avant tout accès.",
    ],
    tags: ["PHP 8", "MySQL", "PDO", "OWASP"],
    link: "https://github.com/Jonathan-MBP/dev-web",
  },
  {
    title: "Dashboard décisionnel & pipeline de données (MSP2)",
    category: "data",
    status: "Réalisé",
    image: "assets/images/projets/bureau-vue-dessus.jpg",
    summary: "ETL sur données publiques, API REST FastAPI et carte interactive pour la supervision d'actifs.",
    details: [
      "Ingestion et nettoyage de données gouvernementales ouvertes (ETL Python/Pandas, filtrage 75/92) et modélisation d'une base SQLite normalisée.",
      "API RESTful sous FastAPI (serveur ASGI Uvicorn) avec gestion CORS et points d'entrée analytiques : synthèse financière, taux d'occupation, distribution des incidents.",
      "Interface cartographique interactive (Leaflet.js) pour la géolocalisation et la supervision opérationnelle des actifs immobiliers.",
    ],
    tags: ["FastAPI", "Python", "SQLite", "Leaflet"],
    link: "https://github.com/Jonathan-MBP/Mise-en-situation-Pro",
  },
  {
    title: "API REST & sauvegardes asynchrones NoSQL",
    category: "data",
    status: "Réalisé",
    image: "assets/images/projets/terminal-ping.jpg",
    summary: "API Node.js connectée à MongoDB, avec un module de sauvegarde asynchrone non bloquant.",
    details: [
      "API RESTful connectée à MongoDB pour la gestion d'utilisateurs, de projets et de tâches, avec un contrôle strict des formats d'entrée.",
      "Module d'export et de sauvegarde asynchrone non bloquant (backupWriterAsync via fs/promises) générant des snapshots horodatés réguliers.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JSON"],
    link: "#",
  },
  {
    title: "Gestion de bibliothèque – application desktop sécurisée",
    category: "dev",
    status: "Réalisé",
    image: "assets/images/accueil/laptop-code-clair.jpg",
    summary: "Application JavaFX en architecture MVC/DAO, avec authentification BCrypt et moindre privilège.",
    details: [
      "Application de gestion avec interface graphique JavaFX et architecture modulaire en couches (Modèle-Vue-Contrôleur et Data Access Object).",
      "Authentification sécurisée par hachage BCrypt et respect du principe du moindre privilège pour les transactions en base de données.",
    ],
    tags: ["Java", "JavaFX", "MySQL", "MVC/DAO"],
    link: "#",
  },
  {
    title: "Moteur algorithmique & gestion mémoire en C",
    category: "dev",
    status: "Réalisé",
    image: "assets/images/projets/code-css.jpg",
    summary: "Jeu de mots mêlés en C99 : grille matricielle, pointeurs, allocations dynamiques et parsing de dictionnaires.",
    details: [
      "Moteur de jeu matriciel avec manipulation directe de pointeurs, allocations dynamiques (malloc/free) et calcul vectoriel de directions (dx, dy).",
      "Parsing optimisé de fichiers dictionnaires externes pour le chargement thématique, et gestion d'événements interactifs en console.",
    ],
    tags: ["C99", "Pointeurs", "Mémoire", "I/O"],
    link: "https://github.com/Jonathan-MBP/Projet-C",
  },
  {
    title: "Ce portfolio – site statique sécurisé",
    category: "web",
    status: "En cours",
    image: "assets/images/contact/bureau-notes.jpg",
    summary: "Site multipage en HTML, CSS et JavaScript natifs, sans framework, conçu avec une surface d'attaque minimale.",
    details: [
      "Aucun backend, aucune base de données, aucun formulaire : rien à attaquer côté serveur.",
      "Content-Security-Policy stricte : seules les ressources du site sont autorisées (police et images hébergées localement).",
      "Contenu dynamique généré via textContent (pas d'innerHTML) pour éviter toute injection XSS.",
      "Liens externes en rel=\"noopener noreferrer\", aucun cookie ni traceur.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "CSP"],
    link: "https://github.com/Jonathan-MBP/portfolio",
  },
];

const CATEGORY_LABELS = { soc: "SOC & SIEM", web: "Sécurité web", data: "Data & API", dev: "Logiciel" };

// Vidéo de fond de l'accueil : dépose un .mp4 dans assets/videos/ et mets son chemin ici,
// par ex. "assets/videos/hero.mp4". Laisse vide pour garder la photo animée.
const HERO_VIDEO = "";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// Création d'éléments via textContent : pas d'innerHTML, donc pas d'injection possible.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* ---------- Thème sombre / clair ---------- */
const root = document.documentElement;
function applyTheme(name) {
  root.dataset.theme = name;
  try { localStorage.setItem("theme", name); } catch (e) { /* stockage indisponible */ }
}
try { if (localStorage.getItem("theme") === "clair") root.dataset.theme = "clair"; } catch (e) { /* rien */ }
$("#theme-btn")?.addEventListener("click", () => applyTheme(root.dataset.theme === "clair" ? "sombre" : "clair"));

/* ---------- Navigation : fond au scroll, se cache en descendant ---------- */
const nav = $("#nav");
const progress = $("#progress");
let lastY = window.scrollY;
function onScroll() {
  const y = window.scrollY;
  nav?.classList.toggle("scrolled", y > 40);
  if (!document.body.classList.contains("menu-open")) nav?.classList.toggle("hidden", y > lastY && y > 400);
  lastY = y;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Menu mobile ---------- */
$("#menu-btn")?.addEventListener("click", e => {
  const open = document.body.classList.toggle("menu-open");
  nav.classList.toggle("menu-open", open);
  e.currentTarget.setAttribute("aria-expanded", open);
});

/* ---------- Transition entre les pages ---------- */
document.addEventListener("click", e => {
  const a = e.target.closest("a[href$='.html']");
  if (!a || a.target === "_blank" || e.ctrlKey || e.metaKey || e.shiftKey || reduceMotion) return;
  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(() => { window.location.href = a.href; }, 320);
});
window.addEventListener("pageshow", () => document.body.classList.remove("leaving"));

/* ---------- Titres mot par mot ---------- */
$$(".split-words").forEach(title => {
  let i = 0;
  const walk = node => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(document.createTextNode(part)); return; }
          const w = el("span", "w");
          const inner = el("span", null, part);
          inner.style.setProperty("--i", i++);
          w.append(inner);
          frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  walk(title);
});

/* ---------- Décalage automatique des éléments d'une même liste ---------- */
function stagger(container) {
  [...container.children].forEach((child, i) => {
    child.classList.add("reveal");
    child.style.setProperty("--d", i);
  });
}
$$("[data-stagger]").forEach(stagger);

/* ---------- Animation des chiffres ---------- */
function countUp(node) {
  const target = parseInt(node.dataset.count, 10) || 0;
  if (reduceMotion) { node.textContent = target; return; }
  const start = performance.now();
  const dur = 1600;
  (function frame(now) {
    const t = Math.min((now - start) / dur, 1);
    node.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(frame);
  })(start);
}

/* ---------- Apparition au scroll ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const t = entry.target;
    t.classList.add("visible");
    if (t.dataset.count !== undefined) countUp(t);
    if (t.dataset.level !== undefined) t.querySelector("i").style.width = t.dataset.level + "%";
    observer.unobserve(t);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });

function observeAll(scope = document) {
  $$(".reveal, .split-words, .clip-reveal, [data-count], [data-level]", scope).forEach(n => observer.observe(n));
}

/* ---------- Parallaxe ---------- */
const parallaxEls = $$("[data-parallax]");
function parallax() {
  const vh = window.innerHeight;
  parallaxEls.forEach(node => {
    const rect = node.parentElement.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > vh) return;
    const speed = parseFloat(node.dataset.parallax) || 0.2;
    const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
    node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  });
}
if (!reduceMotion && parallaxEls.length) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { parallax(); ticking = false; });
  }, { passive: true });
  parallax();
}

/* ---------- Halo qui suit la souris sur les cartes ---------- */
document.addEventListener("pointermove", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

/* ---------- Projets ---------- */
const grid = $("#project-grid");
const featuredGrid = $("#featured-grid");
const filters = $("#filters");
const dialog = $("#project-dialog");
const dialogContent = $("#dialog-content");

function tagList(tags) {
  const ul = el("ul", "tags");
  tags.forEach(t => ul.append(el("li", null, t)));
  return ul;
}

function detailList(details) {
  if (!Array.isArray(details)) return el("p", null, details);
  const ul = el("ul", "points");
  details.forEach(d => ul.append(el("li", null, d)));
  return ul;
}

function renderCards(target, list) {
  target.replaceChildren();
  list.forEach((p, i) => {
    const card = el("article", "card reveal");
    card.style.setProperty("--d", i % 3);
    card.tabIndex = 0;

    const media = el("div", "card-img");
    const img = el("img");
    img.src = p.image;
    img.alt = "";
    img.loading = "lazy";
    media.append(img, el("span", "status", p.status));
    if (p.exemple) media.append(el("span", "badge", "exemple"));

    const body = el("div", "card-body");
    body.append(
      el("span", "card-cat", CATEGORY_LABELS[p.category] || p.category),
      el("h3", null, p.title),
      el("p", null, p.summary),
      tagList(p.tags)
    );
    card.append(media, body);
    card.addEventListener("click", () => openProject(p));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openProject(p); });
    target.append(card);
  });
  observeAll(target);
}

function openProject(p) {
  const img = el("img", "dialog-img");
  img.src = p.image;
  img.alt = "";
  const body = el("div", "dialog-body");
  body.append(
    el("span", "card-cat", (CATEGORY_LABELS[p.category] || p.category) + " · " + p.status),
    el("h3", null, p.title),
    detailList(p.details),
    tagList(p.tags)
  );
  if (p.link && p.link !== "#") {
    const a = el("a", "btn primary", "Voir le projet →");
    a.href = p.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    body.append(a);
  }
  dialogContent.replaceChildren(img, body);
  dialog.showModal();
}
if (dialog) {
  $(".close", dialog).addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
}

if (grid && filters) {
  ["all", ...new Set(PROJECTS.map(p => p.category))].forEach((c, i) => {
    const b = el("button", "filter" + (i === 0 ? " active" : ""), c === "all" ? "Tous" : (CATEGORY_LABELS[c] || c));
    b.type = "button";
    b.addEventListener("click", () => {
      $$(".filter", filters).forEach(f => f.classList.remove("active"));
      b.classList.add("active");
      renderCards(grid, PROJECTS.filter(p => c === "all" || p.category === c));
    });
    filters.append(b);
  });
  renderCards(grid, PROJECTS);
}
if (featuredGrid) renderCards(featuredGrid, PROJECTS.slice(0, 3));
$$("[data-count='projects']").forEach(n => { n.dataset.count = PROJECTS.length; });

/* ---------- Boutons "Copier" ---------- */
$$(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copié ✓";
    } catch (e) {
      btn.textContent = "Échec";
    }
    setTimeout(() => { btn.textContent = "Copier"; }, 1600);
  });
});

/* ---------- Accueil : vidéo de fond optionnelle ---------- */
const heroImg = $(".hero-media");
if (HERO_VIDEO && heroImg && !reduceMotion) {
  const v = el("video", "hero-media");
  Object.assign(v, { src: HERO_VIDEO, poster: heroImg.src, muted: true, loop: true, autoplay: true, playsInline: true });
  heroImg.replaceWith(v);
}

/* ---------- Accueil : effet machine à écrire ---------- */
const typed = $("#typed");
const WORDS = ["SIEM & détection d'incidents", "sécurité applicative", "analyse de risques EBIOS RM", "réseaux Cisco", "Docker & CI/CD"];
if (typed && reduceMotion) {
  typed.textContent = WORDS[0];
} else if (typed) {
  let w = 0, c = 0, deleting = false;
  (function tick() {
    const word = WORDS[w];
    c += deleting ? -1 : 1;
    typed.textContent = word.slice(0, c);
    let delay = deleting ? 40 : 85;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % WORDS.length; delay = 350; }
    setTimeout(tick, delay);
  })();
}

/* ---------- Accueil : réseau de points animé ---------- */
const canvas = $("#network");
if (canvas && !reduceMotion) {
  const ctx = canvas.getContext("2d");
  let pts = [], w, h, dpr;
  const mouse = { x: -999, y: -999 };
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((w * h) / 16000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    }));
  }
  canvas.parentElement.addEventListener("pointermove", e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  function draw() {
    requestAnimationFrame(draw);
    if (!visible) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 140) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 180) {
        ctx.strokeStyle = `rgba(140,165,255,${(1 - md / 180) * 0.6})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2); ctx.fill();
    }
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
}

observeAll();
$$("#year").forEach(n => { n.textContent = new Date().getFullYear(); });
