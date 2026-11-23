import { ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "binright",
    name: "바로버림",
    period: "2026.10",
    team: "2인 팀 프로젝트",
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
    award: {
      title: "최우수상",
      contest:
        "배화여자대학교 2026학년도 같이(Together), 가치(Value)! 사회적 공헌 활동 교내 공모전",
    },
    role: "2인 팀으로 기획부터 배포까지 함께 개발",
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
    period: "2026.07 — 2026.11",
    team: "1인 개인 프로젝트",
    tagline: "AI 캐릭터 대화·공유 플랫폼",
    stack: [
      "Next.js 16 (App Router)",
      "JavaScript (ES6+)",
      "Supabase (Auth/DB/Storage/RLS)",
      "Google Gemini API",
      "Gemini Embedding",
      "Vercel",
    ],
    links: {
      live: "https://ai-character-chat-2l7d13qif-puara-gs-projects.vercel.app",
      github: "https://github.com/puara-g/ai-character-chat",
    },
    role: "기획부터 배포까지 단독 개발",
    problem:
      "처음 만든 버전은 내 캐릭터와 1:1로 대화만 하는 구조라, AI 답변이 설명문처럼 길어 메신저 같은 몰입감이 없었고 캐릭터를 다른 사람과 공유할 방법도 없었습니다. 캐릭터를 공개하려면 남의 대화·캐릭터를 볼 수 없도록 데이터 접근을 DB 단에서 막아야 했고, 실제 사람의 카톡 말투를 따라 하는 기능은 대화 원본과 개인정보를 어떻게 다룰지가 문제였습니다.",
    approach: [
      "Supabase RLS로 캐릭터는 '공개 또는 본인 것'만, 대화방·메시지·호감도는 본인 것만 조회되도록 막고, 실시간 랭킹은 메시지 원문 없이 '대화한 사람 수'만 세는 security definer 함수(character_ranking)로 집계했습니다.",
      "카톡 내보내기 파일(PC/안드로이드/아이폰 .txt·.csv)을 브라우저에서만 파싱해 원본을 서버로 보내지 않고, 링크·이메일·전화번호를 마스킹했습니다. '상대 말 → 실제 대답' 쌍을 Gemini Embedding(256차원) 코사인 유사도와 글자 n-gram 비교로 찾아 프롬프트에 넣어, 비슷한 상황에서 그 사람이 했던 표현을 재현하게 했습니다. 카톡 캐릭터는 DB 제약조건으로 공개를 막았습니다.",
      "호감도 모드는 Gemini 구조화 출력(responseSchema)으로 답장과 함께 호감도 변화(-5~5)와 새로 알게 된 사실을 JSON으로 받아, 0~100 점수에 따라 5단계로 태도가 변하고 사용자에 대해 기억한 내용(최대 20개)을 대화에 자연스럽게 꺼내도록 했습니다. 연애 단계는 19세 이상 가상 캐릭터에만 허용했습니다.",
      "작품 속 캐릭터 이름을 검색하면 후보 목록을 보여 주고 골라서 프로필을 자동으로 채우되, 실존 인물은 생성하지 않도록 판별했습니다. 답변은 1~2문장 메신저 규칙을 프롬프트에 두고, 최근 10개 메시지만 history로 보내며, Gemini 503/429 응답 시 자동 재시도와 한국어 안내를 넣었습니다.",
      "로그인 없이 체험 모드(sessionStorage)로 캐릭터 생성·대화를 해 볼 수 있게 하고, 둘러보기(검색 범위·정렬), 별점·한 줄 리뷰, 실시간 랭킹(24시간/7일), 닉네임 실시간 중복 확인, 오리지널 기본 캐릭터 6명을 추가했습니다.",
    ],
    result:
      "개인용 챗봇을 캐릭터를 만들고 공개·검색·리뷰·랭킹으로 공유하는 플랫폼으로 확장했습니다. 접근 제어를 RLS와 DB 제약조건으로 처리해 클라이언트 코드에 의존하지 않게 했고, 카톡 원본은 브라우저 밖으로 나가지 않도록 설계했습니다. 기획부터 Gemini/Supabase 연동, UI, 배포까지 혼자 구현했습니다.",
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
