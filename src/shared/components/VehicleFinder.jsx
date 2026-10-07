import { ArrowRight, Wrench } from 'lucide-react';
import { useModels } from '../../features/products/useModels';

export default function VehicleFinder({ model, setModel, year, setYear, onFind }) {
  const models = useModels();
  return <section className="finder" aria-label="Find parts for your vehicle">
    <div className="finder-title"><span className="finder-icon"><Wrench/></span><div><b>Find parts for your Mercedes-Benz</b><small>Choose your vehicle to see compatible parts</small></div></div>
    <div className="finder-fields">
      <label><span>MODEL</span><select value={model} onChange={event => setModel(event.target.value)}><option>All Mercedes-Benz models</option>{models.map(name => <option key={name}>{name}</option>)}</select></label>
      <label><span>YEAR</span><input type="number" min="1900" max="2100" value={year==='Any year'?'':year} onChange={event => setYear(event.target.value || 'Any year')} placeholder="Any year"/></label>
      <button onClick={onFind}>Explore matching parts <ArrowRight size={16}/></button>
    </div>
  </section>;
}
