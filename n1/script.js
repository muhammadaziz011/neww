
/* ================= DATA ================= */
const CATEGORIES = [
  {id:'phone', name:'Telefonlar', icon:'icon-phone'},
  {id:'laptop', name:'Noutbuklar', icon:'icon-laptop'},
  {id:'tablet', name:'Planshetlar', icon:'icon-tablet'},
  {id:'wearable', name:'Aksessuarlar', icon:'icon-watch'},
  {id:'audio', name:'Audio', icon:'icon-headphones'},
  {id:'gaming', name:'O‘yin', icon:'icon-gamepad'},
];

function img(id){ return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`; }
const PHOTOS = {
  phone1: img('1759505017950-25e0733b9e68'),
  phone2: img('1758186355698-bd0183fc75ed'),
  laptop: img('1593642632559-0c6d3fc62b89'),
  laptopGaming: img('1756694938594-e760b4bd3bfb'),
  tablet: img('1562145259-610b3d3ca6ab'),
  watch: img('1696660760822-833afde62f94'),
  band: img('1557935728-e6d1eaabe558'),
  earbuds: img('1756902368926-eb9e5e9d2a69'),
  headphones: img('1505740420928-5e560c06d30e'),
  controller: img('1754594207981-8b97210a6d3a'),
  console: img('1622297845775-5ff3fef71d13'),
};

const PRODUCTS = [
  {id:'p1',name:'Nova X12 Pro',brand:'Nova',category:'phone',price:899,oldPrice:1099,rating:4.8,reviews:342,badge:'flash',image:PHOTOS.phone2,
   colors:[{name:'Graphite',hex:'#2b2d33'},{name:'Sky',hex:'#8fb8e8'},{name:'Sand',hex:'#d9c7a8'}],
   variants:['128GB','256GB','512GB'],
   specs:{Chip:'Nova A7 Bionic',RAM:'8GB',Storage:'256GB',Display:'6.7" OLED 120Hz',Battery:'4500mAh',Camera:'50MP Triple',Weight:'189g'}},
  {id:'p2',name:'Nova X12',brand:'Nova',category:'phone',price:649,rating:4.6,reviews:210,badge:'bestseller',image:PHOTOS.phone1,
   colors:[{name:'Black',hex:'#161616'},{name:'Blue',hex:'#3a5fcd'}],
   variants:['128GB','256GB'],
   specs:{Chip:'Nova A6',RAM:'6GB',Storage:'128GB',Display:'6.5" OLED 90Hz',Battery:'4300mAh',Camera:'48MP Dual',Weight:'182g'}},
  {id:'p3',name:'Zenith Fold 3',brand:'Zenith',category:'phone',price:1599,rating:4.5,reviews:98,badge:'new',image:PHOTOS.phone2,
   colors:[{name:'Onyx',hex:'#1a1a1a'},{name:'Cream',hex:'#efe6d8'}],
   variants:['256GB','512GB'],
   specs:{Chip:'Zenith Fusion 2',RAM:'12GB',Storage:'512GB',Display:'7.6" Foldable AMOLED',Battery:'4800mAh',Camera:'50MP Triple',Weight:'253g'}},
  {id:'p4',name:'Halcyon S22',brand:'Halcyon',category:'phone',price:449,oldPrice:549,rating:4.3,reviews:520,badge:'flash',image:PHOTOS.phone1,
   colors:[{name:'Mint',hex:'#a9d8c4'},{name:'Charcoal',hex:'#3b3b3d'}],
   variants:['128GB'],
   specs:{Chip:'Halcyon H5',RAM:'6GB',Storage:'128GB',Display:'6.4" LCD 90Hz',Battery:'5000mAh',Camera:'50MP Dual',Weight:'190g'}},

  {id:'l1',name:'Vector Book 14 Pro',brand:'Vector',category:'laptop',price:1499,oldPrice:1699,rating:4.9,reviews:180,badge:'flash',image:PHOTOS.laptop,
   colors:[{name:'Space Gray',hex:'#4a4d52'},{name:'Silver',hex:'#dcdfe3'}],
   variants:['512GB SSD','1TB SSD'],
   specs:{CPU:'Vector V9 12-core',RAM:'16GB',Storage:'512GB SSD',Display:'14" 3K 120Hz',Battery:'18h',GPU:'Integrated 10-core',Weight:'1.4kg'}},
  {id:'l2',name:'Vector Book 14',brand:'Vector',category:'laptop',price:999,rating:4.6,reviews:265,badge:'bestseller',image:PHOTOS.laptop,
   colors:[{name:'Silver',hex:'#dcdfe3'}],
   variants:['256GB SSD','512GB SSD'],
   specs:{CPU:'Vector V7 8-core',RAM:'8GB',Storage:'256GB SSD',Display:'14" FHD 60Hz',Battery:'14h',GPU:'Integrated',Weight:'1.5kg'}},
  {id:'l3',name:'Forge 16 Gaming',brand:'Forge',category:'laptop',price:1899,rating:4.7,reviews:132,badge:'new',image:PHOTOS.laptopGaming,
   colors:[{name:'Black',hex:'#111111'}],
   variants:['1TB SSD'],
   specs:{CPU:'Forge R9',RAM:'32GB',Storage:'1TB SSD',Display:'16" QHD 240Hz',Battery:'6h',GPU:'RTX 4070 8GB',Weight:'2.3kg'}},
  {id:'l4',name:'Aero Slim 13',brand:'Aero',category:'laptop',price:729,oldPrice:849,rating:4.2,reviews:301,badge:'flash',image:PHOTOS.laptop,
   colors:[{name:'Rose',hex:'#e5b8b0'},{name:'Blue',hex:'#7fa6c9'}],
   variants:['256GB SSD'],
   specs:{CPU:'Aero A5',RAM:'8GB',Storage:'256GB SSD',Display:'13.3" FHD',Battery:'12h',GPU:'Integrated',Weight:'1.2kg'}},

  {id:'t1',name:'Slate Pad 11',brand:'Slate',category:'tablet',price:599,rating:4.5,reviews:145,badge:'bestseller',image:PHOTOS.tablet,
   colors:[{name:'Graphite',hex:'#333333'},{name:'Silver',hex:'#dddddd'}],
   variants:['64GB','256GB'],
   specs:{Chip:'Slate S3',RAM:'6GB',Storage:'128GB',Display:'11" Liquid Retina',Battery:'10h',Camera:'12MP',Weight:'458g'}},
  {id:'t2',name:'Slate Pad Mini',brand:'Slate',category:'tablet',price:399,oldPrice:459,rating:4.4,reviews:88,badge:'flash',image:PHOTOS.tablet,
   colors:[{name:'Purple',hex:'#9b8ac4'},{name:'Space Gray',hex:'#4a4d52'}],
   variants:['64GB'],
   specs:{Chip:'Slate S2',RAM:'4GB',Storage:'64GB',Display:'8.3" Retina',Battery:'9h',Camera:'12MP',Weight:'293g'}},

  {id:'w1',name:'Pulse Watch 5',brand:'Pulse',category:'wearable',price:299,rating:4.6,reviews:410,badge:'bestseller',image:PHOTOS.watch,
   colors:[{name:'Midnight',hex:'#1e1f26'},{name:'Starlight',hex:'#e6e2d3'}],
   variants:['41mm','45mm'],
   specs:{Display:'AMOLED Always-On',Battery:'36h','Water resistance':'50m',Sensors:'HR, SpO2, ECG',Connectivity:'GPS + LTE',Weight:'38g'}},
  {id:'w2',name:'Pulse Band Air',brand:'Pulse',category:'wearable',price:79,oldPrice:99,rating:4.1,reviews:670,badge:'flash',image:PHOTOS.band,
   colors:[{name:'Black',hex:'#111111'},{name:'Coral',hex:'#e8917a'}],
   variants:['One size'],
   specs:{Display:'AMOLED',Battery:'14 days','Water resistance':'5ATM',Sensors:'HR, SpO2',Connectivity:'Bluetooth',Weight:'22g'}},

  {id:'a1',name:'Echo Buds Pro',brand:'Echo',category:'audio',price:199,rating:4.7,reviews:530,badge:'bestseller',image:PHOTOS.earbuds,
   colors:[{name:'White',hex:'#f2f2f2'},{name:'Black',hex:'#111111'}],
   variants:['Standard'],
   specs:{Driver:'11mm Dynamic',Battery:'8h (32h case)',Bluetooth:'5.3',ANC:'Adaptive','Water resistance':'IPX4',Weight:'5.4g each'}},
  {id:'a2',name:'Echo Max Over-Ear',brand:'Echo',category:'audio',price:329,oldPrice:399,rating:4.8,reviews:212,badge:'flash',image:PHOTOS.headphones,
   colors:[{name:'Black',hex:'#111111'},{name:'Navy',hex:'#2c3e60'}],
   variants:['Standard'],
   specs:{Driver:'40mm Dynamic',Battery:'40h',Bluetooth:'5.3',ANC:'Active','Water resistance':'N/A',Weight:'250g'}},

  {id:'g1',name:'Grip Pro Controller',brand:'Grip',category:'gaming',price:69,rating:4.5,reviews:390,badge:'new',image:PHOTOS.controller,
   colors:[{name:'Black',hex:'#111111'},{name:'White',hex:'#f2f2f2'}],
   variants:['Standard'],
   specs:{Type:'Wireless Controller',Compatibility:'PC, Console, Mobile',Battery:'20h',Connectivity:'Bluetooth + 2.4G',Weight:'240g'}},
  {id:'g2',name:'Streamline Console X',brand:'Streamline',category:'gaming',price:499,rating:4.9,reviews:75,badge:'new',image:PHOTOS.console,
   colors:[{name:'Black',hex:'#111111'}],
   variants:['1TB'],
   specs:{Type:'Home Console',Storage:'1TB SSD',Performance:'4K 120fps',Connectivity:'Wi-Fi 6, BT 5.2',Weight:'3.9kg'}},
];

const catIcon = id => (CATEGORIES.find(c=>c.id===id)||{}).icon || 'icon-phone';
const fmt = n => '$' + n.toLocaleString('en-US');
const SPEC_LABELS_UZ = {Chip:'Protsessor',RAM:'RAM',Storage:'Xotira',Display:'Ekran',Battery:'Batareya',Camera:'Kamera',Weight:'Og‘irligi',CPU:'Protsessor',GPU:'Videokarta','Water resistance':'Suv o‘tkazmasligi',Sensors:'Sensorlar',Connectivity:'Ulanish',Driver:'Dinamik',Bluetooth:'Bluetooth',ANC:'Shovqin bosish',Type:'Turi',Compatibility:'Moslik',Performance:'Unumdorlik'};

/* ================= PERSISTENCE (browser-local, no backend) ================= */
const LS_KEYS = { cart:'gz_cart', wishlist:'gz_wishlist', compare:'gz_compare', theme:'gz_theme', profile:'gz_profile', orders:'gz_orders' };
function loadJSON(key, fallback){
  try{ const raw = localStorage.getItem(key); return raw!==null ? JSON.parse(raw) : fallback; }
  catch(e){ return fallback; }
}
function saveJSON(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }
  catch(e){ /* storage unavailable (private mode / quota) — fail silently, app still works this session */ }
}
function persistCart(){ saveJSON(LS_KEYS.cart, state.cart); }
function persistWishlist(){ saveJSON(LS_KEYS.wishlist, [...state.wishlist]); }
function persistCompare(){ saveJSON(LS_KEYS.compare, state.compare); }
function getProfile(){ return loadJSON(LS_KEYS.profile, null); }
function getOrders(){ return loadJSON(LS_KEYS.orders, []); }

/* ================= THEME ================= */
(function applySavedTheme(){
  const saved = loadJSON(LS_KEYS.theme, null);
  if(saved){ document.documentElement.setAttribute('data-theme', saved); }
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
function toggleTheme(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  saveJSON(LS_KEYS.theme, next);
}

/* ================= STATE ================= */
const state = {
  cart: loadJSON(LS_KEYS.cart, []),            // {productId, variant, colorName, qty}
  wishlist: new Set(loadJSON(LS_KEYS.wishlist, [])),
  compare: loadJSON(LS_KEYS.compare, []),       // productIds
  view: 'home',
  filters: { category:'all', brands:new Set(), minPrice:null, maxPrice:null, minRating:0, badge:null, wishlistOnly:false, query:'' },
  sort: 'featured',
  currentProduct: null,
  detail: {}, // per-product selected color/variant/qty
};

/* ================= ICON HELPERS ================= */
function deviceIll(category, extraAttrs=''){
  return `<svg class="device-ill" ${extraAttrs}><use href="#${catIcon(category)}"/></svg>`;
}
// Renders a real product photo; if it fails to load, quietly falls back to a soft placeholder tone.
const FALLBACK_IMG = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#F5F6FB"/></svg>');
function productPhoto(p, cls='product-img'){
  return `<img class="${cls}" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';this.style.objectFit='cover';">`;
}
function starRow(rating){
  let out = '<span class="stars">';
  for(let i=1;i<=5;i++){
    out += `<svg class="icon"><use href="#${i<=Math.round(rating)?'icon-star':'icon-star-o'}"/></svg>`;
  }
  return out+'</span>';
}

/* ================= RENDER: NAV & CATEGORIES ================= */
function renderNav(){
  const el = document.getElementById('headerNav');
  el.innerHTML = `<a href="#" class="nav-link ${state.filters.category==='all'&&state.view==='listing'?'active':''}" onclick="showView('listing',{category:'all'});return false;">Barcha aksiyalar</a>` +
    CATEGORIES.map(c=>`<a href="#" class="nav-link ${state.filters.category===c.id&&state.view==='listing'?'active':''}" onclick="showView('listing',{category:'${c.id}'});return false;">${c.name}</a>`).join('');
}
function renderCatRow(){
  document.getElementById('catRow').innerHTML = CATEGORIES.map(c=>{
    const count = PRODUCTS.filter(p=>p.category===c.id).length;
    return `<button class="cat-tile" onclick="showView('listing',{category:'${c.id}'})">
      <span class="icon-wrap"><svg class="icon"><use href="#${c.icon}"/></svg></span>
      <span>${c.name}</span>
      <small>${count} ta mahsulot</small>
    </button>`;
  }).join('');
}

/* ================= CARD RENDER ================= */
function productCard(p){
  const inWishlist = state.wishlist.has(p.id);
  const inCompare = state.compare.includes(p.id);
  const chips = Object.entries(p.specs).slice(0,3);
  return `<div class="card">
    <div class="card-media" onclick="showView('detail',{id:'${p.id}'})">
      ${p.badge?`<span class="card-badge ${p.badge}">${p.badge==='flash'?'Aksiya':p.badge==='new'?'Yangi':'Ko‘p sotilgan'}</span>`:''}
      <button class="btn-icon card-fav ${inWishlist?'active':''}" onclick="event.stopPropagation();toggleWishlist('${p.id}')" title="Sevimlilarga qo‘shish">
        <svg class="icon"><use href="#${inWishlist?'icon-heart-filled':'icon-heart'}"/></svg>
      </button>
      ${productPhoto(p)}
      <div class="card-compare">
        <label class="compare-check" onclick="event.stopPropagation();">
          <input type="checkbox" ${inCompare?'checked':''} onchange="toggleCompare('${p.id}', this)"> Solishtirish
        </label>
      </div>
    </div>
    <div class="card-body">
      <span class="card-brand">${p.brand}</span>
      <span class="card-name" onclick="showView('detail',{id:'${p.id}'})">${p.name}</span>
      <div class="rating-row">${starRow(p.rating)}<span class="rating-count">${p.rating} (${p.reviews})</span></div>
      <div class="spec-chip-strip">${chips.map(([k,v])=>`<span class="spec-chip">${v}</span>`).join('')}</div>
      <div class="card-footer">
        <div class="card-price">
          <div class="price-row">
            <span class="price">${fmt(p.price)}</span>
            ${p.oldPrice?`<span class="price-old">${fmt(p.oldPrice)}</span>`:''}
          </div>
        </div>
        <button class="add-btn" onclick="event.stopPropagation();quickAdd('${p.id}', this)" title="Savatga qo‘shish">
          <svg class="icon" style="width:16px;height:16px;"><use href="#icon-cart"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

/* ================= HOME RENDER ================= */
function renderHome(){
  const flash = PRODUCTS.filter(p=>p.badge==='flash');
  const best = PRODUCTS.filter(p=>p.badge==='bestseller');
  document.getElementById('flashGrid').innerHTML = flash.map(productCard).join('');
  document.getElementById('bestGrid').innerHTML = best.map(productCard).join('');
  const deal = flash[0];
  document.getElementById('dealOfDay').innerHTML = `
    <div class="device-photo">${productPhoto(deal)}</div>
    <div class="deal-info">
      <div class="name">${deal.name}</div>
      <div class="price-row">
        <span class="price">${fmt(deal.price)}</span>
        <span class="price-old">${fmt(deal.oldPrice)}</span>
        <span class="discount-tag">-${Math.round((1-deal.price/deal.oldPrice)*100)}%</span>
      </div>
      <button class="btn btn-dark btn-sm" style="margin-top:10px;" onclick="showView('detail',{id:'${deal.id}'})">Aksiyani ko‘rish</button>
    </div>`;
}

/* ================= COUNTDOWN ================= */
function startCountdown(){
  let target = Date.now() + (8*3600+24*60+59)*1000;
  let prev = {h:null, m:null, s:null};
  function setDigit(el, val, key){
    if(!el) return;
    if(prev[key] !== val){
      el.textContent = val;
      el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
      prev[key] = val;
    }
  }
  function tick(){
    let diff = Math.max(0, target - Date.now());
    if(diff<=0){ target = Date.now() + 8*3600*1000; diff = 8*3600*1000; }
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    const el = document.getElementById('countdown');
    if(!el) return;
    if(!el.querySelector('.cd-h')){
      el.innerHTML = `<span class="cd-h">${h}</span>:<span class="cd-m">${m}</span>:<span class="cd-s">${s}</span>`;
      prev = {h, m, s};
      return;
    }
    setDigit(el.querySelector('.cd-h'), h, 'h');
    setDigit(el.querySelector('.cd-m'), m, 'm');
    setDigit(el.querySelector('.cd-s'), s, 's');
  }
  tick();
  setInterval(tick, 1000);
}

/* ================= LISTING VIEW ================= */
function applyFilters(){
  const min = document.getElementById('priceMin').value;
  const max = document.getElementById('priceMax').value;
  state.filters.minPrice = min?Number(min):null;
  state.filters.maxPrice = max?Number(max):null;
  renderListingGrid();
}
function clearFilters(){
  state.filters.brands = new Set();
  state.filters.minPrice = null; state.filters.maxPrice = null;
  state.filters.minRating = 0; state.filters.badge = null; state.filters.wishlistOnly=false;
  document.getElementById('priceMin').value=''; document.getElementById('priceMax').value='';
  renderFilterPanel(); renderListingGrid();
}
function setCategoryFilter(catId){
  state.filters.category = catId;
  renderFilterPanel(); renderNav(); renderListingGrid();
  document.getElementById('listingTitle').textContent = catId==='all' ? 'Barcha mahsulotlar' : CATEGORIES.find(c=>c.id===catId).name;
  document.getElementById('crumbCurrent').textContent = document.getElementById('listingTitle').textContent;
}
function renderFilterPanel(){
  document.getElementById('filterCats').innerHTML =
    `<label class="filter-opt ${state.filters.category==='all'?'active-cat':''}"><input type="radio" name="catf" ${state.filters.category==='all'?'checked':''} onchange="setCategoryFilter('all')"> Barcha kategoriyalar</label>` +
    CATEGORIES.map(c=>`<label class="filter-opt ${state.filters.category===c.id?'active-cat':''}"><input type="radio" name="catf" ${state.filters.category===c.id?'checked':''} onchange="setCategoryFilter('${c.id}')"> ${c.name}</label>`).join('');

  const brands = [...new Set(PRODUCTS.map(p=>p.brand))].sort();
  document.getElementById('filterBrands').innerHTML = brands.map(b=>`
    <label class="filter-opt"><input type="checkbox" ${state.filters.brands.has(b)?'checked':''} onchange="toggleBrandFilter('${b}')"> ${b}</label>`).join('');

  document.getElementById('filterRating').innerHTML = [4,3,2].map(r=>`
    <button onclick="setRatingFilter(${r})">${starRow(r)} va yuqori</button>`).join('');
}
function toggleBrandFilter(b){
  if(state.filters.brands.has(b)) state.filters.brands.delete(b); else state.filters.brands.add(b);
  renderListingGrid();
}
function setRatingFilter(r){ state.filters.minRating = r; renderListingGrid(); }

function getFilteredSorted(){
  let list = PRODUCTS.filter(p=>{
    if(state.filters.category!=='all' && p.category!==state.filters.category) return false;
    if(state.filters.brands.size && !state.filters.brands.has(p.brand)) return false;
    if(state.filters.minPrice!=null && p.price<state.filters.minPrice) return false;
    if(state.filters.maxPrice!=null && p.price>state.filters.maxPrice) return false;
    if(p.rating < state.filters.minRating) return false;
    if(state.filters.badge && p.badge!==state.filters.badge) return false;
    if(state.filters.wishlistOnly && !state.wishlist.has(p.id)) return false;
    if(state.filters.query){
      const q = state.filters.query.toLowerCase();
      if(!p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
    }
    return true;
  });
  if(state.sort==='price-asc') list = list.slice().sort((a,b)=>a.price-b.price);
  if(state.sort==='price-desc') list = list.slice().sort((a,b)=>b.price-a.price);
  if(state.sort==='rating') list = list.slice().sort((a,b)=>b.rating-a.rating);
  return list;
}
function renderListingGrid(){
  const list = getFilteredSorted();
  document.getElementById('resultCount').textContent = `${list.length} ta natija`;
  document.getElementById('listingGrid').innerHTML = list.map(productCard).join('');
  document.getElementById('listingGrid').classList.toggle('hidden', list.length===0);
  document.getElementById('listingEmpty').classList.toggle('hidden', list.length!==0);
}

/* ================= DETAIL VIEW ================= */
function ensureDetailState(id){
  if(!state.detail[id]){
    const p = PRODUCTS.find(x=>x.id===id);
    state.detail[id] = { color: p.colors[0].name, variant: p.variants[0], qty:1 };
  }
  return state.detail[id];
}
function renderDetail(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const d = ensureDetailState(id);
  document.getElementById('crumbCat').textContent = CATEGORIES.find(c=>c.id===p.category).name;
  document.getElementById('crumbCat').onclick = ()=>{ showView('listing',{category:p.category}); return false; };
  document.getElementById('crumbName').textContent = p.name;

  const specRows = Object.entries(p.specs).map(([k,v])=>`<tr><td>${SPEC_LABELS_UZ[k]||k}</td><td>${v}</td></tr>`).join('');
  const reviewsHtml = sampleReviews(p).map(r=>`
    <div class="review-item">
      <div class="review-head"><span class="review-name">${r.name}</span><span class="review-date">${r.date}</span></div>
      ${starRow(r.rating)}
      <p class="review-text" style="margin-top:6px;">${r.text}</p>
    </div>`).join('');

  document.getElementById('detailGrid').innerHTML = `
    <div>
      <div class="detail-media">
        ${p.badge?`<span class="card-badge ${p.badge}">${p.badge==='flash'?'Aksiya':p.badge==='new'?'Yangi':'Ko‘p sotilgan'}</span>`:''}
        ${productPhoto(p)}
      </div>
      <div class="thumb-row">
        ${[1,2,3].map(i=>`<div class="thumb ${i===1?'active':''}">${productPhoto(p)}</div>`).join('')}
      </div>
    </div>
    <div>
      <span class="detail-brand">${p.brand}</span>
      <h1 class="detail-title">${p.name}</h1>
      <div class="detail-rating">${starRow(p.rating)}<span class="rating-count">${p.rating} · ${p.reviews} ta sharh</span></div>
      <div class="detail-price-row">
        <span class="price">${fmt(p.price)}</span>
        ${p.oldPrice?`<span class="price-old">${fmt(p.oldPrice)}</span><span class="discount-tag">-${Math.round((1-p.price/p.oldPrice)*100)}%</span>`:''}
      </div>
      <div class="stock-line"><svg class="icon"><use href="#icon-check"/></svg> Mavjud — 24 soat ichida jo‘natiladi</div>

      <div class="option-group">
        <span class="option-label">Rang: ${d.color}</span>
        <div class="swatches">
          ${p.colors.map(c=>`<div class="swatch ${d.color===c.name?'active':''}" style="background:${c.hex}" title="${c.name}" onclick="setDetailOption('${p.id}','color','${c.name}')"></div>`).join('')}
        </div>
      </div>
      <div class="option-group">
        <span class="option-label">Konfiguratsiya</span>
        <div class="chip-options">
          ${p.variants.map(v=>`<button class="chip-opt ${d.variant===v?'active':''}" onclick="setDetailOption('${p.id}','variant','${v}')">${v}</button>`).join('')}
        </div>
      </div>
      <div class="qty-row">
        <span class="option-label" style="margin:0;">Miqdori</span>
        <div class="qty-control">
          <button onclick="setDetailQty('${p.id}',-1)"><svg class="icon" style="width:14px;height:14px;"><use href="#icon-minus"/></svg></button>
          <span>${d.qty}</span>
          <button onclick="setDetailQty('${p.id}',1)"><svg class="icon" style="width:14px;height:14px;"><use href="#icon-plus"/></svg></button>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn btn-dark" style="flex:1;" onclick="addToCart('${p.id}')">Savatga qo‘shish</button>
        <button class="btn btn-primary" style="flex:1;" onclick="addToCart('${p.id}'); openCart();">Hoziroq sotib olish</button>
        <button class="btn-icon ${state.wishlist.has(p.id)?'active':''}" onclick="toggleWishlist('${p.id}'); renderDetail('${p.id}');" title="Sevimlilarga qo‘shish">
          <svg class="icon"><use href="#${state.wishlist.has(p.id)?'icon-heart-filled':'icon-heart'}"/></svg>
        </button>
      </div>
      <div class="trust-row">
        <div class="trust-item"><svg class="icon"><use href="#icon-truck"/></svg> Bepul yetkazib berish, 2–4 kun</div>
        <div class="trust-item"><svg class="icon"><use href="#icon-shield"/></svg> 2 yillik kafolat</div>
        <div class="trust-item"><svg class="icon"><use href="#icon-check"/></svg> 30 kun ichida qaytarish</div>
      </div>

      <div class="tabs">
        <button class="tab-btn active" data-tab="specs" onclick="switchTab(this,'specs')">Xususiyatlar</button>
        <button class="tab-btn" data-tab="reviews" onclick="switchTab(this,'reviews')">Sharhlar (${p.reviews})</button>
      </div>
      <div id="tab-specs"><table class="spec-table">${specRows}</table></div>
      <div id="tab-reviews" class="hidden">${reviewsHtml}</div>
    </div>
  `;
  const related = PRODUCTS.filter(x=>x.category===p.category && x.id!==p.id).slice(0,4);
  document.getElementById('relatedGrid').innerHTML = related.map(productCard).join('');
}
function switchTab(btn, tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-specs').classList.toggle('hidden', tab!=='specs');
  document.getElementById('tab-reviews').classList.toggle('hidden', tab!=='reviews');
}
function setDetailOption(id, key, val){ ensureDetailState(id)[key]=val; renderDetail(id); }
function setDetailQty(id, delta){ const d=ensureDetailState(id); d.qty=Math.max(1,d.qty+delta); renderDetail(id); }

const REVIEW_NAMES = ['A. Karimov','J. Smith','L. Chen','M. Ortiz','S. Ivanova','D. Patel'];
const REVIEW_TEXTS = [
  'Texnik xususiyatlarga to‘liq mos — quti ochilganda hech qanday sarosima bo‘lmadi. Yetkazib berish kutilganidan tezroq bo‘ldi.',
  'Narxiga nisbatan sifati yaxshi. Faol foydalanishda batareya reklamadagidan biroz kamroq ishlaydi.',
  'GadgetZone’dan ikkinchi xaridim. Qadoqlash a’lo darajada, sozlash bir necha daqiqa oldi.',
  'Narxi va sifati mos. Rangi rasmda ko‘rsatilganidan biroz to‘qroq ekan.',
  'Buyurtma berishdan oldin qo‘llab-quvvatlash xizmati to‘g‘ri konfiguratsiyani tanlashda yordam berdi — halolligi uchun rahmat.',
];
function sampleReviews(p){
  const seed = p.id.charCodeAt(1)||1;
  return [0,1,2].map(i=>({
    name: REVIEW_NAMES[(seed+i)%REVIEW_NAMES.length],
    date: ['2 kun oldin','1 hafta oldin','3 hafta oldin'][i],
    rating: Math.max(3, Math.round(p.rating) - (i===2?1:0)),
    text: REVIEW_TEXTS[(seed+i*2)%REVIEW_TEXTS.length],
  }));
}

/* ================= VIEW SWITCHING ================= */
function showView(view, opts={}){
  ['home','listing','detail'].forEach(v=>document.getElementById(v+'-view').classList.toggle('hidden', v!==view));
  state.view = view;
  if(view==='listing'){
    if(opts.category) state.filters.category = opts.category;
    state.filters.badge = opts.badge || null;
    state.filters.wishlistOnly = !!opts.wishlistOnly;
    if(!opts.category) state.filters.category='all';
    renderFilterPanel();
    document.getElementById('listingTitle').textContent = opts.wishlistOnly ? 'Sevimlilar ro‘yxati' : (state.filters.category==='all' ? (opts.badge==='flash'?'Chegirmalar':opts.badge==='bestseller'?'Ko‘p sotilganlar':'Barcha mahsulotlar') : CATEGORIES.find(c=>c.id===state.filters.category).name);
    document.getElementById('crumbCurrent').textContent = document.getElementById('listingTitle').textContent;
    renderListingGrid();
  }
  if(view==='detail' && opts.id){
    state.currentProduct = opts.id;
    renderDetail(opts.id);
  }
  renderNav();
  syncMobileTabbar(view, opts);
  window.scrollTo({top:0, behavior:'instant' in window.HTMLElement ? 'instant':'auto'});
}
function syncMobileTabbar(view, opts={}){
  const bar = document.getElementById('mobileTabbar');
  if(!bar) return;
  let active = 'home';
  if(view==='listing') active = opts.wishlistOnly ? 'wishlist' : 'catalog';
  if(view==='detail') active = 'catalog';
  bar.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===active));
}

/* ================= CART ================= */
function quickAdd(id, btnEl){
  const p = PRODUCTS.find(x=>x.id===id);
  const existing = state.cart.find(c=>c.productId===id && c.variant===p.variants[0] && c.colorName===p.colors[0].name);
  if(existing) existing.qty++;
  else state.cart.push({productId:id, variant:p.variants[0], colorName:p.colors[0].name, qty:1});
  if(btnEl){ btnEl.classList.remove('added'); void btnEl.offsetWidth; btnEl.classList.add('added'); }
  persistCart();
  renderCart(); showToast(`${p.name} savatga qo‘shildi`);
}
function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const d = ensureDetailState(id);
  const existing = state.cart.find(c=>c.productId===id && c.variant===d.variant && c.colorName===d.color);
  if(existing) existing.qty += d.qty;
  else state.cart.push({productId:id, variant:d.variant, colorName:d.color, qty:d.qty});
  persistCart();
  renderCart(); showToast(`${p.name} savatga qo‘shildi`);
}
function changeCartQty(idx, delta){
  state.cart[idx].qty = Math.max(1, state.cart[idx].qty+delta);
  persistCart();
  renderCart();
}
function removeCartItem(idx){ state.cart.splice(idx,1); persistCart(); renderCart(); }
function renderCart(){
  const count = state.cart.reduce((s,c)=>s+c.qty,0);
  const cc = document.getElementById('cartCount');
  const prevCount = cc.textContent;
  cc.textContent = count; cc.classList.toggle('hidden', count===0);
  if(String(count)!==prevCount && count>0){
    cc.classList.remove('bump'); void cc.offsetWidth; cc.classList.add('bump');
  }
  const tabBadge = document.getElementById('tabCartBadge');
  if(tabBadge){ tabBadge.textContent = count; tabBadge.classList.toggle('hidden', count===0); }
  document.getElementById('cartHeadCount').textContent = count;

  const wrap = document.getElementById('cartItems');
  if(state.cart.length===0){
    wrap.innerHTML = `<div class="cart-empty"><svg class="icon"><use href="#icon-cart"/></svg><p>Savatingiz bo‘sh.<br>Nimadir qo‘shish uchun xarid qiling.</p></div>`;
    document.getElementById('cartFoot').innerHTML = '';
    return;
  }
  wrap.innerHTML = state.cart.map((c,idx)=>{
    const p = PRODUCTS.find(x=>x.id===c.productId);
    return `<div class="cart-item">
      <div class="device-photo">${productPhoto(p)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-variant">${c.colorName} · ${c.variant}</div>
        <div class="cart-item-row">
          <div class="qty-control">
            <button onclick="changeCartQty(${idx},-1)"><svg class="icon" style="width:12px;height:12px;"><use href="#icon-minus"/></svg></button>
            <span>${c.qty}</span>
            <button onclick="changeCartQty(${idx},1)"><svg class="icon" style="width:12px;height:12px;"><use href="#icon-plus"/></svg></button>
          </div>
          <span class="price mono" style="font-size:14px;">${fmt(p.price*c.qty)}</span>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove" aria-label="Remove item">
          <svg class="icon"><use href="#icon-trash"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
  const subtotal = state.cart.reduce((s,c)=>{const p=PRODUCTS.find(x=>x.id===c.productId); return s+p.price*c.qty;},0);
  document.getElementById('cartFoot').innerHTML = `
    <div class="cart-subtotal"><span>Jami</span><span class="price">${fmt(subtotal)}</span></div>
    <button class="btn btn-primary btn-block" onclick="startCheckout()">Buyurtmani rasmiylashtirish</button>
    <p class="cart-note">$50 dan yuqori buyurtmalarda bepul yetkazib berish · Soliq to‘lov vaqtida hisoblanadi</p>
  `;
}
function openCart(){ document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }

/* ================= CHECKOUT (client-side order — see notes on backend below) ================= */
function startCheckout(){
  if(state.cart.length===0){ showToast('Savatingiz bo‘sh.'); return; }
  renderCheckoutModal();
  document.getElementById('checkoutModalOverlay').classList.add('open');
}
function closeCheckoutModal(){ document.getElementById('checkoutModalOverlay').classList.remove('open'); }
function renderCheckoutModal(){
  const profile = getProfile() || {};
  const subtotal = state.cart.reduce((s,c)=>{const p=PRODUCTS.find(x=>x.id===c.productId); return s+p.price*c.qty;},0);
  document.getElementById('checkoutModalBody').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:18px;">
      <input id="coName" type="text" placeholder="To‘liq ism" value="${profile.name||''}" class="co-input">
      <input id="coPhone" type="tel" placeholder="Telefon raqami" value="${profile.phone||''}" class="co-input">
      <input id="coAddress" type="text" placeholder="Yetkazib berish manzili" class="co-input">
      <select id="coPayment" class="co-input">
        <option value="cash">Yetkazib berishda naqd to‘lov</option>
        <option value="card" disabled>Karta orqali to‘lov (hozircha mavjud emas)</option>
      </select>
    </div>
    <div class="cart-subtotal"><span>Jami</span><span class="price">${fmt(subtotal)}</span></div>
    <button class="btn btn-primary btn-block" style="margin-top:14px;" onclick="confirmOrder()">Buyurtmani tasdiqlash</button>
    <p class="cart-note">Hozircha faqat naqd to‘lov qabul qilinadi. Karta orqali to‘lov uchun to‘lov tizimi ulanishi kerak.</p>
  `;
}
function confirmOrder(){
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const address = document.getElementById('coAddress').value.trim();
  if(!name || !phone || !address){ showToast('Iltimos, barcha maydonlarni to‘ldiring.'); return; }
  const total = state.cart.reduce((s,c)=>{const p=PRODUCTS.find(x=>x.id===c.productId); return s+p.price*c.qty;},0);
  const itemCount = state.cart.reduce((s,c)=>s+c.qty,0);
  const orders = getOrders();
  const order = { id: String(Date.now()).slice(-6), date: new Date().toLocaleDateString('uz-UZ'), items: state.cart.slice(), itemCount, total, name, phone, address };
  orders.push(order);
  saveJSON(LS_KEYS.orders, orders);
  if(!getProfile()) saveJSON(LS_KEYS.profile, {name, phone});
  state.cart = [];
  persistCart();
  renderCart();
  closeCheckoutModal();
  closeCart();
  showToast(`Buyurtma qabul qilindi — #${order.id}. Rahmat, ${name}!`);
}

/* ================= PROFILE (saved locally in this browser — no account server yet) ================= */
function openProfileModal(){ renderProfileModal(); document.getElementById('profileModalOverlay').classList.add('open'); }
function closeProfileModal(){ document.getElementById('profileModalOverlay').classList.remove('open'); }
function renderProfileModal(){
  const profile = getProfile();
  const body = document.getElementById('profileModalBody');
  if(!profile){
    body.innerHTML = `
      <p style="font-size:13.5px;color:var(--ink-soft);margin-bottom:16px;">Buyurtmalaringizni kuzatish uchun ismingizni kiriting. Ma'lumot faqat shu qurilmada, brauzeringizda saqlanadi.</p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <input id="profileNameInput" type="text" placeholder="Ismingiz" class="co-input">
        <input id="profilePhoneInput" type="tel" placeholder="Telefon raqami (ixtiyoriy)" class="co-input">
        <button class="btn btn-primary btn-block" onclick="saveProfile()">Saqlash</button>
      </div>`;
  } else {
    const orders = getOrders();
    body.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:700;font-family:var(--font-display);flex-shrink:0;">${(profile.name.trim().charAt(0)||'?').toUpperCase()}</div>
        <div><div style="font-weight:600;font-size:15px;">${profile.name}</div>${profile.phone?`<div style="font-size:12.5px;color:var(--ink-faint);">${profile.phone}</div>`:''}</div>
      </div>
      <div class="option-label">Buyurtmalar tarixi</div>
      ${orders.length===0 ? `<p style="font-size:13px;color:var(--ink-faint);margin:8px 0 16px;">Hozircha buyurtmalar yo‘q.</p>` :
        `<div style="display:flex;flex-direction:column;gap:10px;margin:10px 0 16px;max-height:220px;overflow:auto;">
          ${orders.slice().reverse().map(o=>`
            <div style="border:1px solid var(--border);border-radius:var(--radius-m);padding:10px 12px;">
              <div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink-faint);font-family:var(--font-mono);"><span>#${o.id}</span><span>${o.date}</span></div>
              <div style="font-size:13.5px;font-weight:600;margin-top:4px;">${o.itemCount} ta mahsulot · ${fmt(o.total)}</div>
            </div>`).join('')}
        </div>`}
      <button class="btn btn-ghost btn-block" onclick="logoutProfile()">Profildan chiqish</button>
    `;
  }
}
function saveProfile(){
  const name = document.getElementById('profileNameInput').value.trim();
  const phone = document.getElementById('profilePhoneInput').value.trim();
  if(!name){ showToast('Iltimos, ismingizni kiriting.'); return; }
  saveJSON(LS_KEYS.profile, {name, phone});
  renderProfileModal();
  showToast(`Xush kelibsiz, ${name}!`);
}
function logoutProfile(){
  localStorage.removeItem(LS_KEYS.profile);
  renderProfileModal();
}

/* ================= WISHLIST ================= */
function toggleWishlist(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(state.wishlist.has(id)){ state.wishlist.delete(id); showToast(`${p.name} sevimlilardan olib tashlandi`); }
  else { state.wishlist.add(id); showToast(`${p.name} sevimlilarga qo‘shildi`); }
  persistWishlist();
  if(state.view==='home') renderHome();
  if(state.view==='listing') renderListingGrid();
}

/* ================= COMPARE ================= */
function toggleCompare(id, checkboxEl){
  const p = PRODUCTS.find(x=>x.id===id);
  if(state.compare.includes(id)){
    state.compare = state.compare.filter(x=>x!==id);
  } else {
    if(state.compare.length>0){
      const firstCat = PRODUCTS.find(x=>x.id===state.compare[0]).category;
      if(firstCat !== p.category){
        showToast('Faqat bir xil kategoriyadagi mahsulotlarni solishtirish mumkin.');
        if(checkboxEl) checkboxEl.checked = false;
        return;
      }
    }
    if(state.compare.length>=3){ showToast('Bir vaqtda faqat 3 tagacha mahsulotni solishtirish mumkin.'); if(checkboxEl) checkboxEl.checked=false; return; }
    state.compare.push(id);
  }
  persistCompare();
  renderCompareBar();
  if(state.view==='home') renderHome();
  if(state.view==='listing') renderListingGrid();
}
function clearCompare(){ state.compare=[]; persistCompare(); renderCompareBar(); if(state.view==='listing') renderListingGrid(); if(state.view==='home') renderHome(); }
function renderCompareBar(){
  const bar = document.getElementById('compareBar');
  bar.classList.toggle('open', state.compare.length>0);
  document.getElementById('compareThumbs').innerHTML = state.compare.map(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    return `<div class="compare-thumb">${productPhoto(p)}<button onclick="toggleCompare('${id}')">✕</button></div>`;
  }).join('');
}
function openCompareModal(){
  if(state.compare.length<2){ showToast('Solishtirish uchun kamida 2 ta mahsulot tanlang.'); return; }
  const prods = state.compare.map(id=>PRODUCTS.find(x=>x.id===id));
  const keys = [...new Set(prods.flatMap(p=>Object.keys(p.specs)))];
  let html = `<tr><th>Xususiyat</th>${prods.map(p=>`<th>${p.name}</th>`).join('')}</tr>`;
  html += `<tr><td>Narx</td>${prods.map(p=>`<td class="mono">${fmt(p.price)}</td>`).join('')}</tr>`;
  html += `<tr><td>Reyting</td>${prods.map(p=>`<td>${p.rating} (${p.reviews})</td>`).join('')}</tr>`;
  keys.forEach(k=>{ html += `<tr><td>${SPEC_LABELS_UZ[k]||k}</td>${prods.map(p=>`<td>${p.specs[k]||'—'}</td>`).join('')}</tr>`; });
  document.getElementById('compareTable').innerHTML = html;
  document.getElementById('compareModalOverlay').classList.add('open');
}
function closeCompareModal(){ document.getElementById('compareModalOverlay').classList.remove('open'); }

/* ================= SEARCH ================= */
const searchInput = document.getElementById('searchInput');
const searchSuggest = document.getElementById('searchSuggest');
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchSuggest.classList.add('hidden'); return; }
  const matches = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)).slice(0,6);
  if(matches.length===0){
    searchSuggest.innerHTML = `<button disabled style="color:var(--ink-faint);">"${searchInput.value}" bo‘yicha hech narsa topilmadi</button>`;
  } else {
    searchSuggest.innerHTML = matches.map(p=>`
      <button onclick="goToProductFromSearch('${p.id}')">
        <span class="s-thumb">${productPhoto(p)}</span>
        <span><span class="s-name">${p.name}</span><br><span class="s-cat">${CATEGORIES.find(c=>c.id===p.category).name}</span></span>
        <span class="s-price">${fmt(p.price)}</span>
      </button>`).join('');
  }
  searchSuggest.classList.remove('hidden');
});
searchInput.addEventListener('keydown', e=>{
  if(e.key==='Enter'){
    state.filters.query = searchInput.value.trim();
    searchSuggest.classList.add('hidden');
    showView('listing',{category:'all'});
  }
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.search-wrap')) searchSuggest.classList.add('hidden');
});
function goToProductFromSearch(id){
  searchInput.value=''; searchSuggest.classList.add('hidden');
  showView('detail',{id});
}

/* ================= TOAST ================= */
function showToast(msg){
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = `<svg class="icon"><use href="#icon-check"/></svg><span>${msg}</span>`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(()=>{ el.classList.add('leaving'); setTimeout(()=>el.remove(), 260); }, 2800);
}

/* ================= SCROLL REVEAL ================= */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
  });
}, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
function observeReveals(root=document){
  root.querySelectorAll('.reveal:not(.in-view)').forEach(el=>revealObserver.observe(el));
}

/* ================= INIT ================= */
renderNav();
renderCatRow();
renderHome();
renderFilterPanel();
startCountdown();
observeReveals();
syncMobileTabbar('home');
