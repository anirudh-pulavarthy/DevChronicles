// project-data.ts

export interface Project {
    title: string;
    description: string;
    link: string;
    tags?: string[];
  }
  
  export const PROJECTS: Project[] = [
    {
      title: 'Flamethrower Game – Rust & Macroquad',
      description: '2D real-time game with custom particle physics in Rust.',
      link: 'https://github.com/anirudh-pulavarthy',
      tags: ['Rust', 'Game Dev']
    },
    {
      title: 'Computational Topology – Zigzag Persistence',
      description: 'Persistent cycle analysis using levelset filtrations in Python + GUDHI.',
      link: 'https://github.com/anirudh-pulavarthy',
      tags: ['Python', 'Topology', 'Research']
    },
    {
      title: 'Wine Quality Prediction – ML',
      description: 'AdaBoost + Gradient Boosting to predict wine quality from physicochemical properties.',
      link: 'https://github.com/anirudh-pulavarthy',
      tags: ['Machine Learning', 'Python']
    }
  ];
  