import { images } from '../assets/images';
import { partGuides } from './partGuides';
import { slug } from './catalogMeta';

export const categories = [
  'Body Parts', 'Engines & Engine Parts', 'Gearboxes & Transmission', 'Mechanical & Underneath',
  'Suspension & Steering', 'Braking Systems', 'Electrical & Electronic', 'Interior Parts',
  'Lighting', 'Cooling & AC', 'Wheels & Tyres', 'Accessories',
];

const references = [
  { id: 'brake-disc-205', name: 'Front brake disc, ventilated', brand: 'Mercedes-Benz Genuine Parts', part: 'A 000 421 12 12', price: 245, was: 289, category: 'Braking Systems', fit: 'C-Class · W205 (2015–2021)', condition: 'New', stock: 'In stock', image: images.workshop, rating: '4.9', reviews: 18 },
  { id: 'air-filter-274', name: 'Engine air filter element', brand: 'MANN-FILTER', part: 'A 274 094 00 04', price: 68, category: 'Engines & Engine Parts', fit: 'C-Class · W205 / GLC · X253', condition: 'New', stock: 'In stock', image: images.electrical, rating: '4.8', reviews: 32 },
  { id: 'led-headlamp-205', name: 'LED headlamp assembly, left', brand: 'Mercedes-Benz Genuine Parts', part: 'A 205 906 69 03', price: 895, category: 'Lighting', fit: 'C-Class · W205 (2019–2021)', condition: 'New', stock: 'Low stock', image: images.vehicle, rating: '5.0', reviews: 7 },
  { id: 'control-arm-205', name: 'Front lower control arm', brand: 'Lemförder', part: 'A 205 330 43 01', price: 212, category: 'Suspension & Steering', fit: 'C-Class · W205 / E-Class · W213', condition: 'New', stock: 'In stock', image: images.workshop, rating: '4.7', reviews: 12 },
  { id: 'transmission-filter-725', name: 'Automatic transmission oil filter kit', brand: 'Mercedes-Benz Genuine Parts', part: 'A 725 270 37 07', price: 174, category: 'Gearboxes & Transmission', fit: 'E-Class · W213 (2017–2023)', condition: 'New', stock: 'In stock', image: images.engine, rating: '4.9', reviews: 9 },
  { id: 'cabin-filter-205', name: 'Cabin air filter with activated carbon', brand: 'MANN-FILTER', part: 'A 205 835 01 00', price: 52, category: 'Interior Parts', fit: 'C-Class · W205 (2015–2021)', condition: 'New', stock: 'In stock', image: images.electrical, rating: '4.8', reviews: 26 },
  { id: 'water-pump-274', name: 'Water pump with gasket', brand: 'Pierburg', part: 'A 274 200 05 00', price: 318, category: 'Cooling & AC', fit: 'C-Class · W205 (2015–2018)', condition: 'New', stock: 'In stock', image: images.engine, rating: '4.6', reviews: 14 },
  { id: 'wheel-205', name: 'Genuine alloy wheel, 18 inch', brand: 'Mercedes-Benz Genuine Parts', part: 'A 205 401 17 00 7X23', price: 620, category: 'Wheels & Tyres', fit: 'C-Class · W205 / GLC · X253', condition: 'New', stock: 'Low stock', image: images.vehicle, rating: '5.0', reviews: 5 },
];

const photos = [images.grille,images.engineCategory,images.transmissionCategory,images.suspensionCategory,images.suspensionCategory,images.brakesCategory,images.electricalCategory,images.interiorCategory,images.lightingCategory,images.coolingCategory,images.wheelsCategory,images.interiorCategory];
export const products = [
  ...references.map(item => ({ ...item, part:'', price:0, stock:'Availability on request', condition:'Sourcing', rating:null, reviews:null, fit:'Confirm model, year and trim', image:photos[categories.indexOf(item.category)], sourcing:true })),
  ...categories.flatMap((category,index) => partGuides[category].map(name => ({ id:`source-${slug(category)}-${slug(name)}`, name, brand:'Everything Benz sourcing', part:'', price:0, category, fit:'Confirm model, year and trim', condition:'Sourcing', stock:'Availability on request', image:photos[index], sourcing:true }))),
];

