/**
 * 공통 입력 컴포넌트
 * @param {object} props
 * @param {string} props.id - 입력 필드 ID
 * @param {string} props.label - 라벨 텍스트
 * @param {string} props.value - 입력 값
 * @param {(value: string) => void} props.onChange - 변경 핸들러
 */
export default function Input({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      />
    </div>
  );
}
