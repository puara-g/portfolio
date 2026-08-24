import Section from "./Section";
import { profile } from "@/data/profile";

const HIGHLIGHTS = [
  {
    title: "데이터 기반의 효율적인 백엔드 아키텍처 설계",
    description:
      "SQLD와 ADsP 지식을 바탕으로 데이터 무결성과 정규화를 고려한 RDBMS 모델링에 능숙합니다. Node.js와 Supabase 환경에서 API를 설계할 때, 응답 속도 최적화와 안전한 데이터 처리를 최우선으로 고려하며 데이터베이스와 서버 간의 병목을 줄이는 로직을 작성합니다.",
  },
  {
    title: "복잡한 인터랙션을 제어하는 프론트엔드 구현력",
    description:
      "React-Konva를 활용한 웹 그래픽 에디터 구현 등, 난이도 있는 클라이언트 상태 관리와 렌더링 최적화 경험을 보유하고 있습니다. 단순히 화면을 그리는 것을 넘어, 컴포넌트 재사용성을 높이고 사용자 중심의 매끄러운 UI/UX 흐름을 설계하는 데 집중합니다.",
  },
  {
    title: "AI 기술 연동 및 문제 해결을 위한 알고리즘 적용",
    description:
      "Google Gemini API 등 최신 LLM을 서비스에 직접 통합하여 새로운 사용자 가치를 창출할 수 있습니다. 또한, 공공 API를 활용한 지하철 환승 계산 알고리즘, 좌표 기반의 드로잉 처리 등 실제 서비스에서 발생하는 복잡한 요구사항을 논리적인 코드로 풀어내는 문제 해결력을 갖추고 있습니다.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="소개"
      description={profile.description}
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {HIGHLIGHTS.map((item, i) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-bg-elevated p-6"
          >
            <span className="font-mono text-xs text-text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-medium text-text">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
