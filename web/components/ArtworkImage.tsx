'use client';
import type {ImgHTMLAttributes} from 'react';
export default function ArtworkImage(props:ImgHTMLAttributes<HTMLImageElement>){
 return <img {...props} className={['artwork-image',props.className].filter(Boolean).join(' ')} draggable={false} onContextMenu={e=>e.preventDefault()} onDragStart={e=>e.preventDefault()}/>;
}
