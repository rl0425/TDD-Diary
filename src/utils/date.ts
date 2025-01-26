/**
 * 날짜를 포맷팅하는 함수
 * @param {Date} date - 날짜 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR').format(date)
} 