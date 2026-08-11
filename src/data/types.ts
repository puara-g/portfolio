export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string; // e.g. "2024.03 — 현재"
  location?: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type ProjectLinks = {
  live?: string;
  github?: string;
  readme?: string; // README 문서 링크 (GitHub README, 노션 등)
  video?: string; // 시연 영상 링크
};

export type ProjectSummary = {
  slug: string;
  name: string;
  period: string;
  team: string; // e.g. "1인 개인 프로젝트" | "3인 팀 프로젝트"
  tagline: string;
  stack: string[];
  links?: ProjectLinks;
  images?: string[]; // 갤러리 모달에 띄울 이미지 경로/URL
};

export type ProjectDetail = ProjectSummary & {
  role: string;
  problem: string;
  approach: string[];
  result: string;
};
