import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { slug } from '../../shared/catalogMeta';

export async function saveModel(name) {
  await setDoc(doc(db, 'models', slug(name)), { name: name.trim(), updatedAt: serverTimestamp() });
}

export async function savePart(values, imageFile) {
  if (!imageFile) throw new Error('Choose a product image before saving.');
  const record = { ...values, models: [values.model], price: Number(values.price) || 0, fit: `${values.model} · ${values.year}`, createdAt: serverTimestamp() };
  delete record.model;
  if (imageFile) {
    const path = `products/${crypto.randomUUID()}-${imageFile.name.replace(/[^\w.-]/g, '-')}`;
    const uploaded = await uploadBytes(ref(storage, path), imageFile);
    record.image = await getDownloadURL(uploaded.ref);
    record.imagePath = path;
  }
  await addDoc(collection(db, 'products'), record);
}

export async function removePart(part) {
  await deleteDoc(doc(db, 'products', part.id));
  if (part.imagePath) await deleteObject(ref(storage, part.imagePath)).catch(() => {});
}

export async function replacePartImage(part, file) {
  const path = `products/${crypto.randomUUID()}-${file.name.replace(/[^\w.-]/g, '-')}`;
  const uploaded = await uploadBytes(ref(storage, path), file);
  const image = await getDownloadURL(uploaded.ref);
  await updateDoc(doc(db, 'products', part.id), { image, imagePath:path, updatedAt:serverTimestamp() });
  if (part.imagePath) await deleteObject(ref(storage, part.imagePath)).catch(() => {});
}
