import { SVGProps } from 'react'

export function CnFlag(props: SVGProps<SVGSVGElement>) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="1.34em"
         height="1em"
         viewBox="0 0 32 24"
         {...props}
      >
         <g fill="none" fillRule="evenodd" clipRule="evenodd">
            <path fill="#E31D1C" d="M0 0h32v24H0z"></path>
            <path
               fill="#FECA00"
               d="m15.016 4.548l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zM7.018 9.607l-2.881 1.551l.657-3.026l-2.4-2.265l3.25-.123l1.374-2.826l1.374 2.826h3.243L9.24 8.132l.72 3.026zm9.998-1.059l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zm-1 4l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19zm-3 3l-1.01.61l.23-1.19l-.841-.89l1.139-.049l.482-1.11l.482 1.11h1.137l-.84.94l.253 1.19z"
            ></path>
         </g>
      </svg>
   )
}
