interface WorkExperienceItem {
    id: string;
    role: string;
    company: string;
    companyLogo?: string;
    period: string;
    description?: string[];
    isExpanded?: boolean;
  }

export type { WorkExperienceItem };