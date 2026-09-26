(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const g={name:"NEHNA",date:"28 September 2026",accessKeyHash:"efb1eec2c57d1cbebbd270cd1452d8ff285977c8e3871684718a4c93446b04c8",lockSubtitles:{teaser:"A little surprise is waiting for you.",instruction:"Enter the key to continue.",error:"That doesn't seem to be the right key.",welcome:"Welcome, NEHNA."},hero:{heading:"Happy Birthday, NEHNA.",subtitle:"28 September 2026",tagline:"Today is all about you."},intro:{heading:"A day worth celebrating.",text:"Another year, another collection of moments, experiences, little victories, unexpected laughs, and new things waiting ahead."},birthdayMessage:{heading:"A little birthday note.",paragraphs:["Wishing you the happiest of birthdays today, NEHNA! May this day bring a smile to your face and mark the beginning of a truly remarkable year ahead.","As you step into another chapter, I hope you take a moment to celebrate everything you've achieved, the growth you've embraced, and all the light you bring to the people around you.","Here's to new discoveries, quiet strength, great health, endless inspiration, and moments of joy in every season of the coming year."]},photos:[{id:"photo-2",image:"/images/hanami.png",title:"Hanami Haven",date:"2026",description:"The community we build together."}],wishes:[{icon:"✦",title:"More adventures",description:"New places to explore, fresh paths to walk, and inspiring horizons ahead."},{icon:"☀",title:"More reasons to smile",description:"Everyday moments filled with warmth, spontaneous laughter, and ease."},{icon:"✦",title:"More unforgettable moments",description:"Snapshots of joy that stay with you long after the day is done."},{icon:"★",title:"More things to be proud of",description:"Recognizing your worth, celebrating your progress, and honoring your journey."},{icon:"🌱",title:"More opportunities to grow",description:"Confidence to embrace new challenges and thrive in all you pursue."},{icon:"✧",title:"More happiness in the little things",description:"Finding quiet peace in simple rituals, good conversations, and serene days."}],finalMessage:{heading:"Once again...",mainTitle:"Happy Birthday, NEHNA.",subText:"Wishing you a beautiful year ahead.",signatureDate:"28.09.2026"},musicTrack:{title:"Atmospheric Reflections",src:""}},V="birthday_unlocked_session_2026";async function J(a){const i=a.trim(),c=new TextEncoder().encode(i),n=await window.crypto.subtle.digest("SHA-256",c);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function ee(a){if(!a)return!1;try{return(await J(a)).toLowerCase()===g.accessKeyHash.toLowerCase()}catch(i){return console.error("Security hash verification error:",i),!1}}function te(){try{return sessionStorage.getItem(V)==="true"}catch{return!1}}function _(a=!0){try{a?sessionStorage.setItem(V,"true"):sessionStorage.removeItem(V)}catch(i){console.warn("Session storage write error:",i)}}function ne(a="particle-canvas"){const i=document.getElementById(a);if(!i)return;const o=i.getContext("2d");let c,n=[],e=0,r=0,u={x:null,y:null,targetX:0,targetY:0};const v=window.matchMedia("(prefers-reduced-motion: reduce)");let w=v.matches;v.addEventListener("change",m=>{w=m.matches,w?(cancelAnimationFrame(c),o.clearRect(0,0,e,r)):L()});function p(){e=i.width=window.innerWidth,r=i.height=window.innerHeight,x()}function x(){n=[];const m=e<768?25:55,t=["rgba(245, 242, 235, ","rgba(223, 184, 115, ","rgba(220, 168, 180, ","rgba(180, 80, 100, "];for(let l=0;l<m;l++)n.push({x:Math.random()*e,y:Math.random()*r,radius:Math.random()*1.8+.6,baseColor:t[Math.floor(Math.random()*t.length)],alpha:Math.random()*.4+.1,speedY:-(Math.random()*.35+.1),speedX:(Math.random()-.5)*.2,pulseSpeed:Math.random()*.02+.005,pulseAngle:Math.random()*Math.PI*2})}function E(m){w||(u.targetX=(m.clientX-e/2)*.03,u.targetY=(m.clientY-r/2)*.03)}function b(){o.clearRect(0,0,e,r),u.x+=(u.targetX-(u.x||0))*.05,u.y+=(u.targetY-(u.y||0))*.05;for(let m=0;m<n.length;m++){const t=n[m];t.pulseAngle+=t.pulseSpeed;const l=Math.max(.05,t.alpha+Math.sin(t.pulseAngle)*.15);t.y+=t.speedY,t.x+=t.speedX,t.y<-10&&(t.y=r+10,t.x=Math.random()*e),t.x<-10&&(t.x=e+10),t.x>e+10&&(t.x=-10);const s=t.x+(u.x||0),y=t.y+(u.y||0);o.beginPath();const f=o.createRadialGradient(s,y,0,s,y,t.radius*3);f.addColorStop(0,`${t.baseColor}${l})`),f.addColorStop(1,`${t.baseColor}0)`),o.fillStyle=f,o.arc(s,y,t.radius*3,0,Math.PI*2),o.fill(),o.beginPath(),o.fillStyle=`${t.baseColor}${l*1.5})`,o.arc(s,y,t.radius,0,Math.PI*2),o.fill()}w||(c=requestAnimationFrame(b))}function L(){w||(cancelAnimationFrame(c),b())}return window.addEventListener("resize",p),window.addEventListener("mousemove",E),p(),L(),{destroy(){window.removeEventListener("resize",p),window.removeEventListener("mousemove",E),cancelAnimationFrame(c)}}}function ie(a){const i=document.getElementById("lightbox-modal"),o=document.getElementById("lightbox-img"),c=document.getElementById("lightbox-title"),n=document.getElementById("lightbox-date"),e=document.getElementById("lightbox-desc"),r=document.getElementById("lightbox-counter"),u=document.getElementById("lightbox-close"),v=document.getElementById("lightbox-prev"),w=document.getElementById("lightbox-next");if(!i||!o||!a||a.length===0)return{open:()=>{},close:()=>{}};let p=0,x=0,E=0;function b(){const d=a[p];d&&(o.style.opacity="0",o.style.transform="scale(0.96)",setTimeout(()=>{o.src=d.image,o.alt=d.title||"Memory photo",c.textContent=d.title||"",n.textContent=d.date||"",e.textContent=d.description||"",r&&(r.textContent=`${p+1} / ${a.length}`),o.style.opacity="1",o.style.transform="scale(1)"},150))}function L(d=0){p=(d+a.length)%a.length,i.classList.add("active"),i.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",b()}function m(){i.classList.remove("active"),i.setAttribute("aria-hidden","true"),document.body.style.overflow=""}function t(){p=(p-1+a.length)%a.length,b()}function l(){p=(p+1)%a.length,b()}function s(d){i.classList.contains("active")&&(d.key==="Escape"&&m(),d.key==="ArrowLeft"&&t(),d.key==="ArrowRight"&&l())}function y(d){i.classList.contains("active")&&(x=d.changedTouches[0].screenX)}function f(d){i.classList.contains("active")&&(E=d.changedTouches[0].screenX,h())}function h(){const I=E-x;Math.abs(I)>40&&(I<0?l():t())}return u&&u.addEventListener("click",m),v&&v.addEventListener("click",t),w&&w.addEventListener("click",l),i.addEventListener("click",d=>{(d.target===i||d.target.classList.contains("lightbox-backdrop"))&&m()}),window.addEventListener("keydown",s),i.addEventListener("touchstart",y,{passive:!0}),i.addEventListener("touchend",f,{passive:!0}),{open:L,close:m,next:l,prev:t}}function oe(){const a=document.getElementById("music-control-btn"),i=document.getElementById("music-control-label"),o=document.getElementById("music-control-icon");if(!a)return;const c="birthday_audio_playing_state";let n=!1,e=null,r=null,u=[],v=!1,w=null;function p(){if(!v)try{let h=function(d){u.forEach(I=>{try{I.stop(e.currentTime+2)}catch{}}),u=[],d.forEach(I=>{const k=e.createOscillator(),T=e.createGain();k.type="sine",k.frequency.setValueAtTime(I,e.currentTime),k.detune.setValueAtTime((Math.random()-.5)*8,e.currentTime),T.gain.setValueAtTime(.001,e.currentTime),T.gain.exponentialRampToValueAtTime(.08,e.currentTime+1.5),T.gain.exponentialRampToValueAtTime(.001,e.currentTime+5.5),k.connect(T),T.connect(r),k.start(e.currentTime),u.push(k)})};var l=h;const s=window.AudioContext||window.webkitAudioContext;e||(e=new s),e.state==="suspended"&&e.resume(),r=e.createGain(),r.gain.setValueAtTime(.001,e.currentTime),r.gain.exponentialRampToValueAtTime(.18,e.currentTime+3),r.connect(e.destination);const y=[[220,261.63,329.63,392,493.88],[174.61,220,261.63,329.63,392],[261.63,329.63,392,493.88,587.33],[196,246.94,293.66,392,440]];let f=0;h(y[f]),w=setInterval(()=>{f=(f+1)%y.length,h(y[f])},6e3),v=!0}catch(s){console.warn("Web Audio synth error:",s)}}function x(){v&&(w&&clearInterval(w),r&&e&&(r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>{u.forEach(l=>{try{l.stop()}catch{}}),u=[],v=!1},1600)))}function E(){n?(a.classList.add("playing"),a.setAttribute("aria-pressed","true"),i&&(i.textContent="Pause Music"),o&&(o.innerHTML='<span class="equalizer-bar"></span><span class="equalizer-bar"></span><span class="equalizer-bar"></span>')):(a.classList.remove("playing"),a.setAttribute("aria-pressed","false"),i&&(i.textContent="♪ Music"),o&&(o.textContent="♪"))}function b(){n=!0;try{sessionStorage.setItem(c,"true")}catch{}p(),E()}function L(){n=!1;try{sessionStorage.setItem(c,"false")}catch{}x(),E()}function m(){n?L():b()}if(a.addEventListener("click",m),sessionStorage.getItem(c)==="true"){const l=()=>{sessionStorage.getItem(c)==="true"&&!n&&b(),window.removeEventListener("click",l),window.removeEventListener("keydown",l)};window.addEventListener("click",l,{once:!0}),window.addEventListener("keydown",l,{once:!0})}return E(),{play:b,pause:L,toggle:m}}function se(a={}){const{onExtinguished:i}=a,o=document.getElementById("cake-screen"),c=document.getElementById("cake-svg-wrapper"),n=document.getElementById("blow-candles-btn");if(document.getElementById("cake-subtitle"),!o||!c)return{show:()=>{},hide:()=>{}};let e=!1,r=null,u=null;function v(){c.innerHTML=`
      <svg viewBox="0 0 320 320" width="100%" height="100%" class="cake-svg" aria-label="Birthday Cake with 3 Candles">
        <defs>
          <!-- Candle Flame Glow Filter -->
          <radialGradient id="flameGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffea9f" stop-opacity="0.9"/>
            <stop offset="40%" stop-color="#ff9e00" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#e63946" stop-opacity="0"/>
          </radialGradient>

          <!-- Cake Plate Shadow -->
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000000" flood-opacity="0.75"/>
          </filter>

          <!-- Gold Pearl Gradient -->
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f3d89d"/>
            <stop offset="50%" stop-color="#dfb873"/>
            <stop offset="100%" stop-color="#9e7c3b"/>
          </linearGradient>

          <!-- Cream Frosting Gradient -->
          <linearGradient id="creamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#ede6d8"/>
          </linearGradient>

          <!-- Dark Chocolate Gradient -->
          <linearGradient id="chocGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a171d"/>
            <stop offset="100%" stop-color="#140a0e"/>
          </linearGradient>
        </defs>

        <!-- Ambient Candlelight Base Glow -->
        <circle id="ambient-glow" cx="160" cy="85" r="90" fill="url(#flameGlowGrad)" class="ambient-candle-glow" />

        <g filter="url(#shadowFilter)">
          <!-- Plate Base -->
          <ellipse cx="160" cy="275" rx="135" ry="18" fill="url(#goldGrad)" opacity="0.9" />
          <ellipse cx="160" cy="272" rx="125" ry="14" fill="#181822" />

          <!-- Bottom Tier (Dark Chocolate with Gold Pearls) -->
          <rect x="55" y="195" width="210" height="70" rx="12" fill="url(#chocGrad)" />
          <!-- Cream Drips on Bottom Tier -->
          <path d="M55,195 Q70,215 85,195 T115,195 T145,218 T175,195 T205,212 T235,195 T265,195 L265,195 L55,195 Z" fill="url(#creamGrad)" />

          <!-- Gold Accent Pearls -->
          <circle cx="75" cy="245" r="3.5" fill="url(#goldGrad)" />
          <circle cx="115" cy="248" r="3.5" fill="url(#goldGrad)" />
          <circle cx="160" cy="250" r="4" fill="url(#goldGrad)" />
          <circle cx="205" cy="248" r="3.5" fill="url(#goldGrad)" />
          <circle cx="245" cy="245" r="3.5" fill="url(#goldGrad)" />

          <!-- Top Tier (Cream Frosting with Burgundy Ribbon) -->
          <rect x="85" y="135" width="150" height="62" rx="10" fill="url(#creamGrad)" />
          <!-- Burgundy Ribbon Band -->
          <rect x="85" y="180" width="150" height="12" fill="#6e1a28" />

          <!-- Frosting Swirl Top Border -->
          <path d="M85,135 Q100,143 115,135 T145,143 T175,135 T205,143 T235,135" fill="none" stroke="#dfb873" stroke-width="3" />
        </g>

        <!-- CANDLE 1 (Left) -->
        <g class="candle-group" data-candle="1">
          <rect x="110" y="95" width="8" height="42" rx="3" fill="url(#goldGrad)" />
          <line x1="114" y1="95" x2="114" y2="88" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-1">
            <ellipse cx="114" cy="80" rx="14" ry="20" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M114,66 Q122,80 114,86 Q106,80 114,66 Z" fill="#ffb703" class="flame-body" />
            <path d="M114,72 Q118,80 114,84 Q110,80 114,72 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- CANDLE 2 (Center) -->
        <g class="candle-group" data-candle="2">
          <rect x="156" y="85" width="8" height="52" rx="3" fill="url(#goldGrad)" />
          <line x1="160" y1="85" x2="160" y2="77" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-2">
            <ellipse cx="160" cy="68" rx="16" ry="22" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M160,53 Q169,68 160,75 Q151,68 160,53 Z" fill="#ffb703" class="flame-body" />
            <path d="M160,60 Q164,68 160,73 Q156,68 160,60 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- CANDLE 3 (Right) -->
        <g class="candle-group" data-candle="3">
          <rect x="202" y="95" width="8" height="42" rx="3" fill="url(#goldGrad)" />
          <line x1="206" y1="95" x2="206" y2="88" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-3">
            <ellipse cx="206" cy="80" rx="14" ry="20" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M206,66 Q214,80 206,86 Q198,80 206,66 Z" fill="#ffb703" class="flame-body" />
            <path d="M206,72 Q210,80 206,84 Q202,80 206,72 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- Dynamic Smoke Particle Group -->
        <g id="smoke-particles-group"></g>
        <!-- Dynamic Golden Sparks Group -->
        <g id="gold-sparks-group"></g>
      </svg>
    `}function w(){const t=document.getElementById("smoke-particles-group");if(!t)return;[{x:114,y:88},{x:160,y:77},{x:206,y:88}].forEach((s,y)=>{for(let f=0;f<4;f++){const h=document.createElementNS("http://www.w3.org/2000/svg","circle");h.setAttribute("cx",s.x+(Math.random()-.5)*4),h.setAttribute("cy",s.y),h.setAttribute("r",Math.random()*2+2),h.setAttribute("fill","rgba(215, 210, 200, 0.6)"),h.classList.add("smoke-particle"),h.style.animationDelay=`${y*.1+f*.15}s`,t.appendChild(h)}})}function p(){const t=document.getElementById("gold-sparks-group");if(t)for(let l=0;l<16;l++){const s=document.createElementNS("http://www.w3.org/2000/svg","circle"),y=l/16*Math.PI*2,f=Math.random()*40+20,h=160+Math.cos(y)*f,d=120+Math.sin(y)*f;s.setAttribute("cx","160"),s.setAttribute("cy","120"),s.setAttribute("r",Math.random()*2+1),s.setAttribute("fill","#dfb873"),s.classList.add("gold-spark-particle"),s.style.setProperty("--target-x",`${h}px`),s.style.setProperty("--target-y",`${d}px`),t.appendChild(s)}}function x(){if(e)return;e=!0,b();const t=c.querySelectorAll(".flame-container"),l=document.getElementById("ambient-glow");t.forEach(s=>s.classList.add("extinguishing")),n&&(n.disabled=!0),setTimeout(()=>{t.forEach(s=>s.classList.add("extinguished")),l&&(l.style.opacity="0"),w(),p(),setTimeout(()=>{o.classList.add("fade-out"),setTimeout(()=>{o.classList.remove("active","fade-out"),typeof i=="function"&&i()},500)},1400)},500)}async function E(){var l,s;if((s=(l=window.navigator)==null?void 0:l.mediaDevices)!=null&&s.getUserMedia)try{let k=function(){if(e)return;h.getByteFrequencyData(I);let T=0;for(let P=0;P<d;P++)T+=I[P];T/d>65?x():requestAnimationFrame(k)};var t=k;u=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});const y=window.AudioContext||window.webkitAudioContext;r=new y;const f=r.createMediaStreamSource(u),h=r.createAnalyser();h.fftSize=256,f.connect(h);const d=h.frequencyBinCount,I=new Uint8Array(d);k()}catch{}}function b(){if(u&&(u.getTracks().forEach(t=>t.stop()),u=null),r&&r.state!=="closed")try{r.close()}catch{}}function L(){e=!1,v(),o.classList.add("active"),c.addEventListener("click",x),n&&(n.disabled=!1,n.addEventListener("click",x)),E()}function m(){o.classList.remove("active"),b()}return{show:L,hide:m,extinguishCandles:x}}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("access-lock-screen"),i=document.getElementById("lock-form"),o=document.getElementById("lock-key-input"),c=document.getElementById("lock-error-msg"),n=document.getElementById("welcome-toast"),e=document.getElementById("welcome-msg"),r=document.getElementById("main-header"),u=document.getElementById("main-content"),v=document.getElementById("relock-btn"),w=document.getElementById("hero-heading"),p=document.getElementById("hero-subtitle"),x=document.getElementById("hero-tagline"),E=document.getElementById("intro-heading"),b=document.getElementById("intro-text"),L=document.getElementById("note-heading"),m=document.getElementById("note-body"),t=document.getElementById("photos-heading");document.getElementById("photos-subtitle");const l=document.getElementById("photos-grid"),s=document.getElementById("timeline"),y=document.getElementById("timeline-container"),f=document.getElementById("nav-timeline-item"),h=document.getElementById("wishes-grid"),d=document.getElementById("final-heading"),I=document.getElementById("final-main-title"),k=document.getElementById("final-subtext"),T=document.getElementById("final-sign-date");ne("particle-canvas");const R=ie(g.photos||[]);oe();const P=se({onExtinguished:()=>{X(!0)}});function U(){var B,G,O,$,F,q,M,H,C,N,z,Y;w&&(w.textContent=(B=g.hero)==null?void 0:B.heading),p&&(p.textContent=(G=g.hero)==null?void 0:G.subtitle),x&&(x.textContent=(O=g.hero)==null?void 0:O.tagline),E&&(E.textContent=($=g.intro)==null?void 0:$.heading),b&&(b.textContent=(F=g.intro)==null?void 0:F.text),L&&(L.textContent=(q=g.birthdayMessage)==null?void 0:q.heading),m&&((M=g.birthdayMessage)!=null&&M.paragraphs)&&(m.innerHTML=g.birthdayMessage.paragraphs.map(S=>`<p class="message-paragraph">${S}</p>`).join("")),t&&g.photos&&(l.innerHTML=g.photos.map((A,D)=>`
        <article class="memory-card reveal" data-index="${D}" role="button" tabindex="0" aria-label="View photo: ${A.title}">
          <div class="memory-img-wrapper">
            <img src="${A.image}" alt="${A.title}" class="memory-img" loading="lazy" />
          </div>
          <div class="memory-body">
            <div class="memory-header">
              <h3 class="memory-title">${A.title}</h3>
              ${A.date?`<span class="memory-date">${A.date}</span>`:""}
            </div>
            ${A.description?`<p class="memory-desc">${A.description}</p>`:""}
          </div>
        </article>
      `).join(""),l.querySelectorAll(".memory-card").forEach(A=>{const D=parseInt(A.getAttribute("data-index"),10);A.addEventListener("click",()=>R.open(D)),A.addEventListener("keydown",Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),R.open(D))})})),g.timeline&&g.timeline.length>0?(s&&(s.style.display=""),f&&(f.style.display=""),y&&(y.innerHTML=g.timeline.map(S=>`
          <div class="timeline-item reveal">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-content">
              <span class="timeline-date">${S.date}</span>
              <h3 class="timeline-title">${S.title}</h3>
              <p class="timeline-desc">${S.description}</p>
            </div>
          </div>
        `).join(""))):(s&&(s.style.display="none"),f&&(f.style.display="none")),h&&g.wishes&&(h.innerHTML=g.wishes.map(S=>`
        <div class="wish-card reveal">
          <span class="wish-icon">${S.icon||"✦"}</span>
          <h3 class="wish-title">${S.title}</h3>
          <p class="wish-desc">${S.description}</p>
        </div>
      `).join("")),d&&(d.textContent=(H=g.finalMessage)==null?void 0:H.heading),I&&(I.textContent=(C=g.finalMessage)==null?void 0:C.mainTitle),k&&(k.textContent=(N=g.finalMessage)==null?void 0:N.subText),T&&(T.textContent=(z=g.finalMessage)==null?void 0:z.signatureDate),e&&(e.textContent=(Y=g.lockSubtitles)==null?void 0:Y.welcome)}function j(){n&&(n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("hidden")},3500))}function X(B=!0){_(!0),B?(a.classList.add("unlocked"),setTimeout(()=>{r.classList.remove("hidden"),u.classList.remove("hidden"),W(),j()},300)):(a.classList.add("unlocked"),r.classList.remove("hidden"),u.classList.remove("hidden"),W())}function K(){_(!1),r.classList.add("hidden"),u.classList.add("hidden"),a.classList.remove("unlocked"),P.hide(),n&&n.classList.add("hidden"),o&&(o.value=""),c&&(c.textContent="",c.classList.remove("visible"))}async function Z(B){var $;B&&B.preventDefault();const G=o.value.trim();if(!G)return;await ee(G)?(c&&(c.textContent="",c.classList.remove("visible")),a.classList.add("unlocked"),P.show()):(o.classList.add("shake"),c&&(c.textContent=($=g.lockSubtitles)==null?void 0:$.error,c.classList.add("visible")),setTimeout(()=>{o.classList.remove("shake")},500))}i&&i.addEventListener("submit",Z),v&&v.addEventListener("click",K);function W(){const B=document.querySelectorAll(".reveal"),G={root:null,threshold:.12,rootMargin:"0px 0px -40px 0px"},O=new IntersectionObserver((M,H)=>{M.forEach(C=>{C.isIntersecting&&(C.target.classList.add("active"),H.unobserve(C.target))})},G);B.forEach(M=>O.observe(M));const $=document.querySelectorAll("section[id]"),F=document.querySelectorAll(".nav-link"),q=new IntersectionObserver(M=>{M.forEach(H=>{if(H.isIntersecting){const C=H.target.getAttribute("id");F.forEach(N=>{N.getAttribute("href")===`#${C}`?N.classList.add("active"):N.classList.remove("active")})}})},{threshold:.35});$.forEach(M=>q.observe(M))}U(),te()&&X(!1)});
