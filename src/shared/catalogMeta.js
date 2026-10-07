export const defaultModels = ['A-Class', 'CLA', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'G-Class', 'AMG GT'];

export const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const categoryPath = name => `/categories/${slug(name)}`;

export const modelMatches = (product, model) => {
  if (product.sourcing) return true;
  const names = product.models || product.fit?.split(/[·/]/).map(part => part.trim()) || [];
  return names.some(name => name.toLowerCase().includes(model.toLowerCase()));
};
