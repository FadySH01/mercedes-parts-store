import { useMemo } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '../../shared/components/SectionHeading';
import ProductCard from '../../shared/components/ProductCard';
import { modelMatches } from '../../shared/catalogMeta';

export default function ProductBrowser({ catalog, category, setCategory, query, setQuery, model, year, condition, setCondition, wishlist, onWish, onAdd, onDetails }) {
  const filtered = useMemo(() => catalog.filter(item => (category === 'All parts' || item.category === category) && (!query || `${item.name} ${item.part} ${item.brand}`.toLowerCase().includes(query.toLowerCase())) && (model === 'All Mercedes-Benz models' || modelMatches(item,model)) && (year==='Any year' || item.sourcing || String(item.year)===String(year)) && (condition === 'Any condition' || item.condition === condition)), [catalog, category, query, model, year, condition]);
  return <section className="products section" id="parts"><SectionHeading eyebrow="Find your fit" title="Parts made for your Mercedes." action={{ href:'/shop#categories', label:'Shop all categories →' }}/>
    <div className="product-tools"><div className="product-tabs">{['All parts','Braking Systems','Engines & Engine Parts','Lighting','Suspension & Steering'].map(value=><button key={value} className={category===value?'product-tab active':'product-tab'} onClick={()=>setCategory(value)}>{value}</button>)}</div><div className="filterline"><label className="search-field"><Search size={16}/><input id="search" placeholder="Search parts or part number" value={query} onChange={event=>setQuery(event.target.value)}/></label><label className="select-field"><span>Condition</span><select value={condition} onChange={event=>setCondition(event.target.value)}><option>Any condition</option><option>New</option><option>Used</option></select></label></div></div>
    <div className="product-grid">{filtered.map(item=><ProductCard key={item.id} product={item} wished={wishlist.includes(item.id)} onWish={onWish} onAdd={onAdd} onDetails={onDetails}/>)}</div>
    {!filtered.length && <p className="no-results">No parts match these filters. <button onClick={()=>{setCategory('All parts');setQuery('');setCondition('Any condition')}}>Clear filters</button></p>}
  </section>;
}

