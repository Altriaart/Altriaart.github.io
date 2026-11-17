'use client';
import type {Project} from '../lib/content';
import ArtworkImage from './ArtworkImage';
export default function ProjectMedia({media,preview=false,eager=false}:{media:Project['images'][number];preview?:boolean;eager?:boolean}){
 if(media.kind==='video')return <video className="project-video" src={preview?undefined:media.url} poster={media.poster} controls={!preview} playsInline preload={preview?'none':'metadata'} controlsList="nodownload" disablePictureInPicture aria-label={media.alt||'Stop-motion video'} onContextMenu={e=>e.preventDefault()}>{!preview&&'Your browser cannot play this video.'}</video>;
 return <ArtworkImage src={media.url} alt={media.alt} loading={eager?'eager':'lazy'}/>;
}
