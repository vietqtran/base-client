import React from 'react'

export const useClickOutside = (
   ref: React.RefObject<HTMLElement> | null,
   handler: (event: MouseEvent) => void
) => {
   React.useEffect(() => {
      const listener = (event: MouseEvent) => {
         if (!ref?.current || ref?.current.contains(event.target as Node)) {
            return
         }
         handler(event)
      }
      document.addEventListener('click', listener)

      return () => {
         document.removeEventListener('click', listener)
      }
   }, [ref, handler])
}
