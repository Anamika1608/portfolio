import { WorkExperienceItem } from "./types"; 

export const workExperiencesData: WorkExperienceItem[] = [
   {
      id: '1',
      role: 'Software Developer Intern',
      company: 'takeUforward',
      period: 'Jun 2025 - Aug 2025',
      companyLogo: '/work-experience/logos/tuf.png',
      description: [
        'Designed user interfaces for iOS applications with millions of downloads',
        'Conducted user research and usability testing to inform design decisions',
        'Worked closely with engineering teams to ensure design feasibility'
        ]
    },
    {
      id: '2',
      role: 'Full Stack Developer Intern ',
      company: 'Mazinda',
      period: 'Dec 2024 - Feb 2025',
      companyLogo: '/work-experience/logos/mazinda.svg', 
      description: [
        'Led design strategy for core product features serving 1M+ users',
        'Collaborated with cross-functional teams to deliver pixel-perfect experiences',
        'Mentored junior designers and established design system standards'
        ]
    },
    {
      id: '3',
      role: 'Freelance Full Stack Developer',
      company: 'I am Better than me',
      period: 'Sept 2024 - Dec 2024',
      companyLogo: 'https://c.animaapp.com/m8nag6vuQg1Dnq/img/frame-217.svg', 
      description: [
        'Designed e-commerce solutions for merchant dashboard',
        'Improved conversion rates by 25% through UX optimizations',
        'Created design documentation and component libraries'
        ]
    },
    // {
    //   id: '4',
    //   role: 'Design and research',
    //   company: 'Amazon',
    //   period: '2020 - 2024',
    //   companyLogo: '/logos/amazon.png', // Replace with actual logo path
    //     // No description for this one
    // }
];