'use client';
import {useEffect,useRef,useState} from 'react';
export const inks=[{name:'Midnight',value:'#1d2b50'},{name:'Deep forest',value:'#173b2c'},{name:'Aubergine',value:'#482443'},{name:'Neon pink',value:'#ff2288'},{name:'Electric blue',value:'#358cff'}];
export const papers=[{name:'Warm ivory',value:'#fff3dc'},{name:'Fresh mint',value:'#d9f5dc'},{name:'Soft peach',value:'#ffdbce'},{name:'Night blue',value:'#101827'},{name:'Charcoal plum',value:'#251a29'}];
function luminance(hex:string){const c=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722}
export function contrast(a:string,b:string){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
export function readablePair(ink:string,paper:string,preserve:'ink'|'paper'){
 if(contrast(ink,paper)>=4.5)return {ink,paper};
 if(preserve==='ink'){const best=[...papers].sort((a,b)=>contrast(ink,b.value)-contrast(ink,a.value))[0];return {ink,paper:best.value}}
 const best=[...inks].sort((a,b)=>contrast(b.value,paper)-contrast(a.value,paper))[0];return {ink:best.value,paper};
}
export default function ColourPicker(){
 const [ink,setInk]=useState(inks[0].value),[paper,setPaper]=useState(papers[0].value);
 const [open,setOpen]=useState<'ink'|'paper'|null>(null);
 const root=useRef<HTMLDivElement>(null),inkButton=useRef<HTMLButtonElement>(null),paperButton=useRef<HTMLButtonElement>(null);
 function apply(next:{ink:string;paper:string}){setInk(next.ink);setPaper(next.paper);document.documentElement.style.setProperty('--ink',next.ink);document.documentElement.style.setProperty('--paper',next.paper);try{localStorage.setItem('altria-room-colours',JSON.stringify(next))}catch{}}
 useEffect(()=>{let saved:{ink?:string;paper?:string}={};try{saved=JSON.parse(localStorage.getItem('altria-room-colours')||'{}')||{}}catch{}const ink=inks.some(c=>c.value===saved.ink)?saved.ink!:inks[0].value;const paper=papers.some(c=>c.value===saved.paper)?saved.paper!:papers[0].value;apply(readablePair(ink,paper,'ink'))},[]);
 useEffect(()=>{if(!open)return;const outside=(event:PointerEvent)=>{if(!root.current?.contains(event.target as Node))setOpen(null)};const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(null);(open==='ink'?inkButton:paperButton).current?.focus()}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape)}},[open]);
 function select(value:string){apply(readablePair(open==='ink'?value:ink,open==='paper'?value:paper,open||'ink'));(open==='ink'?inkButton:paperButton).current?.focus();setOpen(null)}
 return <div className="colour-picker" ref={root}><div className="colour-triggers"><button ref={inkButton} type="button" className="colour-trigger" aria-label="Choose ink colour" title="Ink colour" aria-expanded={open==='ink'} aria-controls="ink-colours" onClick={()=>setOpen(open==='ink'?null:'ink')}><span style={{backgroundColor:ink}}/></button><button ref={paperButton} type="button" className="colour-trigger" aria-label="Choose background colour" title="Background colour" aria-expanded={open==='paper'} aria-controls="paper-colours" onClick={()=>setOpen(open==='paper'?null:'paper')}><span style={{backgroundColor:paper}}/></button></div>{open&&<div id={open==='ink'?'ink-colours':'paper-colours'} className="colour-panel" role="group" aria-label={open==='ink'?'Ink colours':'Background colours'}><p>{open==='ink'?'Ink':'Background'}</p><div className="colour-options">{(open==='ink'?inks:papers).map(c=><button type="button" key={c.value} aria-label={c.name} aria-pressed={c.value===(open==='ink'?ink:paper)} title={c.name} onClick={()=>select(c.value)}><span style={{backgroundColor:c.value}}/>{c.value===(open==='ink'?ink:paper)&&<span className="colour-selected" aria-hidden="true">✓</span>}</button>)}</div></div>}</div>;
}
