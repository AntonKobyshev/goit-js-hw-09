const t={backgroundEl:document.querySelector("body"),startBtnEl:document.querySelector("[data-start]"),stopBtnEl:document.querySelector("[data-stop]")};let e=null;function r(){t.backgroundEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtnEl.addEventListener("click",(()=>{r(),e=setInterval(r,1e3),t.startBtnEl.setAttribute("disabled","true")})),t.stopBtnEl.addEventListener("click",(()=>{clearInterval(e),t.startBtnEl.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.ac8f66b6.js.map
