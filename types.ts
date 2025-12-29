
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  externalLink?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
