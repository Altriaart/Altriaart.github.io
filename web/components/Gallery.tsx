import {type Project} from '../lib/content';
import Study from './Study';
import ProjectMedia from './ProjectMedia';
export default function Gallery({project:p}:{project:Project}){
 return <div className={'art-gallery '+(!p.images.length?'study-gallery':'')}>{p.images.length?p.images.map((im,i)=><figure key={im.url}><div className="art-display"><ProjectMedia media={im} eager={i===0}/></div>{im.caption&&<figcaption>{im.caption}</figcaption>}</figure>):<><Study kind={p.category} index={Number(p.id.split('-')[1]||0)}/><p>Illustrative preview · replace with your artwork in the studio editor</p></>}</div>;
}
