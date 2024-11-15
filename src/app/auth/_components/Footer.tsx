import SwitchLang from '@/components/common/Lang/SwitchLang'
import React from 'react'

const Footer = () => {
   return (
      <footer className="absolute bottom-0 left-0 right-0 h-12">
         <div className="relative flex size-full items-center justify-center">
            <SwitchLang />
         </div>
      </footer>
   )
}

export default Footer
