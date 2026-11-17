export type CertificateCategory =
  | 'Networking'
  | 'Computer & Hardware'
  | 'Server Administration'
  | 'IT & Technology'
  | 'Other Achievements';

export interface CertificateItem {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  category: CertificateCategory;
  image: string;
  description?: string;
  credentialUrl?: string;
  isSample?: boolean;
}

export type ProjectCategory =
  | 'Network Configuration'
  | 'MikroTik'
  | 'GNS3'
  | 'Cisco Packet Tracer'
  | 'Server Administration'
  | 'Computer Hardware'
  | 'Troubleshooting';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Experimental';

export interface ProjectItem {
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  objective: string;
  implementationOverview: string[];
  learningOutcomes: string[];
  status: ProjectStatus;
  dateLabel?: string;
  isSamplePlaceholder?: boolean;
}

export type SkillStatus = 'Learning' | 'Practiced' | 'Familiar';

export interface SkillEntry {
  name: string;
  status: SkillStatus;
  focusNote?: string;
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  skills: SkillEntry[];
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  institutionOrContext?: string;
  type: 'Education' | 'Course' | 'Training' | 'Milestone';
  description: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
  isPlaceholder: boolean;
  helperText: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  shortIntro: string;
  photoUrl: string | null;
  photoAlt: string;
  heroHeading: string;
  heroSupportText: string;
  aboutParagraphs: string[];
  aboutFocusAreas: {
    label: string;
    detail: string;
  }[];
  contacts: ContactChannel[];
}
