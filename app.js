import { CATS, CAT_ORDER, EQ, EQ_GROUPS, WHERE, EX, EXM } from "./exercises.js";
import { firebaseConfig } from "./config.js";

/* ================= Icons ================= */
const IC = {
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  swap:'<path d="M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/>',
  up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  shuffle:'<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>',
  flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  repeat:'<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  play:'<path d="M7 4.5v15l12-7.5z"/>',
  video:'<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>', check:'<path d="M5 12l5 5L20 7"/>',
  pin:'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v2a3 3 0 0 0 4 3M16 6h4v2a3 3 0 0 1-4 3M12 13v4M8 21h8M9 17h6"/>',
  medal:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  chart:'<path d="M3 20h18M5 16l5-6 4 3 6-8"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
  cue:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  warn:'<path d="M12 3l10 18H2zM12 10v4M12 17h.01"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.6 4 2.8 4 6"/>',
  chev:'<path d="M9 6l6 6-6 6"/>', backArrow:'<path d="M15 6l-6 6 6 6"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>', upload:'<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
  flame:'<path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 3s0-4 0-7z"/>',
  star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  crown:'<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
  barbell:'<path d="M2 12h20M5 8v8M8 6v12M16 6v12M19 8v8"/>',
  dumbbell:'<path d="M8 12h8M4 9.5v5M7 7v10M17 7v10M20 9.5v5"/>',
  machine:'<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M4 8h10M4 12h10M4 16h10M19 3v18M19 8h-5"/>',
  cable:'<path d="M4 3h16M12 3v4"/><circle cx="12" cy="9" r="2"/><path d="M12 11v6M8 20l4-3 4 3"/>',
  bodyweight:'<circle cx="12" cy="4.5" r="2"/><path d="M5 9h14M12 9v6M12 15l-4 6M12 15l4 6"/>',
  legs:'<path d="M9 2v8l-2 6 1 6M15 2v8l2 6-1 6M9 10h6"/>',
  chest:'<path d="M3 8c3-3 6-3 9 0 3-3 6-3 9 0v5c-3 3-6 3-9 0-3 3-6 3-9 0zM12 8v5"/>',
  back:'<path d="M4 4l4 17h8l4-17M8 8l4 3 4-3M12 11v10"/>',
  shoulders:'<circle cx="12" cy="5" r="2.5"/><path d="M3 19v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3"/>',
  arms:'<path d="M4 20c0-6 2-10 6-12l2-4 3 1-1 4c3 0 6 2 6 6 0 3-3 5-7 5z"/>',
};
const ic = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ""}</svg>`;
const mi = n => `<svg class="mi" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ""}</svg>`;
const eqPill = eq => `<span class="pill">${mi(eq)}${EQ[eq]}</span>`;

/* ================= Utils ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clone = o => JSON.parse(JSON.stringify(o));
const isObj = v => v && typeof v === "object" && !Array.isArray(v);
function deepMerge(t, p) { for (const k in p) { if (isObj(p[k]) && isObj(t[k])) deepMerge(t[k], p[k]); else t[k] = (isObj(p[k]) || Array.isArray(p[k])) ? clone(p[k]) : p[k]; } return t; }
const DAY = 864e5;
const dstr = ms => { const d = new Date(ms); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const startOfDay = ms => { const d = new Date(ms); d.setHours(0, 0, 0, 0); return d.getTime(); };
const weekStart = ms => { const d = new Date(startOfDay(ms)); return d.getTime() - ((d.getDay() + 6) % 7) * DAY; };
const daysAgo = ms => Math.round((startOfDay(Date.now()) - startOfDay(ms)) / DAY);
const agoText = ms => { if (ms == null) return "never"; const d = daysAgo(ms); return d === 0 ? "today" : d === 1 ? "yesterday" : d + " days ago"; };
const fmtN = n => Math.round(n).toLocaleString();
const fmtW = w => w == null || w === "" ? "BW" : (+w % 1 ? (+w).toFixed(1) : String(+w));
const fmtDur = ms => { const m = Math.max(0, Math.round(ms / 60000)); return m < 60 ? m + " min" : Math.floor(m / 60) + "h " + String(m % 60).padStart(2, "0") + "m"; };
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let a = hashStr(seed); return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const newHid = () => (crypto.randomUUID ? crypto.randomUUID() : uid("h") + uid("x")).replace(/-/g, "");
function lsGet(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
const e1rm = (w, r) => (!w || !r) ? 0 : (r === 1 ? w : w * (1 + Math.min(r, 15) / 30));
let toastT; function toast(msg) { let el = $("#toast"); if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); } el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2800); }
function numOrNull(v) { v = String(v).trim().replace(",", "."); if (v === "") return null; const n = parseFloat(v); return isFinite(n) ? n : null; }

/* ================= Settings & Store ================= */
const GOALS = { strength: { n: "Strength", c: [4, 4, 6], i: [3, 8, 10] }, muscle: { n: "Build muscle", c: [3, 6, 10], i: [3, 10, 15] }, tone: { n: "Tone & endurance", c: [3, 12, 15], i: [3, 15, 20] } };
const defaultSettings = () => ({ athletes: { a: { name: "Me", goal: "muscle" }, b: { name: "Partner", goal: "muscle" } }, rest: 90, bar: 45, yellow: 7, red: 14 });
const normSettings = s => deepMerge(defaultSettings(), clone(s || {}));
const FB = "https://www.gstatic.com/firebasejs/10.12.2/";

const Store = {
  mode: "connecting", workouts: {}, settings: defaultSettings(), ver: 0, hid: lsGet("spotme.hid", null),
  pending: {}, timers: {}, unsubs: [], F: null, db: null, authed: false, pendingWrites: false, offline: false, err: null, loaded: false,
  bump() { this.ver++; scheduleRender(); },
  async init() {
    if (!firebaseConfig || !firebaseConfig.apiKey) { this.useLocal(); return; }
    try {
      const [appM, authM, F] = await Promise.all([import(FB + "firebase-app.js"), import(FB + "firebase-auth.js"), import(FB + "firebase-firestore.js")]);
      this.F = F;
      const app = appM.initializeApp(firebaseConfig);
      try { this.db = F.initializeFirestore(app, { localCache: F.persistentLocalCache({ tabManager: F.persistentMultipleTabManager() }) }); }
      catch (e) { this.db = F.getFirestore(app); }
      const auth = authM.getAuth(app);
      this.mode = "cloud"; renderSync();
      const signIn = () => authM.signInAnonymously(auth).catch(() => { this.offline = true; renderSync(); });
      authM.onAuthStateChanged(auth, u => { this.authed = !!u; if (u && this.hid && !this.unsubs.length) this.subscribe(); renderSync(); });
      signIn(); window.addEventListener("online", () => { this.offline = false; if (!auth.currentUser) signIn(); renderSync(); });
      window.addEventListener("offline", () => { this.offline = true; renderSync(); });
    } catch (e) { console.error(e); this.useLocal(true); }
  },
  useLocal(failed) {
    this.mode = "local"; this.failed = !!failed;
    const saved = lsGet("spotme.local", null);
    if (saved) { this.workouts = saved.workouts || {}; this.settings = normSettings(saved.settings); }
    this.loaded = true; this.bump(); renderSync();
  },
  setHousehold(hid) {
    this.hid = hid; lsSet("spotme.hid", hid);
    this.unsubs.forEach(u => u()); this.unsubs = []; this.workouts = {}; this.loaded = false; this.bump();
    if (this.mode === "cloud" && this.authed) this.subscribe();
  },
  ref(...p) { return this.F.doc(this.db, "households", this.hid, ...p); },
  subscribe() {
    const F = this.F;
    this.unsubs.push(F.onSnapshot(F.collection(this.db, "households", this.hid, "workouts"), { includeMetadataChanges: true }, snap => {
      const next = {};
      snap.docs.forEach(d => { const data = d.data(); data.id = d.id; next[d.id] = this.pending[d.id] ? deepMerge(data, clone(this.pending[d.id])) : data; });
      this.workouts = next; this.pendingWrites = snap.metadata.hasPendingWrites; this.offline = snap.metadata.fromCache && !navigator.onLine;
      this.loaded = true; this.err = null; this.bump(); renderSync();
    }, err => { this.err = err.code; this.loaded = true; renderSync(); toast("Couldn't load the shared log (" + err.code + ")."); }));
    this.unsubs.push(F.onSnapshot(this.ref("meta", "settings"), snap => {
      if (snap.exists()) { this.settings = normSettings(snap.data()); this.bump(); }
      else if (this.seed) { F.setDoc(this.ref("meta", "settings"), clone(this.settings)).catch(e => this.fail(e)); this.seed = false; }
    }, () => {}));
  },
  saveLocal() { lsSet("spotme.local", { workouts: this.workouts, settings: this.settings }); },
  create(doc) {
    this.workouts[doc.id] = doc; this.bump();
    if (this.mode !== "cloud") return this.saveLocal();
    this.F.setDoc(this.ref("workouts", doc.id), clone(doc)).catch(e => this.fail(e));
  },
  patch(id, p, delay) {
    const w = this.workouts[id]; if (!w) return; deepMerge(w, clone(p)); this.ver++;
    if (this.mode !== "cloud") { clearTimeout(this.timers.local); this.timers.local = setTimeout(() => this.saveLocal(), 300); return; }
    this.pending[id] = deepMerge(this.pending[id] || {}, clone(p));
    clearTimeout(this.timers[id]); this.timers[id] = setTimeout(() => this.flush(id), delay == null ? 600 : delay);
  },
  flush(id) {
    const p = this.pending[id]; if (!p) return; delete this.pending[id];
    this.F.setDoc(this.ref("workouts", id), p, { merge: true }).catch(e => this.fail(e));
  },
  flushAll() { for (const id in this.pending) { clearTimeout(this.timers[id]); this.flush(id); } },
  remove(id) {
    delete this.workouts[id]; delete this.pending[id]; clearTimeout(this.timers[id]); this.bump();
    if (this.mode !== "cloud") return this.saveLocal();
    this.F.deleteDoc(this.ref("workouts", id)).catch(e => this.fail(e));
  },
  saveSettings(s) {
    this.settings = s; this.bump();
    if (this.mode !== "cloud") return this.saveLocal();
    if (!this.hid) return;
    this.F.setDoc(this.ref("meta", "settings"), clone(s)).catch(e => this.fail(e));
  },
  fail(e) { console.error(e); toast(e && e.code === "permission-denied" ? "Sync was refused. Check the Firestore rules." : "Couldn't save to the cloud. It will retry when you're back online."); },
};

/* ================= Derived data ================= */
const S = () => Store.settings;
const nameOf = a => (S().athletes[a] && S().athletes[a].name) || (a === "a" ? "Me" : "Partner");
const goalOf = a => (S().athletes[a] && GOALS[S().athletes[a].goal]) ? S().athletes[a].goal : "muscle";
let _sorted = null, _sv = -1;
function sorted() { if (_sv !== Store.ver) { _sorted = Object.values(Store.workouts).filter(w => w && w.startedAt).sort((x, y) => y.startedAt - x.startedAt); _sv = Store.ver; } return _sorted; }
const activeWorkout = () => sorted().find(w => !w.finishedAt) || null;
const exList = w => Object.entries(w.ex || {}).filter(([, v]) => v && !v.removed && EXM[v.id]).sort((a, b) => (a[1].o || 0) - (b[1].o || 0));
const workSets = (e, a) => ((e.log && e.log[a]) || []).filter(s => s && s.d && !s.wu && +s.r > 0);
const metric = (ex, s) => ex.time ? (+s.r || 0) : (!(+s.w) ? (+s.r || 0) : e1rm(+s.w, +s.r));
function target(ex, a) { if (ex.time) return { sets: 3, lo: 30, hi: 60, unit: "sec" }; const g = GOALS[goalOf(a)][ex.t === "c" ? "c" : "i"]; return { sets: g[0], lo: g[1], hi: g[2], unit: "reps" }; }

let _idx = null, _iv = -1;
function idx() {
  if (_iv === Store.ver) return _idx;
  const I = { a: {}, b: {} };
  for (const w of sorted()) for (const [, e] of exList(w)) for (const a of ["a", "b"]) {
    const s = workSets(e, a); if (!s.length) continue;
    const r = I[a][e.id] || (I[a][e.id] = { last: 0, count: 0, best: 0, bestSet: null, lastSets: null });
    if (w.startedAt > r.last) { r.last = w.startedAt; }
    r.count++;
    for (const x of s) { const m = metric(EXM[e.id], x); if (m > r.best) { r.best = m; r.bestSet = x; } }
  }
  _idx = I; _iv = Store.ver; return I;
}
function badge(a, id) {
  const r = idx()[a][id]; const Y = +S().yellow || 7, R = Math.max(Y + 1, +S().red || 14);
  if (!r) return { s: "l", d: null, frac: 0, r: null };
  const d = daysAgo(r.last); const s = d < Y ? "g" : d < R ? "y" : "r";
  return { s, d, frac: Math.max(0, 1 - d / R), r, Y, R };
}
const STATE_N = { g: "Fresh", y: "Due", r: "Overdue", l: "Not earned" };
function lastPerf(a, exId, excludeId) {
  for (const w of sorted()) { if (w.id === excludeId) continue; for (const [, e] of exList(w)) { if (e.id !== exId) continue; const s = workSets(e, a); if (s.length) return { date: w.startedAt, sets: s }; } }
  return null;
}
function suggest(a, ex, excludeId) {
  const t = target(ex, a), lp = lastPerf(a, ex.id, excludeId);
  const tgt = `${t.sets} × ${t.lo}–${t.hi}${t.unit === "sec" ? " sec" : ""}`;
  if (!lp) return { w: null, tgt, last: null, tip: ex.time ? "First time: hold as long as you can with good form." : "First time: pick a weight you could lift " + (t.hi + 2) + " times." };
  const top = Math.max(...lp.sets.map(s => +s.w || 0)); const atTop = lp.sets.filter(s => (+s.w || 0) === top);
  const hitAll = atTop.every(s => +s.r >= t.hi); const last = lp.sets.map(s => `${fmtW(s.w)}×${s.r}`).join(", ");
  if (ex.time) return { w: top || null, tgt, last, tip: hitAll ? "You hit the full time. Add 10 seconds or more weight." : "Beat last time by a few seconds." };
  if (!top) return { w: null, tgt, last, tip: hitAll ? "Top of the range. Add weight or reps." : "Add a rep to each set." };
  const big = ex.eq === "barbell" && ex.t === "c" && ex.cat === "legs";
  const inc = big ? 10 : (ex.eq === "dumbbell" && ex.t === "i" ? 2.5 : 5);
  if (hitAll) return { w: top + inc, tgt, last, tip: `Hit ${t.hi}+ every set. Go up to ${fmtW(top + inc)} lb.` };
  return { w: top, tgt, last, tip: atTop.some(s => +s.r < t.lo) ? `Stay at ${fmtW(top)} lb and own the range.` : `Stay at ${fmtW(top)} lb, one more rep per set.` };
}
const volume = (w, a) => { let v = 0, n = 0; for (const [, e] of exList(w)) for (const s of workSets(e, a)) { v += (+s.w || 0) * (+s.r || 0); n++; } return { v, n }; };
const catTitle = w => (CATS[w.focus] && CATS[w.focus].n) || w.title || "Workout";
function catLast(a, cat) { for (const w of sorted()) if (w.focus === cat && (w.athletes || []).includes(a) && volume(w, a).n) return w.startedAt; return null; }
function catCounts(a, cat) { const c = { g: 0, y: 0, r: 0, l: 0 }; EX.filter(e => e.cat === cat).forEach(e => c[badge(a, e.id).s]++); return c; }
function suggestCat(a) { let best = null, bs = -1; for (const c of CAT_ORDER) { const t = catLast(a, c); const d = t == null ? 999 : daysAgo(t); if (d > bs) { bs = d; best = c; } } return best; }
function optState(a, cat, opt) { const rank = { g: 3, y: 2, r: 1, l: 0 }; let b = "l"; EX.filter(e => e.cat === cat && e.opt === opt).forEach(e => { const s = badge(a, e.id).s; if (rank[s] > rank[b]) b = s; }); return b; }

/* ================= Plan builder ================= */
function buildPlan(p) {
  const rnd = rng(dstr(Date.now()) + p.cat + p.salt);
  const allowed = p.eqs.flatMap(g => EQ_GROUPS[g].eq);
  let pool = EX.filter(e => e.cat === p.cat && p.opts.includes(e.opt) && allowed.includes(e.eq));
  if (pool.length < p.n) pool = EX.filter(e => e.cat === p.cat && p.opts.includes(e.opt));
  const score = e => { let s = rnd() * 2.2 + (e.t === "c" ? .35 : 0); for (const a of p.athletes) { const st = badge(a, e.id).s; s += st === "r" ? 1.5 : st === "y" ? 1.1 : st === "l" ? .5 : -.7; } return s; };
  const by = {}; p.opts.forEach(o => { by[o] = pool.filter(e => e.opt === o).map(e => ({ id: e.id, s: score(e) })).sort((x, y) => y.s - x.s); });
  const picked = (p.force || []).filter(id => EXM[id]);
  while (picked.length < p.n) { let added = false; for (const o of p.opts) { if (picked.length >= p.n) break; const nx = (by[o] || []).find(x => !picked.includes(x.id)); if (nx) { picked.push(nx.id); added = true; } } if (!added) break; }
  return picked.sort((x, y) => (EXM[x].t === "c" ? 0 : 1) - (EXM[y].t === "c" ? 0 : 1));
}
function newPlan(cat, force) {
  const prefs = lsGet("spotme.prefs." + cat, null);
  const opts = prefs && prefs.opts && prefs.opts.length ? prefs.opts.filter(o => CATS[cat].opts[o]) : Object.keys(CATS[cat].opts);
  const p = { cat, opts: opts.length ? opts : Object.keys(CATS[cat].opts), eqs: (prefs && prefs.eqs && prefs.eqs.length) ? prefs.eqs : Object.keys(EQ_GROUPS), n: (prefs && prefs.n) || 5, athletes: (prefs && prefs.athletes) || ["a", "b"], salt: 0, force: force ? [force] : [] };
  p.items = buildPlan(p); return p;
}
const alternatives = (id, exclude) => { const ex = EXM[id]; return EX.filter(e => e.id !== id && e.cat === ex.cat && !(exclude || []).includes(e.id)).sort((x, y) => (x.opt === ex.opt ? 0 : 1) - (y.opt === ex.opt ? 0 : 1) || (x.t === ex.t ? 0 : 1) - (y.t === ex.t ? 0 : 1)); };

/* ================= App state & routing ================= */
const state = { view: lsGet("spotme.view", lsGet("spotme.me", "a")), plan: lsGet("spotme.plan", null), openHist: null, confirmDel: null, confirmDiscard: false, libQ: "", libC: "", progEx: null, showTable: false, rest: null, bFilter: "all" };
if (state.plan && (!state.plan.cat || !CATS[state.plan.cat])) state.plan = null;
const savePlan = () => lsSet("spotme.plan", state.plan);
const ROUTES = ["train", "plan", "workout", "badges", "history", "progress", "library"];
const route = () => { const h = (location.hash || "").slice(1); return ROUTES.includes(h) ? h : "train"; };
function go(r) { if (location.hash !== "#" + r) location.hash = r; else render(); window.scrollTo(0, 0); }

let rq = false, deferRender = false;
function scheduleRender() { if (rq) return; rq = true; setTimeout(() => { rq = false; const ae = document.activeElement; if (ae && $("#main").contains(ae) && /INPUT|TEXTAREA|SELECT/.test(ae.tagName)) { deferRender = true; renderChrome(); return; } render(); }, 16); }
document.addEventListener("focusout", () => setTimeout(() => { if (!deferRender) return; const ae = document.activeElement; if (!(ae && $("#main").contains(ae) && /INPUT|TEXTAREA|SELECT/.test(ae.tagName))) { deferRender = false; render(); } }, 0));

function renderSync() {
  const el = $("#sync"); if (!el) return; let c = "", t;
  if (Store.mode === "local") { c = "warn"; t = Store.failed ? "Couldn't reach the cloud; saving on this phone" : "Saving on this phone only"; }
  else if (Store.mode === "connecting") t = "Connecting";
  else if (Store.err) { c = "warn"; t = "Sync error: " + Store.err; }
  else if (Store.offline || !navigator.onLine) { c = "warn"; t = "Offline. Changes will sync when you reconnect"; }
  else if (Store.pendingWrites) t = "Syncing";
  else { c = "ok"; t = "Synced"; }
  el.className = "sync " + c; el.setAttribute("aria-label", t); el.title = t;
}
function renderChrome() {
  $("#viewSeg").innerHTML = ["a", "b"].map(a => `<button data-act="view" data-a="${a}" aria-pressed="${state.view === a}"><span class="dot ${a}"></span><span class="t">${esc(nameOf(a))}</span></button>`).join("");
  const r = route(), act = activeWorkout();
  const red = EX.filter(e => badge(state.view, e.id).s === "r").length;
  document.querySelectorAll("#tabs a").forEach(a => {
    const t = a.dataset.tab; const on = t === r || (t === "train" && (r === "plan" || r === "workout"));
    a.setAttribute("aria-current", on ? "page" : "false");
    a.querySelectorAll(".live,.cnt").forEach(x => x.remove());
    if (t === "train") { a.href = act ? "#workout" : "#train"; if (act) a.insertAdjacentHTML("beforeend", '<span class="live" aria-label="Workout in progress"></span>'); }
    if (t === "badges" && red) a.insertAdjacentHTML("beforeend", `<span class="cnt num" aria-label="${red} overdue">${red > 99 ? "99+" : red}</span>`);
  });
  renderSync();
}
function render() {
  renderChrome();
  const r = route(); let h;
  if (r === "plan") h = vPlan(); else if (r === "workout") h = vWorkout(); else if (r === "badges") h = vBadges(); else if (r === "history") h = vHistory(); else if (r === "progress") h = vProgress(); else if (r === "library") h = vLibrary(); else h = vTrain();
  if (Store.mode === "cloud" && !Store.loaded && Store.hid) h = `<div class="notice">Loading your shared log…</div>` + h;
  const main = $("#main");
  main.innerHTML = `<div class="wrap stack">${h}</div>`;
  main.classList.toggle("has-bar", !!main.querySelector(".actionbar"));
  if (r === "progress") bindCharts();
  renderRest(); tick();
}

/* ================= Views ================= */
function vTrain() {
  const a = state.view, act = activeWorkout(); let h = "";
  if (act) { const n = ["a", "b"].reduce((s, x) => s + volume(act, x).n, 0); h += `<div class="resume"><div><div class="eyebrow">Workout in progress</div><h3>${esc(catTitle(act))}</h3><div class="num" style="opacity:.75;font-size:.9rem"><span data-elapsed="${act.startedAt}"></span> · ${n} sets logged</div></div><a class="btn block" href="#workout">${ic("play")}Resume workout</a></div>`; }
  else if (state.plan) h += `<div class="resume"><div><div class="eyebrow">Planned</div><h3>${esc(CATS[state.plan.cat].n)}</h3><div style="opacity:.75;font-size:.9rem">${state.plan.items.length} exercises ready</div></div><a class="btn block" href="#plan">${ic("list")}Open plan</a></div>`;
  const sug = suggestCat(a);
  h += `<section><div class="sec-h"><h2>${ic("bolt")}Pick a workout</h2><span class="hint">for ${esc(nameOf(a))}</span></div><div class="cats">` + CAT_ORDER.map(c => {
    const cc = catCounts(a, c), tot = EX.filter(e => e.cat === c).length, last = catLast(a, c);
    const parts = []; if (cc.r) parts.push(`${cc.r} overdue`); if (cc.y) parts.push(`${cc.y} due`); if (cc.g) parts.push(`${cc.g} fresh`);
    return `<button class="cat${c === sug ? " next" : ""}" data-act="cat" data-c="${c}">${c === sug ? '<span class="flag">Up next</span>' : ""}<span class="ci">${ic(c)}</span><span><b>${CATS[c].n}</b><div class="sub">${last ? "Last done " + agoText(last) : "Not done yet"} · ${tot} moves${parts.length ? "<br>" + parts.join(" · ") : ""}</div>
    <div class="fbar" aria-hidden="true">${["g", "y", "r", "l"].map(k => cc[k] ? `<i class="${k}" style="flex:${cc[k]}"></i>` : "").join("")}</div></span><span class="chev">${ic("chev")}</span></button>`;
  }).join("") + `</div></section>`;
  const ws = weekStart(Date.now());
  h += `<section><div class="sec-h"><h2>${ic("calendar")}This week</h2></div><div class="week">` + ["a", "b"].map(x => {
    const wk = sorted().filter(w => w.startedAt >= ws && (w.athletes || []).includes(x) && volume(w, x).n > 0);
    let v = 0, n = 0; const days = new Set(); wk.forEach(w => { const r = volume(w, x); v += r.v; n += r.n; days.add((new Date(w.startedAt).getDay() + 6) % 7); });
    return `<div class="wk"><div class="who"><span class="dot ${x}"></span><span class="t">${esc(nameOf(x))}</span></div><dl><div><dt>Days</dt><dd class="num">${wk.length}</dd></div><div><dt>Sets</dt><dd class="num">${n}</dd></div><div><dt>Lb</dt><dd class="num">${v >= 10000 ? (v / 1000).toFixed(0) + "k" : v >= 1000 ? (v / 1000).toFixed(1) + "k" : fmtN(v)}</dd></div></dl><div class="days">${[0, 1, 2, 3, 4, 5, 6].map(i => `<i class="${days.has(i) ? "on" : ""}"></i>`).join("")}</div></div>`;
  }).join("") + `</div></section>`;
  return h;
}

function vPlan() {
  const p = state.plan; if (!p) return vTrain();
  const C = CATS[p.cat];
  let h = `<section><div class="row" style="justify-content:space-between"><button class="btn ghost small" data-act="cancel-plan" style="padding-left:0">${ic("backArrow")}Back</button></div>
  <div class="row" style="gap:12px"><span class="ci" style="width:48px;height:48px;border-radius:12px;background:var(--sunk);display:grid;place-items:center">${ic(p.cat)}</span><h1>${C.n} day</h1></div></section>
  <section><div class="label">${mi("list")}Focus on</div><div class="chips">${Object.entries(C.opts).map(([k, n]) => `<button class="chip" data-act="p-opt" data-k="${k}" aria-pressed="${p.opts.includes(k)}">${esc(n)}</button>`).join("")}</div>
  <div class="label">${mi("barbell")}Equipment</div><div class="chips">${Object.entries(EQ_GROUPS).map(([k, g]) => `<button class="chip" data-act="p-eq" data-k="${k}" aria-pressed="${p.eqs.includes(k)}">${mi(g.eq[0])}${g.n}</button>`).join("")}</div>
  <div class="label">${mi("timer")}How many exercises</div><div class="segbar">${[3, 4, 5, 6, 7].map(n => `<button data-act="p-n" data-n="${n}" aria-pressed="${p.n === n}">${n}</button>`).join("")}</div>
  <div class="label">${mi("users")}Who's lifting</div><div class="chips">${["a", "b"].map(a => `<button class="chip" data-act="p-who" data-a="${a}" aria-pressed="${p.athletes.includes(a)}"><span class="dot ${a}"></span>${esc(nameOf(a))}</button>`).join("")}</div></section>`;
  h += `<section><div class="sec-h"><h2>${ic("list")}Today's moves</h2><span class="hint">Due and overdue badges are picked first</span></div>`;
  h += p.items.map((id, i) => {
    const ex = EXM[id]; if (!ex) return "";
    return `<div class="ex"><div class="ex-h"><div class="grow"><button class="ex-name" data-act="howto" data-id="${id}">${esc(ex.n)}</button><div class="ex-tags">${eqPill(ex.eq)}<span class="pill">${esc(C.opts[ex.opt])}</span></div></div>${miniRings(p.athletes, id)}</div>
    <div class="last">${p.athletes.map(a => { const s = suggest(a, ex); return `<div><span class="dot ${a}"></span><span><b>${esc(nameOf(a))}</b> ${esc(s.tgt)}${s.last ? ` · last ${esc(s.last)}` : ""}<br><span class="tip">${esc(s.tip)}</span></span></div>`; }).join("")}</div>
    <div class="ex-actions"><button class="btn small" data-act="howto" data-id="${id}">${ic("info")}How to</button><button class="btn small" data-act="p-swap" data-i="${i}">${ic("swap")}Swap</button><button class="btn small ghost" data-act="p-up" data-i="${i}" ${i === 0 ? "disabled" : ""} aria-label="Move up">${ic("up")}</button><button class="btn small ghost danger" data-act="p-rm" data-i="${i}" aria-label="Remove">${ic("trash")}</button></div></div>`;
  }).join("") + `<button class="btn block" data-act="p-add">${ic("plus")}Add an exercise</button></section>`;
  h += `<div class="actionbar"><div class="wrap"><button class="btn" data-act="p-shuffle" aria-label="Shuffle exercises">${ic("shuffle")}</button><button class="btn primary" data-act="start" ${p.items.length && p.athletes.length ? "" : "disabled"}>${ic("play")}Start workout</button></div></div>`;
  return h;
}
function miniRings(ath, id) {
  return `<div class="row" style="gap:4px">${ath.map(a => { const b = badge(a, id); return ringSvg(b, 26, 3.5, `${nameOf(a)}: ${STATE_N[b.s]}`, a); }).join("")}</div>`;
}
function ringSvg(b, size, sw, label, who) {
  const r = (size - sw) / 2, C = 2 * Math.PI * r, col = b.s === "l" ? "var(--muted)" : `var(--${b.s})`;
  const arc = b.s === "l" ? 0 : Math.max(b.s === "r" ? 0 : .06, b.frac) * C;
  return `<svg class="ring mini-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(label)}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${b.s === "l" ? "var(--line)" : b.s === "r" ? "var(--r-bg)" : "var(--sunk)"}" stroke-width="${sw}" ${b.s === "l" ? 'stroke-dasharray="3 3"' : ""}/>${arc ? `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${arc.toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>` : ""}${who ? `<circle cx="${size / 2}" cy="${size / 2}" r="3" fill="var(--${who})"/>` : ""}</svg>`;
}

function vWorkout() {
  const w = activeWorkout(); if (!w) return vTrain();
  const ath = w.athletes || ["a"];
  let h = `<section><div class="wo-head"><div><div class="eyebrow">${new Date(w.startedAt).toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</div><h1>${esc(catTitle(w))}</h1></div><div class="clock num" data-elapsed="${w.startedAt}"></div></div>
  <div class="stats">${ath.map(a => { const v = volume(w, a); return `<div><span><span class="dot ${a}"></span>${esc(nameOf(a))}</span><b class="num">${v.n} sets · ${fmtN(v.v)} lb</b></div>`; }).join("")}</div></section><section>`;
  for (const [k, e] of exList(w)) {
    const ex = EXM[e.id];
    h += `<div class="ex" id="ex-${k}"><div class="ex-h"><div class="grow"><button class="ex-name" data-act="howto" data-id="${ex.id}">${esc(ex.n)}</button><div class="ex-tags">${eqPill(ex.eq)}<span class="pill">${esc(CATS[ex.cat].opts[ex.opt])}</span></div></div><button class="icon-btn" data-act="howto" data-id="${ex.id}" aria-label="How to do ${esc(ex.n)}">${ic("info")}</button></div>`;
    for (const a of ath) {
      const s = suggest(a, ex, w.id), log = (e.log && e.log[a]) || [], t = target(ex, a);
      h += `<div class="who-h"><span class="dot ${a}"></span>${esc(nameOf(a))} <span class="meta">${esc(s.tgt)}${s.last ? " · last " + esc(s.last) : ""}</span></div>${s.tip ? `<div class="meta tip" style="margin-top:-6px">${esc(s.tip)}</div>` : ""}`;
      h += `<div class="sets">` + log.map((st, i) => `<div class="set${st.d ? " done" : ""}">
        <button class="setno${st.wu ? " wu" : ""}" data-act="wu" data-k="${k}" data-a="${a}" data-i="${i}" aria-label="Set ${i + 1}${st.wu ? ", warm-up" : ""}. Tap to toggle warm-up">${st.wu ? "W" : i + 1}</button>
        <div class="fld"><input id="w-${k}-${a}-${i}" inputmode="decimal" enterkeyhint="next" autocomplete="off" data-f="w" data-k="${k}" data-a="${a}" data-i="${i}" value="${st.w == null ? "" : esc(st.w)}" placeholder="${ex.bw ? "+0" : "0"}" aria-label="Weight"><span>${ex.bw ? "+lb" : "lb"}</span></div>
        <span class="x">×</span>
        <div class="fld"><input id="r-${k}-${a}-${i}" inputmode="numeric" enterkeyhint="done" autocomplete="off" data-f="r" data-k="${k}" data-a="${a}" data-i="${i}" value="${st.r == null ? "" : esc(st.r)}" placeholder="${t.lo}–${t.hi}" aria-label="${t.unit === "sec" ? "Seconds" : "Reps"}"><span>${t.unit === "sec" ? "sec" : "reps"}</span></div>
        <button class="chk" data-act="done" data-k="${k}" data-a="${a}" data-i="${i}" aria-pressed="${!!st.d}" aria-label="Mark set done">${ic("check")}</button></div>`).join("") + `</div>
      <div class="set-tools"><button class="btn small" data-act="add-set" data-k="${k}" data-a="${a}">${ic("plus")}Set</button>${log.length ? `<button class="btn small ghost" data-act="rm-set" data-k="${k}" data-a="${a}">${ic("minus")}Last set</button>` : ""}${ex.eq === "barbell" ? `<button class="btn small ghost" data-act="plates" data-k="${k}" data-a="${a}">${ic("disc")}Plates</button>` : ""}</div>`;
    }
    h += `<textarea class="note-in" id="note-${k}" data-note="${k}" rows="1" placeholder="Notes: seat height, grip, how it felt">${esc(e.note || "")}</textarea>
    <div class="ex-actions"><button class="btn small ghost" data-act="wo-swap" data-k="${k}">${ic("swap")}Swap</button><button class="btn small ghost danger" data-act="wo-rm" data-k="${k}">${ic("trash")}Remove</button></div></div>`;
  }
  h += `</section><button class="btn block" data-act="wo-add">${ic("plus")}Add an exercise</button>
  <div class="row" style="justify-content:center">${state.confirmDiscard ? `<span class="hint">Delete this workout and everything in it?</span><button class="btn small danger" data-act="discard-yes">${ic("trash")}Delete it</button><button class="btn small ghost" data-act="discard-no">Keep</button>` : `<button class="btn ghost small danger" data-act="discard">${ic("trash")}Discard workout</button>`}</div>
  <div class="actionbar"><div class="wrap"><button class="btn primary" data-act="finish">${ic("flag")}Finish workout</button></div></div>`;
  return h;
}

/* --- Badges --- */
const MILESTONES = [
  { k: "first", n: "First rep", d: "Finish your first workout", ic: "star", goal: 1, v: s => s.workouts },
  { k: "w10", n: "Ten strong", d: "Finish 10 workouts", ic: "medal", goal: 10, v: s => s.workouts },
  { k: "w25", n: "Regular", d: "Finish 25 workouts", ic: "medal", goal: 25, v: s => s.workouts },
  { k: "w50", n: "Half century", d: "Finish 50 workouts", ic: "trophy", goal: 50, v: s => s.workouts },
  { k: "w100", n: "Century club", d: "Finish 100 workouts", ic: "trophy", goal: 100, v: s => s.workouts },
  { k: "wk3", n: "Three-peat", d: "3 workouts in one week", ic: "flame", goal: 3, v: s => s.bestWeek },
  { k: "rot", n: "Full rotation", d: "All 5 workouts within 7 days", ic: "repeat", goal: 5, v: s => s.bestRotation },
  { k: "pair", n: "Better together", d: "10 workouts as a pair", ic: "users", goal: 10, v: s => s.together },
  { k: "c25", n: "Collector", d: "Earn 25 different badges", ic: "medal", goal: 25, v: s => s.earned },
  { k: "call", n: "Completionist", d: "Earn every badge", ic: "crown", goal: EX.length, v: s => s.earned },
  { k: "s500", n: "500 sets", d: "Log 500 working sets", ic: "bolt", goal: 500, v: s => s.sets },
  { k: "cat", n: "Category complete", d: "Every focus in one category fresh at once", ic: "crown", goal: 1, v: s => s.catComplete },
];
function milestoneStats(a) {
  const ws = sorted().filter(w => w.finishedAt && (w.athletes || []).includes(a) && volume(w, a).n > 0);
  const st = { workouts: ws.length, sets: ws.reduce((s, w) => s + volume(w, a).n, 0), together: ws.filter(w => (w.athletes || []).length > 1).length, earned: Object.keys(idx()[a]).length };
  const weeks = {}; ws.forEach(w => { const k = weekStart(w.startedAt); weeks[k] = (weeks[k] || 0) + 1; }); st.bestWeek = Math.max(0, ...Object.values(weeks));
  st.bestRotation = 0; ws.forEach(w => { const set = new Set(ws.filter(x => x.startedAt <= w.startedAt && x.startedAt > w.startedAt - 7 * DAY).map(x => x.focus)); st.bestRotation = Math.max(st.bestRotation, [...set].filter(c => CATS[c]).length); });
  st.catComplete = CAT_ORDER.some(c => Object.keys(CATS[c].opts).every(o => optState(a, c, o) === "g")) ? 1 : 0;
  return st;
}
function vBadges() {
  const a = state.view; const all = { g: 0, y: 0, r: 0, l: 0 }; EX.forEach(e => all[badge(a, e.id).s]++);
  const earned = EX.length - all.l; const fresh = all.g;
  const big = { s: "g", frac: EX.length ? fresh / EX.length : 0 };
  let h = `<section><div class="sec-h"><h2>${ic("medal")}Badges</h2><span class="hint">${esc(nameOf(a))}</span></div>
  <div class="summary">${ringSvgBig(big)}<div><div class="eyebrow">Fresh right now</div><div class="big num">${fresh}<span style="font-size:1.1rem;color:var(--muted)"> / ${EX.length}</span></div><div class="meta">${earned} earned all-time</div>
  <div class="counts">${[["g", "Fresh"], ["y", "Due"], ["r", "Overdue"], ["l", "Locked"]].map(([k, n]) => `<div><b class="num">${all[k]}</b><span><i class="sw ${k}"></i>${n}</span></div>`).join("")}</div></div></div>
  <div class="legend-row"><span><i class="sw g"></i>Done in the last ${S().yellow} days</span><span><i class="sw y"></i>${S().yellow}–${S().red - 1} days</span><span><i class="sw r"></i>${S().red}+ days</span></div>
  <p class="meta" style="margin:0">Each badge's ring drains as days pass. Log a working set of that exercise to refill it.</p>
  <div class="chip-scroll">${[["all", "All"], ["r", "Overdue"], ["y", "Due"], ["g", "Fresh"], ["l", "Not earned"]].map(([k, n]) => `<button class="chip" data-act="bf" data-k="${k}" aria-pressed="${state.bFilter === k}">${k !== "all" ? `<i class="sw ${k}"></i>` : ""}${n}${k !== "all" ? ` <span class="num" style="opacity:.7">${all[k]}</span>` : ""}</button>`).join("")}</div></section>`;
  for (const c of CAT_ORDER) {
    const list = EX.filter(e => e.cat === c).map(e => ({ e, b: badge(a, e.id) })).filter(x => state.bFilter === "all" || x.b.s === state.bFilter);
    const complete = Object.keys(CATS[c].opts).every(o => optState(a, c, o) === "g");
    h += `<section class="cat-block"><div class="sec-h"><h2>${ic(c)}${CATS[c].n}</h2>${complete ? `<span class="crown">${mi("crown")}Complete</span>` : `<span class="hint">${list.length} shown</span>`}</div>
    <div class="opt-row">${Object.entries(CATS[c].opts).map(([o, n]) => { const s = optState(a, c, o); return `<span class="opt ${s}">${s === "g" ? mi("check") : ""}${esc(n)}</span>`; }).join("")}</div>`;
    h += list.length ? `<div class="bgrid">${list.map(({ e, b }) => {
      const st = b.s === "l" ? "Not yet" : b.s === "g" ? (b.d === 0 ? "Today" : b.d + "d ago") : b.s === "y" ? "Due · " + b.d + "d" : "Overdue";
      return `<button class="badge ${b.s}" data-act="badge" data-id="${e.id}"><span class="ringwrap">${ringSvg(b, 58, 5, STATE_N[b.s])}<span class="ic">${ic(e.eq)}</span></span><span class="nm">${esc(e.n)}</span><span class="st">${st}</span></button>`;
    }).join("")}</div>` : `<div class="meta">Nothing here in this filter.</div>`;
    h += `</section>`;
  }
  const ms = milestoneStats(a);
  h += `<section><div class="sec-h"><h2>${ic("trophy")}Milestones</h2><span class="hint">These never expire</span></div><div class="trophies">${MILESTONES.map(m => { const v = Math.min(m.goal, m.v(ms)); const done = v >= m.goal; return `<div class="trophy${done ? "" : " locked"}"><span class="ti">${ic(m.ic)}</span><span><b>${esc(m.n)}</b><span>${done ? esc(m.d) : esc(m.d) + (m.goal > 1 ? ` · <span class="num">${v}/${m.goal}</span>` : "")}</span></span></div>`; }).join("")}</div></section>`;
  return h;
}
function ringSvgBig(b) { const size = 84, sw = 9, r = (size - sw) / 2, C = 2 * Math.PI * r; return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="42" cy="42" r="${r}" fill="none" stroke="var(--sunk)" stroke-width="${sw}"/><circle cx="42" cy="42" r="${r}" fill="none" stroke="var(--g)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${(Math.max(.001, b.frac) * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 42 42)"/><text x="42" y="48" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" font-family="Barlow Condensed, sans-serif">${Math.round(b.frac * 100)}%</text></svg>`; }

/* --- History --- */
function vHistory() {
  const list = sorted().filter(w => w.finishedAt);
  if (!list.length) return `<section><h2>${ic("calendar")}History</h2><div class="empty"><b>No finished workouts yet</b><span>Pick a workout on the Train tab, log your sets and tap Finish.</span><a class="btn primary" href="#train">Start training</a></div></section>`;
  let h = `<section><div class="sec-h"><h2>${ic("calendar")}History</h2><span class="hint num">${list.length} workouts</span></div><div class="hist">`, month = "";
  for (const w of list) {
    const m = new Date(w.startedAt).toLocaleDateString(undefined, { month: "long", year: "numeric" });
    if (m !== month) { month = m; h += `<div class="eyebrow" style="margin-top:8px">${esc(m)}</div>`; }
    const d = new Date(w.startedAt), open = state.openHist === w.id, ath = w.athletes || [];
    h += `<div class="h-item"><button class="h-sum" data-act="hist" data-id="${w.id}" aria-expanded="${open}"><span class="h-date"><b class="num">${d.getDate()}</b><span>${d.toLocaleDateString(undefined, { weekday: "short" })}</span></span><span><b style="font-family:var(--display);font-size:1.2rem;text-transform:uppercase">${esc(catTitle(w))}</b><br><span class="meta num">${fmtDur(w.finishedAt - w.startedAt)} · ${ath.map(a => esc(nameOf(a)) + " " + volume(w, a).n + " sets").join(" · ")}</span></span><span>${ath.map(a => `<span class="dot ${a}"></span>`).join(" ")}</span></button>`;
    if (open) {
      h += `<div class="h-body">` + exList(w).map(([, e]) => { const ex = EXM[e.id]; const rows = ath.map(a => { const s = workSets(e, a); return s.length ? `<div><span class="dot ${a}"></span><span class="num">${s.map(x => fmtW(x.w) + "×" + x.r).join(", ")}</span></div>` : ""; }).join(""); return rows || e.note ? `<div class="h-ex"><b>${esc(ex.n)}</b>${rows}${e.note ? `<div><i>${esc(e.note)}</i></div>` : ""}</div>` : ""; }).join("") +
        `<div class="row"><button class="btn small" data-act="repeat" data-id="${w.id}">${ic("repeat")}Repeat</button>${state.confirmDel === w.id ? `<button class="btn small danger" data-act="del-yes" data-id="${w.id}">${ic("trash")}Delete for good</button><button class="btn small ghost" data-act="del-no">Keep</button>` : `<button class="btn small ghost danger" data-act="del" data-id="${w.id}">${ic("trash")}Delete</button>`}</div></div>`;
    }
    h += `</div>`;
  }
  return h + `</div></section>`;
}

/* --- Progress --- */
const charts = {};
function vProgress() {
  const counts = {}; for (const w of sorted()) for (const [, e] of exList(w)) if (["a", "b"].some(a => workSets(e, a).length)) counts[e.id] = (counts[e.id] || 0) + 1;
  const ids = Object.keys(counts).sort((x, y) => counts[y] - counts[x]);
  if (!ids.length) return `<section><h2>${ic("chart")}Stats</h2><div class="empty"><b>Charts appear after your first workout</b><span>Each exercise gets a strength trend, personal records and weekly volume for both of you.</span><a class="btn primary" href="#train">Start training</a></div></section>`;
  if (!state.progEx || !counts[state.progEx]) state.progEx = ids[0];
  const ex = EXM[state.progEx];
  const W = Math.max(280, Math.min(($("#main").clientWidth || 360) - 32 - 22, 520));
  const series = ["a", "b"].map(a => { const pts = []; for (const w of sorted().slice().reverse()) { let best = 0, bs = null; for (const [, e] of exList(w)) if (e.id === ex.id) for (const s of workSets(e, a)) { const m = metric(ex, s); if (m > best) { best = m; bs = s; } } if (best) pts.push({ x: w.startedAt, y: best, s: bs }); } return { a, name: nameOf(a), color: `var(--${a})`, pts }; }).filter(s => s.pts.length);
  const usesReps = !ex.time && series.every(s => s.pts.every(p => !(+p.s.w)));
  const label = ex.time ? "Longest hold (seconds)" : usesReps ? "Best reps in a set" : "Estimated 1-rep max (lb)";
  let h = `<section><h2>${ic("chart")}Stats</h2><select class="select" id="progSel" aria-label="Exercise">${ids.map(id => `<option value="${id}"${id === ex.id ? " selected" : ""}>${esc(EXM[id].n)} (${counts[id]})</option>`).join("")}</select></section>`;
  h += `<section><div class="sec-h"><h3>${esc(label)}</h3><button class="btn small ghost" data-act="tbl">${state.showTable ? "Hide table" : "Show table"}</button></div>
  <div class="chart" id="c1"><div class="legend">${series.map(s => `<span><i style="background:${s.color}"></i>${esc(s.name)}</span>`).join("")}</div>${lineChart("c1", series, W, v => fmtN(v))}</div>`;
  if (state.showTable) h += `<div class="tbl-wrap"><table><thead><tr><th>Date</th><th>Who</th><th>Best set</th><th>${usesReps ? "Reps" : ex.time ? "Sec" : "Est. 1RM"}</th></tr></thead><tbody>${series.flatMap(s => s.pts.map(p => ({ ...p, who: s.name }))).sort((x, y) => y.x - x.x).map(p => `<tr><td>${new Date(p.x).toLocaleDateString()}</td><td>${esc(p.who)}</td><td>${fmtW(p.s.w)} × ${p.s.r}</td><td>${fmtN(p.y)}</td></tr>`).join("")}</tbody></table></div>`;
  h += `<p class="meta" style="margin:0">${ex.time || usesReps ? "Best set from each workout." : "Estimated from your best set each workout: weight × (1 + reps ÷ 30). Warm-ups are left out."}</p></section>`;
  h += `<section><h3>${ic("trophy")}Personal records</h3><div class="prs">` + ["a", "b"].map(a => {
    const r = idx()[a][ex.id]; if (!r) return `<div class="wk"><div class="who"><span class="dot ${a}"></span><span class="t">${esc(nameOf(a))}</span></div><span class="meta">No sets yet.</span></div>`;
    let heavy = 0; for (const w of sorted()) for (const [, e] of exList(w)) if (e.id === ex.id) for (const s of workSets(e, a)) heavy = Math.max(heavy, +s.w || 0);
    return `<div class="wk"><div class="who"><span class="dot ${a}"></span><span class="t">${esc(nameOf(a))}</span></div><dl><div><dt>Heaviest</dt><dd class="num">${fmtW(heavy || null)}</dd></div><div><dt>${ex.time ? "Longest" : usesReps ? "Reps" : "1RM"}</dt><dd class="num">${fmtN(r.best)}</dd></div><div><dt>Done</dt><dd class="num">${r.count}×</dd></div></dl><span class="meta">Best: ${fmtW(r.bestSet.w)}×${r.bestSet.r}</span></div>`;
  }).join("") + `</div></section>`;
  const ws0 = weekStart(Date.now()); const weeks = []; for (let i = 7; i >= 0; i--) weeks.push(ws0 - i * 7 * DAY);
  const vol = ["a", "b"].map(a => ({ a, name: nameOf(a), color: `var(--${a})`, vals: weeks.map(ws => sorted().filter(w => w.startedAt >= ws && w.startedAt < ws + 7 * DAY).reduce((s, w) => s + volume(w, a).v, 0)) })).filter(s => s.vals.some(v => v > 0));
  if (vol.length) h += `<section><div class="sec-h"><h3>${ic("calendar")}Weekly volume</h3><span class="hint">All exercises, lb lifted</span></div><div class="chart" id="c2"><div class="legend">${vol.map(s => `<span><i style="background:${s.color};height:10px;width:10px"></i>${esc(s.name)}</span>`).join("")}</div>${barChart("c2", weeks, vol, W)}</div></section>`;
  return h;
}
function niceTicks(min, max, n) { if (max === min) { max = min + 1; min = Math.max(0, min - 1); } const raw = (max - min) / n; const mag = Math.pow(10, Math.floor(Math.log10(raw))); const st = [1, 2, 2.5, 5, 10].map(x => x * mag).find(x => raw <= x); const lo = Math.floor(min / st) * st, hi = Math.ceil(max / st) * st; const t = []; for (let v = lo; v <= hi + st / 2; v += st) t.push(+v.toFixed(6)); return t; }
const shortD = ms => new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric" });
function lineChart(id, series, W, fmt) {
  const H = 200, m = { l: 40, r: 10, t: 10, b: 26 }; const all = series.flatMap(s => s.pts);
  let x0 = Math.min(...all.map(p => p.x)), x1 = Math.max(...all.map(p => p.x)); if (x1 - x0 < DAY) { x0 -= 3 * DAY; x1 += 3 * DAY; }
  const ymin = Math.min(...all.map(p => p.y)), ymax = Math.max(...all.map(p => p.y)); const pad = (ymax - ymin) * .15 || ymax * .1 || 5;
  const ticks = niceTicks(Math.max(0, ymin - pad), ymax + pad, 4); const y0 = ticks[0], y1 = ticks[ticks.length - 1];
  const sx = x => m.l + (x - x0) / (x1 - x0) * (W - m.l - m.r), sy = y => m.t + (1 - (y - y0) / (y1 - y0)) * (H - m.t - m.b);
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Line chart">`;
  for (const t of ticks) s += `<line x1="${m.l}" x2="${W - m.r}" y1="${sy(t)}" y2="${sy(t)}" stroke="var(--line)"/><text x="${m.l - 6}" y="${sy(t) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${fmt(t)}</text>`;
  [x0, (x0 + x1) / 2, x1].forEach((x, i) => s += `<text x="${sx(x)}" y="${H - 6}" font-size="11" fill="var(--muted)" text-anchor="${i === 0 ? "start" : i === 2 ? "end" : "middle"}">${shortD(x)}</text>`);
  s += `<line class="xh" x1="0" x2="0" y1="${m.t}" y2="${H - m.b}" stroke="var(--muted)" stroke-dasharray="3 3" visibility="hidden"/>`;
  for (const se of series) { s += `<path d="${se.pts.map((p, i) => (i ? "L" : "M") + sx(p.x).toFixed(1) + " " + sy(p.y).toFixed(1)).join(" ")}" fill="none" stroke="${se.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`; se.pts.forEach((p, i) => s += `<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="${i === se.pts.length - 1 ? 5 : 4}" fill="${se.color}" stroke="var(--surface)" stroke-width="2"/>`); }
  s += `<rect x="${m.l}" y="0" width="${W - m.l - m.r}" height="${H}" fill="transparent" class="hit"/></svg>`;
  charts[id] = { type: "line", W, series, sx, fmt }; return s;
}
function barChart(id, weeks, series, W) {
  const H = 180, m = { l: 40, r: 6, t: 8, b: 26 }; const mx = Math.max(1, ...series.flatMap(s => s.vals)); const ticks = niceTicks(0, mx, 3); const y1 = ticks[ticks.length - 1];
  const sy = v => m.t + (1 - v / y1) * (H - m.t - m.b); const bw = (W - m.l - m.r) / weeks.length, n = series.length, inner = Math.min(14, (bw - 8) / n);
  const fk = v => v >= 1000 ? (v / 1000).toFixed(v >= 10000 ? 0 : 1) + "k" : fmtN(v);
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Weekly volume">`;
  for (const t of ticks) s += `<line x1="${m.l}" x2="${W - m.r}" y1="${sy(t)}" y2="${sy(t)}" stroke="var(--line)"/><text x="${m.l - 6}" y="${sy(t) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${fk(t)}</text>`;
  weeks.forEach((wk, i) => { const cx = m.l + bw * i + bw / 2, gw = inner * n + 2 * (n - 1);
    series.forEach((se, j) => { const v = se.vals[i], x = cx - gw / 2 + j * (inner + 2), y = sy(v), hh = Math.max(0, H - m.b - y); if (hh > 0) { const rr = Math.min(4, inner / 2, hh); s += `<path d="M${x} ${H - m.b} V${y + rr} Q${x} ${y} ${x + rr} ${y} H${x + inner - rr} Q${x + inner} ${y} ${x + inner} ${y + rr} V${H - m.b} Z" fill="${se.color}"/>`; } });
    s += `<rect x="${m.l + bw * i}" y="0" width="${bw}" height="${H - m.b}" fill="transparent" class="bh" data-i="${i}"/>`;
    if (i % 2 === 1) s += `<text x="${cx}" y="${H - 6}" text-anchor="middle" font-size="11" fill="var(--muted)">${shortD(wk)}</text>`; });
  s += `<line x1="${m.l}" x2="${W - m.r}" y1="${H - m.b}" y2="${H - m.b}" stroke="var(--muted)"/></svg>`;
  charts[id] = { type: "bar", W, weeks, series }; return s;
}
function bindCharts() {
  for (const id in charts) {
    const box = document.getElementById(id); if (!box) continue; const c = charts[id], svg = box.querySelector("svg"); if (!svg) continue;
    const tt = document.createElement("div"); tt.className = "tt"; tt.hidden = true; box.appendChild(tt);
    const place = (html, xv) => { tt.innerHTML = html; tt.hidden = false; const br = box.getBoundingClientRect(), sr = svg.getBoundingClientRect(); let left = (xv / c.W) * sr.width + (sr.left - br.left) + 10; if (left + tt.offsetWidth > br.width - 4) left -= tt.offsetWidth + 20; tt.style.left = Math.max(4, left) + "px"; tt.style.top = (sr.top - br.top + 6) + "px"; };
    const hide = () => { tt.hidden = true; const xh = svg.querySelector(".xh"); if (xh) xh.setAttribute("visibility", "hidden"); };
    if (c.type === "line") {
      const hit = svg.querySelector(".hit"), xh = svg.querySelector(".xh");
      const mv = ev => { const r = svg.getBoundingClientRect(), xv = (ev.clientX - r.left) * (c.W / r.width); let best = null, bd = 1e9; for (const se of c.series) for (const p of se.pts) { const d = Math.abs(c.sx(p.x) - xv); if (d < bd) { bd = d; best = p; } } if (!best) return;
        const X = c.sx(best.x); xh.setAttribute("x1", X); xh.setAttribute("x2", X); xh.setAttribute("visibility", "visible"); const day = dstr(best.x);
        place(`<div style="opacity:.75">${shortD(best.x)}</div>` + c.series.map(se => { const p = se.pts.find(q => dstr(q.x) === day); return p ? `<div><span class="dot" style="background:${se.color}"></span>${esc(se.name)}: <b>${c.fmt(p.y)}</b> (${fmtW(p.s.w)}×${p.s.r})</div>` : ""; }).join(""), X); };
      hit.addEventListener("pointermove", mv); hit.addEventListener("pointerdown", mv); hit.addEventListener("pointerleave", hide);
    } else svg.querySelectorAll(".bh").forEach(r => { const show = () => { const i = +r.dataset.i; place(`<div style="opacity:.75">Week of ${shortD(c.weeks[i])}</div>` + c.series.map(se => `<div><span class="dot" style="background:${se.color}"></span>${esc(se.name)}: <b>${fmtN(se.vals[i])} lb</b></div>`).join(""), +r.getAttribute("x") + +r.getAttribute("width") / 2); }; r.addEventListener("pointerenter", show); r.addEventListener("pointerdown", show); r.addEventListener("pointerleave", hide); });
  }
}

/* --- Library --- */
function libFilter() { const q = state.libQ.toLowerCase(), c = state.libC; return EX.filter(e => (!c || e.cat === c) && (!q || e.n.toLowerCase().includes(q) || e.m.toLowerCase().includes(q) || EQ[e.eq].toLowerCase().includes(q) || CATS[e.cat].opts[e.opt].toLowerCase().includes(q))); }
function libRows(list, pick) { return list.length ? list.map(e => { const b = badge(state.view, e.id); return `<button data-act="${pick ? "pick" : "howto"}" data-id="${e.id}"><span style="display:flex;gap:10px;align-items:center;min-width:0">${ringSvg(b, 26, 3.5, STATE_N[b.s])}<span style="min-width:0"><b>${esc(e.n)}</b><br><span class="meta">${esc(CATS[e.cat].n)} · ${esc(CATS[e.cat].opts[e.opt])}</span></span></span>${eqPill(e.eq)}</button>`; }).join("") : `<div class="notice">No exercises match. Try a muscle or equipment name.</div>`; }
function vLibrary(pick, catOnly) {
  return `<section>${pick ? "" : `<div class="sec-h"><h2>${ic("list")}Moves</h2><span class="hint num">${EX.length} exercises · tap for how-to</span></div>`}
  <input class="search" id="libQ" type="search" placeholder="Search: squat, cable, glutes…" value="${esc(state.libQ)}" aria-label="Search exercises" autocomplete="off">
  ${catOnly ? "" : `<div class="chip-scroll" role="group" aria-label="Filter by workout"><button class="chip" data-act="libc" data-c="" aria-pressed="${!state.libC}">All</button>${CAT_ORDER.map(c => `<button class="chip" data-act="libc" data-c="${c}" aria-pressed="${state.libC === c}">${mi(c)}${CATS[c].n}</button>`).join("")}</div>`}
  <div class="lib" id="libList">${libRows(libFilter(), pick)}</div></section>`;
}
function refreshLib() { const inSheet = !$("#sheet").hidden && sheetCtx && sheetCtx.lib; const root = inSheet ? $("#sheetIn") : $("#main"); const el = root.querySelector("#libList"); if (el) el.innerHTML = libRows(libFilter(), inSheet); }

/* ================= Sheets ================= */
let sheetCtx = null;
function openSheet(html, ctx) { sheetCtx = ctx || null; $("#sheetIn").innerHTML = html; $("#sheet").hidden = false; document.body.style.overflow = "hidden"; $(".sheet-panel").scrollTop = 0; }
function closeSheet(force) { if (sheetCtx && sheetCtx.locked && !force) return; $("#sheet").hidden = true; document.body.style.overflow = ""; sheetCtx = null; }
const closeBtn = `<button class="icon-btn" data-act="close" aria-label="Close">${ic("x")}</button>`;
function howTo(id) {
  const e = EXM[id]; if (!e) return;
  const yt = "https://www.youtube.com/results?search_query=" + encodeURIComponent(e.n + " proper form");
  openSheet(`<div class="sheet-top"><div><div class="eyebrow">${esc(CATS[e.cat].n)} · ${esc(CATS[e.cat].opts[e.opt])}</div><h1 style="font-size:1.9rem">${esc(e.n)}</h1></div>${closeBtn}</div>
  <div class="row" style="gap:6px">${eqPill(e.eq)}<span class="pill">${e.t === "c" ? "Compound" : "Isolation"}</span>${e.time ? `<span class="pill">${mi("timer")}Timed</span>` : ""}</div>
  <div class="meta"><b>Works:</b> ${esc(e.m)}</div>
  <div class="meta where">${mi("pin")}<span><b>Where:</b> ${esc(WHERE[e.eq])}</span></div>
  <div><h3 style="margin-bottom:8px">${ic("list")}Steps</h3><ol class="steps">${e.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol></div>
  <div><h3 style="margin-bottom:6px">${ic("cue")}Cues</h3><ul class="cues">${e.cues.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>
  <div class="avoid">${mi("warn")}<span><b>Avoid:</b> ${esc(e.avoid)}</span></div>
  <a class="btn" href="${yt}" target="_blank" rel="noopener">${ic("video")}Watch form videos</a>
  <div><h3 style="margin-bottom:8px">${ic("swap")}Similar moves</h3><div class="lib">${libRows(alternatives(id).slice(0, 4), false)}</div></div>`);
}
function badgeSheet(id) {
  const e = EXM[id];
  const rows = ["a", "b"].map(a => { const b = badge(a, id); let txt;
    if (b.s === "l") txt = "Not earned yet. Log a working set to earn it.";
    else { const toY = b.Y - b.d, toR = b.R - b.d; txt = `Last done ${agoText(b.r.last)} · ${b.r.count} time${b.r.count > 1 ? "s" : ""} · best ${fmtW(b.r.bestSet.w)}×${b.r.bestSet.r}. ` + (b.s === "g" ? `Turns yellow in ${toY} day${toY > 1 ? "s" : ""}.` : b.s === "y" ? `Turns red in ${toR} day${toR > 1 ? "s" : ""}.` : "Overdue: do it soon to refill."); }
    return `<div class="row" style="flex-wrap:nowrap;align-items:flex-start">${ringSvg(b, 44, 5, STATE_N[b.s], a)}<div><b>${esc(nameOf(a))}</b> <span class="pill">${STATE_N[b.s]}</span><div class="meta">${esc(txt)}</div></div></div>`; }).join("");
  openSheet(`<div class="sheet-top"><div><div class="eyebrow">Badge · ${esc(CATS[e.cat].n)}</div><h1 style="font-size:1.8rem">${esc(e.n)}</h1></div>${closeBtn}</div>${rows}
  <div class="grid2"><button class="btn" data-act="howto" data-id="${id}">${ic("info")}How to</button><button class="btn primary" data-act="plan-with" data-id="${id}" style="font-size:1.05rem">${ic("plus")}Plan it</button></div>`);
}
function pickSheet(title, ids, onPick) { openSheet(`<div class="sheet-top"><h2>${esc(title)}</h2>${closeBtn}</div>` + (ids ? `<div class="lib">${libRows(ids.map(i => EXM[i]), true)}</div>` : vLibrary(true)), { onPick, lib: !ids }); }
function settingsSheet() {
  const s = S(), me = lsGet("spotme.me", "a");
  const cloud = Store.mode === "cloud";
  openSheet(`<div class="sheet-top"><h2>${ic("users")}Settings</h2>${closeBtn}</div>
  ${["a", "b"].map(a => `<div class="grid2"><div class="field"><label for="nm-${a}"><span class="dot ${a}"></span> Lifter ${a === "a" ? 1 : 2}</label><input id="nm-${a}" value="${esc(s.athletes[a].name)}" maxlength="16" autocomplete="off"></div><div class="field"><label for="gl-${a}">Goal</label><select id="gl-${a}">${Object.entries(GOALS).map(([k, g]) => `<option value="${k}"${s.athletes[a].goal === k ? " selected" : ""}>${g.n}</option>`).join("")}</select></div></div>`).join("")}
  <div class="field"><label>This phone belongs to</label><div class="segbar">${["a", "b"].map(a => `<button data-act="set-me" data-a="${a}" aria-pressed="${me === a}">${esc(s.athletes[a].name)}</button>`).join("")}</div></div>
  <div class="grid2"><div class="field"><label for="st-rest">Rest timer</label><select id="st-rest">${[45, 60, 75, 90, 120, 150, 180].map(v => `<option value="${v}"${s.rest === v ? " selected" : ""}>${v < 60 ? v + " sec" : (v / 60) + " min"}</option>`).join("")}</select></div>
  <div class="field"><label for="st-bar">Barbell</label><select id="st-bar">${[45, 35, 25, 15].map(v => `<option value="${v}"${s.bar === v ? " selected" : ""}>${v} lb</option>`).join("")}</select></div></div>
  <div class="grid2"><div class="field"><label for="st-y">Badge turns yellow after</label><select id="st-y">${[3, 4, 5, 6, 7, 10, 14].map(v => `<option value="${v}"${s.yellow === v ? " selected" : ""}>${v} days</option>`).join("")}</select></div>
  <div class="field"><label for="st-r">Badge turns red after</label><select id="st-r">${[7, 10, 14, 21, 28].map(v => `<option value="${v}"${s.red === v ? " selected" : ""}>${v} days</option>`).join("")}</select></div></div>
  <button class="btn primary block" data-act="save-settings">${ic("check")}Save</button>
  <h3>${ic("link")}Partner sync</h3>
  ${cloud ? `<p class="meta" style="margin:0">Open this invite on ${esc(s.athletes.b.name)}'s phone (scan the code or send the link). Both phones then share one log.</p>
  <div class="qr" id="qr"><span class="meta">Loading code…</span></div>
  <div class="code" id="inviteLink">${esc(inviteLink())}</div>
  <div class="grid2"><button class="btn" data-act="copy-invite">${ic("copy")}Copy link</button><button class="btn" data-act="join-other">${ic("link")}Join another</button></div>` : `<div class="notice">Cloud sync isn't set up in this copy of the app, so workouts are saved on this phone only.</div>`}
  <h3>${ic("download")}Backup</h3>
  <div class="grid2"><button class="btn" data-act="export">${ic("download")}Export</button><label class="btn" for="importFile">${ic("upload")}Import</label></div><input type="file" id="importFile" accept="application/json,.json" hidden>
  <p class="meta" style="margin:0">Spot Me · ${EX.length} exercises</p>`);
  if (cloud) drawQR();
}
const inviteLink = () => location.origin + location.pathname + "#join=" + (Store.hid || "");
let qrLib = null;
async function drawQR() {
  try { if (!window.qrcode) await new Promise((res, rej) => { const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    const q = window.qrcode(0, "M"); q.addData(inviteLink()); q.make(); const el = $("#qr"); if (el) el.innerHTML = q.createSvgTag(5, 0);
  } catch (e) { const el = $("#qr"); if (el) el.innerHTML = '<span class="meta">Code unavailable offline. Use the link.</span>'; }
}
function welcomeSheet(joining) {
  const cloud = Store.mode === "cloud" || (firebaseConfig && firebaseConfig.apiKey);
  if (joining) {
    openSheet(`<div class="welcome stack" style="gap:14px"><div class="eyebrow">Joined a shared log</div><h1>Who's using this phone?</h1><p class="meta" style="margin:0">Your stats and badges show first. You can switch anytime from the top bar.</p>
    <div class="grid2">${["a", "b"].map(a => `<button class="btn" data-act="welcome-me" data-a="${a}" style="min-height:64px"><span class="dot ${a}"></span>${esc(nameOf(a))}</button>`).join("")}</div></div>`, { locked: true });
    return;
  }
  openSheet(`<div class="welcome stack" style="gap:14px"><div class="eyebrow">Welcome</div><h1>Spot Me</h1><p class="meta" style="margin:0">Plan workouts, log sets together and keep every exercise badge green.</p>
  <div class="field"><label for="w-a"><span class="dot a"></span> Your name</label><input id="w-a" maxlength="16" placeholder="Your name" autocomplete="off"></div>
  <div class="field"><label for="w-b"><span class="dot b"></span> Workout partner</label><input id="w-b" maxlength="16" value="Lauren" autocomplete="off"></div>
  <button class="btn primary block" data-act="welcome-new">${ic("play")}Start our log</button>
  ${cloud ? `<div class="notice">Already set up on the other phone? Open the invite link from Settings there, or paste it here:</div><div class="field"><input id="w-code" placeholder="Paste invite link or code" autocomplete="off"></div><button class="btn block" data-act="welcome-join">${ic("link")}Join partner's log</button>` : ""}</div>`, { locked: true });
}
function platesSheet(w) {
  const bar = S().bar; let side = Math.max(0, (w - bar) / 2); const out = []; for (const p of [45, 35, 25, 10, 5, 2.5]) while (side >= p - 1e-9) { out.push(p); side -= p; }
  const H = { 45: 110, 35: 96, 25: 82, 10: 62, 5: 48, 2.5: 38 };
  openSheet(`<div class="sheet-top"><div><div class="eyebrow">Plate math</div><h2>${w ? fmtW(w) + " lb" : "Enter a weight"}</h2></div>${closeBtn}</div>
  <div class="field"><label for="plW">Target weight (lb)</label><input id="plW" inputmode="decimal" value="${w || ""}"></div>
  <div class="plates">${w > bar ? `<span class="barend"></span>${out.map(p => `<span class="plate" style="height:${H[p]}px">${p}</span>`).join("")}<span class="collar"></span>` : '<span class="meta">Just the bar.</span>'}</div>
  <p style="margin:0;text-align:center"><b>Each side:</b> ${out.length ? out.join(" + ") + " lb" : "nothing"}${side > .01 ? ` <span class="meta">(${fmtW(side * 2)} lb left over)</span>` : ""}</p><p class="meta" style="margin:0;text-align:center">${bar} lb bar. Change it in Settings.</p>`);
}
function summarySheet(w) {
  const before = w.startedAt;
  const rows = (w.athletes || []).map(a => { const v = volume(w, a); const prs = []; const newB = [];
    for (const [, e] of exList(w)) { const ex = EXM[e.id]; let b = 0, bs = null; for (const s of workSets(e, a)) { const m = metric(ex, s); if (m > b) { b = m; bs = s; } } if (!b) continue;
      let prev = 0, had = false; for (const x of sorted()) { if (x.startedAt >= before) continue; for (const [, e2] of exList(x)) if (e2.id === e.id) for (const s of workSets(e2, a)) { had = true; prev = Math.max(prev, metric(ex, s)); } }
      if (!had) newB.push(ex.n); else if (b > prev + .01) prs.push(ex.n + " " + fmtW(bs.w) + "×" + bs.r); }
    return `<div class="wk"><div class="who"><span class="dot ${a}"></span><span class="t">${esc(nameOf(a))}</span></div><dl><div><dt>Sets</dt><dd class="num">${v.n}</dd></div><div><dt>Lb</dt><dd class="num">${fmtN(v.v)}</dd></div><div><dt>PRs</dt><dd class="num">${prs.length}</dd></div></dl>${newB.map(n => `<div class="pr-flag">${mi("medal")} New badge: ${esc(n)}</div>`).join("")}${prs.map(p => `<div class="pr-flag">${mi("trophy")} Best ever: ${esc(p)}</div>`).join("")}</div>`; }).join("");
  openSheet(`<div class="sheet-top"><div><div class="eyebrow">Workout complete · ${fmtDur(w.finishedAt - w.startedAt)}</div><h1>${esc(catTitle(w))} done</h1></div>${closeBtn}</div><div class="prs">${rows}</div><p class="meta" style="margin:0">Every exercise you logged has its badge refilled.</p><a class="btn primary block" href="#badges" data-act="close">${ic("medal")}See badges</a>`);
}

/* ================= Rest timer ================= */
let actx = null;
function beep() { try { if (actx) { const t = actx.currentTime; [0, .22, .44].forEach(d => { const o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = 880; o.connect(g); g.connect(actx.destination); g.gain.setValueAtTime(.0001, t + d); g.gain.exponentialRampToValueAtTime(.3, t + d + .02); g.gain.exponentialRampToValueAtTime(.0001, t + d + .16); o.start(t + d); o.stop(t + d + .18); }); } } catch (e) {} try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {} }
document.addEventListener("pointerdown", () => { try { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); else if (actx.state === "suspended") actx.resume(); } catch (e) {} }, { passive: true });
function startRest(sec) { state.rest = { end: Date.now() + sec * 1000, len: sec, beeped: false }; renderRest(); }
function renderRest() {
  const el = $("#rest"), r = state.rest; $("#main").classList.toggle("resting", !!r);
  if (!r) { el.hidden = true; return; }
  el.hidden = false;
  if (!el.firstChild) el.innerHTML = `<div class="bar"></div><div class="wrap">${ic("timer")}<span class="t num"></span><button data-act="rest-sub">−15</button><button data-act="rest-add">+15</button><button data-act="rest-skip">Done</button></div>`;
  const left = Math.round((r.end - Date.now()) / 1000);
  el.querySelector(".t").textContent = (left < 0 ? "+" : "") + Math.floor(Math.abs(left) / 60) + ":" + String(Math.abs(left) % 60).padStart(2, "0");
  el.classList.toggle("over", left <= 0); el.querySelector(".bar").style.width = Math.max(0, Math.min(100, (1 - left / r.len) * 100)) + "%";
  if (left <= 0 && !r.beeped) { r.beeped = true; beep(); }
  if (left < -120) { state.rest = null; renderRest(); }
}
function tick() { document.querySelectorAll("[data-elapsed]").forEach(el => { const ms = Date.now() - +el.dataset.elapsed, m = Math.floor(ms / 60000), s = Math.floor(ms / 1000) % 60; el.textContent = m >= 60 ? Math.floor(m / 60) + ":" + String(m % 60).padStart(2, "0") + ":" + String(s).padStart(2, "0") : m + ":" + String(s).padStart(2, "0"); }); if (state.rest) renderRest(); }
setInterval(tick, 1000);
let wakeLock = null;
async function keepAwake(on) { try { if (on && !wakeLock && navigator.wakeLock) { wakeLock = await navigator.wakeLock.request("screen"); wakeLock.addEventListener("release", () => { wakeLock = null; }); } else if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; } } catch (e) { wakeLock = null; } }
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && route() === "workout" && activeWorkout()) keepAwake(true); if (document.visibilityState === "hidden") Store.flushAll(); });

/* ================= Actions ================= */
const logOf = (w, k, a) => clone((w.ex[k].log && w.ex[k].log[a]) || []);
const setLog = (w, k, a, arr, delay) => Store.patch(w.id, { ex: { [k]: { log: { [a]: arr } } } }, delay);
function newEntry(exId, ath, o, woId) { const ex = EXM[exId], log = {}; for (const a of ath) { const s = suggest(a, ex, woId), t = target(ex, a); log[a] = Array.from({ length: t.sets }, () => ({ w: s.w, r: null, d: false })); } return { id: exId, o, log }; }
function rebuildPlan() { const p = state.plan; p.items = buildPlan(p); lsSet("spotme.prefs." + p.cat, { opts: p.opts, eqs: p.eqs, n: p.n, athletes: p.athletes }); savePlan(); render(); }
function startWorkout() {
  const p = state.plan; if (!p || !p.items.length || !p.athletes.length) return;
  if (activeWorkout()) { toast("Finish or discard the workout in progress first."); go("workout"); return; }
  const id = uid("w"), ex = {}; p.items.forEach((exId, i) => { ex["e" + i] = newEntry(exId, p.athletes, i, id); });
  Store.create({ id, focus: p.cat, opts: p.opts, athletes: p.athletes.slice(), startedAt: Date.now(), finishedAt: null, date: dstr(Date.now()), ex });
  state.plan = null; savePlan(); keepAwake(true); go("workout");
}
function parseJoin(v) { const m = String(v || "").match(/join=([A-Za-z0-9]{20,})/) || String(v || "").trim().match(/^([A-Za-z0-9]{20,})$/); return m ? m[1] : null; }

document.addEventListener("click", ev => {
  const b = ev.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, w = activeWorkout(), p = state.plan;
  switch (act) {
    case "close": closeSheet(); break;
    case "view": state.view = b.dataset.a; lsSet("spotme.view", state.view); render(); break;
    case "cat": state.plan = newPlan(b.dataset.c); savePlan(); go("plan"); break;
    case "plan-with": { const e = EXM[b.dataset.id]; closeSheet(); if (activeWorkout()) { toast("Finish the current workout first."); break; } state.plan = newPlan(e.cat, e.id); savePlan(); go("plan"); break; }
    case "cancel-plan": state.plan = null; savePlan(); go("train"); break;
    case "p-opt": { const k = b.dataset.k; if (p.opts.includes(k)) { if (p.opts.length > 1) p.opts = p.opts.filter(x => x !== k); else { toast("Pick at least one focus."); break; } } else p.opts.push(k); p.force = []; rebuildPlan(); break; }
    case "p-eq": { const k = b.dataset.k; if (p.eqs.includes(k)) { if (p.eqs.length > 1) p.eqs = p.eqs.filter(x => x !== k); else { toast("Pick at least one type of equipment."); break; } } else p.eqs.push(k); p.force = []; rebuildPlan(); break; }
    case "p-n": p.n = +b.dataset.n; rebuildPlan(); break;
    case "p-who": { const a = b.dataset.a; p.athletes = p.athletes.includes(a) ? p.athletes.filter(x => x !== a) : [...p.athletes, a].sort(); lsSet("spotme.prefs." + p.cat, { opts: p.opts, eqs: p.eqs, n: p.n, athletes: p.athletes }); savePlan(); render(); break; }
    case "p-shuffle": p.salt = (p.salt || 0) + 1; p.force = []; rebuildPlan(); break;
    case "p-rm": p.items.splice(+b.dataset.i, 1); savePlan(); render(); break;
    case "p-up": { const i = +b.dataset.i; if (i > 0) { [p.items[i - 1], p.items[i]] = [p.items[i], p.items[i - 1]]; savePlan(); render(); } break; }
    case "p-swap": { const i = +b.dataset.i, cur = p.items[i]; pickSheet("Swap " + EXM[cur].n, alternatives(cur, p.items).map(e => e.id), id => { p.items[i] = id; savePlan(); render(); }); break; }
    case "p-add": state.libC = p.cat; pickSheet("Add an exercise", null, id => { if (!p.items.includes(id)) p.items.push(id); savePlan(); render(); }); break;
    case "start": startWorkout(); break;
    case "howto": howTo(b.dataset.id); break;
    case "badge": badgeSheet(b.dataset.id); break;
    case "bf": state.bFilter = b.dataset.k; render(); break;
    case "pick": { const ctx = sheetCtx; closeSheet(); if (ctx && ctx.onPick) ctx.onPick(b.dataset.id); break; }
    case "libc": state.libC = b.dataset.c; if (sheetCtx && sheetCtx.lib) { $("#sheetIn").querySelectorAll('[data-act="libc"]').forEach(c => c.setAttribute("aria-pressed", c.dataset.c === state.libC)); refreshLib(); } else render(); break;
    case "done": { if (!w) break; const { k, a } = b.dataset, i = +b.dataset.i, log = logOf(w, k, a), st = log[i]; if (!st) break;
      const wi = document.getElementById(`w-${k}-${a}-${i}`), ri = document.getElementById(`r-${k}-${a}-${i}`); if (wi) st.w = numOrNull(wi.value); if (ri) st.r = numOrNull(ri.value);
      st.d = !st.d;
      if (st.d) { const ex = EXM[w.ex[k].id]; if (st.r == null) { const prev = log.slice(0, i).reverse().find(s => s.r != null); st.r = prev ? prev.r : target(ex, a).lo; } if (log[i + 1] && log[i + 1].w == null && st.w != null) log[i + 1].w = st.w; if (!st.wu) startRest(S().rest); try { navigator.vibrate && navigator.vibrate(30); } catch (e) {} }
      setLog(w, k, a, log, 250); render(); break; }
    case "wu": { if (!w) break; const { k, a } = b.dataset, i = +b.dataset.i, log = logOf(w, k, a); log[i].wu = !log[i].wu; setLog(w, k, a, log); render(); break; }
    case "add-set": { if (!w) break; const { k, a } = b.dataset, log = logOf(w, k, a), prev = log[log.length - 1]; log.push({ w: prev ? prev.w : suggest(a, EXM[w.ex[k].id], w.id).w, r: null, d: false }); setLog(w, k, a, log); render(); break; }
    case "rm-set": { if (!w) break; const { k, a } = b.dataset, log = logOf(w, k, a); log.pop(); setLog(w, k, a, log); render(); break; }
    case "plates": { if (!w) break; const { k, a } = b.dataset, log = (w.ex[k].log && w.ex[k].log[a]) || [], cur = log.find(s => !s.d) || log[log.length - 1]; platesSheet(cur && cur.w ? +cur.w : 0); break; }
    case "wo-add": if (!w) break; state.libC = w.focus || ""; pickSheet("Add an exercise", null, id => { const o = Math.max(-1, ...Object.values(w.ex || {}).map(e => e.o || 0)) + 1, k = "e" + Date.now().toString(36); Store.patch(w.id, { ex: { [k]: newEntry(id, w.athletes, o, w.id) } }, 250); render(); setTimeout(() => { const el = document.getElementById("ex-" + k); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); }); break;
    case "wo-swap": { if (!w) break; const k = b.dataset.k, cur = w.ex[k].id; pickSheet("Swap " + EXM[cur].n, alternatives(cur, exList(w).map(([, e]) => e.id)).map(e => e.id), id => { const ent = newEntry(id, w.athletes, w.ex[k].o, w.id); Store.patch(w.id, { ex: { [k]: { id, log: ent.log } } }, 250); render(); }); break; }
    case "wo-rm": if (!w) break; Store.patch(w.id, { ex: { [b.dataset.k]: { removed: true } } }, 250); render(); break;
    case "finish": { if (!w) break; Store.patch(w.id, { finishedAt: Date.now() }, 0); Store.bump(); state.rest = null; keepAwake(false); state.openHist = w.id; go("history"); summarySheet(Store.workouts[w.id]); break; }
    case "discard": state.confirmDiscard = true; render(); break;
    case "discard-no": state.confirmDiscard = false; render(); break;
    case "discard-yes": if (w) Store.remove(w.id); state.confirmDiscard = false; state.rest = null; keepAwake(false); go("train"); break;
    case "hist": state.openHist = state.openHist === b.dataset.id ? null : b.dataset.id; state.confirmDel = null; render(); break;
    case "del": state.confirmDel = b.dataset.id; render(); break;
    case "del-no": state.confirmDel = null; render(); break;
    case "del-yes": Store.remove(b.dataset.id); state.confirmDel = null; state.openHist = null; toast("Workout deleted"); break;
    case "repeat": { const src = Store.workouts[b.dataset.id]; if (!src) break; const cat = CATS[src.focus] ? src.focus : "back"; const pl = newPlan(cat); pl.items = exList(src).map(([, e]) => e.id); pl.athletes = (src.athletes || ["a"]).slice(); state.plan = pl; savePlan(); go("plan"); break; }
    case "tbl": state.showTable = !state.showTable; render(); break;
    case "rest-add": if (state.rest) { state.rest.end += 15000; state.rest.len += 15; state.rest.beeped = false; renderRest(); } break;
    case "rest-sub": if (state.rest) { state.rest.end -= 15000; renderRest(); } break;
    case "rest-skip": state.rest = null; renderRest(); break;
    case "set-me": lsSet("spotme.me", b.dataset.a); state.view = b.dataset.a; lsSet("spotme.view", state.view); b.parentElement.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); render(); break;
    case "save-settings": { const s = clone(S()); for (const a of ["a", "b"]) { s.athletes[a].name = $("#nm-" + a).value.trim() || (a === "a" ? "Me" : "Partner"); s.athletes[a].goal = $("#gl-" + a).value; } s.rest = +$("#st-rest").value; s.bar = +$("#st-bar").value; s.yellow = +$("#st-y").value; s.red = Math.max(s.yellow + 1, +$("#st-r").value); Store.saveSettings(s); closeSheet(); toast("Settings saved"); break; }
    case "copy-invite": { const t = inviteLink(); navigator.clipboard && navigator.clipboard.writeText(t).then(() => toast("Invite link copied"), () => toast("Long-press the link to copy it")); break; }
    case "join-other": closeSheet(); welcomeSheet(false); break;
    case "export": { const blob = new Blob([JSON.stringify({ app: "spot-me", v: 1, exported: new Date().toISOString(), settings: S(), workouts: Store.workouts }, null, 1)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "spot-me-backup-" + dstr(Date.now()) + ".json"; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); break; }
    case "welcome-new": { const na = $("#w-a").value.trim(), nb = $("#w-b").value.trim(); if (!na) { toast("Add your name to start."); $("#w-a").focus(); break; }
      const s = clone(S()); s.athletes.a.name = na; s.athletes.b.name = nb || "Partner"; lsSet("spotme.me", "a"); state.view = "a"; lsSet("spotme.view", "a"); lsSet("spotme.onboarded", true);
      if (Store.mode === "cloud" || (firebaseConfig && firebaseConfig.apiKey)) { Store.seed = true; Store.settings = s; Store.setHousehold(newHid()); if (Store.mode === "cloud" && Store.authed) Store.F.setDoc(Store.ref("meta", "settings"), clone(s)).catch(e => Store.fail(e)); }
      else Store.saveSettings(s);
      closeSheet(true); render(); toast("You're set. Invite " + (nb || "your partner") + " from Settings."); break; }
    case "welcome-join": { const hid = parseJoin($("#w-code").value); if (!hid) { toast("That doesn't look like an invite link or code."); break; } Store.setHousehold(hid); lsSet("spotme.onboarded", true); closeSheet(true); welcomeSheet(true); break; }
    case "welcome-me": lsSet("spotme.me", b.dataset.a); state.view = b.dataset.a; lsSet("spotme.view", state.view); closeSheet(true); render(); break;
  }
});
$("#gear").addEventListener("click", settingsSheet);
document.addEventListener("input", ev => {
  const t = ev.target;
  if (t.id === "libQ") { state.libQ = t.value; refreshLib(); return; }
  if (t.id === "plW") { const v = numOrNull(t.value) || 0, pos = t.selectionStart; platesSheet(v); const n = $("#plW"); n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} return; }
  const w = activeWorkout(); if (!w) return;
  if (t.dataset.f) { const { k, a, f } = t.dataset, i = +t.dataset.i, log = logOf(w, k, a); if (!log[i]) return; log[i][f] = numOrNull(t.value); setLog(w, k, a, log); return; }
  if (t.dataset.note) Store.patch(w.id, { ex: { [t.dataset.note]: { note: t.value.slice(0, 500) } } }, 900);
});
document.addEventListener("change", async ev => {
  if (ev.target.id === "progSel") { state.progEx = ev.target.value; render(); }
  if (ev.target.id === "importFile" && ev.target.files[0]) {
    try { const data = JSON.parse(await ev.target.files[0].text()); if (data.app !== "spot-me") throw new Error("not a backup");
      let n = 0; for (const id in (data.workouts || {})) { if (!Store.workouts[id]) { Store.create(data.workouts[id]); n++; } }
      if (data.settings) Store.saveSettings(normSettings(data.settings)); closeSheet(); toast(`Imported ${n} workout${n === 1 ? "" : "s"}.`);
    } catch (e) { toast("That file isn't a Spot Me backup."); }
  }
});
document.addEventListener("keydown", ev => { if (ev.key === "Escape" && !$("#sheet").hidden) closeSheet(); if (ev.key === "Enter" && ev.target.dataset && ev.target.dataset.f) ev.target.blur(); });
window.addEventListener("hashchange", () => { const j = parseJoin(location.hash); if (j) { handleJoin(j); return; } state.confirmDiscard = false; render(); window.scrollTo(0, 0); if (route() === "workout" && activeWorkout()) keepAwake(true); });
let rsT; window.addEventListener("resize", () => { clearTimeout(rsT); rsT = setTimeout(() => { if (route() === "progress") render(); }, 200); });
window.addEventListener("pagehide", () => Store.flushAll());

function handleJoin(hid) {
  history.replaceState(null, "", location.pathname + "#train");
  if (Store.hid === hid) { toast("This phone is already on that log."); render(); return; }
  Store.setHousehold(hid); lsSet("spotme.onboarded", true); render(); welcomeSheet(true);
}

/* ================= Boot ================= */
render();
Store.init().then(() => {
  const j = parseJoin(location.hash);
  if (j) handleJoin(j);
  else if (!lsGet("spotme.onboarded", false) || (Store.mode === "cloud" && !Store.hid)) welcomeSheet(false);
  render();
});
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
