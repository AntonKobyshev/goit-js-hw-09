var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const l={body:document.querySelector("body"),form:document.querySelector("form.form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function i(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}l.body.style.backgroundColor="#f7eff4",l.form.addEventListener("click",(function(e){e.preventDefault();let o=Number(l.delay.value),t=Number(l.step.value),n=Number(l.amount.value);for(let e=1;e<=n;e+=1){i(e,o+t*e).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.d1ec3315.js.map