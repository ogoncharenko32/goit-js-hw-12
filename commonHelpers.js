import{a as p,i as l,S as x}from"./assets/vendor-ba070a68.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let i=1,c=15;const m=document.querySelector(".load-more-button"),h="44838304-f7fe04331650310c487eefb2b";p.defaults.baseURL="https://pixabay.com/api";async function L(o){i=1,m.style.display="none";try{const t=await p.get("/",{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:c}});return i++,m.style.display="block",t.data}catch(t){l.show({message:t.message,messageColor:"#fff",color:"#EF4040",position:"topCenter",timeout:5e3})}}async function C(o){try{const t=await p.get("/",{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:c}});return i++,t.data}catch(t){l.show({message:t.message,messageColor:"#fff",color:"#EF4040",position:"topCenter",timeout:5e3})}}function g(o){const t=document.querySelector("ul");t.classList.add("gallery");const r=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" style="width: 360px; height: 200px;" />
          <ul class="infobox">
            <li class="info">
              <h2 class="info-header">Likes</h2>
              <p class="info-text">${e.likes}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Views</h2>
              <p class="info-text">${e.views}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Comments</h2>
              <p class="info-text">${e.comments}</p>
            </li>
            <li class="info">
              <h2 class="info-header">Downloads</h2>
              <p class="info-text">${e.downloads}</p>
            </li>
          </ul>
        </a>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",r),new x(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function b(){const o=document.querySelector(".loader");o.style.display="block"}function w(){const o=document.querySelector(".loader");o.style.display="none"}const q=document.querySelector("form input");let u;const y=document.querySelector("form"),n=document.querySelector(".load-more-button");let d;y.addEventListener("submit",async o=>{o.preventDefault(),u=q.value;const t=document.querySelector("ul");t.classList.add("gallery"),t.innerHTML="",b();try{const r=await L(u);if(!r.total)l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",color:"#EF4040",position:"topRight",timeout:2500,iconColor:"#fff",maxWidth:"432px"}),n.style.display="none";else{d=r.totalHits;const a=Math.ceil(d/c);i>a&&(l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",color:"green",position:"topRight",timeout:4e3,iconColor:"#fff",maxWidth:"432px"}),n.style.display="none"),g(r.hits)}}catch(r){l.show({message:r.message,messageColor:"#fff",color:"#EF4040",position:"topCenter",timeout:5e3})}finally{w()}y.reset()});n.addEventListener("click",async o=>{o.preventDefault();const t=Math.ceil(d/c);n.style.display="none",b();try{const e=await C(u);g(e.hits)}catch(e){l.show({message:e,messageColor:"#fff",color:"#EF4040",position:"topCenter",timeout:5e3})}finally{w(),i>t?l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",color:"green",position:"topRight",timeout:4e3,iconColor:"#fff",maxWidth:"432px"}):n.style.display="block"}const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
