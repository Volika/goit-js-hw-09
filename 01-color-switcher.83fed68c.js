const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){n=setInterval(o,1e3),e.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,d.disabled=!0})),e.disabled=!1,d.disabled=!0;let n=null;function o(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.83fed68c.js.map