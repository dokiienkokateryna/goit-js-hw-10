import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",u);function u(o){o.preventDefault();const n=document.querySelector('input[name="delay"]'),t=parseInt(n.value),s=document.querySelector('input[name="state"]:checked').value;new Promise((e,m)=>{s==="fulfilled"?setTimeout(()=>{e(t)},t):s==="rejected"&&setTimeout(()=>{m(t)},t)}).then(e=>{i.success({title:"Fulfilled promise",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"Rejected promise",message:`Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map