export interface OpenSourceContribution {
    id: string;
    project: string;
    projectUrl: string;
    title: string;
    description?: string;
    prs: number;
    anchor: string;
}

export const contributionsRepo = 'https://github.com/Anamika1608/open-source-contributions';

// Ordered by weight, not PR count.
export const openSourceContributions: OpenSourceContribution[] = [
    {
        id: 'urunc',
        project: 'urunc',
        projectUrl: 'https://github.com/urunc-dev/urunc',
        title: 'Lifecycle management of sandbox monitors',
        description: 'Control-socket layer for Firecracker, QEMU and Cloud Hypervisor in a Go unikernel container runtime: API boot modes, graceful shutdown, and the guest-side handler.',
        prs: 7,
        anchor: 'urunc',
    },
    {
        id: 'consul-democracy',
        project: 'Consul Democracy',
        projectUrl: 'https://github.com/consuldemocracy/consuldemocracy',
        title: 'SAML and OIDC single sign-on',
        description: 'SAML and OIDC sign-on with per-tenant configuration for a citizen-participation platform used by city governments.',
        prs: 3,
        anchor: 'consul',
    },
    {
        id: 'cilium',
        project: 'cilium.io',
        projectUrl: 'https://github.com/cilium/cilium.io',
        title: 'Dark theme end to end, plus mobile layout fixes',
        prs: 13,
        anchor: 'cilium',
    },
    {
        id: 'dataframe',
        project: 'dataframe',
        projectUrl: 'https://github.com/DataHaskell/dataframe',
        title: 'Join bug fix and Parquet read-option docs and tests',
        prs: 3,
        anchor: 'dataframe',
    },
    {
        id: 'p4lang',
        project: 'p4lang',
        projectUrl: 'https://github.com/p4lang',
        title: 'Automated monthly release workflows',
        prs: 2,
        anchor: 'p4lang',
    },
];
