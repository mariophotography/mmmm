export interface NotaryService {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'inmobiliario' | 'familia' | 'societario' | 'general';
  requirements: string[];
  estimatedTime: string;
  legalBase: string;
  tariffEstimate: string;
  isFeatured: boolean;
}

export interface FacilityImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface NotaryProfile {
  name: string;
  title: string;
  notaryOffice: string;
  canton: string;
  province: string;
  portraitUrl: string;
  experienceYears: number;
  phoneLandline: string;
  phoneMobile: string;
  email: string;
  address: string;
  reference: string;
  hours: string;
  bio: string;
  curriculum: {
    education: { title: string; institution: string; year: string }[];
    experience: { role: string; organization: string; period: string }[];
    certifications: string[];
    affiliations: string[];
  };
}
