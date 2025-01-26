import { Diary } from '@/utils/types'
import { getDiaries, getDiary, createDiary } from '../diaryApi'


// 모킹을 위한 타입 가드
const isDiary = (data: unknown): data is Diary => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'title' in data &&
    'content' in data &&
    'createdAt' in data
  )
}

describe('Diary API', () => {
  // 각 테스트 전에 타이머 모킹
  beforeEach(() => {
    jest.useFakeTimers()
  })

  // 각 테스트 후에 모킹 초기화
  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  describe('getDiaries', () => {
    it('다이어리 목록을 성공적으로 가져온다', async () => {
      const diariesPromise = getDiaries()
      
      // 비동기 지연 처리
      jest.runAllTimers()
      
      const diaries = await diariesPromise
      
      expect(Array.isArray(diaries)).toBe(true)
      expect(diaries.length).toBeGreaterThan(0)
      expect(diaries[0]).toHaveProperty('id')
      expect(diaries[0]).toHaveProperty('title')
      expect(diaries[0]).toHaveProperty('content')
      expect(diaries[0]).toHaveProperty('createdAt')
    })
  })

  describe('getDiary', () => {
    it('특정 ID의 다이어리를 성공적으로 가져온다', async () => {
      const diaryPromise = getDiary('1')
      
      jest.runAllTimers()
      
      const diary = await diaryPromise
      
      expect(diary).toHaveProperty('id', '1')
      expect(diary).toHaveProperty('title')
      expect(diary).toHaveProperty('content')
      expect(diary).toHaveProperty('createdAt')
    })

    it('존재하지 않는 ID로 조회시 에러를 던진다', async () => {
      const diaryPromise = getDiary('999')
      
      jest.runAllTimers()
      
      await expect(diaryPromise).rejects.toThrow('다이어리를 찾을 수 없습니다.')
    })
  })

  describe('createDiary', () => {
    const newDiaryData = {
      title: '테스트 일기',
      content: '테스트 내용입니다.'
    }

    it('새로운 다이어리를 성공적으로 생성한다', async () => {
      const diaryPromise = createDiary(newDiaryData)
      
      jest.runAllTimers()
      
      const createdDiary = await diaryPromise
      
      expect(createdDiary).toHaveProperty('id')
      expect(createdDiary.title).toBe(newDiaryData.title)
      expect(createdDiary.content).toBe(newDiaryData.content)
      expect(createdDiary).toHaveProperty('createdAt')
      
      // ISO 날짜 형식 검증
      expect(Date.parse(createdDiary.createdAt)).not.toBeNaN()
    })

    it('생성된 다이어리의 ID가 유니크한지 확인', async () => {
      const diary1Promise = createDiary(newDiaryData)
      const diary2Promise = createDiary(newDiaryData)
      
      jest.runAllTimers()
      
      const [diary1, diary2] = await Promise.all([diary1Promise, diary2Promise])
      
      expect(diary1.id).not.toBe(diary2.id)
    })
  })
}) 