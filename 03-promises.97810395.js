!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}r.Notify.init({useIcon:!1});const u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');document.querySelector(".form").addEventListener("submit",(e=>{for(let e=1;e<=a.value;e++){let t=Number(u.value)+(Number(l.value)*e-Number(l.value));t<=0&&(t=0),i(e,t).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}e.currentTarget.reset(),e.preventDefault()}))}();
//# sourceMappingURL=03-promises.97810395.js.map