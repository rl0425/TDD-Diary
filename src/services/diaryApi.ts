import { Diary } from '@/utils/types'

/**
 * 더미 다이어리 데이터
 */
const DUMMY_DIARIES: Diary[] = [
  {
    id: '1',
    title: '오늘의 일기',
    content: '오늘은 날씨가 좋았다. TDD 공부를 시작했다.',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: '코딩 일기',
    content: 'Next.js App Router 구조에 대해 배웠다.',
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: '주말 일기',
    content: '주말에도 열심히 코딩했다.',
    createdAt: '2024-01-13'
  }
]

/**
 * 실제 API 호출을 시뮬레이션하기 위한 지연 함수
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * 다이어리 목록을 가져오는 함수
 * @returns {Promise<Diary[]>} 다이어리 목록
 * @throws {Error} 데이터 조회 실패시 에러
 */
export const getDiaries = async (): Promise<Diary[]> => {
  try {
    // 실제 API 호출처럼 약간의 지연 시간 추가
    await delay(500)
    return DUMMY_DIARIES
  } catch (error) {
    throw new Error('다이어리 목록을 불러오는데 실패했습니다.')
  }
}

/**
 * 다이어리 상세 정보를 가져오는 함수
 * @param {string} id - 다이어리 ID
 * @returns {Promise<Diary>} 다이어리 정보
 * @throws {Error} 데이터 조회 실패시 에러
 */
export const getDiary = async (id: string): Promise<Diary> => {
  try {
    await delay(300)
    const diary = DUMMY_DIARIES.find(diary => diary.id === id)
    
    if (!diary) {
      throw new Error('다이어리를 찾을 수 없습니다.')
    }
    
    return diary
  } catch (error) {
    throw new Error('다이어리 정보를 불러오는데 실패했습니다.')
  }
}

/**
 * 새로운 다이어리를 추가하는 함수
 * @param {Omit<Diary, 'id' | 'createdAt'>} diary - 새로운 다이어리 정보
 * @returns {Promise<Diary>} 생성된 다이어리 정보
 * @throws {Error} 데이터 생성 실패시 에러
 */
export const createDiary = async (diary: Omit<Diary, 'id' | 'createdAt'>): Promise<Diary> => {
  try {
    await delay(400)
    const newDiary: Diary = {
      id: String(DUMMY_DIARIES.length + 1),
      createdAt: new Date().toISOString().split('T')[0],
      ...diary
    }
    
    return newDiary
  } catch (error) {
    throw new Error('다이어리 생성에 실패했습니다.')
  }
} 