// This is for custom data

import { fleet } from '../redux/fleet-slice/fleet-slice';

const fleets: Array<fleet> = [
  {
    id: 12,
    brand: 'BMW',
    model: 'M3 GTR',
    milage: '2345',
    pricePerMonth: 276,
    description: 'The 2001 BMW M3 GTR GT (E46) is a race car developed by BMW based on their M3 E46. It competed during the 2001 racing season under both the BMW Motor sport and Team Schnitzer teams, with the car being entered in the GT class of The American Le Mans Championship and the European Le Mans Series.',
    activeStatus: false,
    isCompleted: false,
    longitude: 101.691338,
    latitude: 3.103548,
  },
  {
    id: 14,
    brand: 'Audi',
    model: 'Audi R8',
    milage: '2145',
    pricePerMonth: 276,
    description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system.It was introduced by the German car manufacturer Audi AG in 2006. The car is exclusively designed, developed, and manufactured by Audi AG's private subsidiary company manufacturing high performance automotive parts, Audi Sport GmbH (formerly quattro GmbH),and is based on the Lamborghini Gallardo and presently the Huracán platform.",
    activeStatus: false,
    isCompleted: false,
    longitude: 101.691338,
    latitude: 3.123548,
  },
];

export default fleets;
