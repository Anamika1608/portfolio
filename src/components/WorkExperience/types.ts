interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  description?: string[];
  summary?: string;
  tags?: string[];
  stack?: string[];
  impactLabels?: string[];
  isExpandable?: boolean;
  isExpanded?: boolean;
}

export type { WorkExperienceItem };
