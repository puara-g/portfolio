import { ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "binright",
    name: "바로버림",
    period: "2026.10",
    team: "1인 개인 프로젝트",
    tagline: "우리 동네 분리배출 도우미",
    stack: [
      "Vanilla JS",
      "Node.js (http)",
      "Google Gemini API",
      "공공데이터포털 API",
      "Kakao API",
      "Upstash Redis",
      "Vercel",
    ],
    links: {
      live: "https://bin-right.vercel.app",
      github: "https://github.com/puara-g/BinRight",
    },
    role: "기획부터 배포까지 단독 개발",
    problem:
      "쓰레기 배출 요일·방법은 동네마다 다르고, 공공데이터포털의 생활쓰레기배출정보는 \"일+월+화\", \"월~금\", \"매일\"처럼 지자체마다 표기가 제각각인 데다 같은 구역의 옛 버전 데이터가 섞여 내려왔습니다. 주민센터의 재활용품 교환 사업(우유팩→화장지 등)은 아예 정형 데이터가 없었고, Vercel 서버리스 환경은 파일 저장이 안 되고 인스턴스가 자주 새로 떠서 외부 API 결과를 캐시하기 어려웠습니다.",
    approach: [
      "배출 요일 문자열을 요일 번호 배열로 바꾸는 parseDays(범위·나열·'매일' 처리)와 시간 정규화 함수를 만들고, 관리번호·갱신일 기준으로 구역별 최신 한 줄만 남겨 옛 버전 중복을 제거했습니다.",
      "교환 사업은 다음(카카오) 검색 API로 웹문서·블로그를 모은 뒤 해당 구·동 이름이 들어 있고 2년 이내인 글만 거르고, Gemini에 JSON 형식으로 항목을 뽑게 했습니다. 출처 글 번호가 없는 항목은 버리고, 행사 종료일(ends)을 받아 한국 시간 기준으로 끝난 행사는 숨겼습니다.",
      "Upstash Redis REST API로 공유 저장소(store.js)를 만들어 배출 정보 1년, 교환 사업 2주, 수거함 목록 7일·좌표 90일씩 보관했습니다. 큰 데이터는 gzip+base64로 줄여 저장하고, 저장소 오류는 삼켜 앱이 계속 동작하도록 했습니다.",
      "공공데이터포털이 응답하지 않으면 저장해 둔 예전 데이터를 대신 보여주고, 빈 응답이 기존 데이터를 덮어쓰지 않게 했습니다. 같은 동네에 대한 동시 요청은 하나의 Promise로 합쳐 외부 API를 한 번만 호출하도록 했습니다.",
      "폐의약품·폐건전지 수거함은 지자체마다 시군구 표기가 달라 이름 대신 전국 데이터를 하루 한 번 받아 두고 좌표 거리로 반경 2km를 찾도록 했습니다.",
      "'AI에게 물어보기'는 서버가 Gemini API를 SSE 스트리밍으로 프록시해 API 키와 시스템 프롬프트가 브라우저로 나가지 않게 하고, IP당 분당 10회·메시지 길이·대화 턴 수를 제한했습니다.",
    ],
    result:
      "형식이 제각각인 공공데이터와 비정형 웹 검색 결과를 하나의 화면(배출 요일·분리배출 방법·주변 혜택)으로 정리했습니다. 공유 캐시와 fallback 체계를 둬 서버리스 환경에서도 같은 요청에 외부 API를 반복 호출하지 않고, 외부 서비스가 멈춰도 이전 데이터로 서비스가 계속 동작하도록 만들었습니다. 프레임워크 없이 Node.js 기본 http 모듈과 Vanilla JS만으로 구현했습니다.",
    images: [],
  },
  {
    slug: "last-train",
    name: "지하철 막차 계산기",
    period: "2026.08",
    team: "1인 개인 프로젝트",
    tagline: "환승을 고려한 막차 탑승 마감 시각 계산 웹앱",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "서울 열린데이터광장 API",
    ],
    links: {
      live: "https://last-train-livid.vercel.app",
      github: "https://github.com/puara-g/LastTrain",
    },
    role: "기획부터 배포까지 단독 개발",
    problem:
      "출발역과 도착역의 막차 시간만 알려주는 것으로는 부족했습니다. 사용자가 실제로 궁금한 것은 '몇 시까지 역에 도착해야 막차를 놓치지 않는가'인데, 여기에는 1~9호선 경로 탐색과 역·노선 조합별로 다른 환승 소요시간까지 함께 고려해야 했습니다. 또한 공식 API가 2호선처럼 일부 노선의 막차 데이터를 아예 제공하지 않는 경우도 있었습니다.",
    approach: [
      "역을 노드로, 이동 가능한 구간을 가중치로 놓고 Dijkstra 알고리즘으로 출발역~도착역 경로를 탐색하도록 구현했습니다. 6호선 응암순환선처럼 일반적인 양방향 노선과 다른 구조도 노선 데이터에 반영했습니다.",
      "도착지 막차 시각에서 환승 소요시간·구간 이동시간을 거꾸로 빼나가며 '출발역에서 몇 시까지 이동해야 하는지'를 역산하는 deadlineCalculator를 만들고, 실제 열차 시간과 계산상 필요한 시간을 구분해 표시했습니다.",
      "서울교통공사 공식 데이터를 이용해 74개 역·108개 노선 조합의 환승 소요시간을 개별 적용하고(단순 평균 대신), 데이터가 없는 조합은 중앙값 → 기본값 순으로 fallback하도록 설계했습니다.",
      "API에서 데이터를 주지 않는 2호선 같은 노선을 위해 서울교통공사가 공개한 열차운행시각표 원본을 역·방향·요일유형별 인덱스로 가공하는 buildTimetable 스크립트를 추가해, official → timetable → estimated 순으로 신뢰도를 구분한 fallback 체계를 만들었습니다.",
      "같은 방식으로 확보한 열차운행시각표 원본에서 열차코드별로 인접 역 통과 시각을 계산해, 역간 이동시간을 역당 평균값 대신 706개 역 쌍(전체의 99% 이상)의 실측값으로 대체했습니다.",
    ],
    result:
      "노선도(lineStations.json)를 실제 시각표와 전수 대조해 7호선에서 천왕역을 포함한 12개 역 누락을 발견해 수정하는 등, 외부 데이터를 그대로 신뢰하지 않고 검증하는 과정을 거쳤습니다. 경로 탐색·환승시간·막차 시간을 하나의 계산 흐름으로 연결해 단순 조회를 넘어 사용자가 실제로 행동할 수 있는 정보(탑승 마감 시각)를 제공하는 서비스로 완성했습니다.",
    images: [],
  },
  {
    slug: "ai-character-chat",
    name: "AI Character Chat",
    period: "2026.07",
    team: "1인 개인 프로젝트",
    tagline: "AI 캐릭터 대화 서비스",
    stack: [
      "Next.js 15+ (App Router)",
      "JavaScript (ES6+)",
      "Supabase (Auth/DB/Storage)",
      "Google Gemini API",
    ],
    links: {
      live: "https://ai-character-chat-2l7d13qif-puara-gs-projects.vercel.app",
      github: "https://github.com/puara-g/ai-character-chat",
    },
    role: "기획부터 배포까지 단독 개발",
    problem:
      "캐릭터별 대화 맥락을 유지하려면 이전 대화 내용을 Gemini API에 함께 보내야 하는데, 세션이 길어질수록 매 요청에 실리는 대화 기록이 무한정 늘어날 수 있었습니다. 또한 사용자가 업로드하는 프로필 이미지가 용량이 크거나 이미지가 아닌 파일일 경우 Storage로 그대로 올라가는 문제가 있었습니다.",
    approach: [
      "Gemini API 요청 시 Supabase messages 테이블에서 해당 세션의 최근 10개 메시지만 불러와 history로 구성해(app/api/chat/route.js), 대화가 길어져도 요청 payload 크기가 일정 범위로 유지되도록 했습니다.",
      "캐릭터의 이름·성격·말투·상세설정을 systemInstruction 문자열로 조합해 모델에 주입해, 캐릭터별 페르소나를 프롬프트 단에서 일관되게 유지했습니다.",
      "이미지 업로드 시 클라이언트에서 먼저 파일 크기(2MB 이하)와 MIME 타입(image/*)을 검증한 뒤에만 Supabase Storage(avatars 버킷)에 업로드하고, 업로드가 실패하면 캐릭터 생성 자체를 막았습니다.",
      "카카오톡 뷰를 벤치마킹해 뱃지/태그, 뒤로가기, 캐릭터 삭제가 가능한 모바일 퍼스트 UI를 구현하고, 삭제 버튼 클릭 시 채팅방 이동과 겹치지 않도록 이벤트 전파를 막았습니다.",
    ],
    result:
      "대화 기록을 최근 10개로 제한해 세션이 길어져도 API 요청 크기를 일정하게 유지했고, 업로드 전 검증 단계를 둬 잘못된 파일이 Storage까지 올라가는 것을 막았습니다. 기획부터 Gemini/Supabase 연동, UI까지 전체를 혼자 구현했습니다.",
    images: [],
  },
  {
    slug: "miricanvas-clone",
    name: "미리캔버스 클론",
    period: "2026.06",
    team: "1인 개인 프로젝트",
    tagline: "웹 그래픽 에디터",
    stack: ["React", "React-Konva", "HTML Canvas"],
    links: {
      live: "https://miricanvas-clone-pearl.vercel.app/",
      github: "https://github.com/puara-g/miricanvas-clone",
    },
    role: "기획부터 배포까지 단독 개발",
    problem:
      "도형·텍스트 레이어를 추가/편집하는 캔버스 렌더링 로직과, 도구를 선택하는 좌측 패널 UI가 하나의 Canvas 컴포넌트 안에 함께 있어 파일이 커지고 책임이 뒤섞이는 구조적 문제가 있었습니다.",
    approach: [
      "도형 상태(rectangles/circles/texts)와 Konva Stage/Layer 렌더링을 담당하는 Canvas 컴포넌트에서, 도형·텍스트 추가 버튼과 탭 전환을 담당하는 좌측 패널을 Sidebar 컴포넌트로 분리했습니다.",
      "Sidebar는 addRectangle/addCircle/addText 콜백만 props로 전달받아 자신의 활성 탭 상태(activeTab)만 직접 관리하도록 해, '캔버스 상태·렌더링'과 '도구 선택 UI'의 책임을 나눴습니다.",
    ],
    result:
      "역할 기준으로 컴포넌트를 나눠 각 파일의 책임이 분명해졌고, 이후 Sidebar에 텍스트 탭을 추가하는 등 UI 확장이 쉬워졌습니다. 다만 각 도형을 memo 컴포넌트로 분리하거나 상태 변경 시 리렌더링 범위를 측정·최적화하는 작업은 아직 하지 않았고, 이 부분은 다음 개선 과제로 남아 있습니다.",
    images: [],
  },
  {
    slug: "maum-library",
    name: "마음서재",
    period: "2026.05 — 2026.06",
    team: "팀 프로젝트",
    tagline: "도서 추천/독서 관리 서비스",
    stack: ["React", "Tailwind CSS", "Google Books API"],
    links: {
      live: "https://maum-library-ecupf05sx-puara-gs-projects.vercel.app/",
      github: "https://github.com/puara-g/maum-library",
    },
    role: "이영빈과 2인 팀으로 프론트엔드 전반을 함께 개발. 검색 디바운스, API 데이터 정규화, 로컬 스토리지 기반 내 서재·독서 시간 기능을 구현했습니다.",
    problem:
      "홈/이달의 신작/베스트셀러/기분 추천/검색까지 여러 화면에서 Google Books API를 반복 호출해야 했습니다. 검색창에 타이핑할 때마다 API를 그대로 호출하면 요청이 과도하게 발생했고, 외부 API 특성상 표지 이미지·줄거리 같은 필드가 종종 비어 있어 화면이 깨졌습니다. 또한 로그인 기능 없이도 '내 서재'와 독서 시간 데이터를 사용자별로 유지해야 했습니다.",
    approach: [
      "헤더 검색 인풋에 setTimeout 기반 300ms 디바운스를 적용해, 입력마다 나가던 API 호출을 타이핑이 멈춘 시점 1회로 줄이고 이전 타이머는 clearTimeout으로 취소해 이전 요청과의 경쟁 상태를 방지했습니다.",
      "API 응답을 표준 형태로 정리하는 normalizeBook과 공통 호출 함수 fetchBooks를 최상위 App 컴포넌트에 두고 신작/베스트셀러/기분 추천/검색 화면에서 공유해, 표지·줄거리 등이 비어 있을 때 <img onError>로 즉시 기본 커버 이미지로 대체되도록 통일했습니다.",
      "장르별 베스트셀러는 useRef 캐시에 장르별 결과를 저장해 두어, 같은 탭을 다시 눌러도 재요청 없이 캐시된 데이터를 바로 보여주도록 했습니다.",
      "'내 서재'(찜/독서중/완독)와 누적 독서 시간은 useState 초기값에서 LocalStorage를 읽고, useEffect로 값이 바뀔 때마다 다시 저장하는 방식으로 로그인 없이도 브라우저에 유지되게 했습니다.",
    ],
    result:
      "타이핑 중 반복 호출되던 검색 API 요청을 입력이 끝난 시점 1회로 줄이고, 외부 데이터가 누락되어도 깨진 이미지 없이 항상 기본 커버가 표시되도록 만들어 화면 안정성을 높였습니다. 2인 팀에서 화면 전환·API 연동·상태 관리를 함께 구현했습니다.",
    images: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
