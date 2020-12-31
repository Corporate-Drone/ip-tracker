(()=>{"use strict";const e=function(e){if(e){let t=document.querySelector("h1"),i=document.createElement("div");i.setAttribute("id","map"),t.after(i);let o=L.map("map").setView([e.latitude,e.longitude],15);L.esri.basemapLayer("Topographic").addTo(o),L.circle([e.latitude,e.longitude],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:500}).addTo(o).bindPopup(`${e.address} is located in this   area.`)}else{let e=L.map("map").setView([51.505,-.09],13);L.esri.basemapLayer("Topographic").addTo(e)}},t=document.querySelector("#ip-data"),i=document.querySelector("#location-data"),o=document.querySelector("#timezone-data"),a=document.querySelector("#isp-data");class n{constructor(e,t,i,o,a,n){this.address=e,this.city=t,this.latitude=Math.round(100*i)/100,this.longitude=Math.round(100*o)/100,this.timezone=a,this.isp=n}}const r=document.querySelector("#ip-submit"),c=document.querySelector("#submit");e(),c.addEventListener("click",(c=>{c.preventDefault(),/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(r.value)?(map.remove(),async function(r){try{const c=await fetch(`https://geo.ipify.org/api/v1?apiKey=at_8BoXOf1PmErD1IVaAVoBIJ0kMwc6Q&ipAddress=${r}`,{mode:"cors"}),s=await c.json();console.log(s);let l=new n(s.ip,s.location.city,s.location.lat,s.location.lng,s.location.timezone,s.isp);!function(e){t.innerText=e.address,i.innerText=e.city,o.innerText=e.timezone,a.innerText=e.isp}(l),e(l)}catch(e){console.log(e)}}(r.value),r.value=""):alert("Please enter a valid IP address!")}))})();