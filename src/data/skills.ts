import { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    description: "인터페이스와 상호작용을 구현하는 핵심 영역",
    items: [
      "JavaScript (ES6+)",
      "React",
      "Next.js (App Router)",
      "HTML5",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & DB",
    description: "개발/학습 경험",
    items: ["Supabase (Auth / DB / Storage)", "Java", "Gradle", "Unity (C#)"],
  },
  {
    title: "API Integration",
    description: "외부 API 연동 경험",
    items: ["Google Gemini API", "Google Books API"],
  },
  {
    title: "Tools & Canvas",
    description: "협업과 캔버스 기반 인터랙션을 위한 도구",
    items: ["Git", "Canvas API (React-Konva)"],
  },
];
