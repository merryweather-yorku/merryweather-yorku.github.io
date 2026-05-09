export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDetails: string;
  imageUrl: string;
  status: 'active' | 'completed' | 'coming_soon';
}

export const projectsData: Project[] = [
  {
    id: 'mw1',
    name: 'MW1: Military Radio',
    shortDescription: 'A military-style radio equipped with the newest features and engineered to last.',
    fullDetails: 'The MW1 is our flagship project, designed from the ground up to meet stringent durability standards. It features encrypted communication protocols, a ruggedized housing, and a custom-designed antenna for maximum range in difficult terrain.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    status: 'active',
  }
];
