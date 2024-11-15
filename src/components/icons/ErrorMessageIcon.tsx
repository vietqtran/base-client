import React from 'react'

type Props = {
   size?: number
}

const ErrorMessageIcon = ({ size = 14 }: Props) => {
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
            d="M8.5975 15.1706C12.461 15.1706 15.593 12.0386 15.593 8.17514C15.593 4.31166 12.461 1.17969 8.5975 1.17969C4.73402 1.17969 1.60205 4.31166 1.60205 8.17514C1.60205 12.0386 4.73402 15.1706 8.5975 15.1706Z"
            stroke="currentColor"
            strokeWidth="1.5"
         />
         <path
            d="M6.09912 5.67578L11.0959 10.6725M11.0959 5.67578L6.09912 10.6725"
            stroke="currentColor"
            strokeWidth="1.5"
         />
      </svg>
   )
}

export default ErrorMessageIcon
