import React from 'react'

interface Props {
   size?: number
}

const ArrowDown = ({ size = 13 }: Props) => {
   return (
      <svg
         style={{ width: size, height: size }}
         width="13"
         height="13"
         viewBox="0 0 13 13"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M9.54199 3.80859H3.54199L6.54199 8.30859L9.54199 3.80859Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.49956"
            strokeLinejoin="round"
         />
      </svg>
   )
}

export default ArrowDown
