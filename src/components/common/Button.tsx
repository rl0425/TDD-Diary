/**
 * 공통 버튼 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - 버튼 타입
 * @param {() => void} [props.onClick] - 클릭 핸들러
 */
export default function Button({
  children,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
