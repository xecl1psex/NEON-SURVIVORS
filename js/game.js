
const ICONS={
 pistol:'<path d="M3 9h13v4h-6l-2 4H5l2-4H3z"/><path d="M16 9h5"/>',
 shotgun:'<path d="M3 9h15v6H3z"/><path d="M8 15v4M13 9V6"/>',
 garlic:'<path d="M12 4c4 3 6 6 6 9a6 6 0 0 1-12 0c0-3 2-6 6-9z"/><path d="M12 4V2"/>',
 bolt:'<path d="M13 2 5 13h5l-2 9 8-11h-5z"/>',
 rocket:'<path d="M12 2c3 3 4 7 4 10l3 4-4-1-3 3-3-3-4 1 3-4c0-3 1-7 4-10z"/><circle cx="12" cy="9" r="2"/>',
 laser:'<circle cx="4" cy="12" r="2"/><path d="M6 12h10M16 8l5 4-5 4"/>',
 minigun:'<circle cx="8" cy="12" r="4"/><path d="M12 10h9M12 12h9M12 14h9"/>',
 poison:'<circle cx="12" cy="9" r="4"/><path d="M8 13c-2 2-2 5 0 6M16 13c2 2 2 5 0 6M12 13v7"/>',
 chain:'<path d="M9 3 5 10h4l-2 7M15 7l-4 7h4l-2 7"/>',
 nuke:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 10V5M10.3 13l-4.3 2.5M13.7 13l4.3 2.5"/>',
 shuriken:'<path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/>',
 shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',
 bomb:'<circle cx="10" cy="14" r="6"/><path d="M14 9l3-3M17 6h3M17 6V3"/>',
 teleport:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" stroke-dasharray="4 3"/><circle cx="12" cy="12" r="10" stroke-dasharray="2 4"/>',
 freeze:'<path d="M12 2v20M4 6l16 12M20 6L4 18"/>',
 burn:'<path d="M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-3 2-5 4-7 0 2 1 3 2 3 0-2 0-4 0-6z"/>',
 knock:'<path d="M3 8h10a3 3 0 1 0-3-3M3 12h14a3 3 0 1 1-3 3M3 16h8"/>',
 vamp:'<path d="M5 4h14v6l-4 8-3-5-3 5-4-8z"/><path d="M9 8h.01M15 8h.01"/>',
 thorns:'<path d="M4 20 8 8l3 6 3-8 3 6 3-4"/>',
 precision:'<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
 orbit:'<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4"/><circle cx="21" cy="12" r="1.5"/>',
 magnet:'<path d="M6 4v8a6 6 0 0 0 12 0V4"/><path d="M6 4h4v5H6zM14 4h4v5h-4z"/>',
 adren:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"/><path d="M12 8l-2 4h4l-2 4"/>',
 echo:'<path d="M8 5v14M12 8v8M16 5v14M20 8v8"/>',
 chip:'<rect x="7" y="7" width="10" height="10"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/>',
 battery:'<rect x="4" y="8" width="14" height="8"/><path d="M18 10h2v4h-2M7 10v4M10 10v4M13 10v4"/>',
 dna:'<path d="M8 3c8 4 8 14 0 18M16 3c-8 4-8 14 0 18M9 8h6M9 16h6"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
 chart:'<path d="M4 20V10M9 20V4M14 20v-8M19 20V7"/>',
 drop:'<path d="M12 3c3 5 6 8 6 12a6 6 0 0 1-12 0c0-4 3-7 6-12z"/>',
 clover:'<circle cx="9" cy="9" r="3"/><circle cx="15" cy="9" r="3"/><circle cx="9" cy="15" r="3"/><circle cx="15" cy="15" r="3"/><path d="M12 12v8"/>',
 gift:'<rect x="4" y="10" width="16" height="10"/><path d="M4 10h16M12 10v10M8 10a2 2 0 1 1 4-3 2 2 0 1 1 4 3"/>',
 skull:'<path d="M12 3a7 7 0 0 1 7 7v4l-2 2v3H7v-3l-2-2v-4a7 7 0 0 1 7-7z"/><circle cx="9.5" cy="11" r="1.5"/><circle cx="14.5" cy="11" r="1.5"/>',
 clock:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 3"/>',
 medal:'<circle cx="12" cy="14" r="5"/><path d="M9 9 6 3M15 9l3-6"/>',
 crown:'<path d="M4 18h16M4 18l-1-9 5 4 4-7 4 7 5-4-1 9z"/>',
 star:'<path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5-5.5-3.5-5.5 3.5 1.5-6.5-5-4.5 6.5-.5z"/>',
 demon:'<path d="M12 5a6 6 0 0 1 6 6v3l-2 2v3H8v-3l-2-2v-3a6 6 0 0 1 6-6z"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/><path d="M6 7 3 3M18 7l3-4"/>',
 swords:'<path d="M4 4l12 12M20 4 8 16M4 20l4-4M20 20l-4-4"/>',
 terminal:'<rect x="3" y="5" width="18" height="12"/><path d="M7 9l3 3-3 3M12 15h5M8 21h8"/>',
 brain:'<path d="M12 4c-4 0-6 3-6 6s2 8 6 8 6-5 6-8-2-6-6-6z"/><path d="M12 4v14"/>',
 lock:'<rect x="6" y="11" width="12" height="9"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/>',
 coin:'<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9 10h6M9 14h6"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/>',
 moon:'<path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10z"/>',
 wind:'<path d="M3 8h10a3 3 0 1 0-3-3M3 12h14a3 3 0 1 1-3 3M3 16h8"/>',
 bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 3H4z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
 check:'<path d="M4 12l5 5L20 6"/>',
 cross:'<path d="M6 6l12 12M18 6 6 18"/>',
 heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"/>',
 diamond:'<path d="M12 3l7 9-7 9-7-9z"/>',
 swordup:'<path d="M12 3l4 6h-3v8h-2V9H8z"/><path d="M9 21h6"/>',
 titan:'<path d="M12 5a6 6 0 0 1 6 6v3l-2 2v3H8v-3l-2-2v-3a6 6 0 0 1 6-6z"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/><path d="M6 7C5 4 3 4 2 5c2 0 3 2 3 4M18 7c1-3 3-3 4-2-2 0-3 2-3 4"/>',
 twins:'<circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/>',
 colossus:'<rect x="6" y="4" width="12" height="16"/><path d="M9 9h.01M15 9h.01M9 14h6"/>',
 architect:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5 5l14 14M19 5 5 19"/><circle cx="12" cy="12" r="3"/>'
};
function icon(key,size,color){const body=ICONS[key]||ICONS.diamond;return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color||'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;}
function drawBossGlyph(type,x,y,r){
  ctx.save();ctx.translate(x,y);ctx.strokeStyle='#ffd319';ctx.fillStyle='#ffd319';ctx.lineWidth=Math.max(2,r*0.08);
  const s=r*0.5;
  if(type==='normal'){ctx.beginPath();ctx.arc(0,0,s,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(-s*0.35,-s*0.15,s*0.14,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.35,-s*0.15,s*0.14,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(-s*0.8,-s*0.6);ctx.lineTo(-s*1.2,-s*1.2);ctx.moveTo(s*0.8,-s*0.6);ctx.lineTo(s*1.2,-s*1.2);ctx.stroke();}
  else if(type==='twins'){ctx.beginPath();ctx.arc(-s*0.5,0,s*0.5,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(s*0.5,0,s*0.5,0,Math.PI*2);ctx.stroke();}
  else if(type==='tank'){ctx.strokeRect(-s*0.7,-s*0.9,s*1.4,s*1.8);ctx.beginPath();ctx.arc(-s*0.3,-s*0.3,s*0.1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.3,-s*0.3,s*0.1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(-s*0.3,s*0.3);ctx.lineTo(s*0.3,s*0.3);ctx.stroke();}
  else if(type==='sniper'){ctx.beginPath();ctx.arc(0,0,s*0.8,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-s);ctx.lineTo(0,-s*0.4);ctx.moveTo(0,s*0.4);ctx.lineTo(0,s);ctx.moveTo(-s,0);ctx.lineTo(-s*0.4,0);ctx.moveTo(s*0.4,0);ctx.lineTo(s,0);ctx.stroke();ctx.beginPath();ctx.arc(0,0,s*0.15,0,Math.PI*2);ctx.fill();}
  else if(type==='architect'){ctx.strokeStyle='#b967ff';ctx.fillStyle='#b967ff';ctx.beginPath();ctx.arc(0,0,s,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-s);ctx.lineTo(0,s);ctx.moveTo(-s,0);ctx.lineTo(s,0);ctx.moveTo(-s*0.7,-s*0.7);ctx.lineTo(s*0.7,s*0.7);ctx.moveTo(s*0.7,-s*0.7);ctx.lineTo(-s*0.7,s*0.7);ctx.stroke();ctx.beginPath();ctx.arc(0,0,s*0.3,0,Math.PI*2);ctx.fill();}
  ctx.restore();
}

let settings={music:true,musicVol:.6,sfxVol:.8,shake:true,particles:1};
function loadSettings(){let s=null;try{const v=localStorage.getItem('neon_settings');if(v){s=JSON.parse(v);settings=Object.assign(settings,s);}}catch(e){} if(!s&&isTouch)settings.particles=0.4;}
function saveSettings(){try{localStorage.setItem('neon_settings',JSON.stringify(settings));}catch(e){}}
const isTouch=('ontouchstart' in window)||navigator.maxTouchPoints>0;
if(isTouch)document.body.classList.add('touch');

let credits=0,marketLevels={};
const MARKET=[
 {id:'dmg',icon:'battery',name:'НЕЙРО-КОНДЕНСАТОР',desc:'+5% урон за уровень',max:5,base:100,growth:1.8,apply:(p,l)=>{p.dmgMult*=1+0.05*l;}},
 {id:'hp',icon:'dna',name:'БИОМОНИТОР',desc:'+10 макс. HP за уровень',max:5,base:80,growth:1.8,apply:(p,l)=>{const b=10*l;p.maxHp+=b;p.hp+=b;}},
 {id:'speed',icon:'gear',name:'СЕРВОПРИВОДЫ',desc:'+3% скорость за уровень',max:5,base:90,growth:1.8,apply:(p,l)=>{p.speedMult*=1+0.03*l;}},
 {id:'magnet',icon:'magnet',name:'МАГНИТНЫЙ ЗАХВАТ',desc:'+10% радиус сбора за уровень',max:5,base:70,growth:1.7,apply:(p,l)=>{p.magnetRange*=1+0.10*l;}},
 {id:'cd',icon:'chip',name:'РЕФЛЕКС-ЧИП',desc:'-4% кулдаун способностей за уровень',max:5,base:120,growth:1.9,apply:(p,l)=>{p.abilityCdMult=Math.max(.8,p.abilityCdMult*(1-0.04*l));}},
 {id:'xp',icon:'chart',name:'АНАЛИТИКА',desc:'+8% получаемого опыта за уровень',max:5,base:110,growth:1.8,apply:(p,l)=>{p.xpMult*=1+0.08*l;}},
 {id:'crit',icon:'precision',name:'БОЕВАЯ ОПТИКА',desc:'+2% крит шанс за уровень',max:5,base:100,growth:1.8,apply:(p,l)=>{p.critChance+=0.02*l;}},
 {id:'regen',icon:'drop',name:'НАНО-КРОВЬ',desc:'+0.2 HP/сек за уровень',max:5,base:130,growth:1.9,apply:(p,l)=>{p.regen+=0.2*l;}},
 {id:'luck',icon:'clover',name:'ЧЁРНЫЙ ЯЩИК',desc:'+15% шанс бонусных орбов за уровень',max:3,base:200,growth:2.2,apply:(p,l)=>{p.luckMult+=0.15*l;}},
 {id:'start',icon:'gift',name:'СТАРТОВЫЙ КОНТЕЙНЕР',desc:'ур.1: +1 случайное оружие; ур.2: +2',max:2,base:250,growth:2.5,apply:null},
];
function loadMarket(){try{const c=localStorage.getItem('neon_credits');if(c!==null)credits=parseInt(c)||0;}catch(e){} try{const m=localStorage.getItem('neon_market');if(m)marketLevels=JSON.parse(m);}catch(e){}}
function saveCredits(){try{localStorage.setItem('neon_credits',String(credits));}catch(e){}}
function saveMarket(){try{localStorage.setItem('neon_market',JSON.stringify(marketLevels));}catch(e){}}
function marketCost(it){const l=marketLevels[it.id]||0;return Math.floor(it.base*Math.pow(it.growth,l));}
function calcCredits(){return Math.floor(kills*1+wave*15+gameTime*2+bossKills*50+runBonusCredits);}
function applyMarket(p){for(const it of MARKET){const l=marketLevels[it.id]||0;if(l>0&&it.apply)it.apply(p,l);}}
function grantStartContainers(p){const l=marketLevels['start']||0;if(l<=0)return;const pool=['pistol','shotgun','garlic','lightning','missile'].filter(w=>!p.weapons[w]);for(let i=0;i<l&&pool.length;i++){const idx=Math.floor(Math.random()*pool.length);p.weapons[pool[idx]]=1;pool.splice(idx,1);}}
function buildMarket(){
  document.getElementById('mktCredits').innerHTML=icon('coin',20,'#ffd319')+credits+' ED';
  const grid=document.getElementById('mktGrid');grid.innerHTML='';
  MARKET.forEach(it=>{
    const l=marketLevels[it.id]||0,maxed=l>=it.max,cost=marketCost(it);
    const card=document.createElement('div');card.className='mkt-card'+(maxed?' maxed':'');
    let pips='';for(let i=0;i<it.max;i++)pips+=`<i class="${i<l?'on':''}"></i>`;
    card.innerHTML=`<div class="m-name"><span class="mic">${icon(it.icon,20)}</span>${it.name}</div><div class="m-desc">${it.desc}</div><div class="m-pips">${pips}</div><button class="mkt-buy" ${(maxed||credits<cost)?'disabled':''}>${maxed?'МАКСИМУМ':'КУПИТЬ '+cost+' ED'}</button>`;
    card.querySelector('.mkt-buy').onclick=()=>{if(maxed||credits<cost)return;credits-=cost;marketLevels[it.id]=l+1;saveCredits();saveMarket();sfx('orb_gold');buildMarket();};
    grid.appendChild(card);
  });
}
function showMarket(){initAudio();sfx('select');state='market';hideAllOverlays();document.getElementById('market').classList.add('show');buildMarket();}
function backFromMarket(){sfx('select');showMenu();}

let VW=960,VH=600;
function resizeCanvas(){const dpr=Math.min(window.devicePixelRatio||1,2);VW=window.innerWidth;VH=window.innerHeight;cvs.style.width=VW+'px';cvs.style.height=VH+'px';cvs.width=Math.floor(VW*dpr);cvs.height=Math.floor(VH*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);if(player&&isFinite(player.x)){player.x=Math.max(player.r,Math.min(VW-player.r,player.x));player.y=Math.max(player.r,Math.min(VH-player.r,player.y));}}

const AudioCtx=window.AudioContext||window.webkitAudioContext;let actx=null,musicGain=null,noiseBuf=null;
function initAudio(){try{if(!actx){actx=new AudioCtx();musicGain=actx.createGain();musicGain.gain.value=1;musicGain.connect(actx.destination);noiseBuf=actx.createBuffer(1,actx.sampleRate,actx.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;Music.start();}if(actx.state==='suspended')actx.resume();}catch(e){}}
function sfx(type){if(!actx||settings.sfxVol<=0)return;try{const t=actx.currentTime,o=actx.createOscillator(),g=actx.createGain();o.connect(g);g.connect(actx.destination);
 const P={shoot:{f:800,t2:400,dur:.06,type:'square',vol:.05},hit:{f:200,t2:100,dur:.08,type:'sawtooth',vol:.08},kill:{f:400,t2:80,dur:.15,type:'square',vol:.1},xp:{f:1200,t2:1800,dur:.08,type:'sine',vol:.06},lvl:{f:600,t2:1200,dur:.3,type:'triangle',vol:.15},hurt:{f:150,t2:50,dur:.2,type:'sawtooth',vol:.15},boss:{f:80,t2:40,dur:.8,type:'sawtooth',vol:.2},explode:{f:200,t2:30,dur:.3,type:'square',vol:.15},lightning:{f:2000,t2:100,dur:.1,type:'sawtooth',vol:.08},select:{f:500,t2:900,dur:.12,type:'sine',vol:.1},bomb:{f:100,t2:20,dur:.6,type:'sawtooth',vol:.25},shield:{f:800,t2:1200,dur:.3,type:'sine',vol:.15},freeze:{f:1500,t2:300,dur:.5,type:'triangle',vol:.15},teleport:{f:400,t2:2000,dur:.2,type:'sine',vol:.12},unlock:{f:600,t2:1400,dur:.4,type:'triangle',vol:.18},evo:{f:300,t2:1500,dur:.8,type:'triangle',vol:.25},laser:{f:1200,t2:600,dur:.04,type:'sine',vol:.04},poison:{f:200,t2:100,dur:.1,type:'sawtooth',vol:.06},nuke:{f:150,t2:20,dur:.8,type:'sawtooth',vol:.3},achievement:{f:523,t2:1047,dur:.5,type:'triangle',vol:.2},sniper:{f:1000,t2:200,dur:.2,type:'sine',vol:.12},ghost:{f:300,t2:100,dur:.3,type:'sine',vol:.08},swarm:{f:600,t2:900,dur:.1,type:'square',vol:.06},boss_twin:{f:100,t2:60,dur:.6,type:'square',vol:.2},boss_tank:{f:50,t2:20,dur:1,type:'sawtooth',vol:.25},boss_sniper:{f:1500,t2:400,dur:.4,type:'sine',vol:.18},boss_architect:{f:60,t2:20,dur:1.2,type:'sawtooth',vol:.3},victory:{f:400,t2:1600,dur:1.5,type:'triangle',vol:.25},orb_gold:{f:1500,t2:2500,dur:.2,type:'sine',vol:.12},orb_hp:{f:400,t2:800,dur:.25,type:'triangle',vol:.15},orb_lvl:{f:800,t2:2000,dur:.4,type:'triangle',vol:.2},orb_dmg:{f:300,t2:600,dur:.3,type:'sawtooth',vol:.15},combo_up:{f:400,t2:800,dur:.2,type:'square',vol:.1},combo_break:{f:300,t2:100,dur:.3,type:'sawtooth',vol:.15},biome:{f:200,t2:900,dur:.5,type:'triangle',vol:.18},hack:{f:900,t2:1400,dur:.15,type:'square',vol:.07},hackdone:{f:700,t2:2100,dur:.5,type:'triangle',vol:.2},alarm:{f:600,t2:300,dur:.4,type:'sawtooth',vol:.18}};
 const p=P[type]||P.shoot;o.type=p.type;o.frequency.setValueAtTime(p.f,t);o.frequency.exponentialRampToValueAtTime(Math.max(1,p.t2),t+p.dur);g.gain.setValueAtTime(p.vol*settings.sfxVol,t);g.gain.exponentialRampToValueAtTime(.001,t+p.dur);o.start(t);o.stop(t+p.dur);}catch(e){}}
const mtof=m=>440*Math.pow(2,(m-69)/12);
function getIntensity(){if(state==='playing'){if(bosses.length>0)return 2;if(activeEvent&&activeEvent.type==='blackout')return 2;if(wave>=8)return 2;if(wave>=3)return 1;}return 0;}
const Music={step:0,nextTime:0,timer:null,tempo:104,
 start(){if(!actx||this.timer)return;this.nextTime=actx.currentTime+0.1;this.timer=setInterval(()=>this.schedule(),30);},
 stop(){if(this.timer){clearInterval(this.timer);this.timer=null;}},
 schedule(){if(!actx)return;this.tempo=getIntensity()>=2?122:104;let guard=0;while(this.nextTime<actx.currentTime+0.15&&guard<64){this.playStep(this.step,this.nextTime);this.nextTime+=60/this.tempo/4;this.step=(this.step+1)%64;guard++;}},
 playStep(s,t){if(!settings.music||settings.musicVol<=0)return;const bar=(Math.floor(s/16)+currentBiome)%4,idx=s%16,I=getIntensity();const roots=[33,29,36,31],chords=[[45,48,52],[41,45,48],[48,52,55],[43,47,50]];
  if(idx%4===0)this.kick(t);if(I>=1&&(idx===4||idx===12))this.snare(t);if(idx%2===1)this.hat(t,I>=2?.5:.28);
  if(idx%2===0){const oct=(idx===6||idx===14)?12:0;this.bass(mtof(roots[bar]+oct),t);}
  if(I>=1){const ch=chords[bar];const note=ch[(idx>>1)%3]+12+((idx%2)?12:0);if(idx%2===0||I>=2)this.arp(mtof(note),t);}
  if(idx===0)this.pad(chords[bar].map(m=>mtof(m)),t,(60/this.tempo)*4);
  if(I>=2&&idx%8===6)this.lead(mtof(chords[bar][2]+24),t);},
 v(a){return a*settings.musicVol;},
 bass(f,t){const o=actx.createOscillator(),g=actx.createGain(),fl=actx.createBiquadFilter();o.type='sawtooth';o.frequency.value=f;fl.type='lowpass';fl.frequency.setValueAtTime(700,t);fl.frequency.exponentialRampToValueAtTime(120,t+.2);g.gain.setValueAtTime(this.v(.22),t);g.gain.exponentialRampToValueAtTime(.001,t+.22);o.connect(fl);fl.connect(g);g.connect(musicGain);o.start(t);o.stop(t+.25);},
 arp(f,t){const o=actx.createOscillator(),g=actx.createGain();o.type='square';o.frequency.value=f;g.gain.setValueAtTime(this.v(.05),t);g.gain.exponentialRampToValueAtTime(.001,t+.12);o.connect(g);g.connect(musicGain);o.start(t);o.stop(t+.14);},
 lead(f,t){const o=actx.createOscillator(),g=actx.createGain(),fl=actx.createBiquadFilter();o.type='sawtooth';o.frequency.value=f;fl.type='lowpass';fl.frequency.value=2200;g.gain.setValueAtTime(this.v(.07),t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.connect(fl);fl.connect(g);g.connect(musicGain);o.start(t);o.stop(t+.32);},
 pad(freqs,t,dur){freqs.forEach(f=>{for(let d=-6;d<=6;d+=12){const o=actx.createOscillator(),g=actx.createGain(),fl=actx.createBiquadFilter();o.type='sawtooth';o.frequency.value=f;o.detune.value=d;fl.type='lowpass';fl.frequency.value=900;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(this.v(.018),t+dur*.3);g.gain.linearRampToValueAtTime(0,t+dur);o.connect(fl);fl.connect(g);g.connect(musicGain);o.start(t);o.stop(t+dur+.05);}});},
 kick(t){const o=actx.createOscillator(),g=actx.createGain();o.type='sine';o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(45,t+.12);g.gain.setValueAtTime(this.v(.5),t);g.gain.exponentialRampToValueAtTime(.001,t+.16);o.connect(g);g.connect(musicGain);o.start(t);o.stop(t+.18);},
 snare(t){const s=actx.createBufferSource(),g=actx.createGain(),fl=actx.createBiquadFilter();s.buffer=noiseBuf;fl.type='bandpass';fl.frequency.value=1800;g.gain.setValueAtTime(this.v(.18),t);g.gain.exponentialRampToValueAtTime(.001,t+.12);s.connect(fl);fl.connect(g);g.connect(musicGain);s.start(t);s.stop(t+.14);},
 hat(t,vol){const s=actx.createBufferSource(),g=actx.createGain(),fl=actx.createBiquadFilter();s.buffer=noiseBuf;fl.type='highpass';fl.frequency.value=7000;g.gain.setValueAtTime(this.v(vol*.15),t);g.gain.exponentialRampToValueAtTime(.001,t+.04);s.connect(fl);fl.connect(g);g.connect(musicGain);s.start(t);s.stop(t+.06);}};

const ACHIEVEMENTS=[
 {id:'kill100',name:'Первая кровь',icon:'drop',desc:'Убей 100 врагов за забег',target:100,type:'kills',reward:'Стартовый HP +10',rewardApply:p=>{p.maxHp+=10;p.hp+=10;}},
 {id:'kill500',name:'Истребитель',icon:'skull',desc:'Убей 500 врагов за забег',target:500,type:'kills',reward:'+5% урон',rewardApply:p=>{p.dmgMult*=1.05;}},
 {id:'kill1000',name:'Машина смерти',icon:'demon',desc:'Убей 1000 врагов за забег',target:1000,type:'kills',reward:'+10% скорость атаки',rewardApply:p=>{p.fireRateMult*=0.9;}},
 {id:'time5',name:'Выживший',icon:'clock',desc:'Продержись 5 минут',target:300,type:'time',reward:'Стартовый HP +20',rewardApply:p=>{p.maxHp+=20;p.hp+=20;}},
 {id:'time10',name:'Ветеран',icon:'medal',desc:'Продержись 10 минут',target:600,type:'time',reward:'+10% урон',rewardApply:p=>{p.dmgMult*=1.1;}},
 {id:'time15',name:'Легенда',icon:'crown',desc:'Продержись 15 минут',target:900,type:'time',reward:'+20% ко всему',rewardApply:p=>{p.dmgMult*=1.2;p.speedMult*=1.2;p.fireRateMult*=0.8;}},
 {id:'lvl10',name:'Опытный',icon:'star',desc:'Достигни 10 уровня',target:10,type:'level',reward:'Стартовый уровень 2',rewardApply:p=>{p.level=2;p.xpNeeded=12;}},
 {id:'lvl20',name:'Мастер',icon:'star',desc:'Достигни 20 уровня',target:20,type:'level',reward:'+25 макс HP',rewardApply:p=>{p.maxHp+=25;p.hp+=25;}},
 {id:'lvl30',name:'Грандмастер',icon:'star',desc:'Достигни 30 уровня',target:30,type:'level',reward:'+1 снаряд',rewardApply:p=>{p.projectiles++;}},
 {id:'boss5',name:'Охотник на боссов',icon:'titan',desc:'Убей 5 боссов за забег',target:5,type:'bosses',reward:'+15% урон по боссам',rewardApply:p=>{p.bossDmgMult=(p.bossDmgMult||1)*1.15;}},
 {id:'boss10',name:'Убийца титанов',icon:'colossus',desc:'Убей 10 боссов за забег',target:10,type:'bosses',reward:'+30% урон по боссам',rewardApply:p=>{p.bossDmgMult=(p.bossDmgMult||1)*1.3;}},
 {id:'boss20',name:'Повелитель боссов',icon:'burn',desc:'Убей 20 боссов за забег',target:20,type:'bosses',reward:'x2 урон по боссам',rewardApply:p=>{p.bossDmgMult=(p.bossDmgMult||1)*2;}},
 {id:'weapons3',name:'Арсенал',icon:'pistol',desc:'Собери 3 разных оружия',target:3,type:'weapons',reward:'+10% ко всему',rewardApply:p=>{p.dmgMult*=1.1;p.speedMult*=1.1;}},
 {id:'weapons5',name:'Оружейник',icon:'swords',desc:'Собери 5 разных оружий',target:5,type:'weapons',reward:'+20% урон',rewardApply:p=>{p.dmgMult*=1.2;}},
 {id:'hack3',name:'Нетраннер',icon:'terminal',desc:'Взломай 3 терминала за забег',target:3,type:'hacks',reward:'+10% опыта навсегда',rewardApply:p=>{p.xpMult*=1.1;}},
 {id:'perk3',name:'Киберпсих',icon:'brain',desc:'Вживи 3 импланта за забег',target:3,type:'perks',reward:'+10% урон навсегда',rewardApply:p=>{p.dmgMult*=1.1;}},
 {id:'victory1',name:'Выход из сети',icon:'architect',desc:'Пройди Протокол Выхода',target:1,type:'victories',reward:'+500 ED',rewardApply:p=>{}},
 {id:'ng3',name:'Рекурсия',icon:'architect',desc:'Пройди NG+3',target:3,type:'ngmax',reward:'x2 кредиты навсегда',rewardApply:p=>{}},
 {id:'unlock_ninja',name:'Ниндзя',icon:'shuriken',desc:'Убей 500 врагов (всего)',target:500,type:'total_kills',reward:'Разблокирует Ниндзя',rewardApply:p=>{},unlockChar:'ninja'},
 {id:'unlock_paladin',name:'Паладин',icon:'shield',desc:'Продержись 10 минут (всего)',target:600,type:'total_time',reward:'Разблокирует Паладина',rewardApply:p=>{},unlockChar:'paladin'},
];
let achProgress={},achUnlocked={},totalStats={kills:0,time:0,bosses:0,games:0,victories:0,ngMax:0},scores=[],dailyScores={};
function loadAchievements(){try{const s=localStorage.getItem('neon_achievements');if(s){const d=JSON.parse(s);achProgress=d.progress||{};achUnlocked=d.unlocked||{};totalStats=d.total||{kills:0,time:0,bosses:0,games:0,victories:0,ngMax:0};}}catch(e){} try{const sc=localStorage.getItem('neon_scores');if(sc)scores=JSON.parse(sc);}catch(e){scores=[];} try{const ds=localStorage.getItem('neon_daily');if(ds)dailyScores=JSON.parse(ds);}catch(e){dailyScores={};}}
function saveAchievements(){try{localStorage.setItem('neon_achievements',JSON.stringify({progress:achProgress,unlocked:achUnlocked,total:totalStats}));}catch(e){}}
function saveScores(){try{localStorage.setItem('neon_scores',JSON.stringify(scores));}catch(e){}}
function saveDaily(){try{localStorage.setItem('neon_daily',JSON.stringify(dailyScores));}catch(e){}}
function recordScore(c,t,w,k){scores.push({c,t,w,k});scores.sort((a,b)=>b.t-a.t);scores=scores.slice(0,5);saveScores();}
function recordDailyScore(c,t,w,k){const today=getTodaySeed();if(!dailyScores[today])dailyScores[today]=[];dailyScores[today].push({c,t,w,k});dailyScores[today].sort((a,b)=>b.t-a.t);dailyScores[today]=dailyScores[today].slice(0,5);saveDaily();}
function getTodaySeed(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function buildBoard(){const b=document.getElementById('board');if(!scores.length){b.innerHTML='<h3>// ТОП-5 ЗАБЕГОВ //</h3><div class="empty">Пока пусто... стань первым.</div>';return;}let h='<h3>// ТОП-5 ЗАБЕГОВ //</h3>';scores.forEach((s,i)=>{const ch=CHARACTERS[s.c];h+=`<div class="row"><span class="pos">${i+1}.</span><span class="who">${icon(ch?ch.icon:'diamond',14)} ${ch?ch.name:'?'}</span><span class="t">${fmtTime(s.t)}</span><span>волна ${s.w}</span><span>${s.k} уб.</span></div>`;});b.innerHTML=h;}
function updateAchProgress(type,value){for(const a of ACHIEVEMENTS){if(a.type!==type||achUnlocked[a.id])continue;const nv=Math.max(achProgress[a.id]||0,value);achProgress[a.id]=nv;if(nv>=a.target)unlockAchievement(a);}saveAchievements();}
function unlockAchievement(a){if(achUnlocked[a.id])return;achUnlocked[a.id]=true;showAchToast(a);if(a.unlockChar){unlockedChars.add(a.unlockChar);saveUnlockedChars();}saveAchievements();}
let achToastTimer=0;
function showAchToast(a){document.getElementById('achticon').innerHTML=icon(a.icon,32);document.getElementById('achttext').textContent='ДОСТИЖЕНИЕ: '+a.name;document.getElementById('achtsub').textContent=a.reward;document.getElementById('achtoast').classList.add('show');achToastTimer=3;sfx('achievement');}
let unlockedChars=new Set(['shooter','monk','mage','engineer']);
function loadUnlockedChars(){try{const s=localStorage.getItem('neon_chars');if(s)unlockedChars=new Set(JSON.parse(s));}catch(e){}}
function saveUnlockedChars(){try{localStorage.setItem('neon_chars',JSON.stringify([...unlockedChars]));}catch(e){}}

const CHARACTERS={
 shooter:{name:'СТРЕЛОК',icon:'pistol',color:'#05d9e8',desc:'Мастер огнестрельного оружия.',weapon:'pistol',weaponLvl:2,bonus:'+20% урон',apply:p=>{p.dmgMult=1.2;}},
 monk:{name:'МОНАХ',icon:'garlic',color:'#76ff03',desc:'Мастер ближнего боя и исцеления.',weapon:'garlic',weaponLvl:1,bonus:'+0.5 реген/сек',apply:p=>{p.regen=0.5;}},
 mage:{name:'МАГ',icon:'bolt',color:'#b967ff',desc:'Повелитель стихий.',weapon:'lightning',weaponLvl:1,bonus:'+30% дальность',apply:p=>{p.range=Math.floor(p.range*1.3);}},
 engineer:{name:'ИНЖЕНЕР',icon:'rocket',color:'#ffd319',desc:'Специалист по взрывчатке.',weapon:'missile',weaponLvl:1,bonus:'+50% AoE',apply:p=>{p.aoeMult=1.5;}},
 ninja:{name:'НИНДЗЯ',icon:'shuriken',color:'#d1f7ff',desc:'Быстрый и смертоносный.',weapon:'pistol',weaponLvl:1,bonus:'+40% скорость',apply:p=>{p.speedMult=1.4;p.critChance=0.1;}},
 paladin:{name:'ПАЛАДИН',icon:'shield',color:'#ff9e00',desc:'Несокрушимый защитник.',weapon:'garlic',weaponLvl:1,bonus:'+50 HP, броня',apply:p=>{p.maxHp=150;p.hp=150;p.armor=2;}}};
const ABILITIES=[
 {key:'bomb',name:'Бомба',icon:'bomb',unlockLvl:2,cd:30,activate:p=>{const radius=200,dmg=p.dmg*p.dmgMult*5;for(let i=0;i<80;i++){const a=Math.random()*Math.PI*2,s=100+Math.random()*400;particles.push({x:p.x,y:p.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.8+Math.random()*.4,color:['#ff9800','#ffd319','#ff2a6d','#fff'][Math.floor(Math.random()*4)],size:3+Math.random()*4,trail:true});}for(let i=0;i<40;i++){const a=(i/40)*Math.PI*2;particles.push({x:p.x+Math.cos(a)*radius,y:p.y+Math.sin(a)*radius,vx:Math.cos(a)*50,vy:Math.sin(a)*50,life:.5,color:'#ffd319',size:4,trail:false,glow:'#ff9800'});}for(const e of enemies){if(e.dead)continue;const d=Math.hypot(e.x-p.x,e.y-p.y);if(d<radius+e.r)damageEnemy(e,dmg*(1-d/(radius+e.r)));}screenShake=30;sfx('bomb');}},
 {key:'shield',name:'Щит',icon:'shield',unlockLvl:5,cd:45,activate:p=>{p.shieldTime=3;p.invuln=3;sfx('shield');for(let i=0;i<30;i++){const a=(i/30)*Math.PI*2;particles.push({x:p.x+Math.cos(a)*30,y:p.y+Math.sin(a)*30,vx:Math.cos(a)*10,vy:Math.sin(a)*10,life:3,color:'#05d9e8',size:3,trail:false,glow:'#7df9ff',follow:true});}}},
 {key:'teleport',name:'Телепорт',icon:'teleport',unlockLvl:8,cd:15,activate:p=>{let dx=0,dy=0;if(keys['w']||keys['ц']||keys['arrowup'])dy-=1;if(keys['s']||keys['ы']||keys['arrowdown'])dy+=1;if(keys['a']||keys['ф']||keys['arrowleft'])dx-=1;if(keys['d']||keys['в']||keys['arrowright'])dx+=1;if(joy.active){const jx=joy.x-joy.bx,jy=joy.y-joy.by,jl=Math.hypot(jx,jy);if(jl>8){dx+=jx/jl;dy+=jy/jl;}}const len=Math.hypot(dx,dy);if(len===0){const a=Math.random()*Math.PI*2;dx=Math.cos(a);dy=Math.sin(a);}else{dx/=len;dy/=len;}for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:p.x+Math.cos(a)*15,y:p.y+Math.sin(a)*15,vx:Math.cos(a)*100,vy:Math.sin(a)*100,life:.4,color:'#b967ff',size:3,trail:false,glow:'#b967ff'});}p.x+=dx*220;p.y+=dy*220;p.x=Math.max(p.r,Math.min(VW-p.r,p.x));p.y=Math.max(p.r,Math.min(VH-p.r,p.y));for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2;particles.push({x:p.x+Math.cos(a)*15,y:p.y+Math.sin(a)*15,vx:Math.cos(a)*100,vy:Math.sin(a)*100,life:.4,color:'#b967ff',size:3,trail:false,glow:'#b967ff'});}p.invuln=Math.max(p.invuln,.5);sfx('teleport');}},
 {key:'freeze',name:'Заморозка',icon:'freeze',unlockLvl:12,cd:60,activate:p=>{for(const e of enemies)e.frozen=4;for(let i=0;i<60;i++){const a=Math.random()*Math.PI*2,r=Math.random()*300;particles.push({x:p.x+Math.cos(a)*r,y:p.y+Math.sin(a)*r,vx:(Math.random()-.5)*40,vy:-20-Math.random()*30,life:1+Math.random(),color:'#e0ffff',size:2+Math.random()*2,trail:false,glow:'#7df9ff',snow:true});}screenShake=10;sfx('freeze');}}];
const WEAPONS={
 pistol:{name:'Пистолет',icon:'pistol',maxLvl:5,desc:'Базовая стрельба'},
 shotgun:{name:'Дробовик',icon:'shotgun',maxLvl:5,desc:'Веер пуль'},
 garlic:{name:'Чеснок',icon:'garlic',maxLvl:5,desc:'Аура урона'},
 lightning:{name:'Молния',icon:'bolt',maxLvl:5,desc:'Цепная молния'},
 missile:{name:'Ракета',icon:'rocket',maxLvl:5,desc:'Самонаводящаяся'},
 laser:{name:'Лазер',icon:'laser',maxLvl:1,desc:'Непрерывный луч',evo:true},
 minigun:{name:'Миниган',icon:'minigun',maxLvl:1,desc:'Скорострельный веер',evo:true},
 poison:{name:'Яд. облако',icon:'poison',maxLvl:1,desc:'Урон + замедление',evo:true},
 chainlightning:{name:'Цепн. молния',icon:'chain',maxLvl:1,desc:'Всегда крит',evo:true},
 nuke:{name:'Ядер. ракета',icon:'nuke',maxLvl:1,desc:'Огромный AoE',evo:true}};
const PASSIVES={
 might:{name:'Мощь',icon:'swordup',desc:'+15% урон',max:5},
 speed:{name:'Скорость',icon:'knock',desc:'+10% скорость',max:5},
 maxhp:{name:'Здоровье',icon:'heart',desc:'+20 макс HP',max:5},
 firerate:{name:'Скорострел',icon:'clock',desc:'-10% кулдаун',max:5},
 magnet:{name:'Магнит',icon:'magnet',desc:'+50% радиус',max:5},
 regen:{name:'Регенерация',icon:'star',desc:'+0.5 HP/сек',max:5},
 crit:{name:'Крит',icon:'precision',desc:'+5% крит шанс',max:5},
 armor:{name:'Броня',icon:'shield',desc:'-1 получ. урон',max:5}};
const EVOLUTIONS={
 laser:{requires:{pistol:5,might:5},from:'pistol',name:'ЛАЗЕР',icon:'laser',sub:'Пистолет ур.5 + Мощь ур.5',color:'#ff2a6d'},
 minigun:{requires:{shotgun:5,firerate:5},from:'shotgun',name:'МИНИГАН',icon:'minigun',sub:'Дробовик ур.5 + Скорострел ур.5',color:'#ff9800'},
 poison:{requires:{garlic:5,maxhp:5},from:'garlic',name:'ЯДОВИТОЕ ОБЛАКО',icon:'poison',sub:'Чеснок ур.5 + Здоровье ур.5',color:'#76ff03'},
 chainlightning:{requires:{lightning:5,crit:5},from:'lightning',name:'ЦЕПНАЯ МОЛНИЯ',icon:'chain',sub:'Молния ур.5 + Крит ур.5',color:'#b967ff'},
 nuke:{requires:{missile:5,magnet:5},from:'missile',name:'ЯДЕРНАЯ РАКЕТА',icon:'nuke',sub:'Ракета ур.5 + Магнит ур.5',color:'#ffd319'}};
const BOSS_TYPES={
 normal:{name:'КРАСНЫЙ ТИТАН',glyph:'normal',color:'#ff2a6d',r:45,hpMult:1,speed:30,dmg:1,xpMult:1,sound:'boss'},
 twins:{name:'БЛИЗНЕЦЫ ХАОСА',glyph:'twins',color:'#b967ff',r:35,hpMult:0.7,speed:50,dmg:0.8,xpMult:1.5,sound:'boss_twin',count:2},
 tank:{name:'ЖЕЛЕЗНЫЙ КОЛОСС',glyph:'tank',color:'#7df9ff',r:70,hpMult:3,speed:15,dmg:2,xpMult:2,sound:'boss_tank'},
 sniper:{name:'ТЕНЬ-СТРЕЛОК',glyph:'sniper',color:'#ff2a6d',r:25,hpMult:0.8,speed:60,dmg:1.5,xpMult:1.8,sound:'boss_sniper'},
 architect:{name:'АРХИТЕКТОР СЕТИ',glyph:'architect',color:'#b967ff',r:60,hpMult:5,speed:20,dmg:3,xpMult:5,sound:'boss_architect'}};
function getBossTypeForWave(w){if(wave>=30&&ngPlusLevel>=0)return'architect';if(w<10)return'normal';if(w<15)return'twins';if(w<20)return'tank';if(w<25)return'sniper';if(w<30)return'twins';const t=['normal','twins','tank','sniper'];return t[Math.floor(Math.random()*t.length)];}
const BIOMES=[
 {key:'neon',name:'НЕОНОВЫЙ КВАРТАЛ',icon:'diamond',accent:'#05d9e8',bg:['#0d0221','#01012b','#0d0221'],gridA:'rgba(5,217,232,.07)',gridB:'rgba(255,42,109,.10)',ambient:'dust',desc:'Базовый микс врагов',spawnMult:1,speedMult:1,mix:{swarm:.2,runner:.3,elite:.38,tank:.45,ghost:.52,shooter:.58,sniper:.64}},
 {key:'industrial',name:'ПРОМЗОНА',icon:'gear',accent:'#ff9e00',bg:['#1a0a02','#2b1002','#1a0a02'],gridA:'rgba(255,158,0,.08)',gridB:'rgba(255,42,109,.12)',ambient:'embers',desc:'Больше танков и роя',spawnMult:1.1,speedMult:0.95,mix:{swarm:.32,runner:.4,elite:.46,tank:.62,ghost:.66,shooter:.7,sniper:.74}},
 {key:'data',name:'ДАТА-ЦЕНТР',icon:'terminal',accent:'#76ff03',bg:['#021a12','#012b1e','#021a12'],gridA:'rgba(118,255,3,.07)',gridB:'rgba(5,217,232,.10)',ambient:'matrix',desc:'Призраки и снайперы',spawnMult:1,speedMult:1,mix:{swarm:.14,runner:.24,elite:.3,tank:.36,ghost:.55,shooter:.68,sniper:.8}},
 {key:'void',name:'ПУСТОТА',icon:'moon',accent:'#b967ff',bg:['#0a0118','#15022b','#0a0118'],gridA:'rgba(185,103,255,.08)',gridB:'rgba(255,42,109,.10)',ambient:'glitch',desc:'Элитки, ускоренный спавн',spawnMult:1.35,speedMult:1.15,mix:{swarm:.24,runner:.34,elite:.52,tank:.58,ghost:.64,shooter:.7,sniper:.76}}];
let currentBiome=0;
function getBiomeIndex(w){return Math.floor((w-1)/5)%BIOMES.length;}
function setBiomeHUD(i){const b=BIOMES[i];document.getElementById('biome').innerHTML=icon(b.icon,14,b.accent)+`<span style="color:${b.accent};text-shadow:0 0 6px ${b.accent}">${b.name}</span>`;}
function announceBiome(b){showBonusToast(b.icon,'РАЙОН: '+b.name,b.desc,b.accent);sfx('biome');}
const PERKS=[
 {id:'burn',icon:'burn',name:'ЗАЖИГАТЕЛЬНЫЕ ПУЛИ',desc:'Атаки поджигают врагов (3 сек)',apply:p=>{p.perks.burn=true;}},
 {id:'knock',icon:'knock',name:'КИНЕТИКА',desc:'Криты отбрасывают врагов',apply:p=>{p.perks.knock=true;}},
 {id:'vamp',icon:'vamp',name:'ВАМПИРИЗМ',desc:'5% шанс +1 HP за убийство',apply:p=>{p.perks.vamp=true;}},
 {id:'thorns',icon:'thorns',name:'ОБРАТНАЯ СВЯЗЬ',desc:'Контакт с тобой наносит урон',apply:p=>{p.perks.thorns=true;}},
 {id:'precision',icon:'precision',name:'ТОЧНОСТЬ',desc:'+25% критического урона',apply:p=>{p.critMult+=0.25;}},
 {id:'orbit',icon:'orbit',name:'ДРОНЫ-СТРАЖИ',desc:'3 орбитальных дрона бьют врагов',apply:p=>{p.perks.orbit=true;}},
 {id:'vacuum',icon:'magnet',name:'ВАКУУМ',desc:'Радиус сбора опыта x2',apply:p=>{p.magnetRange*=2;}},
 {id:'adren',icon:'adren',name:'АДРЕНАЛИН',desc:'+20% урона при HP ниже 50%',apply:p=>{p.perks.adren=true;}},
 {id:'cryo',icon:'freeze',name:'КРИО-ПУЛИ',desc:'Атаки замедляют врагов на 1 сек',apply:p=>{p.perks.cryo=true;}},
 {id:'echo',icon:'echo',name:'ЭХО',desc:'15% шанс двойного выстрела',apply:p=>{p.perks.echo=true;}},
 {id:'cool',icon:'chip',name:'ОВЕРКЛОК',desc:'-15% кулдаун способностей',apply:p=>{p.abilityCdMult=Math.max(.5,p.abilityCdMult*0.85);}}];
let perkQueue=0;
function openPerkMenu(){
  const remaining=PERKS.filter(pk=>!player.perksTaken.includes(pk.id));
  if(!remaining.length){perkQueue=0;player.hp=Math.min(player.maxHp+30,player.hp+30);return;}
  state='perks';
  const opts=remaining.sort(()=>Math.random()-.5).slice(0,3);
  const c=document.getElementById('perkOptions');c.innerHTML='';
  opts.forEach(pk=>{const d=document.createElement('div');d.className='opt new';
    d.innerHTML=`<div class="ic">${icon(pk.icon,36)}</div><div class="nm">${pk.name}</div><div class="ds">${pk.desc}</div><div class="tag">ИМПЛАНТ</div>`;
    d.onclick=()=>{pk.apply(player);player.perksTaken.push(pk.id);perkQueue--;updateAchProgress('perks',player.perksTaken.length);hideAllOverlays();sfx('evo');updatePerkHud();state='playing';};
    c.appendChild(d);});
  hideAllOverlays();document.getElementById('perkmenu').classList.add('show');
}
function updatePerkHud(){const el=document.getElementById('perkHud');if(!player||!player.perksTaken||!player.perksTaken.length){el.style.display='none';return;}el.style.display='flex';el.innerHTML=player.perksTaken.map(id=>{const pk=PERKS.find(p=>p.id===id);return pk?icon(pk.icon,16):'';}).join('');}

const DAILY_MODIFIERS=[
 {id:'fast',name:'УСКОРЕНИЕ',desc:'Враги на 30% быстрее',apply:p=>{p.speedMult*=0.7;},enemyMult:{speed:1.3}},
 {id:'glass',name:'СТЕКЛО',desc:'HP игрока = 50, но урон x2',apply:p=>{p.maxHp=50;p.hp=50;p.dmgMult*=2;}},
 {id:'shotgun',name:'ТОЛЬКО ДРОБОВИК',desc:'Стартовое оружие — дробовик ур.3',apply:p=>{p.weapons={shotgun:3};}},
 {id:'noregen',name:'БЕЗ РЕГЕНЕРАЦИИ',desc:'Регенерация отключена',apply:p=>{p.regen=0;}},
 {id:'elite',name:'ЭЛИТНЫЙ ДЕСАНТ',desc:'Больше элиток, меньше обычных',apply:p=>{},enemyMult:{eliteChance:0.5}},
 {id:'slow',name:'ЗАМЕДЛЕНИЕ',desc:'Скорость игрока -20%',apply:p=>{p.speedMult*=0.8;}},
];
let dailyMode=false,dailySeed='',dailyModifier=null;
function getDailyModifier(){const today=getTodaySeed();const idx=Math.abs(today.split('-').reduce((a,b)=>a+parseInt(b),0))%DAILY_MODIFIERS.length;return DAILY_MODIFIERS[idx];}
function showDailyIntro(){
  dailyModifier=getDailyModifier();
  const today=getTodaySeed();
  document.getElementById('dailyInfo').innerHTML=`<div style="font-size:20px;color:var(--purple);margin-bottom:10px">${icon('clock',24)} СЕГОДНЯ: ${today}</div>
    <div style="font-size:16px;color:var(--cyan);margin-bottom:10px">МОДИФИКАТОР: ${icon(dailyModifier.icon||'bolt',20)} ${dailyModifier.name}</div>
    <div style="font-size:14px;color:rgba(209,247,255,.7)">${dailyModifier.desc}</div>
    <div style="margin-top:16px;font-size:13px;color:var(--yellow)">Цель: дойти до волны 30 и победить АРХИТЕКТОРА</div>`;
  state='dailyintro';
  hideAllOverlays();document.getElementById('dailyintro').classList.add('show');
}
function startDaily(charKey){dailyMode=true;dailySeed=getTodaySeed();startGame(charKey);}

const cvs=document.getElementById('game'),ctx=cvs.getContext('2d');
const keys={};let spaceJustPressed=false;
const joy={active:false,id:null,bx:0,by:0,x:0,y:0};
addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();if(!keys[' '])spaceJustPressed=true;}if(e.key==='Escape'){if(state==='playing')pauseGame();else if(state==='paused')resumeGame();else if(state==='settings')closeSettings();else if(state==='market')backFromMarket();}keys[e.key.toLowerCase()]=true;if(e.code==='Space')keys[' ']=true;});
addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=false;if(e.code==='Space')keys[' ']=false;});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state==='playing')pauseGame();});
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('pointerdown',()=>initAudio());
cvs.addEventListener('touchstart',e=>{e.preventDefault();if(state!=='playing')return;for(const t of e.changedTouches){if(t.clientX<VW*0.5){if(!joy.active){joy.active=true;joy.id=t.identifier;joy.bx=t.clientX;joy.by=t.clientY;joy.x=t.clientX;joy.y=t.clientY;}}else tryUseAbility();}},{passive:false});
cvs.addEventListener('touchmove',e=>{e.preventDefault();for(const t of e.changedTouches){if(joy.active&&t.identifier===joy.id){joy.x=t.clientX;joy.y=t.clientY;}}},{passive:false});
function joyEnd(e){for(const t of e.changedTouches){if(joy.active&&t.identifier===joy.id){joy.active=false;joy.id=null;}}}
cvs.addEventListener('touchend',joyEnd);cvs.addEventListener('touchcancel',joyEnd);
let state='menu',player=null,enemies=[],bullets=[],xpOrbs=[],particles=[],eBullets=[];
let wave=1,waveTimer=0,waveDuration=25,gameTime=0,kills=0,bossKills=0,hackCount=0;
let bosses=[],screenShake=0,damageFlash=0,abilityCooldowns={};
let unlockToastTimer=0,prevLevelForUnlock=1,evoToastTimer=0,bonusToastTimer=0;
let evolvedSet=new Set(),runAchievementsChecked=new Set(),dmgBonusTimer=0;
let comboCount=0,comboMultiplier=1,comboTimer=0,comboMax=1,comboToastTimeout=null;
const COMBO_TIMEOUT=3,COMBO_PER_MULT=10;
let renderT=0,eventTimer=40,activeEvent=null,terminal=null,runBonusCredits=0;
const TERMINAL_CHANNEL=8,TERMINAL_RADIUS=70,TERMINAL_LIFE=25;
const MAX_ENEMIES=350,MAX_BULLETS=400,MAX_EBULLETS=300,MAX_ORBS=300;
let ngPlusLevel=0,isVictory=false;
let hitStopTimer=0;
let runTelemetry={killsByMinute:[],dpsByMinute:[],damageDealt:0,startTime:0};
function startTelemetry(){runTelemetry={killsByMinute:[],dpsByMinute:[],damageDealt:0,startTime:performance.now()};}
function tickTelemetry(){const t=(performance.now()-runTelemetry.startTime)/1000;const minute=Math.floor(t/10);while(runTelemetry.killsByMinute.length<=minute)runTelemetry.killsByMinute.push(0);while(runTelemetry.dpsByMinute.length<=minute)runTelemetry.dpsByMinute.push(0);}
function recordKill(){tickTelemetry();if(runTelemetry.killsByMinute.length)runTelemetry.killsByMinute[Math.floor(((performance.now()-runTelemetry.startTime)/1000)/10)]++;}
function recordDamage(d){runTelemetry.damageDealt+=d;}
function triggerHitStop(ms=40){if(!settings.shake)return;hitStopTimer=ms;const el=document.getElementById('hitstop');el.classList.add('on');setTimeout(()=>{el.classList.remove('on');},ms);}

function hideAllOverlays(){
  ['menu','market','charselect','achievements','levelup','perkmenu','pausemenu','gameover','victory','dailyintro'].forEach(id=>{
    document.getElementById(id).classList.remove('show');
  });
}

function makePlayer(charKey){const ch=CHARACTERS[charKey];
 const p={x:VW/2,y:VH/2,r:14,hp:100,maxHp:100,speed:180,dmg:10,fireRate:1,projectiles:1,pierce:0,range:400,xp:0,level:1,xpNeeded:8,weapons:{},passives:{},critChance:0,critMult:2,magnetRange:80,regen:0,armor:0,dmgMult:1,fireRateMult:1,speedMult:1,aoeMult:1,bossDmgMult:1,abilityCdMult:1,xpMult:1,luckMult:1,weaponCd:{},invuln:0,shieldTime:0,perks:{},perksTaken:[],charKey,charColor:ch.color,lastDx:0,lastDy:0,poisonRadius:0,laserTarget:null};
 p.weapons[ch.weapon]=ch.weaponLvl;ch.apply(p);
 for(const id in achUnlocked){const a=ACHIEVEMENTS.find(x=>x.id===id);if(a&&a.rewardApply)a.rewardApply(p);}
 applyMarket(p);grantStartContainers(p);
 if(dailyMode&&dailyModifier&&dailyModifier.apply)dailyModifier.apply(p);
 if(ngPlusLevel>0){p.dmgMult*=1+ngPlusLevel*0.15;p.maxHp+=ngPlusLevel*20;p.hp=p.maxHp;p.speedMult*=1+ngPlusLevel*0.05;}
 return p;}
function eventXpMult(){return(activeEvent&&activeEvent.type==='blackout')?1.5:1;}
function eventSpawnMult(){return(activeEvent&&activeEvent.type==='blackout')?1.3:1;}
function eventMagnetMult(){return(activeEvent&&activeEvent.type==='storm')?3:1;}
function rollEvent(){const r=Math.random();if(r<.32)startTerminal();else if(r<.57)startActiveEvent('blackout');else if(r<.82)startActiveEvent('storm');else corpDrop();}
function startTerminal(){const m=120;let x=VW/2,y=VH/2,tries=0;do{x=m+Math.random()*(VW-2*m);y=m+Math.random()*(VH-2*m);tries++;}while(Math.hypot(x-player.x,y-player.y)<220&&tries<25);terminal={x,y,progress:0,life:TERMINAL_LIFE};showBonusToast('terminal','ТЕРМИНАЛ ДАННЫХ','Встань рядом и удерживай позицию','#05d9e8');sfx('hack');}
function startActiveEvent(type){activeEvent={type,timer:type==='blackout'?20:25};if(type==='blackout')showBonusToast('moon','БЛЭКАУТ','Врагов +30%, но опыта +50%','#b967ff');else showBonusToast('wind','ШТОРМ ДАННЫХ','Магнит орбов x3','#76ff03');sfx('evo');}
function corpDrop(){const n=4+Math.floor(wave/3),sm=BIOMES[currentBiome].speedMult;for(let i=0;i<n;i++){const side=Math.floor(Math.random()*4);let x,y;if(side===0){x=Math.random()*VW;y=-30;}else if(side===1){x=VW+30;y=Math.random()*VH;}else if(side===2){x=Math.random()*VW;y=VH+30;}else{x=-30;y=Math.random()*VH;}const s=1+wave*.12;enemies.push({x,y,type:'elite',r:16,hp:40*s,maxHp:40*s,speed:(50+wave*3)*sm,dmg:12+wave*2,xp:10+Math.floor(wave/2),color:'#ffd319',elite:true,hitFlash:0,frozen:0,poisoned:0,slowTimer:0,burn:0,orbitCd:0});}showBonusToast('bell','ДЕСАНТ КОРПОРАЦИИ','Элитный отряд на подходе','#ff2a6d');sfx('alarm');screenShake=15;}
function completeTerminal(){const gain=Math.floor(player.xpNeeded*0.9);player.xp+=gain;runBonusCredits+=150;hackCount++;updateAchProgress('hacks',hackCount);spawnBonusOrb(terminal.x,terminal.y-20,0,false,true).type='lvl';spawnBonusOrb(terminal.x-20,terminal.y+10,Math.ceil(player.xpNeeded*.3),true,false).type='gold';spawnBonusOrb(terminal.x+20,terminal.y+10,Math.ceil(player.xpNeeded*.3),true,false).type='gold';for(let i=0;i<50;i++){const a=Math.random()*Math.PI*2,s=60+Math.random()*220;particles.push({x:terminal.x,y:terminal.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.7+Math.random()*.4,color:['#05d9e8','#76ff03','#ffd319'][Math.floor(Math.random()*3)],size:3,trail:true,glow:'#05d9e8'});}showBonusToast('check','ВЗЛОМ УСПЕШЕН','+'+gain+' XP, +150 ED','#76ff03');sfx('hackdone');terminal=null;let guard=0;while(player.xp>=player.xpNeeded&&guard<50){player.xp-=player.xpNeeded;player.level++;player.xpNeeded=Math.floor(player.xpNeeded*1.35)+2;if(player.level%5===0)perkQueue++;showLevelUp();guard++;}}
function updateEventHud(){const el=document.getElementById('eventHud');if(terminal){el.style.display='flex';el.innerHTML=icon('terminal',16)+`<span>ВЗЛОМ • <span>${Math.ceil(terminal.life)}с</span></span><div class="bar"><div class="fill" style="width:${(terminal.progress/TERMINAL_CHANNEL)*100}%"></div></div>`;}else if(activeEvent){el.style.display='flex';const k=activeEvent.type==='blackout'?'moon':'wind';const nm=activeEvent.type==='blackout'?'БЛЭКАУТ':'ШТОРМ';el.innerHTML=icon(k,16)+`<span>${nm} • <span>${Math.ceil(activeEvent.timer)}с</span></span>`;}else el.style.display='none';}
function syncSettingsUI(){document.getElementById('sMusicOn').checked=settings.music;document.getElementById('sMusicVol').value=Math.round(settings.musicVol*100);document.getElementById('sSfxVol').value=Math.round(settings.sfxVol*100);document.getElementById('sShake').checked=settings.shake;document.getElementById('sPart').value=String(settings.particles);document.getElementById('vMusicOn').textContent=settings.music?'ВКЛ':'ВЫКЛ';document.getElementById('vMusicVol').textContent=Math.round(settings.musicVol*100)+'%';document.getElementById('vSfxVol').textContent=Math.round(settings.sfxVol*100)+'%';document.getElementById('vShake').textContent=settings.shake?'ВКЛ':'ВЫКЛ';}
function bindSettings(){document.getElementById('sMusicOn').onchange=e=>{settings.music=e.target.checked;saveSettings();syncSettingsUI();};document.getElementById('sMusicVol').oninput=e=>{settings.musicVol=e.target.value/100;saveSettings();syncSettingsUI();};document.getElementById('sSfxVol').oninput=e=>{settings.sfxVol=e.target.value/100;saveSettings();syncSettingsUI();};document.getElementById('sShake').onchange=e=>{settings.shake=e.target.checked;saveSettings();syncSettingsUI();};document.getElementById('sPart').onchange=e=>{settings.particles=parseFloat(e.target.value);saveSettings();};}

function pauseGame(){
  if(state!=='playing')return;
  state='paused';
  joy.active=false;
  hideAllOverlays();
  document.getElementById('pausemenu').classList.add('show');
  document.getElementById('pauseTitle').textContent='ПАУЗА';
  Music.stop();
  syncSettingsUI();
}
function resumeGame(){
  if(state!=='paused')return;
  state='playing';
  hideAllOverlays();
  if(actx)Music.start();
}
function openSettingsFromMenu(){
  state='settings';
  document.getElementById('pauseTitle').textContent='НАСТРОЙКИ';
  hideAllOverlays();
  document.getElementById('pausemenu').classList.add('show');
  syncSettingsUI();
}
function closeSettings(){
  hideAllOverlays();
  state='menu';
  showMenu();
}
function quitToMenu(){
  hideAllOverlays();
  state='menu';
  showMenu();
  if(actx)Music.start();
}
function restartGame(){
  const charKey=player?player.charKey:'shooter';
  hideAllOverlays();
  ngPlusLevel=0;
  dailyMode=false;
  startGame(charKey);
}

function addCombo(){comboCount++;comboTimer=COMBO_TIMEOUT;const nm=Math.floor(comboCount/COMBO_PER_MULT)+1;if(nm>comboMultiplier){comboMultiplier=nm;if(comboMultiplier>comboMax)comboMax=comboMultiplier;sfx('combo_up');showComboToast();}updateComboUI();}
function resetCombo(){if(comboMultiplier>1)showComboBreak();comboCount=0;comboMultiplier=1;comboTimer=0;updateComboUI();}
function showComboToast(){const c=document.getElementById('combo'),m=document.getElementById('comboMult');m.textContent='x'+comboMultiplier;m.style.color=getComboColor(comboMultiplier);c.classList.remove('break');c.classList.add('show');if(comboToastTimeout)clearTimeout(comboToastTimeout);comboToastTimeout=setTimeout(()=>{if(!c.classList.contains('break'))c.classList.remove('show');},1200);}
function showComboBreak(){const c=document.getElementById('combo'),m=document.getElementById('comboMult');m.textContent='BREAK';c.classList.add('break','show');sfx('combo_break');setTimeout(()=>{c.classList.remove('show','break');},800);}
function getComboColor(m){if(m<2)return'#fff';if(m<3)return'#ffd319';if(m<5)return'#ff9e00';if(m<8)return'#ff2a6d';return'#b967ff';}
function updateComboUI(){const ind=document.getElementById('combo-indicator');if(comboMultiplier>1){ind.style.display='block';document.getElementById('comboMultSmall').textContent=comboMultiplier;document.getElementById('comboTimerFill').style.width=(comboTimer/COMBO_TIMEOUT*100)+'%';}else ind.style.display='none';}
function showMenu(){state='menu';hideAllOverlays();document.getElementById('menu').classList.add('show');document.getElementById('creditsMenu').innerHTML=icon('coin',20,'#ffd319')+credits+' ED';document.getElementById('eventHud').style.display='none';document.getElementById('perkHud').style.display='none';document.getElementById('ngHud').style.display='none';buildBoard();}
function showCharSelect(){initAudio();sfx('select');state='charselect';hideAllOverlays();document.getElementById('charselect').classList.add('show');buildCharGrid();}
function backToMenu(){sfx('select');showMenu();}
function showAchievements(){sfx('select');state='achievements';hideAllOverlays();document.getElementById('achievements').classList.add('show');buildAchGrid();}
function backFromAch(){sfx('select');showMenu();}
function buildCharGrid(){const grid=document.getElementById('charGrid');grid.innerHTML='';for(const k in CHARACTERS){const ch=CHARACTERS[k],w=WEAPONS[ch.weapon];const card=document.createElement('div');const un=unlockedChars.has(k);card.className='char-card'+(un?'':' locked');card.style.setProperty('--cc',ch.color);
 if(un){card.innerHTML=`<div class="c-icon">${icon(ch.icon,46)}</div><div class="c-name" style="color:${ch.color};text-shadow:0 0 8px ${ch.color}">${ch.name}</div><div class="c-desc">${ch.desc}</div><div class="c-weapon">${icon(w.icon,14)} ${w.name} ур.${ch.weaponLvl}</div><div class="c-bonus">${ch.bonus}</div>`;card.onclick=()=>dailyMode?startDaily(k):startGame(k);}
 else{const req=ACHIEVEMENTS.find(a=>a.unlockChar===k);card.innerHTML=`<div class="c-icon" style="opacity:.3">${icon(ch.icon,46)}</div><div class="c-name" style="color:#666">???</div><div class="lock-icon">${icon('lock',40)}</div><div class="c-desc" style="color:#666">Взломай: ${req?req.name:'?'}</div>`;}
 grid.appendChild(card);}}
function startGame(charKey){try{if(!unlockedChars.has(charKey))return;initAudio();sfx('select');player=makePlayer(charKey);enemies=[];bullets=[];xpOrbs=[];particles=[];eBullets=[];bosses=[];wave=1;waveTimer=0;waveDuration=25;gameTime=0;kills=0;bossKills=0;hackCount=0;screenShake=0;damageFlash=0;dmgBonusTimer=0;comboCount=0;comboMultiplier=1;comboTimer=0;comboMax=1;eventTimer=40;activeEvent=null;terminal=null;runBonusCredits=0;perkQueue=0;joy.active=false;currentBiome=0;setBiomeHUD(0);abilityCooldowns={};prevLevelForUnlock=1;unlockToastTimer=0;evoToastTimer=0;achToastTimer=0;bonusToastTimer=0;evolvedSet=new Set();runAchievementsChecked=new Set();totalStats.games++;isVictory=false;
 hideAllOverlays();document.getElementById('bossbar').style.display='none';document.getElementById('eventHud').style.display='none';['unlocktoast','evotoast','achtoast','bonustoast'].forEach(id=>document.getElementById(id).classList.remove('show'));document.getElementById('dmgbonus').style.display='none';document.getElementById('combo').classList.remove('show','break');document.getElementById('combo-indicator').style.display='none';
 if(ngPlusLevel>0){const ng=document.getElementById('ngHud');ng.style.display='block';ng.textContent='NG+'+ngPlusLevel;}else document.getElementById('ngHud').style.display='none';
 const ch=CHARACTERS[charKey];document.getElementById('charname').innerHTML=icon(ch.icon,14,ch.color)+`<span style="color:${ch.color};text-shadow:0 0 6px ${ch.color}">${ch.name}</span>`;updateWeaponsUI();buildAbilitiesUI();updatePerkHud();startTelemetry();state='playing';Music.start();}catch(e){crash(e);}}
function triggerVictory(){
  isVictory=true;sfx('victory');
  const earned=calcCredits()*(achUnlocked['ng3']?2:1);credits+=earned;saveCredits();
  totalStats.victories++;if(ngPlusLevel>totalStats.ngMax)totalStats.ngMax=ngPlusLevel;
  updateAchProgress('victories',totalStats.victories);updateAchProgress('ngmax',totalStats.ngMax);
  if(dailyMode)recordDailyScore(player.charKey,Math.floor(gameTime),wave,kills);else recordScore(player.charKey,Math.floor(gameTime),wave,kills);
  document.getElementById('vtime').textContent=fmtTime(gameTime);document.getElementById('vlvl').textContent=player.level;document.getElementById('vkills').textContent=kills;document.getElementById('vcredits').textContent='+'+earned;document.getElementById('vng').textContent=ngPlusLevel;
  state='victory';hideAllOverlays();document.getElementById('victory').classList.add('show');
  setTimeout(()=>showRunReport(true),500);
}
function startNGPlus(){ngPlusLevel++;hideAllOverlays();showCharSelect();}
function gameOver(){state='gameover';joy.active=false;const best=parseInt(localStorage.getItem('neon_best')||'0');const t=Math.floor(gameTime);if(t>best)localStorage.setItem('neon_best',t);totalStats.kills+=kills;totalStats.time+=t;totalStats.bosses+=bossKills;saveAchievements();if(dailyMode)recordDailyScore(player.charKey,t,wave,kills);else recordScore(player.charKey,t,wave,kills);const earned=calcCredits()*(achUnlocked['ng3']?2:1);credits+=earned;saveCredits();document.getElementById('gcredits').textContent='+'+earned;document.getElementById('stime').textContent=fmtTime(t);document.getElementById('swave').textContent=wave;document.getElementById('slvl').textContent=player?player.level:1;document.getElementById('skills').textContent=kills;document.getElementById('best').textContent=fmtTime(Math.max(best,t));document.getElementById('scombo').textContent=comboMax;hideAllOverlays();document.getElementById('gameover').classList.add('show');setTimeout(()=>showRunReport(false),500);}
function fmtTime(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(Math.floor(s%60)).padStart(2,'0');}
function crash(err){console.error(err);document.getElementById('crashmsg').textContent=(err&&err.message)?err.message:'неизвестная ошибка';document.getElementById('crashbox').classList.add('show');}
window.addEventListener('error',e=>{if(state==='playing')crash(e.error||e.message);});
function buildAbilitiesUI(){const c=document.getElementById('abilities');c.innerHTML='';ABILITIES.forEach(a=>{const s=document.createElement('div');s.className='aslot';s.id='ab_'+a.key;s.title=a.name;s.innerHTML=`<div class="cd"></div>${icon(a.icon,26)}<span class="cdtext"></span><span class="lvlreq">LVL ${a.unlockLvl}</span><span class="keyhint">SPACE</span>`;c.appendChild(s);});}
function updateAbilitiesUI(){if(!player)return;let anyReady=false;ABILITIES.forEach(a=>{const s=document.getElementById('ab_'+a.key);if(!s)return;const un=player.level>=a.unlockLvl,cd=abilityCooldowns[a.key]||0,ready=un&&cd<=0;if(ready)anyReady=true;s.classList.toggle('locked',!un);s.classList.toggle('ready',ready);s.classList.toggle('active',a.key==='shield'&&player.shieldTime>0);const cdEl=s.querySelector('.cd'),cdT=s.querySelector('.cdtext'),lr=s.querySelector('.lvlreq');const eff=a.cd*(player.abilityCdMult||1);if(!un){cdEl.style.setProperty('--cd','100%');cdT.textContent='';lr.style.display='block';}else{lr.style.display='none';if(cd>0){cdEl.style.setProperty('--cd',(cd/eff*100)+'%');cdT.textContent=Math.ceil(cd)+'s';}else{cdEl.style.setProperty('--cd','0%');cdT.textContent='';}}});document.getElementById('abilityBtn').classList.toggle('ready',anyReady);}
function tryUseAbility(){if(!player||state!=='playing')return false;for(const a of ABILITIES){if(player.level<a.unlockLvl)continue;if((abilityCooldowns[a.key]||0)>0)continue;a.activate(player);abilityCooldowns[a.key]=a.cd*(player.abilityCdMult||1);return true;}return false;}
function showUnlockToast(iconKey,text){document.getElementById('uticon').innerHTML=icon(iconKey,40);document.getElementById('uttext').textContent=text;document.getElementById('unlocktoast').classList.add('show');unlockToastTimer=2.5;sfx('unlock');}
function showEvoToast(evo){document.getElementById('etoicon').innerHTML=icon(evo.icon,54);document.getElementById('etotext').textContent='ЭВОЛЮЦИЯ: '+evo.name;document.getElementById('etosub').textContent=evo.sub;const t=document.getElementById('evotoast');t.style.borderColor=evo.color;t.style.color=evo.color;t.style.filter=`drop-shadow(0 0 16px ${evo.color})`;t.classList.add('show');evoToastTimer=3.5;sfx('evo');for(let i=0;i<100;i++){const a=Math.random()*Math.PI*2,s=100+Math.random()*400;particles.push({x:player.x,y:player.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1+Math.random()*.5,color:evo.color,size:3+Math.random()*4,trail:true,glow:evo.color});}screenShake=40;}
function showBonusToast(iconKey,text,sub,color){document.getElementById('bticon').innerHTML=icon(iconKey,36);document.getElementById('bttext').textContent=text;document.getElementById('btsub').textContent=sub;const t=document.getElementById('bonustoast');t.style.borderColor=color;t.style.color=color;t.style.filter=`drop-shadow(0 0 14px ${color})`;t.classList.add('show');bonusToastTimer=2.5;}
function checkEvolutions(){if(!player)return;for(const key in EVOLUTIONS){if(evolvedSet.has(key))continue;const evo=EVOLUTIONS[key];let ok=true;for(const rk in evo.requires){if(rk in PASSIVES){if((player.passives[rk]||0)<evo.requires[rk]){ok=false;break;}}else if(rk in WEAPONS){if((player.weapons[rk]||0)<evo.requires[rk]){ok=false;break;}}}if(!ok||!player.weapons[evo.from])continue;delete player.weapons[evo.from];player.weapons[key]=1;evolvedSet.add(key);if(key==='laser')player.dmgMult*=1.5;if(key==='minigun')player.fireRateMult*=0.7;if(key==='poison')player.poisonRadius=120;if(key==='chainlightning')player.critChance+=0.3;if(key==='nuke'){player.aoeMult*=2;player.dmgMult*=1.3;}showEvoToast(evo);updateWeaponsUI();}}
function checkRunAchievements(){if(!player)return;if(!runAchievementsChecked.has('k'+kills)){updateAchProgress('kills',kills);runAchievementsChecked.add('k'+kills);}const ts=Math.floor(gameTime);if(!runAchievementsChecked.has('t'+ts)){updateAchProgress('time',ts);runAchievementsChecked.add('t'+ts);}if(!runAchievementsChecked.has('l'+player.level)){updateAchProgress('level',player.level);runAchievementsChecked.add('l'+player.level);}if(!runAchievementsChecked.has('b'+bossKills)){updateAchProgress('bosses',bossKills);runAchievementsChecked.add('b'+bossKills);}const wc=Object.keys(player.weapons).length;if(!runAchievementsChecked.has('w'+wc)){updateAchProgress('weapons',wc);runAchievementsChecked.add('w'+wc);}updateAchProgress('total_kills',totalStats.kills+kills);updateAchProgress('total_time',totalStats.time+ts);}
function pickEnemyType(w,mix){const r=Math.random();if(w>=2&&r<mix.swarm)return'swarm';if(w>=3&&r<mix.runner)return'runner';if(w>=4&&r<mix.elite)return'elite';if(w>=5&&r<mix.tank)return'tank';if(w>=6&&r<mix.ghost)return'ghost';if(w>=7&&r<mix.shooter)return'shooter';if(w>=8&&r<mix.sniper)return'sniper';return'grunt';}
function spawnEnemy(){if(enemies.length>=MAX_ENEMIES)return;const b=BIOMES[currentBiome];const side=Math.floor(Math.random()*4);let x,y;if(side===0){x=Math.random()*VW;y=-30;}else if(side===1){x=VW+30;y=Math.random()*VH;}else if(side===2){x=Math.random()*VW;y=VH+30;}else{x=-30;y=Math.random()*VH;}const s=1+wave*.12;const type=pickEnemyType(wave,b.mix);
 const T={grunt:{r:12,hp:15*s,speed:55+wave*3,dmg:8+wave*2,xp:2+Math.floor(wave/3),color:'#ff2a6d'},runner:{r:9,hp:8*s,speed:110+wave*5,dmg:5+wave,xp:3+Math.floor(wave/3),color:'#ff9e00'},tank:{r:20,hp:60*s,speed:35+wave*2,dmg:15+wave*3,xp:6+Math.floor(wave/2),color:'#b967ff'},shooter:{r:11,hp:18*s,speed:45+wave*2,dmg:6+wave,xp:4+Math.floor(wave/3),color:'#05d9e8',shootCd:2,shootTimer:0},swarm:{r:7,hp:5*s,speed:130+wave*6,dmg:4+wave,xp:1+Math.floor(wave/4),color:'#ff71a5',swarm:true},elite:{r:16,hp:40*s,speed:50+wave*3,dmg:12+wave*2,xp:10+Math.floor(wave/2),color:'#ffd319',elite:true},ghost:{r:13,hp:20*s,speed:60+wave*3,dmg:10+wave*2,xp:5+Math.floor(wave/3),color:'#d1f7ff',ghost:true,phaseTimer:0,phaseCd:3,visible:true},sniper:{r:10,hp:22*s,speed:40+wave*2,dmg:20+wave*3,xp:8+Math.floor(wave/3),color:'#ff2a6d',sniper:true,shootCd:3,shootTimer:0,aiming:false}};
 const t=T[type];const enemy={x,y,type,...t,maxHp:t.hp,hitFlash:0,frozen:0,poisoned:0,slowTimer:0,burn:0,orbitCd:0};enemy.speed*=b.speedMult;if(dailyMode&&dailyModifier&&dailyModifier.enemyMult&&dailyModifier.enemyMult.speed)enemy.speed*=dailyModifier.enemyMult.speed;enemies.push(enemy);
 if(type==='swarm'){const c=3+Math.floor(Math.random()*3);for(let i=1;i<c&&enemies.length<MAX_ENEMIES;i++){const ox=(Math.random()-.5)*60,oy=(Math.random()-.5)*60;const e2={x:x+ox,y:y+oy,type:'swarm',...T.swarm,maxHp:T.swarm.hp,hitFlash:0,frozen:0,poisoned:0,slowTimer:0,burn:0,orbitCd:0,swarm:true};e2.speed*=b.speedMult;enemies.push(e2);}sfx('swarm');}}
function spawnBoss(){const tk=getBossTypeForWave(wave),tp=BOSS_TYPES[tk],s=1+wave*0.2*(ngPlusLevel>0?1+ngPlusLevel*0.3:1),count=tp.count||1,enhanced=wave>=25;bosses=[];for(let i=0;i<count;i++){const ox=count>1?(i===0?-80:80):0;const b={x:VW/2+ox,y:-60-i*40,type:'boss',bossType:tk,r:tp.r,hp:500*s*tp.hpMult*(enhanced?1.5:1),maxHp:500*s*tp.hpMult*(enhanced?1.5:1),speed:tp.speed,dmg:(25+wave*3)*tp.dmg,xp:Math.floor((50+wave*10)*tp.xpMult),color:tp.color,hitFlash:0,frozen:0,poisoned:0,slowTimer:0,burn:0,orbitCd:0,shootTimer:0,shootCd:tk==='sniper'?1.5:(tk==='twins'?1.8:2.5),phaseTimer:0,chargeTimer:0,charging:false,chargeTarget:null,spiralAngle:i*Math.PI,enhanced,name:tp.name+(enhanced?' [УСИЛЕН]':''),glyph:tp.glyph};bosses.push(b);enemies.push(b);}sfx(tp.sound);screenShake=25;document.getElementById('bossbar').style.display='block';document.getElementById('bossname').innerHTML=icon(tp.glyph==='sniper'?'precision':(tp.glyph==='twins'?'twins':(tp.glyph==='tank'?'colossus':(tp.glyph==='architect'?'architect':'titan'))),16,'#ff2a6d')+`<span>${tp.name}${enhanced?' [УСИЛЕН]':''}</span>`;}
function findNearest(range){let best=null,bd=range;for(const e of enemies){if(e.dead)continue;if(e.type==='ghost'&&!e.visible)continue;const d=Math.hypot(e.x-player.x,e.y-player.y);if(d<bd){bd=d;best=e;}}return best;}
function fireWeapon(type,lvl,dt){player.weaponCd[type]=(player.weaponCd[type]||0)-dt;if(player.weaponCd[type]>0)return;
 if(type==='pistol'){const rate=.5*Math.pow(.88,lvl-1)*player.fireRateMult;player.weaponCd[type]=rate;const t=findNearest(player.range);if(!t)return;const ang=Math.atan2(t.y-player.y,t.x-player.x),count=1+Math.floor(lvl/3);for(let i=0;i<count;i++){const a=ang+(i-(count-1)/2)*.12;spawnBullet(player.x,player.y,Math.cos(a)*500,Math.sin(a)*500,player.dmg*player.dmgMult,'pistol');}sfx('shoot');}
 else if(type==='shotgun'){const rate=.9*Math.pow(.9,lvl-1)*player.fireRateMult;player.weaponCd[type]=rate;const t=findNearest(player.range*.7);const ang=t?Math.atan2(t.y-player.y,t.x-player.x):0,count=3+lvl;for(let i=0;i<count;i++){const a=ang+(i/(count-1)-.5)*.6;spawnBullet(player.x,player.y,Math.cos(a)*420,Math.sin(a)*420,player.dmg*.7*player.dmgMult,'shotgun');}sfx('shoot');}
 else if(type==='garlic'){const rate=.6*Math.pow(.9,lvl-1)*player.fireRateMult;player.weaponCd[type]=rate;const radius=60+lvl*15,dmg=player.dmg*.4*player.dmgMult*(1+lvl*.2);for(let i=0;i<24;i++){const a=(i/24)*Math.PI*2;particles.push({x:player.x+Math.cos(a)*radius,y:player.y+Math.sin(a)*radius,vx:Math.cos(a)*30,vy:Math.sin(a)*30,life:.3,color:'#76ff03',size:3,trail:false});}for(const e of enemies){if(e.type==='ghost'&&!e.visible)continue;if(Math.hypot(e.x-player.x,e.y-player.y)<radius+e.r)damageEnemy(e,dmg);}}
 else if(type==='lightning'){const rate=1.2*Math.pow(.88,lvl-1)*player.fireRateMult;player.weaponCd[type]=rate;const chains=2+lvl,dmg=player.dmg*1.5*player.dmgMult;let t=findNearest(player.range*1.5);if(!t)return;const hit=new Set();let cur={x:player.x,y:player.y};for(let i=0;i<chains&&t;i++){damageEnemy(t,dmg*Math.pow(.8,i));drawLightning(cur.x,cur.y,t.x,t.y);hit.add(t);cur=t;let best=null,bd=150;for(const e of enemies){if(hit.has(e)||e.dead)continue;if(e.type==='ghost'&&!e.visible)continue;const d=Math.hypot(e.x-cur.x,e.y-cur.y);if(d<bd){bd=d;best=e;}}t=best;}sfx('lightning');}
 else if(type==='missile'){const rate=1.5*Math.pow(.9,lvl-1)*player.fireRateMult;player.weaponCd[type]=rate;const t=findNearest(player.range*2);if(!t)return;const ang=Math.atan2(t.y-player.y,t.x-player.x);bullets.push({x:player.x,y:player.y,vx:Math.cos(ang)*200,vy:Math.sin(ang)*200,dmg:player.dmg*2*player.dmgMult,life:3,pierce:99,hit:new Set(),type:'missile',target:t,homing:.05+lvl*.01,aoe:(50+lvl*10)*player.aoeMult});sfx('shoot');}
 else if(type==='laser'){const rate=.05;player.weaponCd[type]=rate;const t=findNearest(player.range*1.5);if(!t){player.laserTarget=null;return;}player.laserTarget=t;const dmg=player.dmg*player.dmgMult*.8;particles.push({x:player.x,y:player.y,vx:0,vy:0,life:.1,color:'#ff2a6d',size:0,trail:false,glow:'#ff2a6d',laser:{x2:t.x,y2:t.y}});for(const e of enemies){if(e.dead||(e.type==='ghost'&&!e.visible))continue;const d=pointToSegmentDist(e.x,e.y,player.x,player.y,t.x,t.y);if(d<e.r+8)damageEnemy(e,dmg);}sfx('laser');}
 else if(type==='minigun'){const rate=.15*player.fireRateMult;player.weaponCd[type]=rate;const t=findNearest(player.range);const ang=t?Math.atan2(t.y-player.y,t.x-player.x):(player.lastDy?Math.atan2(player.lastDy,player.lastDx):0);for(let i=0;i<4;i++){const a=ang+(Math.random()-.5)*.5;spawnBullet(player.x,player.y,Math.cos(a)*550,Math.sin(a)*550,player.dmg*.5*player.dmgMult,'minigun');}sfx('shoot');}
 else if(type==='poison'){const rate=.3*player.fireRateMult;player.weaponCd[type]=rate;const radius=player.poisonRadius||120,dmg=player.dmg*.3*player.dmgMult;for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2,r=Math.random()*radius;particles.push({x:player.x+Math.cos(a)*r,y:player.y+Math.sin(a)*r,vx:(Math.random()-.5)*20,vy:-10-Math.random()*20,life:.8+Math.random()*.4,color:'#76ff03',size:4+Math.random()*4,trail:false,glow:'#76ff03'});}for(const e of enemies){if(e.type==='ghost'&&!e.visible)continue;if(Math.hypot(e.x-player.x,e.y-player.y)<radius+e.r){damageEnemy(e,dmg);e.poisoned=2;e.slowTimer=2;}}}
 else if(type==='chainlightning'){const rate=.8*player.fireRateMult;player.weaponCd[type]=rate;const chains=6+Math.floor(Math.random()*3),dmg=player.dmg*2*player.dmgMult;let t=findNearest(player.range*1.8);if(!t)return;const hit=new Set();let cur={x:player.x,y:player.y};for(let i=0;i<chains&&t;i++){damageEnemy(t,dmg*Math.pow(.75,i)*player.critMult);drawLightning(cur.x,cur.y,t.x,t.y);hit.add(t);cur=t;let best=null,bd=180;for(const e of enemies){if(hit.has(e)||e.dead)continue;if(e.type==='ghost'&&!e.visible)continue;const d=Math.hypot(e.x-cur.x,e.y-cur.y);if(d<bd){bd=d;best=e;}}t=best;}sfx('lightning');}
 else if(type==='nuke'){const rate=2*player.fireRateMult;player.weaponCd[type]=rate;const t=findNearest(player.range*2.5);if(!t)return;const ang=Math.atan2(t.y-player.y,t.x-player.x);bullets.push({x:player.x,y:player.y,vx:Math.cos(ang)*180,vy:Math.sin(ang)*180,dmg:player.dmg*4*player.dmgMult,life:4,pierce:99,hit:new Set(),type:'nuke',target:t,homing:.08,aoe:120*player.aoeMult});sfx('shoot');}}
function pointToSegmentDist(px,py,x1,y1,x2,y2){const dx=x2-x1,dy=y2-y1,l2=dx*dx+dy*dy;if(l2===0)return Math.hypot(px-x1,py-y1);let t=((px-x1)*dx+(py-y1)*dy)/l2;t=Math.max(0,Math.min(1,t));return Math.hypot(px-(x1+t*dx),py-(y1+t*dy));}
function spawnBullet(x,y,vx,vy,dmg,type,fromEcho){if(bullets.length>=MAX_BULLETS)return;let crit=Math.random()<player.critChance;if(crit)dmg*=player.critMult;bullets.push({x,y,vx,vy,dmg,life:1.2,pierce:player.pierce,hit:new Set(),type,crit});if(!fromEcho&&player.perks&&player.perks.echo&&Math.random()<.15){const a=Math.atan2(vy,vx)+.18,sp=Math.hypot(vx,vy);const base=crit?dmg/player.critMult:dmg;let c2=Math.random()<player.critChance;let d2=base;if(c2)d2*=player.critMult;bullets.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,dmg:d2,life:1.2,pierce:player.pierce,hit:new Set(),type,crit:c2,echo:true});}}
function drawLightning(x1,y1,x2,y2){let px=x1,py=y1;for(let i=1;i<=6;i++){const t=i/6,nx=x1+(x2-x1)*t+(Math.random()-.5)*20,ny=y1+(y2-y1)*t+(Math.random()-.5)*20;particles.push({x:(px+nx)/2,y:(py+ny)/2,vx:0,vy:0,life:.25,color:'#e0ffff',size:4,trail:false,glow:'#b967ff'});px=nx;py=ny;}}
function damageEnemy(e,dmg){if(e.type==='ghost'&&!e.visible)return;if(e.type==='boss')dmg*=(player.bossDmgMult||1);if(player.perks){if(player.perks.adren&&player.hp<player.maxHp*.5)dmg*=1.2;if(player.perks.burn)e.burn=3;if(player.perks.cryo)e.slowTimer=Math.max(e.slowTimer||0,1);}e.hp-=dmg;e.hitFlash=.1;recordDamage(dmg);particles.push({x:e.x,y:e.y-e.r,vx:0,vy:-40,life:.6,color:'#ffd319',size:0,text:Math.floor(dmg),trail:false});if(Math.random()<0.3)triggerHitStop(20);if(e.hp<=0&&!e.dead){e.dead=true;killEnemy(e);}}
function spawnBonusOrb(x,y,baseXp,isElite,isBoss){if(xpOrbs.length>=MAX_ORBS)return null;const roll=Math.random();let type='xp';const L=player?(player.luckMult||1):1;if(isBoss){if(roll<.3)type='gold';else if(roll<.5)type='hp';else if(roll<.65)type='lvl';else if(roll<.85)type='dmg';else type='gold';}else if(isElite){if(roll<.25*L)type='gold';else if(roll<.4*L)type='hp';else if(roll<.48*L)type='lvl';else if(roll<.65*L)type='dmg';}else{if(roll<.03*L)type='gold';else if(roll<.05*L)type='hp';else if(roll<.055*L)type='lvl';else if(roll<.08*L)type='dmg';}const orb={x,y,val:baseXp,type,dead:false};xpOrbs.push(orb);return orb;}
function killEnemy(e){sfx('kill');recordKill();triggerHitStop(40);kills++;if(e.type==='boss')bossKills++;addCombo();if(player.perks&&player.perks.vamp&&Math.random()<.05)player.hp=Math.min(player.maxHp,player.hp+1);const n=e.type==='boss'?60:(e.elite?25:(e.type==='tank'?20:10));for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=50+Math.random()*200;particles.push({x:e.x,y:e.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.6+Math.random()*.4,color:e.elite?'#ffd319':e.color,size:2+Math.random()*3,trail:true});}if(e.type==='boss'){screenShake=30;sfx('explode');const idx=bosses.indexOf(e);if(idx>=0)bosses.splice(idx,1);if(!bosses.length){document.getElementById('bossbar').style.display='none';if(e.bossType==='architect')triggerVictory();}else{const nx=bosses[0];document.getElementById('bossname').innerHTML=icon(nx.glyph==='sniper'?'precision':(nx.glyph==='twins'?'twins':(nx.glyph==='tank'?'colossus':(nx.glyph==='architect'?'architect':'titan'))),16,'#ff2a6d')+`<span>${nx.name}</span>`;}}if(e.type==='boss'){for(let i=0;i<8;i++)spawnBonusOrb(e.x+(Math.random()-.5)*40,e.y+(Math.random()-.5)*40,Math.ceil(e.xp/8),false,true);const o=spawnBonusOrb(e.x,e.y-20,0,false,true);if(o)o.type='lvl';}else if(e.elite){const c=2+Math.floor(Math.random()*2);for(let i=0;i<c;i++)spawnBonusOrb(e.x+(Math.random()-.5)*30,e.y+(Math.random()-.5)*30,Math.ceil(e.xp/c),true,false);}else spawnBonusOrb(e.x,e.y,e.xp,false,false);}
function applyOrbEffect(orb){const mult=comboMultiplier,xm=(player.xpMult||1)*eventXpMult();if(orb.type==='xp'){player.xp+=orb.val*mult*xm;sfx('xp');}else if(orb.type==='gold'){const gain=Math.floor(orb.val*5*mult*xm);player.xp+=gain;sfx('orb_gold');showBonusToast('diamond','+'+gain+' XP','ЗОЛОТОЙ ОРБ x5'+(mult>1?' x'+mult:''),'#ffd319');for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2,s=50+Math.random()*150;particles.push({x:player.x,y:player.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.6+Math.random()*.3,color:'#ffd319',size:3,trail:true,glow:'#ffd319'});}}else if(orb.type==='hp'){const heal=Math.floor(player.maxHp*.2);player.hp=Math.min(player.maxHp,player.hp+heal);sfx('orb_hp');showBonusToast('heart','+'+heal+' HP','ОРБ ЗДОРОВЬЯ','#ff2a6d');for(let i=0;i<15;i++){const a=Math.random()*Math.PI*2,s=30+Math.random()*100;particles.push({x:player.x,y:player.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.5,color:'#ff2a6d',size:3,trail:false,glow:'#ff2a6d'});}}else if(orb.type==='lvl'){player.level++;player.xpNeeded=Math.floor(player.xpNeeded*1.35)+2;if(player.level%5===0)perkQueue++;sfx('orb_lvl');showBonusToast('star','УРОВЕНЬ +1','МГНОВЕННЫЙ LEVEL UP','#b967ff');for(let i=0;i<30;i++){const a=Math.random()*Math.PI*2,s=80+Math.random()*200;particles.push({x:player.x,y:player.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.8,color:'#b967ff',size:4,trail:true,glow:'#b967ff'});}updateWeaponsUI();checkEvolutions();}else if(orb.type==='dmg'){dmgBonusTimer=30;sfx('orb_dmg');showBonusToast('swordup','УРОН x2','30 секунд','#76ff03');document.getElementById('dmgbonus').style.display='flex';for(let i=0;i<25;i++){const a=Math.random()*Math.PI*2,s=60+Math.random()*150;particles.push({x:player.x,y:player.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.7,color:'#76ff03',size:3,trail:true,glow:'#76ff03'});}}}
function damagePlayer(dmg){if(player.invuln>0)return;player.hp-=Math.max(1,dmg-player.armor);player.invuln=.3;damageFlash=.3;screenShake=Math.max(screenShake,8);sfx('hurt');resetCombo();if(player.hp<=0)gameOver();}
function generateUpgrades(){const pool=[];for(const k in WEAPONS){const w=WEAPONS[k];if(w.evo)continue;const cur=player.weapons[k]||0;if(cur<w.maxLvl){const owned=cur>0,nl=cur+1;pool.push({new:!owned,name:w.name+(owned?' ур.'+nl:''),icon:w.icon,desc:w.desc+(owned?' (улучшение)':' (новое!)'),tag:owned?'АПГРЕЙД':'НОВОЕ',apply:()=>{player.weapons[k]=nl;}});}}for(const k in PASSIVES){const cur=player.passives[k]||0;if(cur<PASSIVES[k].max)pool.push({new:cur===0,name:PASSIVES[k].name+(cur>0?' ур.'+(cur+1):''),icon:PASSIVES[k].icon,desc:PASSIVES[k].desc,tag:cur>0?'АПГРЕЙД':'НОВОЕ',apply:()=>{player.passives[k]=(player.passives[k]||0)+1;applyPassive(k);}});}return pool.sort(()=>Math.random()-.5).slice(0,3);}
function applyPassive(k){const l=player.passives[k];if(k==='might')player.dmgMult=1+l*.15;if(k==='speed')player.speedMult=1+l*.10;if(k==='maxhp'){player.maxHp=100+l*20;player.hp=Math.min(player.hp+20,player.maxHp);}if(k==='firerate')player.fireRateMult=Math.pow(.9,l);if(k==='magnet')player.magnetRange=80*(1+l*.5);if(k==='regen')player.regen=(player.charKey==='monk'?.5:0)+l*.5;if(k==='crit')player.critChance=l*.05;if(k==='armor')player.armor=l;}
function showLevelUp(){state='levelup';const opts=generateUpgrades(),c=document.getElementById('options');c.innerHTML='';if(!opts.length){const d=document.createElement('div');d.className='opt';d.innerHTML=`<div class="ic">${icon('heart',36)}</div><div class="nm">+50 HP</div><div class="ds">Всё прокачано</div><div class="tag">БОНУС</div>`;d.onclick=()=>{player.hp=Math.min(player.maxHp+50,player.hp+50);player.maxHp+=50;hideAllOverlays();sfx('lvl');state='playing';};c.appendChild(d);}else opts.forEach(o=>{const d=document.createElement('div');d.className='opt'+(o.new?' new':'');d.innerHTML=`<div class="ic">${icon(o.icon,36)}</div><div class="nm">${o.name}</div><div class="ds">${o.desc}</div><div class="tag">${o.tag}</div>`;d.onclick=()=>{o.apply();hideAllOverlays();sfx('lvl');state='playing';updateWeaponsUI();checkEvolutions();};c.appendChild(d);});hideAllOverlays();document.getElementById('levelup').classList.add('show');}
function updateWeaponsUI(){const c=document.getElementById('weapons');c.innerHTML='';if(!player)return;for(const k in player.weapons){const w=WEAPONS[k],d=document.createElement('div');d.className='wslot'+(w.evo?' evo':'');d.innerHTML=icon(w.icon,24)+`<span class="lvl">${player.weapons[k]}</span>`;d.title=w.name;c.appendChild(d);}}
function buildAchGrid(){const grid=document.getElementById('achGrid');grid.innerHTML='';document.getElementById('achStats').innerHTML=`<h3>// ОБЩАЯ СТАТИСТИКА //</h3><div class="stat-row"><span>Всего игр:</span><span class="stat-val">${totalStats.games}</span></div><div class="stat-row"><span>Всего убийств:</span><span class="stat-val">${totalStats.kills}</span></div><div class="stat-row"><span>Всего времени:</span><span class="stat-val">${fmtTime(totalStats.time)}</span></div><div class="stat-row"><span>Всего боссов:</span><span class="stat-val">${totalStats.bosses}</span></div><div class="stat-row"><span>Побед:</span><span class="stat-val">${totalStats.victories}</span></div><div class="stat-row"><span>Макс. NG+:</span><span class="stat-val">${totalStats.ngMax}</span></div><div class="stat-row"><span>Достижений:</span><span class="stat-val">${Object.keys(achUnlocked).length} / ${ACHIEVEMENTS.length}</span></div>`;ACHIEVEMENTS.forEach(a=>{const un=achUnlocked[a.id],pr=achProgress[a.id]||0,pct=Math.min(100,pr/a.target*100);const card=document.createElement('div');card.className='ach-card'+(un?' unlocked':' locked-ach');card.innerHTML=`<div class="ach-icon">${icon(a.icon,26)}</div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div><div class="ach-progress">${pr} / ${a.target}</div><div class="ach-bar"><div class="ach-fill" style="width:${pct}%"></div></div><div class="ach-reward">+ ${a.reward}</div>${un?'<div class="ach-check">OK</div>':''}`;grid.appendChild(card);});}
function showRunReport(won){
  const t=Math.floor(gameTime);
  document.getElementById('rrSubtitle').textContent=won?'ПОБЕДА • ПРОТОКОЛ ВЫПОЛНЕН':'ЗАБЕГ ЗАВЕРШЕН';
  document.getElementById('rrTime').textContent=fmtTime(t);
  document.getElementById('rrKills').textContent=kills;
  document.getElementById('rrLevel').textContent=player?player.level:1;
  const dps=t>0?Math.floor(runTelemetry.damageDealt/t):0;
  document.getElementById('rrDps').textContent=dps;
  document.getElementById('rrCombo').textContent='x'+comboMax;
  const earned=calcCredits()*(achUnlocked['ng3']?2:1);
  document.getElementById('rrCredits').textContent='+'+earned;
  const build=document.getElementById('rrBuild');build.innerHTML='';
  if(player){
    for(const k in player.weapons){const w=WEAPONS[k];const tag=document.createElement('div');tag.className='tag'+(w.evo?' evo':'');tag.textContent=w.name+' ур.'+player.weapons[k];build.appendChild(tag);}
    for(const k in player.passives){const p=PASSIVES[k];const tag=document.createElement('div');tag.className='tag';tag.textContent=p.name+' ур.'+player.passives[k];build.appendChild(tag);}
    for(const id of player.perksTaken){const pk=PERKS.find(p=>p.id===id);if(pk){const tag=document.createElement('div');tag.className='tag perk';tag.textContent=pk.name;build.appendChild(tag);}}
    if(ngPlusLevel>0){const tag=document.createElement('div');tag.className='tag';tag.style.borderColor='var(--purple)';tag.style.color='var(--purple)';tag.textContent='NG+'+ngPlusLevel;build.appendChild(tag);}
  }
  drawLineChart('rrKillsChart',runTelemetry.killsByMinute,'#ff2a6d','убийств/10с');
  drawLineChart('rrDpsChart',runTelemetry.dpsByMinute,'#05d9e8','DPS');
  document.getElementById('runreport').classList.add('show');
}
function drawLineChart(canvasId,data,color,label){
  const c=document.getElementById(canvasId);if(!c)return;
  const ctx=c.getContext('2d');const W=c.width,H=c.height;ctx.clearRect(0,0,W,H);if(!data.length)return;
  const max=Math.max(...data,1);ctx.strokeStyle='rgba(5,217,232,.2)';ctx.lineWidth=1;
  for(let i=1;i<4;i++){const y=H*i/4;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  ctx.strokeStyle=color;ctx.lineWidth=2;ctx.shadowColor=color;ctx.shadowBlur=6;ctx.beginPath();
  const step=W/Math.max(data.length-1,1);data.forEach((v,i)=>{const x=i*step,y=H-(v/max)*(H-10)-5;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle=color;data.forEach((v,i)=>{const x=i*step,y=H-(v/max)*(H-10)-5;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='rgba(209,247,255,.5)';ctx.font='11px "Share Tech Mono"';ctx.textAlign='right';ctx.fillText('макс: '+max,W-8,14);
}
let last=performance.now();
function loop(now){const dt=Math.min((now-last)/1000,.05);last=now;
  if(hitStopTimer>0){hitStopTimer-=16;if(hitStopTimer>0){requestAnimationFrame(loop);return;}}
  try{if(state==='playing')update(dt);}catch(err){crash(err);state='paused';}
  if(state==='playing'||state==='menu'||state==='charselect'||state==='achievements'||state==='settings'||state==='market')renderT=now/1000;
  try{render(renderT);}catch(err){console.error(err);}
  const inGame=state==='playing';document.getElementById('abilityBtn').classList.toggle('show',isTouch&&inGame);document.getElementById('pauseBtn').classList.toggle('show',inGame);requestAnimationFrame(loop);}
function update(dt){if(!player)return;if(perkQueue>0){openPerkMenu();return;}gameTime+=dt;player.invuln=Math.max(0,player.invuln-dt);player.shieldTime=Math.max(0,player.shieldTime-dt);damageFlash=Math.max(0,damageFlash-dt);screenShake=Math.max(0,screenShake-dt*20);if(player.regen>0)player.hp=Math.min(player.maxHp,player.hp+player.regen*dt);if(!isFinite(player.x)||!isFinite(player.y)){player.x=VW/2;player.y=VH/2;}if(!isFinite(player.xpNeeded)||player.xpNeeded<=0)player.xpNeeded=10;
 if(dmgBonusTimer>0){dmgBonusTimer-=dt;const el=document.getElementById('dmgbonus');el.innerHTML=icon('swordup',14)+'<span>УРОН x2: '+Math.ceil(dmgBonusTimer)+'с</span>';if(dmgBonusTimer<=0){el.style.display='none';showBonusToast('swordup','Бонус урона закончился','','#76ff03');}}
 if(comboTimer>0){comboTimer-=dt;if(comboTimer<=0)resetCombo();updateComboUI();}
 for(const a of ABILITIES){if(abilityCooldowns[a.key]>0)abilityCooldowns[a.key]=Math.max(0,abilityCooldowns[a.key]-dt);}
 if(player.level>prevLevelForUnlock){for(const a of ABILITIES){if(player.level>=a.unlockLvl&&prevLevelForUnlock<a.unlockLvl)showUnlockToast(a.icon,'Открыто: '+a.name+'!');}prevLevelForUnlock=player.level;}
 if(unlockToastTimer>0){unlockToastTimer-=dt;if(unlockToastTimer<=0)document.getElementById('unlocktoast').classList.remove('show');}
 if(evoToastTimer>0){evoToastTimer-=dt;if(evoToastTimer<=0)document.getElementById('evotoast').classList.remove('show');}
 if(achToastTimer>0){achToastTimer-=dt;if(achToastTimer<=0)document.getElementById('achtoast').classList.remove('show');}
 if(bonusToastTimer>0){bonusToastTimer-=dt;if(bonusToastTimer<=0)document.getElementById('bonustoast').classList.remove('show');}
 if(spaceJustPressed){spaceJustPressed=false;tryUseAbility();}
 eventTimer-=dt;if(eventTimer<=0&&!activeEvent&&!terminal&&wave>=3){rollEvent();eventTimer=45+Math.random()*30;}
 if(activeEvent){activeEvent.timer-=dt;if(activeEvent.timer<=0)activeEvent=null;}
 if(terminal){terminal.life-=dt;const d=Math.hypot(terminal.x-player.x,terminal.y-player.y);if(d<TERMINAL_RADIUS){terminal.progress+=dt;if(Math.random()<.6)particles.push({x:terminal.x+(Math.random()-.5)*30,y:terminal.y+(Math.random()-.5)*30,vx:(player.x-terminal.x)*.8,vy:(player.y-terminal.y)*.8,life:.4,color:'#05d9e8',size:2,trail:false,glow:'#05d9e8'});if(Math.random()<dt*3)sfx('hack');}if(terminal&&terminal.progress>=TERMINAL_CHANNEL)completeTerminal();else if(terminal&&terminal.life<=0){terminal=null;showBonusToast('cross','ТЕРМИНАЛ ПОТЕРЯН','Не успел взломать','#ff2a6d');sfx('alarm');}}
 updateEventHud();
 let dx=0,dy=0;if(keys['w']||keys['ц']||keys['arrowup'])dy-=1;if(keys['s']||keys['ы']||keys['arrowdown'])dy+=1;if(keys['a']||keys['ф']||keys['arrowleft'])dx-=1;if(keys['d']||keys['в']||keys['arrowright'])dx+=1;let joyMag=0;if(joy.active){const jx=joy.x-joy.bx,jy=joy.y-joy.by,jl=Math.hypot(jx,jy);if(jl>8){joyMag=Math.min(1,jl/48);dx+=(jx/jl)*joyMag;dy+=(jy/jl)*joyMag;}}const len=Math.hypot(dx,dy);if(len>1){dx/=len;dy/=len;}const spd=player.speed*player.speedMult*(joy.active?Math.max(joyMag,len>0?.55:0):1);if(len>0){player.x+=dx*spd*dt;player.y+=dy*spd*dt;player.lastDx=dx;player.lastDy=dy;}player.x=Math.max(player.r,Math.min(VW-player.r,player.x));player.y=Math.max(player.r,Math.min(VH-player.r,player.y));if(len>0&&Math.random()<.4)particles.push({x:player.x,y:player.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,life:.3,color:player.charColor,size:2,trail:false});
 if(player.perks&&player.perks.orbit){for(let i=0;i<3;i++){const ang=gameTime*2.5+i*(Math.PI*2/3);const ox=player.x+Math.cos(ang)*60,oy=player.y+Math.sin(ang)*60;for(const e of enemies){if(e.dead||(e.orbitCd||0)>0)continue;if(e.type==='ghost'&&!e.visible)continue;if(Math.hypot(e.x-ox,e.y-oy)<e.r+14){damageEnemy(e,player.dmg*.8);e.orbitCd=.5;}}}}
 for(const k in player.weapons)fireWeapon(k,player.weapons[k],dt);
 waveTimer+=dt;const b=BIOMES[currentBiome];const spawnRate=Math.max(.15,.9-wave*.05);if(Math.random()<(dt/spawnRate)*b.spawnMult*eventSpawnMult())spawnEnemy();if(waveTimer>waveDuration){wave++;waveTimer=0;waveDuration=25+wave*3;const bi=getBiomeIndex(wave);if(bi!==currentBiome){currentBiome=bi;setBiomeHUD(bi);announceBiome(BIOMES[bi]);}if(wave%5===0)spawnBoss();}
 for(const bl of bullets){if((bl.type==='missile'||bl.type==='nuke')&&bl.target&&!bl.target.dead){const des=Math.atan2(bl.target.y-bl.y,bl.target.x-bl.x),cur=Math.atan2(bl.vy,bl.vx);let diff=des-cur;while(diff>Math.PI)diff-=Math.PI*2;while(diff<-Math.PI)diff+=Math.PI*2;const turn=Math.max(-bl.homing*60*dt,Math.min(bl.homing*60*dt,diff)),na=cur+turn,sp=Math.hypot(bl.vx,bl.vy);bl.vx=Math.cos(na)*sp;bl.vy=Math.sin(na)*sp;particles.push({x:bl.x,y:bl.y,vx:0,vy:0,life:.3,color:bl.type==='nuke'?'#ffd319':'#ff9e00',size:bl.type==='nuke'?5:3,trail:false,glow:bl.type==='nuke'?'#ffd319':'#ff9e00'});}bl.x+=bl.vx*dt;bl.y+=bl.vy*dt;bl.life-=dt;for(const e of enemies){if(e.dead||bl.hit.has(e))continue;if(e.type==='ghost'&&!e.visible)continue;if(Math.hypot(e.x-bl.x,e.y-bl.y)<e.r+5){damageEnemy(e,bl.dmg);bl.hit.add(e);sfx('hit');if(bl.crit&&player.perks&&player.perks.knock){const sp=Math.hypot(bl.vx,bl.vy)||1;e.x+=bl.vx/sp*26;e.y+=bl.vy/sp*26;}for(let i=0;i<5;i++){const a=Math.random()*Math.PI*2;particles.push({x:bl.x,y:bl.y,vx:Math.cos(a)*150,vy:Math.sin(a)*150,life:.3,color:bl.crit?'#ffd319':'#fff',size:2,trail:false});}if(bl.type==='missile'||bl.type==='nuke'){sfx(bl.type==='nuke'?'nuke':'explode');screenShake=Math.max(screenShake,bl.type==='nuke'?40:10);const n=bl.type==='nuke'?80:30;const cols=bl.type==='nuke'?['#ffd319','#ff9e00','#ff2a6d','#fff']:['#ff9e00','#ffd319','#ff2a6d'];for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=100+Math.random()*250;particles.push({x:bl.x,y:bl.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.5+Math.random()*.4,color:cols[Math.floor(Math.random()*cols.length)],size:3+Math.random()*4,trail:true});}for(const e2 of enemies){if(e2.dead||e2===e)continue;if(e2.type==='ghost'&&!e2.visible)continue;if(Math.hypot(e2.x-bl.x,e2.y-bl.y)<bl.aoe)damageEnemy(e2,bl.dmg*.6);}bl.life=0;break;}if(bl.pierce<=0){bl.life=0;break;}bl.pierce--;}}}
 bullets=bullets.filter(bl=>bl.life>0&&bl.x>-100&&bl.x<VW+100&&bl.y>-100&&bl.y<VH+100);
 for(const e of enemies){if(e.dead)continue;e.hitFlash=Math.max(0,e.hitFlash-dt);e.frozen=Math.max(0,(e.frozen||0)-dt);e.poisoned=Math.max(0,(e.poisoned||0)-dt);e.slowTimer=Math.max(0,(e.slowTimer||0)-dt);e.orbitCd=Math.max(0,(e.orbitCd||0)-dt);
  if(e.burn>0){e.burn-=dt;e.hp-=player.dmg*.25*dt;if(Math.random()<dt*6)particles.push({x:e.x+(Math.random()-.5)*e.r,y:e.y-Math.random()*e.r,vx:0,vy:-40,life:.4,color:'#ff9e00',size:2,trail:false,glow:'#ff9e00'});if(e.hp<=0&&!e.dead){e.dead=true;killEnemy(e);continue;}}
  if(e.type==='ghost'){e.phaseTimer-=dt;if(e.phaseTimer<=0){e.visible=!e.visible;e.phaseTimer=e.phaseCd;if(!e.visible){for(let i=0;i<8;i++){const a=Math.random()*Math.PI*2;particles.push({x:e.x,y:e.y,vx:Math.cos(a)*40,vy:Math.sin(a)*40,life:.4,color:'#d1f7ff',size:2,trail:false});}sfx('ghost');}}}
  if(e.type==='sniper'&&!e.bossType){e.shootTimer-=dt;const dp=Math.hypot(e.x-player.x,e.y-player.y);if(dp<250){const a=Math.atan2(e.y-player.y,e.x-player.x);e.x+=Math.cos(a)*e.speed*1.2*dt;e.y+=Math.sin(a)*e.speed*1.2*dt;}else if(dp>350){const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;}e.aiming=dp<500&&e.shootTimer<e.shootCd*.7;if(e.shootTimer<=0&&dp<500){e.shootTimer=e.shootCd;e.aiming=false;const ang=Math.atan2(player.y-e.y,player.x-e.x);if(eBullets.length<MAX_EBULLETS)eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*400,vy:Math.sin(ang)*400,dmg:e.dmg,life:3,r:7,sniper:true});sfx('sniper');particles.push({x:e.x,y:e.y,vx:0,vy:0,life:.3,color:'#ff2a6d',size:0,trail:false,glow:'#ff2a6d',laser:{x2:player.x,y2:player.y}});}continue;}
  if(e.type==='boss'){if(e.frozen>0)continue;e.phaseTimer-=dt;
   if(e.bossType==='architect'){const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;e.shootTimer-=dt;if(e.shootTimer<=0){e.shootTimer=2;const phase=Math.floor(gameTime/10)%3;if(phase===0){for(let i=0;i<24&&eBullets.length<MAX_EBULLETS;i++){const ang=(i/24)*Math.PI*2;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*180,vy:Math.sin(ang)*180,dmg:e.dmg*.5,life:3,r:7});}}else if(phase===1){for(let i=0;i<8&&eBullets.length<MAX_EBULLETS;i++){const ang=Math.random()*Math.PI*2;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*250,vy:Math.sin(ang)*250,dmg:e.dmg*.7,life:2.5,r:8});}}else{const base=Math.atan2(player.y-e.y,player.x-e.x);for(let i=0;i<12&&eBullets.length<MAX_EBULLETS;i++){const ang=base+(i-6)*.12;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*300,vy:Math.sin(ang)*300,dmg:e.dmg*.6,life:2,r:6});}}sfx('boss_architect');}}
   else if(e.bossType==='normal'){const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;e.shootTimer-=dt;if(e.shootTimer<=0){e.shootTimer=e.shootCd;const c=e.enhanced?20:12;for(let i=0;i<c&&eBullets.length<MAX_EBULLETS;i++){const ang=(i/c)*Math.PI*2;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*150,vy:Math.sin(ang)*150,dmg:e.dmg*.4,life:3,r:6});}sfx('shoot');}}
   else if(e.bossType==='twins'){e.spiralAngle+=dt*2;const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;e.shootTimer-=dt;if(e.shootTimer<=0){e.shootTimer=e.shootCd;for(let i=0;i<8&&eBullets.length<MAX_EBULLETS;i++){const ang=e.spiralAngle+(i/8)*Math.PI*2;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*180,vy:Math.sin(ang)*180,dmg:e.dmg*.35,life:2.5,r:5});}sfx('shoot');}}
   else if(e.bossType==='tank'){e.chargeTimer-=dt;if(e.charging){if(e.chargeTarget){const a=Math.atan2(e.chargeTarget.y-e.y,e.chargeTarget.x-e.x);e.x+=Math.cos(a)*e.speed*4*dt;e.y+=Math.sin(a)*e.speed*4*dt;if(Math.random()<.5)particles.push({x:e.x,y:e.y,vx:(Math.random()-.5)*30,vy:(Math.random()-.5)*30,life:.4,color:'#7df9ff',size:4,trail:false});}if(e.chargeTimer<=0){e.charging=false;e.chargeTimer=2;}}else{const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;if(e.chargeTimer<=0){e.charging=true;e.chargeTimer=1.5;e.chargeTarget={x:player.x,y:player.y};screenShake=Math.max(screenShake,15);for(let i=0;i<20;i++){const ang=Math.random()*Math.PI*2;particles.push({x:e.x+Math.cos(ang)*e.r,y:e.y+Math.sin(ang)*e.r,vx:Math.cos(ang)*80,vy:Math.sin(ang)*80,life:.5,color:'#ff9e00',size:3,trail:false});}}}e.shootTimer-=dt;if(e.shootTimer<=0&&!e.charging){e.shootTimer=4;const c=e.enhanced?16:10;for(let i=0;i<c&&eBullets.length<MAX_EBULLETS;i++){const ang=(i/c)*Math.PI*2;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*120,vy:Math.sin(ang)*120,dmg:e.dmg*.5,life:3,r:8});}sfx('shoot');}}
   else if(e.bossType==='sniper'){const dp=Math.hypot(e.x-player.x,e.y-player.y);if(dp<200){const a=Math.atan2(e.y-player.y,e.x-player.x);e.x+=Math.cos(a)*e.speed*1.5*dt;e.y+=Math.sin(a)*e.speed*1.5*dt;}else if(dp>300){const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*dt;e.y+=Math.sin(a)*e.speed*dt;}e.shootTimer-=dt;if(e.shootTimer<=0&&dp<450){e.shootTimer=e.shootCd;const base=Math.atan2(player.y-e.y,player.x-e.x),c=e.enhanced?7:5;for(let i=0;i<c&&eBullets.length<MAX_EBULLETS;i++){const ang=base+(i-(c-1)/2)*.15;eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*350,vy:Math.sin(ang)*350,dmg:e.dmg*.6,life:2.5,r:6,sniper:true});}sfx('sniper');particles.push({x:e.x,y:e.y,vx:0,vy:0,life:.3,color:'#ff2a6d',size:0,trail:false,glow:'#ff2a6d',laser:{x2:player.x,y2:player.y}});}}
   if(Math.hypot(e.x-player.x,e.y-player.y)<e.r+player.r){if(player.perks&&player.perks.thorns)damageEnemy(e,player.dmg*3*dt);damagePlayer(e.dmg*dt*2);}continue;}
  if(e.poisoned>0&&Math.random()<dt*3){damageEnemy(e,player.dmg*.2*player.dmgMult);particles.push({x:e.x,y:e.y,vx:(Math.random()-.5)*30,vy:-20,life:.5,color:'#76ff03',size:2,trail:false});}
  if(e.frozen>0)continue;const sm=e.slowTimer>0?.4:1;const a=Math.atan2(player.y-e.y,player.x-e.x);e.x+=Math.cos(a)*e.speed*sm*dt;e.y+=Math.sin(a)*e.speed*sm*dt;if(Math.hypot(e.x-player.x,e.y-player.y)<e.r+player.r){if(player.perks&&player.perks.thorns)damageEnemy(e,player.dmg*3*dt);damagePlayer(e.dmg*dt*2);}if(e.type==='shooter'){e.shootTimer-=dt;if(e.shootTimer<=0&&Math.hypot(e.x-player.x,e.y-player.y)<400){e.shootTimer=e.shootCd;const ang=Math.atan2(player.y-e.y,player.x-e.x);if(eBullets.length<MAX_EBULLETS)eBullets.push({x:e.x,y:e.y,vx:Math.cos(ang)*200,vy:Math.sin(ang)*200,dmg:e.dmg*.5,life:2,r:5});}}}
 enemies=enemies.filter(e=>!e.dead);
 for(const eb of eBullets){eb.x+=eb.vx*dt;eb.y+=eb.vy*dt;eb.life-=dt;if(Math.hypot(eb.x-player.x,eb.y-player.y)<eb.r+player.r){damagePlayer(eb.dmg);eb.life=0;if(eb.sniper)screenShake=Math.max(screenShake,15);}}
 eBullets=eBullets.filter(eb=>eb.life>0&&eb.x>-50&&eb.x<VW+50&&eb.y>-50&&eb.y<VH+50);
 const magR=player.magnetRange*eventMagnetMult();
 for(const o of xpOrbs){if(o.dead)continue;const d=Math.hypot(o.x-player.x,o.y-player.y);if(d<magR){const a=Math.atan2(player.y-o.y,player.x-o.x),pull=(350*(1-d/magR)+100)*((activeEvent&&activeEvent.type==='storm')?2:1);o.x+=Math.cos(a)*pull*dt;o.y+=Math.sin(a)*pull*dt;}if(d<player.r+8){o.dead=true;applyOrbEffect(o);let guard=0;while(player.xp>=player.xpNeeded&&guard<50){player.xp-=player.xpNeeded;player.level++;player.xpNeeded=Math.floor(player.xpNeeded*1.35)+2;if(player.level%5===0)perkQueue++;showLevelUp();guard++;}}}
 xpOrbs=xpOrbs.filter(o=>!o.dead);
 for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.trail){p.vx*=.92;p.vy*=.92;}if(p.text)p.vy-=20*dt;if(p.snow)p.vx+=(Math.random()-.5)*20*dt;if(p.follow&&player){p.x=player.x+(p.x-player.x)*.9;p.y=player.y+(p.y-player.y)*.9;}p.life-=dt;}
 particles=particles.filter(p=>p.life>0);const maxPart=Math.floor(700*settings.particles);if(particles.length>maxPart)particles.splice(0,particles.length-maxPart);
 checkRunAchievements();
 document.getElementById('hp').textContent=Math.max(0,Math.floor(player.hp));document.getElementById('mhp').textContent=player.maxHp;document.getElementById('hpfill').style.width=(player.hp/player.maxHp*100)+'%';document.getElementById('lvl').textContent=player.level;document.getElementById('xpfill').style.width=(player.xp/player.xpNeeded*100)+'%';document.getElementById('timer').textContent=fmtTime(gameTime);document.getElementById('killcount').textContent=kills;if(bosses.length){const bb=bosses[0];document.getElementById('bossfill').style.width=(bb.hp/bb.maxHp*100)+'%';}updateAbilitiesUI();}
function drawMenuBG(t){const W=VW,H=VH;const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0d0221');g.addColorStop(.5,'#16063a');g.addColorStop(.62,'#2b0a4e');g.addColorStop(1,'#01012b');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);for(let i=0;i<60;i++){const sx=(i*137.508)%W,sy=(i*89.7)%(H*.5);const tw=.4+.6*Math.abs(Math.sin(t*2+i));ctx.fillStyle=`rgba(209,247,255,${.25*tw})`;ctx.fillRect(sx,sy,2,2);}const sunY=H*.56,sunR=Math.min(120,W*.2);const sg=ctx.createLinearGradient(0,sunY-sunR,0,sunY+sunR);sg.addColorStop(0,'#ffd319');sg.addColorStop(.5,'#ff9e00');sg.addColorStop(.75,'#ff2a6d');sg.addColorStop(1,'#b967ff');ctx.save();ctx.shadowColor='#ff2a6d';ctx.shadowBlur=60;ctx.fillStyle=sg;ctx.beginPath();ctx.arc(W/2,sunY,sunR,0,Math.PI*2);ctx.fill();ctx.restore();ctx.fillStyle='#16063a';for(let i=0;i<7;i++){const yy=sunY-sunR+((i*26+t*30)%(sunR*2));ctx.fillRect(W/2-sunR,yy,sunR*2,4+i*1.5);}const horizon=H*.62;ctx.strokeStyle='rgba(255,42,109,.55)';ctx.lineWidth=1;ctx.shadowColor='#ff2a6d';ctx.shadowBlur=8;for(let i=0;i<22;i++){const p=((i/22)+(t*.12))%1;const y=horizon+Math.pow(p,2.4)*(H-horizon)*1.15;if(y>H)continue;ctx.globalAlpha=.15+p*.6;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}ctx.globalAlpha=1;for(let i=-12;i<=12;i++){ctx.globalAlpha=.35;ctx.beginPath();ctx.moveTo(W/2+i*30,horizon);ctx.lineTo(W/2+i*260,H);ctx.stroke();}ctx.globalAlpha=1;ctx.shadowBlur=0;ctx.strokeStyle='#05d9e8';ctx.lineWidth=2;ctx.shadowColor='#05d9e8';ctx.shadowBlur=14;ctx.beginPath();ctx.moveTo(0,horizon);ctx.lineTo(W,horizon);ctx.stroke();ctx.shadowBlur=0;}
function drawAmbient(t,b){const W=VW,H=VH;if(b.ambient==='dust'){for(let i=0;i<26;i++){const sx=(i*173.3)%W,sy=((i*97.7)+t*(14+(i%4)*8))%H;ctx.fillStyle=i%3===0?'rgba(255,42,109,.18)':'rgba(5,217,232,.16)';ctx.fillRect(sx,sy,2,2);}}else if(b.ambient==='embers'){for(let i=0;i<30;i++){const sx=(i*167.7)%W,sy=H-(((i*89.3)+t*(30+(i%5)*14))%(H+40));const fl=.4+.6*Math.abs(Math.sin(t*6+i*2));ctx.fillStyle=`rgba(255,158,0,${.25*fl})`;ctx.fillRect(sx+Math.sin(t*2+i)*8,sy,2,2);}}else if(b.ambient==='matrix'){for(let i=0;i<24;i++){const sx=(i*40.3)%W,sy=((i*131.7)+t*(80+(i%4)*40))%(H+60)-30;ctx.fillStyle=`rgba(118,255,3,${.12+.1*Math.abs(Math.sin(t*3+i))})`;ctx.fillRect(sx,sy,2,10+(i%3)*6);}}else if(b.ambient==='glitch'){for(let i=0;i<18;i++){const sx=(i*211.3)%W,sy=(i*167.9)%H;ctx.fillStyle=`rgba(185,103,255,${.15+.15*Math.abs(Math.sin(t*5+i*3))})`;ctx.fillRect(sx,sy,2,2);}const g=Math.sin(t*13.7)+Math.sin(t*7.3);if(g>1.85){for(let i=0;i<3;i++){const y=Math.random()*H;ctx.fillStyle='rgba(185,103,255,.06)';ctx.fillRect(0,y,W,2+Math.random()*6);}}}}
function drawGameBG(t,b){const W=VW,H=VH;const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,b.bg[0]);g.addColorStop(.5,b.bg[1]);g.addColorStop(1,b.bg[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);const off=(t*26)%48;ctx.lineWidth=1;for(let x=-off;x<W+48;x+=48){const br=((x/48)|0)%4===0;ctx.strokeStyle=br?b.gridB:b.gridA;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=-off;y<H+48;y+=48){const br=((y/48)|0)%4===0;ctx.strokeStyle=br?b.gridB:b.gridA;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}drawAmbient(t,b);if(activeEvent&&activeEvent.type==='storm'){ctx.strokeStyle='rgba(118,255,3,.28)';ctx.lineWidth=1;for(let i=0;i<16;i++){const sx=((i*97.3+t*320)%(W+200))-100,sy=(i*61.7)%H;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx-44,sy+14);ctx.stroke();}}}
function drawTerminal(t){if(!terminal)return;const T=terminal;ctx.save();ctx.translate(T.x,T.y);ctx.rotate(Math.PI/4);ctx.strokeStyle='#05d9e8';ctx.lineWidth=2;ctx.shadowColor='#05d9e8';ctx.shadowBlur=16;ctx.strokeRect(-14,-14,28,28);ctx.fillStyle='rgba(5,217,232,.2)';ctx.fillRect(-14,-14,28,28);ctx.restore();ctx.strokeStyle='#76ff03';ctx.lineWidth=4;ctx.shadowColor='#76ff03';ctx.shadowBlur=10;ctx.beginPath();ctx.arc(T.x,T.y,26,-Math.PI/2,-Math.PI/2+(T.progress/TERMINAL_CHANNEL)*Math.PI*2);ctx.stroke();ctx.shadowBlur=0;ctx.strokeStyle=`rgba(255,42,109,${.25+.25*Math.abs(Math.sin(t*5))})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(T.x,T.y,32,0,Math.PI*2);ctx.stroke();if(player&&Math.hypot(T.x-player.x,T.y-player.y)<TERMINAL_RADIUS){ctx.strokeStyle='rgba(5,217,232,.55)';ctx.lineWidth=2;ctx.setLineDash([6,6]);ctx.beginPath();ctx.moveTo(T.x,T.y);ctx.lineTo(player.x,player.y);ctx.stroke();ctx.setLineDash([]);}ctx.fillStyle='#05d9e8';ctx.font='bold 11px "Share Tech Mono",monospace';ctx.textAlign='center';ctx.fillText('HACK',T.x,T.y-38);}
function drawJoystick(){if(!joy.active)return;ctx.globalAlpha=.55;ctx.strokeStyle='#05d9e8';ctx.lineWidth=2;ctx.beginPath();ctx.arc(joy.bx,joy.by,52,0,Math.PI*2);ctx.stroke();const dx=joy.x-joy.bx,dy=joy.y-joy.by,len=Math.hypot(dx,dy)||1,cl=Math.min(len,48),nx=dx/len,ny=dy/len;ctx.fillStyle='rgba(5,217,232,.3)';ctx.beginPath();ctx.arc(joy.bx+nx*cl,joy.by+ny*cl,20,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#05d9e8';ctx.shadowColor='#05d9e8';ctx.shadowBlur=12;ctx.stroke();ctx.shadowBlur=0;ctx.globalAlpha=1;}
function render(t){ctx.save();const shk=settings.shake?screenShake:0;if(shk>0)ctx.translate((Math.random()-.5)*shk,(Math.random()-.5)*shk);if(state==='menu'||state==='charselect'||state==='achievements'||state==='settings'||state==='market'){drawMenuBG(t);ctx.restore();return;}drawGameBG(t,BIOMES[currentBiome]);drawTerminal(t);
 for(const p of particles){if(p.text||p.laser)continue;ctx.globalAlpha=Math.min(1,p.life*2);if(p.glow){ctx.fillStyle=p.glow;ctx.beginPath();ctx.arc(p.x,p.y,p.size*2.5,0,Math.PI*2);ctx.fill();}ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
 for(const p of particles){if(!p.laser)continue;ctx.strokeStyle='#ff2a6d';ctx.lineWidth=4;ctx.shadowColor='#ff2a6d';ctx.shadowBlur=20;ctx.globalAlpha=Math.min(1,p.life*5);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.laser.x2,p.laser.y2);ctx.stroke();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();ctx.shadowBlur=0;ctx.globalAlpha=1;}
 for(const o of xpOrbs){if(o.dead)continue;let color,glow,size;if(o.type==='xp'){color='#05d9e8';glow='#05d9e8';size=5;}else if(o.type==='gold'){color='#ffd319';glow='#ffd319';size=8;}else if(o.type==='hp'){color='#ff2a6d';glow='#ff2a6d';size=7;}else if(o.type==='lvl'){color='#b967ff';glow='#b967ff';size=9;}else{color='#76ff03';glow='#76ff03';size=7;}ctx.fillStyle=color;ctx.shadowColor=glow;ctx.shadowBlur=o.type==='xp'?10:20;
  if(o.type==='xp'){ctx.beginPath();ctx.arc(o.x,o.y,size,0,Math.PI*2);ctx.fill();}else if(o.type==='gold'){ctx.beginPath();for(let i=0;i<10;i++){const a=(i/10)*Math.PI*2-Math.PI/2+t*2,r=i%2===0?size:size*.45;const x=o.x+Math.cos(a)*r,y=o.y+Math.sin(a)*r;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.closePath();ctx.fill();}else if(o.type==='hp'){ctx.beginPath();ctx.arc(o.x-3,o.y-2,3,0,Math.PI*2);ctx.arc(o.x+3,o.y-2,3,0,Math.PI*2);ctx.moveTo(o.x-6,o.y-1);ctx.lineTo(o.x,o.y+5);ctx.lineTo(o.x+6,o.y-1);ctx.closePath();ctx.fill();}else if(o.type==='lvl'){ctx.beginPath();ctx.arc(o.x,o.y,size,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.fillRect(o.x-1,o.y-5,2,10);ctx.fillRect(o.x-5,o.y-1,10,2);}else{ctx.beginPath();ctx.moveTo(o.x-3,o.y-6);ctx.lineTo(o.x+2,o.y-1);ctx.lineTo(o.x-1,o.y-1);ctx.lineTo(o.x+3,o.y+6);ctx.lineTo(o.x-2,o.y+1);ctx.lineTo(o.x+1,o.y+1);ctx.closePath();ctx.fill();}ctx.shadowBlur=0;}
 for(const eb of eBullets){ctx.fillStyle=eb.sniper?'#ff2a6d':'#ff71a5';ctx.shadowColor='#ff2a6d';ctx.shadowBlur=eb.sniper?16:10;ctx.beginPath();ctx.arc(eb.x,eb.y,eb.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}
 for(const e of enemies){if(e.dead)continue;const isFrozen=e.frozen>0,isPoisoned=e.poisoned>0,isBurning=e.burn>0;if(e.type==='ghost')ctx.globalAlpha=e.visible?.75:.15;let color=e.hitFlash>0&&e.hp>0?'#fff':e.color;if(isFrozen)color='#7df9ff';else if(isPoisoned)color='#76ff03';else if(isBurning)color='#ff9e00';ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=e.type==='boss'?28:14;ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle=isFrozen?'#e0ffff':(isPoisoned?'#c6ff6e':(isBurning?'#ffd319':'rgba(255,255,255,.55)'));ctx.lineWidth=1.5;ctx.stroke();
  if(e.type==='boss'){ctx.strokeStyle='#ffd319';ctx.lineWidth=4;ctx.shadowColor='#ffd319';ctx.shadowBlur=16;ctx.stroke();ctx.shadowBlur=0;drawBossGlyph(e.bossType,e.x,e.y,e.r);if(e.enhanced){ctx.strokeStyle='rgba(255,42,109,.7)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(e.x,e.y,e.r+8+Math.sin(t*6)*3,0,Math.PI*2);ctx.stroke();}if(e.bossType==='tank'&&e.charging){ctx.strokeStyle='#ff9e00';ctx.lineWidth=3;ctx.beginPath();ctx.arc(e.x,e.y,e.r+5,0,Math.PI*2);ctx.stroke();}}
  if(e.elite){ctx.strokeStyle='#ffd319';ctx.lineWidth=3;ctx.shadowColor='#ffd319';ctx.shadowBlur=12;ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle='#ffd319';ctx.beginPath();ctx.moveTo(e.x-e.r+2,e.y-e.r-2);ctx.lineTo(e.x-e.r+5,e.y-e.r-8);ctx.lineTo(e.x-e.r+8,e.y-e.r-4);ctx.lineTo(e.x,e.y-e.r-10);ctx.lineTo(e.x+e.r-8,e.y-e.r-4);ctx.lineTo(e.x+e.r-5,e.y-e.r-8);ctx.lineTo(e.x+e.r-2,e.y-e.r-2);ctx.closePath();ctx.fill();}
  if(e.type==='ghost'){ctx.strokeStyle=e.visible?'#e0ffff':'#556';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);if(e.visible){ctx.fillStyle='#01012b';ctx.fillRect(e.x-4,e.y-3,2,3);ctx.fillRect(e.x+2,e.y-3,2,3);}}
  if(e.type==='sniper'&&!e.bossType&&e.aiming){ctx.strokeStyle='#ff2a6d';ctx.lineWidth=2;ctx.beginPath();ctx.arc(e.x,e.y,e.r+8+Math.sin(t*15)*3,0,Math.PI*2);ctx.stroke();}
  if(isFrozen){ctx.strokeStyle='#e0ffff';ctx.lineWidth=2;ctx.stroke();for(let i=0;i<4;i++){const a=(i/4)*Math.PI*2+t;ctx.fillStyle='#fff';ctx.fillRect(e.x+Math.cos(a)*(e.r+4)-1,e.y+Math.sin(a)*(e.r+4)-1,2,2);}}
  if(isPoisoned){ctx.strokeStyle='#76ff03';ctx.lineWidth=2;ctx.setLineDash([3,3]);ctx.stroke();ctx.setLineDash([]);}
  ctx.globalAlpha=1;
  if(e.type!=='boss'){const w=e.r*2;ctx.fillStyle='rgba(1,1,43,.8)';ctx.fillRect(e.x-e.r,e.y-e.r-9,w,4);ctx.fillStyle=isPoisoned?'#76ff03':(e.elite?'#ffd319':'#05d9e8');ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=6;ctx.fillRect(e.x-e.r,e.y-e.r-9,w*(e.hp/e.maxHp),4);ctx.shadowBlur=0;}}
 for(const bl of bullets){if(bl.type==='missile'){ctx.fillStyle='#ff9e00';ctx.shadowColor='#ff9e00';ctx.shadowBlur=14;ctx.beginPath();ctx.arc(bl.x,bl.y,6,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}else if(bl.type==='nuke'){ctx.fillStyle='#ffd319';ctx.shadowColor='#ffd319';ctx.shadowBlur=22;ctx.beginPath();ctx.arc(bl.x,bl.y,9,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}else if(bl.type==='minigun'){ctx.fillStyle='#ff9e00';ctx.shadowColor='#ff9e00';ctx.shadowBlur=8;ctx.beginPath();ctx.arc(bl.x,bl.y,3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}else{ctx.fillStyle=bl.crit?'#ffd319':'#e0ffff';ctx.shadowColor=bl.crit?'#ffd319':'#05d9e8';ctx.shadowBlur=bl.crit?16:9;ctx.beginPath();ctx.arc(bl.x,bl.y,bl.crit?5:3.5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}
 if(player){const blink=player.invuln>0&&player.shieldTime<=0&&Math.floor(player.invuln*20)%2===0;if(!blink){if(player.shieldTime>0){ctx.strokeStyle='rgba(5,217,232,.7)';ctx.lineWidth=3;ctx.shadowColor='#05d9e8';ctx.shadowBlur=26;ctx.beginPath();ctx.arc(player.x,player.y,player.r+10+Math.sin(t*8)*2,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0;}if(player.weapons.poison){ctx.strokeStyle='rgba(118,255,3,.35)';ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.beginPath();ctx.arc(player.x,player.y,player.poisonRadius||120,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}if(dmgBonusTimer>0){ctx.strokeStyle=`rgba(118,255,3,${.4+Math.sin(t*8)*.2})`;ctx.lineWidth=2;ctx.beginPath();ctx.arc(player.x,player.y,player.r+6,0,Math.PI*2);ctx.stroke();}ctx.save();ctx.translate(player.x,player.y);ctx.rotate(t*1.6);ctx.strokeStyle=player.charColor;ctx.lineWidth=2;ctx.shadowColor=player.charColor;ctx.shadowBlur=16;ctx.beginPath();for(let i=0;i<6;i++){const a=(i/6)*Math.PI*2;const x=Math.cos(a)*(player.r+6),y=Math.sin(a)*(player.r+6);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.closePath();ctx.stroke();ctx.restore();ctx.fillStyle=player.charColor;ctx.shadowColor=player.charColor;ctx.shadowBlur=22;ctx.beginPath();ctx.arc(player.x,player.y,player.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.arc(player.x,player.y,player.r*.4,0,Math.PI*2);ctx.fill();}if(player.perks&&player.perks.orbit){for(let i=0;i<3;i++){const ang=t*2.5+i*(Math.PI*2/3);const ox=player.x+Math.cos(ang)*60,oy=player.y+Math.sin(ang)*60;ctx.fillStyle='#05d9e8';ctx.shadowColor='#05d9e8';ctx.shadowBlur=12;ctx.beginPath();ctx.arc(ox,oy,6,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}if(player.passives.magnet||eventMagnetMult()>1){ctx.strokeStyle='rgba(5,217,232,.15)';ctx.beginPath();ctx.arc(player.x,player.y,player.magnetRange*eventMagnetMult(),0,Math.PI*2);ctx.stroke();}}
 for(const p of particles){if(!p.text)continue;ctx.globalAlpha=Math.min(1,p.life*2);ctx.fillStyle=p.color;ctx.font='bold 14px "Share Tech Mono",monospace';ctx.fillText(p.text,p.x-10,p.y);}ctx.globalAlpha=1;
 if(activeEvent&&activeEvent.type==='blackout'&&player){const g=ctx.createRadialGradient(player.x,player.y,90,player.x,player.y,Math.max(VW,VH)*.55);g.addColorStop(0,'rgba(1,1,43,0)');g.addColorStop(1,'rgba(1,1,43,.9)');ctx.fillStyle=g;ctx.fillRect(0,0,VW,VH);}
 drawJoystick();if(damageFlash>0){ctx.fillStyle=`rgba(255,42,109,${damageFlash*.3})`;ctx.fillRect(0,0,VW,VH);}ctx.restore();}

// === КНОПКИ ===
document.getElementById('startBtn').onclick=showCharSelect;
document.getElementById('backBtn').onclick=backToMenu;
document.getElementById('retryBtn').onclick=()=>{
  if(state!=='gameover')return;
  ngPlusLevel=0;dailyMode=false;hideAllOverlays();showCharSelect();
};
document.getElementById('goMenuBtn').onclick=()=>{
  if(state!=='gameover')return;
  ngPlusLevel=0;dailyMode=false;hideAllOverlays();showMenu();
};
document.getElementById('achBtn').onclick=showAchievements;
document.getElementById('achBackBtn').onclick=backFromAch;
document.getElementById('mktBtn').onclick=showMarket;
document.getElementById('mktBackBtn').onclick=backFromMarket;
document.getElementById('dailyBtn').onclick=showDailyIntro;
document.getElementById('dailyStartBtn').onclick=()=>{hideAllOverlays();showCharSelect();};
document.getElementById('dailyBackBtn').onclick=()=>{dailyMode=false;hideAllOverlays();showMenu();};
document.getElementById('setBtn').onclick=()=>{initAudio();openSettingsFromMenu();};
document.getElementById('resumeBtn').onclick=resumeGame;
document.getElementById('restartBtn').onclick=()=>{
  if(state!=='paused'&&state!=='gameover'&&state!=='victory')return;
  hideAllOverlays();
  restartGame();
};
document.getElementById('quitBtn').onclick=()=>{
  if(state!=='paused'&&state!=='gameover'&&state!=='victory')return;
  quitToMenu();
};
document.getElementById('pauseBtn').onclick=()=>{
  if(state==='playing') pauseGame();
  else if(state==='paused') resumeGame();
};
document.getElementById('abilityBtn').addEventListener('click',e=>{
  e.preventDefault();
  e.stopPropagation();
  initAudio();
  tryUseAbility();
}, {passive:true});
document.getElementById('ngBtn').onclick=()=>{
  if(state!=='victory')return;
  startNGPlus();
};
document.getElementById('vmenuBtn').onclick=()=>{
  if(state!=='victory')return;
  ngPlusLevel=0;dailyMode=false;hideAllOverlays();showMenu();
};
document.getElementById('rrRetryBtn').onclick=()=>{
  if(state!=='gameover'&&state!=='victory')return;
  document.getElementById('runreport').classList.remove('show');
  if(dailyMode){dailyMode=false;}
  ngPlusLevel=0;
  showCharSelect();
};
document.getElementById('rrMenuBtn').onclick=()=>{
  if(state!=='gameover'&&state!=='victory')return;
  document.getElementById('runreport').classList.remove('show');
  dailyMode=false;ngPlusLevel=0;
  showMenu();
};
window.addEventListener('resize',resizeCanvas);
window.addEventListener('orientationchange',()=>setTimeout(resizeCanvas,100));
function injectStaticIcons(){
 document.getElementById('startBtn').insertAdjacentHTML('afterbegin',icon('bolt',18));
 document.getElementById('dailyBtn').insertAdjacentHTML('afterbegin',icon('clock',14));
 document.getElementById('mktBtn').insertAdjacentHTML('afterbegin',icon('coin',14));
 document.getElementById('achBtn').insertAdjacentHTML('afterbegin',icon('trophy',14));
 document.getElementById('setBtn').insertAdjacentHTML('afterbegin',icon('gear',14));
 document.getElementById('abilityBtn').innerHTML=icon('bolt',32);
 document.getElementById('controlsText').innerHTML=isTouch?'<b>Слева</b> — виртуальный джойстик &nbsp;|&nbsp; <b>Тап справа</b> — способность<br>Атака автоматическая • Боссы каждые 5 волн • Пауза — кнопка ⏸<br>Импланты каждые 5 уровней • Взламывай терминалы':'<b>WASD</b> — движение &nbsp;|&nbsp; <b>SPACE</b> — способность &nbsp;|&nbsp; <b>ESC</b> — пауза<br>Атака автоматическая • Боссы каждые 5 волн • Районы каждые 5 волн<br>Импланты каждые 5 уровней • Взламывай терминалы';
}
loadSettings();loadUnlockedChars();loadAchievements();loadMarket();bindSettings();syncSettingsUI();injectStaticIcons();resizeCanvas();requestAnimationFrame(loop);
