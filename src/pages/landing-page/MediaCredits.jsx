import PageLayout from '../../shared/components/PageLayout';
import modelCredits from '../../assets/images/model-photo-credits.json';
import credits from '../../assets/images/parts-photo-credits.json';
export default function MediaCredits(){
 return <PageLayout title="Media credits"><p>Category and model photographs illustrate automotive systems and model families. They are not photographs of stocked products.</p><ul className="media-credits">{[...credits,...modelCredits].map(item=><li key={item.file}><a href={item.source}>{item.title.replace('File:','')}</a><p>{(item.author||'Contributor credited on the source page').replace(/<[^>]*>/g,'')} · <a href={item.licenseUrl}>{item.license}</a> · Cropped for layout.</p></li>)}</ul><p>Engine workshop video: <a href="https://mixkit.co/free-stock-video/mechanic-repairing-a-car-engine-4716/">Mixkit — Mechanic repairing a car engine</a>, Free Stock Video License. General engine footage.</p><p>Car and workshop photos: Unsplash. Original source links are recorded in assets/MEDIA-SOURCES.md.</p></PageLayout>;
}
