import { SVGProps } from 'react'

export function JpFlag(props: SVGProps<SVGSVGElement>) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="1.34em"
         height="1em"
         viewBox="0 0 32 24"
         {...props}
      >
         <g fill="none">
            <path
               fill="#F7FCFF"
               fillRule="evenodd"
               d="M0 0v24h32V0z"
               clipRule="evenodd"
            ></path>
            <mask
               id="flagpackJp0"
               width="32"
               height="24"
               x="0"
               y="0"
               maskUnits="userSpaceOnUse"
               style={{ maskType: 'luminance' }}
            >
               <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M0 0v24h32V0z"
                  clipRule="evenodd"
               ></path>
            </mask>
            <g mask="url(#flagpackJp0)">
               <path
                  fill="#E31D1C"
                  fillRule="evenodd"
                  d="M16 19.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15"
                  clipRule="evenodd"
               ></path>
            </g>
         </g>
      </svg>
   )
}
