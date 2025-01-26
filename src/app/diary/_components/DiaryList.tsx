import { Diary } from "@/utils/types";
import DiaryItem from "./DiaryItem";

/**
 * 다이어리 목록 컴포넌트
 * @param {object} props
 * @param {Diary[]} props.diaries - 다이어리 목록 데이터
 */
export default function DiaryList({ diaries }: { diaries: Diary[] }) {
  return (
    <ul className="space-y-4">
      {diaries.map((diary) => (
        <DiaryItem
          key={diary.id}
          id={diary.id}
          title={diary.title}
          content={diary.content}
          createdAt={diary.createdAt}
        />
      ))}
    </ul>
  );
}
