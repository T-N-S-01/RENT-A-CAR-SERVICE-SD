import prius from '../img/prius.jpg';
import wagonR from '../img/wagon r.png';
import wagonRStingray from '../img/wagon r st.png';
import aqua from '../img/aqua.png';
import KDH from '../img/kdh.png';
import viva from '../img/elite.png';

const vehicles = [
  {
    id: 1,
    name: 'Toyota aqua',
    price: 6000,
    image: aqua,
    type: 'Hybrid',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 60',
    features: ['Eco-friendly', 'Touch Screen', 'GPS']
  },
  {
    id: 2,
    name: 'Suzuki wagon R FX',
    price: 5000,
    image: wagonR,
    type: 'Hatchback',
    seats: 5,
    transmission: 'automatic',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 50',
    features: ['AC', 'Power Steering']
  },
  {
    id: 3,
    name: 'Suzuki wagon R Stingray',
    price: 5000,
    image: wagonRStingray,
    type: 'Hatchback',
    seats: 5,
    transmission: 'auto',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 50',
    features: ['AC', 'Power Steering']
  },
  {
    id: 4,
    name: 'Toyota Prius',
    price: 8000,
    image: prius,
    type: 'Hybrid',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 70',
    features: ['AC', 'Bluetooth', 'Back Camera']
  },
  {
    id: 5,
    name: 'Perodua Viva Elite',
    price: 4500,
    image: viva,
    type: 'Hatchback',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 45',
    features: ['Sunroof', 'Premium Sound', 'Navigation']
  },
  {
    id: 6,
    name: 'Toyota KDH',
    price: 9000,
    image: KDH,
    type: 'Van',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Petrol',
    freeMileagePerDay: 100,
    freeMileageLabel: '100 km per day',
    perKm: 'LKR 120',
    features: ['AC', 'ABS', 'Airbags']
  }
];

export default vehicles;