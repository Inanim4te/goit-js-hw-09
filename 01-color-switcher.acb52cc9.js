function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;r.setAttribute("disabled",""),e.addEventListener("click",(()=>{document.body.style.backgroundColor=t(),d=setInterval((()=>{document.body.style.backgroundColor=t()}),1e3),r.removeAttribute("disabled"),e.setAttribute("disabled","")})),r.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.acb52cc9.js.map