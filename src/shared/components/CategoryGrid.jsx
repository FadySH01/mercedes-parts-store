import { ArrowUpRight } from 'lucide-react';
import { categoryPath } from '../catalogMeta';

const symbols = ['◈','⚙','↻','⌁','⌇','◉','ϟ','▤','✦','❄','◉','✧'];

export default function CategoryGrid({ categories, selected, onSelect }) {
  return <div className="category-grid">{categories.map((name, index) => <a className="category-tile" key={name} href={categoryPath(name)}>
    <span className="cat-symbol">{symbols[index]}</span><span className="cat-name">{name}</span><ArrowUpRight className="cat-arrow" size={14}/>
  </a>)}</div>;
}
