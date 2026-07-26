export interface Skill {
  name: string;
  percentage: number;
}

export interface Education {
  degree: string;
  year: string;
  institution: string;
  details?: string[];
}

export interface Experience {
  title: string;
  period: string;
  description: string;
  items: string[];
}

export interface Certificate {
  title: string;
  organisation: string;
  year: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
