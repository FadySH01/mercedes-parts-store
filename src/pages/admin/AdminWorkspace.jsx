import { useState } from 'react';
import { categories } from '../../shared/products';
import { useModels } from '../../features/products/useModels';
import { saveModel, savePart } from './adminService';
import AdminInventory from './AdminInventory';

const empty = { name:'', category:categories[0], model:'C-Class', year:'', colour:'', part:'', price:'', condition:'New', stock:'Not available', description:'', brand:'Mercedes-Benz' };

export default function AdminWorkspace() {
  const models = useModels();
  const [modelName, setModelName] = useState('');
  const [part, setPart] = useState(empty);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const field = (name, value) => setPart(current => ({ ...current, [name]: value }));
  async function submit(action, success) {
    setBusy(true); setMessage('');
    try { await action(); setMessage(success); }
    catch (error) { setMessage(error.message || 'Could not save. Please try again.'); }
    finally { setBusy(false); }
  }
  return <div className="admin-grid"><section><span className="category-eyebrow">01 / MODEL LIBRARY</span><h2>Add a Mercedes model</h2><p>Add a new model, including future releases such as a 2027 GLC 63 AMG.</p><form onSubmit={event => { event.preventDefault(); const name=modelName.trim(); submit(async () => { await saveModel(name); setModelName(''); }, `${name} added`); }}><label>Model name<input required value={modelName} onChange={event => setModelName(event.target.value)} placeholder="GLC 63 AMG"/></label><button disabled={busy}>Add model</button></form><div className="admin-model-list">{models.map(name => <span key={name}>{name}</span>)}</div></section>
    <section><span className="category-eyebrow">02 / INVENTORY</span><h2>Add a part</h2><p>Select its category and Mercedes model. Set availability to “Not available” until you have stock.</p><form onSubmit={event => { event.preventDefault(); submit(() => savePart(part, image), `${part.name} added`); }}><label>Part name<input required value={part.name} onChange={event => field('name',event.target.value)}/></label><div className="admin-row"><label>Category<select value={part.category} onChange={event => field('category',event.target.value)}>{categories.map(name => <option key={name}>{name}</option>)}</select></label><label>Model<select value={part.model} onChange={event => field('model',event.target.value)}>{models.map(name => <option key={name}>{name}</option>)}</select></label></div><div className="admin-row"><label>Model year<input required value={part.year} onChange={event => field('year',event.target.value)} placeholder="2027"/></label><label>Part number<input required value={part.part} onChange={event => field('part',event.target.value)}/></label></div><div className="admin-row"><label>Price (USD)<input type="number" min="0" value={part.price} onChange={event => field('price',event.target.value)} placeholder="Leave blank if unavailable"/></label><label>Availability<select value={part.stock} onChange={event => field('stock',event.target.value)}><option>Not available</option><option>In stock</option><option>Low stock</option></select></label></div><div className="admin-row"><label>Condition<select value={part.condition} onChange={event => field('condition',event.target.value)}><option>New</option><option>Used</option><option>Refurbished</option></select></label><label>Product image<input required type="file" accept="image/*" onChange={event => setImage(event.target.files[0] || null)}/></label></div><label>Colour / finish<input value={part.colour} onChange={event => field('colour',event.target.value)} placeholder="Black, silver, unpainted…"/></label><label>Description<textarea value={part.description} onChange={event => field('description',event.target.value)} rows="3"/></label><button disabled={busy}>Save part</button></form>{message && <p role="status" className="admin-message">{message}</p>}</section><AdminInventory/></div>;
}

