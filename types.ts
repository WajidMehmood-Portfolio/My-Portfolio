
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Design' | 'Tools';
}
