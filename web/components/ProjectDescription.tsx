export default function ProjectDescription({text,slug}:{text:string;slug:string}){
 if(slug==='sketchbook-display-for-jinny-street-gallery'){
  const url=text.match(/https?:\/\/(?:www\.)?jinnystreetgallery\.com\/[^\s]+/i)?.[0];
  if(url){
   const copy=text.replace(url,'').trim();
   const title=copy.match(/Notes? From Jinny/i);
   const link=<a href={url} target="_blank" rel="noopener noreferrer">Note from jinny</a>;
   if(title?.index!==undefined)return <p>{copy.slice(0,title.index)}{link}{copy.slice(title.index+title[0].length)}</p>;
   return <p>{copy}{' '}{link}</p>;
  }
 }
 return <p>{text}</p>;
}
