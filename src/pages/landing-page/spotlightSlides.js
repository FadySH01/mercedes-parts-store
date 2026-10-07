import { modelShowcase } from '../../shared/modelShowcase';
import { slug } from '../../shared/catalogMeta';

export const spotlightSlides = modelShowcase.map(model => ({
  ...model,
  title: model.line,
  description: model.name === 'Mercedes-Benz' ? 'Find the right collection for your Mercedes-Benz.' : `Discover parts and sourcing support for your ${model.name}.`,
  href: model.href || `/models/${slug(model.name)}`,
}));
