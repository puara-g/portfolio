import { SkillCategory } from "./types";

// TODO: 카테고리/항목을 실제 기술 스택으로 교체하세요.
export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    description: "사용자 경험을 최우선으로 생각하는 UI 개발",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "필요한 만큼의 서버/데이터 처리",
    items: ["Node.js"],
  },
  {
    title: "Tools",
    description: "협업과 품질을 위한 도구",
    items: ["Git", "Figma"],
  },
];
