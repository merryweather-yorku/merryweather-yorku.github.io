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
  },
  {
    id: 'mw2',
    name: 'MW2: Autonomous Drone',
    shortDescription: 'Reconnaissance drone with AI-powered target tracking.',
    fullDetails: 'MW2 aims to provide real-time aerial surveillance using an autonomous flight controller. The onboard edge AI processes video feeds to identify and track designated objects without requiring constant pilot input.',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    status: 'active',
  }
];
