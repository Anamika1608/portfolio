interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  description?: string[];
  stack?: string[];
}

export type { WorkExperienceItem };
