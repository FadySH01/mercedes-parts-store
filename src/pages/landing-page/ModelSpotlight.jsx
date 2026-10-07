import { spotlightSlides } from './spotlightSlides';
import { useSpotlight } from './useSpotlight';

export default function ModelSpotlight() {
  const state = useSpotlight(spotlightSlides.length), slide = spotlightSlides[state.index];
  return <section className="model-spotlight model-carousel" aria-label="Explore Mercedes-Benz models" aria-roledescription="carousel">
    {spotlightSlides.map((item, index) => <img key={item.name} className={index === state.index ? 'model-slide active' : 'model-slide'} src={item.image} alt={index === state.index ? item.name : ''} aria-hidden={index !== state.index} style={{ objectPosition: item.position }} loading="lazy"/>)}
    <div className="spotlight-copy"><span>{slide.name.toUpperCase()} · PARTS & SOURCING</span><h2>{slide.title}</h2><p>{slide.description}</p><a className="pill white" href={slide.href}>Explore {slide.name} parts</a></div>
  </section>;
}
