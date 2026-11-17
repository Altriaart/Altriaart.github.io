import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({root:'web',plugins:[react()],build:{outDir:'../dist',emptyOutDir:true},server:{host:'0.0.0.0',proxy:{'/backend':{target:'https://altria-yang-room.yangziyi96.chatgpt.site',changeOrigin:true,rewrite:path=>path.replace(/^\/backend/,'')}}}});
