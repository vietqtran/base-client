import React from 'react'

type Props = {
   size?: number
}

const NotiIcon = ({ size = 16 }: Props) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.67778 2.24023C5.12453 2.24023 5.12453 6.97789 5.12453 6.97789L1.57129 11.2079H15.7843L12.231 6.97789C12.231 6.97789 12.231 2.24023 8.67778 2.24023Z"
            stroke="currentColor"
            strokeWidth="1.77662"
            strokeLinejoin="round"
         />
         <path
            d="M6.30859 11.7168V12.9012C6.30859 14.2095 7.36915 15.27 8.67742 15.27C9.98569 15.27 11.0462 14.2095 11.0462 12.9012V11.7168"
            stroke="currentColor"
            strokeWidth="1.77662"
            strokeLinejoin="round"
         />
         <path
            d="M8.67773 1.05664V2.24106"
            stroke="currentColor"
            strokeWidth="1.77662"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}

export default NotiIcon
