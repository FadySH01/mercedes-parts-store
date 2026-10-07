import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { removePart, replacePartImage } from './adminService';

export default function AdminInventory() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => onSnapshot(collection(db, 'products'), snapshot => setItems(snapshot.docs.map(item => ({...item.data(), id:item.id}))), error => setMessage(error.message)), []);
  async function remove(item) {
    if (!window.confirm(`Delete ${item.name} from the catalog?`)) return;
    try { await removePart(item); setMessage(`${item.name} removed`); }
    catch (error) { setMessage(error.message); }
  }
  async function changeImage(item, file) {
    if (!file) return;
    try { await replacePartImage(item, file); setMessage(`${item.name} image updated`); }
    catch (error) { setMessage(error.message); }
  }
  return <section className="admin-inventory"><span className="category-eyebrow">03 / MANAGE LISTINGS</span><h2>Your catalog</h2><p>Replace a picture or remove a part when it is no longer offered.</p>{items.length ? items.map(item => <div className="admin-inventory-row" key={item.id}><img src={item.image} alt=""/><div><strong>{item.name}</strong><small>{item.models?.join(', ')} · {item.stock}</small><label>Replace image<input type="file" accept="image/*" onChange={event => changeImage(item,event.target.files[0])}/></label></div><button type="button" onClick={() => remove(item)}>Delete</button></div>) : <p>No admin products added yet.</p>}{message && <p role="status">{message}</p>}</section>;
}
