import { SVGProps } from 'react'

export function VnFlag(props: Readonly<SVGProps<SVGSVGElement>>) {
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
               d="M0 0h32v24H0z"
               clipRule="evenodd"
            ></path>
            <path
               fill="#E31D1C"
               fillRule="evenodd"
               d="M0 0v24h32V0z"
               clipRule="evenodd"
            ></path>
            <mask
               id="flagpackVn0"
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
            <g mask="url(#flagpackVn0)">
               <path
                  fill="#FFD221"
                  fillRule="evenodd"
                  d="m16.062 15.98l-5.15 3.275l1.727-5.733l-3.674-3.746l5.065-.11l2.241-5.66l2.042 5.734l5.053.089l-3.797 3.814l1.773 5.454z"
                  clipRule="evenodd"
               ></path>
            </g>
         </g>
      </svg>
   )
}
