/**
 * 다이어리 상세 페이지 컴포넌트
 * @param {object} props
 * @param {object} props.params - URL 파라미터
 * @param {string} props.params.id - 다이어리 ID
 */
export default function DiaryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>다이어리 상세 - {params.id}</h1>
    </div>
  );
}
