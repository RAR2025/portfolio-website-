export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'profiles', label: 'Coding Profiles' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'documents', label: 'Documents' },
  { id: 'contact', label: 'Contact' },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const BREAKPOINTS = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

export const PERSONAL_NAME = 'Your Name';