const btn=document.getElementById("openBtn"),main=document.getElementById("contenido"),cover=document.getElementById("inicio");
const music=document.getElementById("bgMusic");
btn.addEventListener("click",()=>{
  main.classList.remove("hidden");
  music.volume=.72;
  music.play().catch(()=>{});
  cover.style.transition="opacity .6s";cover.style.opacity="0";
  setTimeout(()=>{cover.style.display="none";window.scrollTo(0,0);document.querySelector(".intro").classList.add("show")},600)
});
const start=new Date("2025-12-05T11:00:00-05:00");
function tick(){let t=Math.max(0,Math.floor((Date.now()-start.getTime())/1000));let d=Math.floor(t/86400);t%=86400;let h=Math.floor(t/3600);t%=3600;let m=Math.floor(t/60),s=t%60;document.getElementById("days").textContent=d;document.getElementById("hours").textContent=String(h).padStart(2,"0");document.getElementById("minutes").textContent=String(m).padStart(2,"0");document.getElementById("seconds").textContent=String(s).padStart(2,"0")}tick();setInterval(tick,1000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
const toggle=document.getElementById("musicToggle"),vol=document.getElementById("volume");
toggle.addEventListener("click",()=>{if(music.paused){music.play();toggle.textContent="❚❚ Pausar música"}else{music.pause();toggle.textContent="▶ Reanudar música"}});
vol.addEventListener("input",()=>music.volume=Number(vol.value));
