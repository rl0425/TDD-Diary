/**
 * 다이어리 섹션 레이아웃 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - 하위 컴포넌트
 */
export default function DiaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
