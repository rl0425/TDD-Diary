"use client";

/**
 * 에러 페이지 컴포넌트
 * @param {object} props
 * @param {Error} props.error - 에러 객체
 * @param {() => void} props.reset - 에러 리셋 함수
 */
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>에러가 발생했습니다 : {error?.message}</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
