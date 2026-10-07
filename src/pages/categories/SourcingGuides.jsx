import { partGuides, requestPartPath } from '../../shared/partGuides';

export default function SourcingGuides({ category, model }) {
  return <section><div className="category-section-heading"><span>02 / PARTS WE SOURCE</span><h2>{model ? `For your ${model}` : `Explore ${category.toLowerCase()}`}</h2></div><p className="sourcing-note">Choose a part type to request a quote. Share your model year and trim so we can confirm fitment. These are sourcing options, not confirmed stock.</p><div className="sourcing-grid">{partGuides[category].map((part, index) => <article key={part}><span>0{index+1} / {category.toUpperCase()}</span><h3>{part}</h3><p>{model ? `Ask us to source ${part.toLowerCase()} for your ${model}.` : `Tell us your Mercedes model and year; we will identify the right ${part.toLowerCase()}.`}</p><a href={requestPartPath(model, part)}>Request this part ↗</a></article>)}</div></section>;
}
