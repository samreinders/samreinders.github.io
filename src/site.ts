// Site-wide details. Edit these to update the header, footer and page metadata.
export const site = {
  name: 'Sam Reinders',
  // How your name appears in author lists, so it can be highlighted.
  authorName: 'Samuel Reinders',
  role: 'Postdoctoral Research Fellow',
  // Shown after your name in the browser tab and search results for the home page.
  tagline: 'HCI and Accessibility Researcher',
  department: 'Department of Human-Centred Computing',
  institution: 'Monash University',
  // Shown after the institution in the header.
  location: 'Australia',
  email: 'sam.reinders@monash.edu',
  description:
    'Sam Reinders is an HCI and accessibility researcher at Monash University, designing multimodal interfaces with and for people who are blind or have low vision.',
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=9XHYsdYAAAAJ' },
    { label: 'ORCID', url: 'https://orcid.org/0000-0001-5627-413X' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/samuelreinders' },
  ],
  // Your photo: put one image (jpg, png or webp) in src/assets/photo/ and describe it here,
  // e.g. 'Sam Reinders, smiling, in a blue shirt'. Until there's an image, a placeholder is shown.
  photoAlt: 'Sam Reinders, smiling slightly, wearing dark-rimmed glasses and a navy jumper, outdoors with people blurred in the background.',
  // Highlighted note under your name. Supports [links](https://...) and **bold**. Set to null to hide it.
  headerNote: (
    "**Open to collaboration.** I'm keen to work with academic and industry partners on accessible maths and data, " +
    'tactile displays and multimodal interfaces. [Get in touch](mailto:sam.reinders@monash.edu).'
  ) as string | null,
};

export const teaching = {
  role: 'Assistant Lecturer, Monash University',
  units: [
    { code: 'FIT3146', name: 'Maker Lab', years: '2019 - present' },
    { code: 'FIT3175', name: 'Usability', years: '2020 - present' },
    { code: 'FIT5152', name: 'UI Design and Usability', years: '2020 - present' },
  ],
};

// Newest first.
export const service = [
  { year: '2026', role: 'Program Committee', venue: 'ACM ASSETS 2026' },
  { year: '2023', role: 'Student Volunteer', venue: 'ACM DIS 2023' },
  { year: '2021', role: 'Student Volunteer', venue: 'ACM CHI 2021' },
];

export const reviewing = {
  conferences: 'ACM CHI (2024 - 2026), IEEE VIS (2025 - 2026), ACM TEI (2026)',
  journals: 'ACM TACCESS, IEEE CG&A',
};
