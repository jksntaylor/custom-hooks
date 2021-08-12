import { useEffect } from 'react'

// callback should be a useCallback function if possible
export const useAnimationFrame = (callback: () => any) => {
  const tick = () => {
    callback()
    window.requestAnimationFrame(tick)
  }
  useEffect(() => {
    window.requestAnimationFrame(tick)
  }, [tick])
}
