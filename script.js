'use strict';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canvas = document.querySelector('#orb');
const ctx = canvas.getContext('2d');
let paused = reducedMotion.matches, angle = 0, pointerX = 0, pointerY = 0, frame = 0;
const motionButton = document.querySelector('#motion-toggle');
function updateMotionLabel(){motionButton.textContent = paused ? 'Resume motion ▷' : 'Pause motion Ⅱ';motionButton.setAttribute('aria-pressed',String(paused));}
updateMotionLabel();
function sizeCanvas(){const box=canvas.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,2);canvas.width=box.width*dpr;canvas.height=box.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);drawOrb();}
function drawOrb(){if(!ctx)return;const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);const scale=Math.min(w,h)*.29;const points=[];const ax=.9+pointerY*.25,ay=angle+pointerX*.3;
 for(let ring=0;ring<66;ring++){const u=ring/66*Math.PI*2;for(let j=0;j<38;j++){const v=j/38*Math.PI*2;const radius=1+.39*Math.cos(v);let x=radius*Math.cos(u),y=radius*Math.sin(u),z=.39*Math.sin(v);const xx=x*Math.cos(ay)+z*Math.sin(ay);let zz=-x*Math.sin(ay)+z*Math.cos(ay);const yy=y*Math.cos(ax)-zz*Math.sin(ax);zz=y*Math.sin(ax)+zz*Math.cos(ax);const perspective=3.8/(3.8-zz);points.push({x:w*.51+xx*scale*perspective,y:h*.49+yy*scale*perspective,z:zz,r:(1.05+(zz+1.5)*.48)*perspective});}}
 points.sort((a,b)=>a.z-b.z);for(const p of points){const light=Math.max(0,Math.min(1,(p.z+1.5)/3));ctx.fillStyle=`rgba(${Math.round(170+85*light)},${Math.round(55+83*light)},${Math.round(19+46*light)},${.25+light*.75})`;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();}
 ctx.strokeStyle='#8a553444';ctx.lineWidth=.7;ctx.beginPath();ctx.ellipse(w*.5,h*.51,scale*1.63,scale*.43,-.45,0,Math.PI*2);ctx.stroke();
}
let last=0;function animate(time){frame=0;if(paused||document.hidden)return;angle+=Math.min(time-last,50)*.00014;last=time;drawOrb();frame=requestAnimationFrame(animate);}
function start(){if(!paused&&!frame&&!document.hidden){last=performance.now();frame=requestAnimationFrame(animate);}}
motionButton.addEventListener('click',()=>{paused=!paused;updateMotionLabel();if(paused){cancelAnimationFrame(frame);frame=0;}else start();});
canvas.addEventListener('pointermove',e=>{if(paused)return;const r=canvas.getBoundingClientRect();pointerX=(e.clientX-r.left)/r.width-.5;pointerY=(e.clientY-r.top)/r.height-.5;});
canvas.addEventListener('pointerleave',()=>{pointerX=pointerY=0;});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else start();});
reducedMotion.addEventListener('change',e=>{paused=e.matches;updateMotionLabel();if(paused){cancelAnimationFrame(frame);frame=0;drawOrb();}else start();});
new ResizeObserver(sizeCanvas).observe(canvas);start();
document.querySelector('#year').textContent=new Date().getFullYear();
function setTime(){document.querySelector('#local-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())+' IST';}setTime();setInterval(setTime,60000);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:.08});document.querySelectorAll('.section-heading,.project,.service-grid article,.about-copy').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
const projectRoutes={erp:'projects/erp.html',cars:'projects/cars.html',ml:'projects/ml.html'};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{window.location.href=projectRoutes[button.dataset.demo];}));
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#service').value=a.dataset.service;}));
document.querySelector('#email-draft').addEventListener('click',()=>{const form=document.querySelector('#contact-form');if(!form.reportValidity())return;const data=new FormData(form);const subject='Project enquiry: '+data.get('service');const body=`Hi Mohid,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`;window.location.href=`mailto:mohidalip@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email app has been requested. Please send the draft there. If it does not open, email mohidalip@gmail.com directly.';});
