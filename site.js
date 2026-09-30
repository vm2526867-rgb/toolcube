const GA_ID="";
if(GA_ID){const s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA_ID)}
document.addEventListener("click",e=>{const a=e.target.closest("a[data-tool]");if(a&&window.gtag)gtag("event","tool_click",{tool_name:a.dataset.tool,tool_category:a.dataset.cat,page_path:location.pathname})});
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.addEventListener("mousemove",e=>{const c=e.target.closest&&e.target.closest(".card");if(!c||still)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateX(${-y*14}deg) rotateY(${x*14}deg)`});
document.addEventListener("mouseout",e=>{const c=e.target.closest&&e.target.closest(".card");if(c&&!c.contains(e.relatedTarget))c.style.transform=""});
const g=document.getElementById("grid"),q=document.getElementById("q");
if(g&&q){
const nz=s=>s.toLowerCase().replace(/[^a-z0-9]/g,"");
const lev=(a,b)=>{const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const x=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=x}}return d[b.length]};
const cards=[...g.querySelectorAll(".card")],pop=document.getElementById("pop"),ttl=document.getElementById("ttl"),sort=document.getElementById("sort"),none=document.getElementById("none"),base=ttl.textContent;let sc=0;
const run=()=>{const v=q.value.trim(),j=nz(v),k=v.toLowerCase().split(/\s+/).map(nz).filter(Boolean);let m;
if(v){m=cards.filter(c=>c.dataset.n.includes(j)||k.every(w=>c.dataset.h.includes(w)));
if(!m.length&&j.length>2)m=cards.filter(c=>lev(c.dataset.n,j)<=2||lev(c.dataset.n.slice(0,j.length),j)<=1);
const r=c=>c.dataset.n.startsWith(j)?0:c.dataset.n.includes(j)?1:2;m.sort((a,b)=>r(a)-r(b))}
else m=[...cards].sort(sort.value==="a"?(a,b)=>a.dataset.n<b.dataset.n?-1:1:(a,b)=>a.dataset.p-b.dataset.p||a.dataset.i-b.dataset.i);
cards.forEach(c=>c.hidden=true);m.forEach(c=>{c.hidden=false;g.appendChild(c)});
if(pop)pop.hidden=!!v;none.hidden=m.length>0;ttl.textContent=v?m.length+" result"+(m.length===1?"":"s")+' for "'+v+'"':base};
const go=()=>document.getElementById("all").scrollIntoView({behavior:"smooth",block:"start"});
q.oninput=()=>{run();if(q.value.trim()){if(!sc){go();sc=1}}else sc=0};
q.onkeydown=e=>{if(e.key==="Enter"){q.blur();go()}};sort.onchange=run}
