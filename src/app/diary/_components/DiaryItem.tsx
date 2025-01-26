import Link from "next/link";
import { formatDate } from "@/utils/date";

/**
 * 다이어리 아이템 컴포넌트
 * @param {object} props
 * @param {string} props.id - 다이어리 ID
 * @param {string} props.title - 다이어리 제목
 * @param {string} props.content - 다이어리 내용
 * @param {string} props.createdAt - 작성일
 */
export default function DiaryItem({
  id,
  title,
  content,
  createdAt,
}: {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}) {
  return (
    <li className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <Link
        href={`/diary/${id}`}
        className="block"
        aria-label={`${title} 상세보기`}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{content}</p>
        <time className="text-sm text-gray-500" dateTime={createdAt}>
          {formatDate(new Date(createdAt))}
        </time>
      </Link>
    </li>
  );
}
