// project-data.ts

export interface Project {
    title: string;
    description: string;
    link: string;
    tags?: string[];
  }
  
  export const PROJECTS: Project[] = [
    {
      title: 'Computational Topology – Zigzag Persistence',
      description: 'Persistent cycle analysis using levelset filtrations',
      link: 'https://github.com/taohou01/LvlsetPersCyc',
      tags: ['Python', 'TDA', 'Computational Geometry', 'GUDHI']
    },
    {
      title: 'FlameThrower Game',
      description: '2D real-time game with custom particle physics.',
      link: 'https://github.com/anirudh-pulavarthy/FlameThrower',
      tags: ['Rust', 'Game Development', 'Macroquad']
    },
    {
      title: 'Wine Quality Prediction',
      description: 'AdaBoost + Gradient Boosting to predict wine quality from physicochemical properties.',
      link: 'https://github.com/anirudh-pulavarthy/WineQualityAnalysis',
      tags: ['Machine Learning', 'Python', 'Scikit-learn']
    },
    {
      title: 'Car Evaluation',
      description: 'Predicting car acceptability using Random Forests, Gradient Boosting and applying SMOTE analysis.',
      link: 'https://github.com/anirudh-pulavarthy/Car-Evaluation-using-SMOTE',
      tags: ['Python', 'SMOTE', 'Random Forests', 'Gradient Boosting']
    }
  ];
  