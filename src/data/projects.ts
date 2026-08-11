import { ProjectDetail } from "./types";

// TODO: 실제 프로젝트로 교체하세요. slug는 URL(/projects/[slug])에 사용됩니다.
export const projects: ProjectDetail[] = [
  {
    slug: "sample-project",
    name: "프로젝트 이름",
    period: "0000.00 — 0000.00",
    team: "1인 개인 프로젝트",
    tagline: "프로젝트를 한 줄로 설명하는 문구",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      live: "",
      github: "",
      readme: "", // README 문서로 연결 (없으면 버튼이 표시되지 않습니다)
      video: "", // 시연 영상 (없으면 버튼이 표시되지 않습니다)
    },
    role: "본인의 역할을 적어주세요 (예: 기획부터 배포까지 단독 개발)",
    problem: "어떤 문제를 해결하기 위해 시작했는지 설명하세요.",
    approach: [
      "문제를 풀기 위해 시도한 접근 방식을 bullet로 정리하세요.",
      "기술적으로 고민했던 지점을 구체적으로 적어주세요.",
    ],
    result: "결과물이나 성과, 배운 점을 정리하세요.",
    images: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
