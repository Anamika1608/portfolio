export interface OpenSourceContribution {
    id: string;
    title: string;
    organization: string;
    description: string;
    technologies: string[];
    achievements: string[];
    links: {
        prs?: string;
        website?: string;
        github?: string;
    };
    logo: string;
    period: string;
    status: 'active' | 'completed';
}

export const openSourceContributions: OpenSourceContribution[] = [
    {
        id: 'consul-democracy',
        logo: '/work-experience/logos/consul.png',
        title: 'SAML and OIDC authentication',
        organization: 'Consul Democracy',
        description: 'Implemented SAML & OIDC auth with multi-tenancy, wrote RSpec tests, and deployed via Capistrano.',
        technologies: ['Ruby', 'Docker', 'Capistrano', 'SAML', 'OIDC', 'Rspec Testing'],
        achievements: [
            'Enterprise-grade authentication system',
            'Multi-tenancy support implementation',
            'Production-ready deployment setup'
        ],
        links: {
            prs: '#',
            website: 'https://consuldemocracy.org',
            github: 'https://github.com/consuldemocracy/consuldemocracy'
        },
        period: 'Jun 2025 - Aug 2025',
        status: 'completed'
    },
    {
        id: 'cilium',
        logo: '/work-experience/logos/cilium.png',
        title: 'Features & bug fixes (13 PRs)',
        organization: 'Cilium.io',
        description: 'Integrated dark theme, fixed major bugs to improve ux and analysed website for SEO, AEO & AIO optimization.',
        technologies: ['Gatsby', 'React', 'Tailwind CSS', 'SEO', 'JavaScript'],
        achievements: [
            '13 PRs successfully merged',
            'Dark theme integration',
            'Major bug fixes and improvements'
        ],
        links: {
            prs: '#',
            website: 'https://cilium.io',
            github: 'https://github.com/cilium/cilium.io'
        },
        period: 'July 2025 - Aug 2025',
        status: 'active'
    }
];