import { Diary } from "@/utils/types";
import DiaryList from "./_components/DiaryList";

/**
 * 더미 다이어리 데이터
 */
const DUMMY_DIARIES: Diary[] = [
  {
    id: "1",
    title: "오늘의 일기",
    content: "오늘은 날씨가 좋았다. TDD 공부를 시작했다.",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "코딩 일기",
    content: "Next.js App Router 구조에 대해 배웠다.",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    title: "주말 일기",
    content: "주말에도 열심히 코딩했다.",
    createdAt: "2024-01-13",
  },
];

/**
 * 다이어리 목록 페이지 컴포넌트
 */
export default function DiaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8" role="heading" aria-level={1}>
        다이어리 목록
      </h1>
      <DiaryList diaries={DUMMY_DIARIES} />
    </div>
  );
}
