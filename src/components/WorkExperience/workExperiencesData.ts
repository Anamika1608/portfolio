import { WorkExperienceItem } from "./types"; 

export const workExperiencesData: WorkExperienceItem[] = [
   {
      id: '1',
      role: 'Software Developer Intern',
      company: 'takeUforward',
      period: 'Jun 2025 - Aug 2025',
      companyLogo: '/work-experience/logos/tuf.png',
      description: [
        'Revamped a complex side panel into a clean, extensible experience the team can iterate on quickly.',
        'Built Focus Mode, which users loved and which meaningfully improved the user\'s learning experience.',
        'Led a POC for Debugger Mode for the C++ Editor by integrating GDB and Docker.'
        ]
    },
    {
      id: '2',
      role: 'Full Stack Developer Intern',
      company: 'Mazinda',
      period: 'Dec 2024 - Feb 2025',
      companyLogo: '/work-experience/logos/mazinda.svg', 
      description: [
        'Engineered a delivery partner app with resumable onboarding and real-time GPS tracking, reducing order assignment time by 30%.',
        'Centralized delivery operations by constructing an admin dashboard leveraging real-time geolocation data to monitor 200+ daily deliveries.',
        'Built and optimized the order assignment backend, ensuring dynamic reassignment when a delivery partner rejects an order, maintaining alarm triggers.'
        ]
    },
    {
      id: '3',
      role: 'Full Stack Developer',
      company: 'I am Better than me',
      period: 'Sept 2024 - Dec 2024',
      companyLogo: 'https://c.animaapp.com/m8nag6vuQg1Dnq/img/frame-217.svg', 
      description: [
        'Optimized backend performance by integrating Cloudinary for file uploads, reducing latency by 30%.',
        'Architected real-time collaboration features using Socket.io and Mediasoup, enabling video conferencing for 100+ concurrent users.',
        'Developed user authentication system with two-factor authentication via Twilio and Nodemailer, reducing failed login attempts by 40%.'
        ]
    }
];