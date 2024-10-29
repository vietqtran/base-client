import React from 'react'

type Props = {
   size?: number
}

const PlusIcon = ({ size = 16 }: Props) => {
   return (
      <svg
         style={{ width: size, height: size }}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M2.13184 8.05274H14.124H2.13184ZM8.11794 14.0488L8.12794 2.05664L8.11794 14.0488Z"
            fill="black"
         />
         <path
            d="M2.13184 8.05274H14.124M8.11794 14.0488L8.12794 2.05664"
            stroke="currentColor"
            strokeWidth="1.5"
         />
      </svg>
   )
}

export default PlusIcon
