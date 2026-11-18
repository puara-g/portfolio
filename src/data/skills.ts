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
    title: "Backend & Database",
    description: "서버 로직과 데이터를 설계하고 처리하는 영역",
    items: ["Node.js", "Express", "Supabase (Auth / DB / Storage)", "Upstash Redis", "REST API 설계"],
  },
  {
    title: "API Integration",
    description: "외부 API 연동 경험",
    items: ["Google Gemini API", "Google Books API", "서울 열린데이터광장 API", "공공데이터포털 API", "Kakao API"],
  },
  {
    title: "Tools & 협업",
    description: "버전 관리와 협업을 위한 도구",
    items: ["Git", "GitHub", "Vercel"],
  },
];
