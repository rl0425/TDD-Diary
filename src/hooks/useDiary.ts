import { useState, useCallback } from 'react'
import { Diary } from '@/utils/types'
import { getDiary } from '@/services/diaryApi'

/**
 * 다이어리 관련 훅
 * @param {string} id - 다이어리 ID
 */
export const useDiary = (id: string) => {
  const [diary, setDiary] = useState<Diary | null>(null)

  const fetchDiary = useCallback(async () => {
    const data = await getDiary(id)
    setDiary(data)
  }, [id])

  return { diary, fetchDiary }
} 