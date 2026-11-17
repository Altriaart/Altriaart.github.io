import {build} from 'vite';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
await build({configFile:'web/vite.config.js'});
const html=await readFile('dist/index.html','utf8');
await writeFile('dist/404.html',html);
await writeFile('dist/.nojekyll','');
const response=await fetch('https://altria-yang-room.yangziyi96.chatgpt.site/api/content');
if(!response.ok)throw Error('Could not load published portfolio content');
const {projects}=await response.json();
const paths=['sketches','zines','paintings','sculptures-clay','owlpaca','about',...projects.map(p=>'projects/'+p.slug)];
for(const path of paths){if(!/^[a-z0-9/-]+$/.test(path))throw Error('Invalid project path');await mkdir('dist/'+path,{recursive:true});await writeFile('dist/'+path+'/index.html',html);}
console.log('Built public routes; content is refreshed live from the private editor service.');
