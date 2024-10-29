import type { Config } from 'tailwindcss'
import fluid, { extract, screens } from 'fluid-tailwind'

const config: Config = {
   darkMode: 'class',
   content: {
      files: [
         './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
         './src/components/**/*.{js,ts,jsx,tsx,mdx}',
         './src/app/**/*.{js,ts,jsx,tsx,mdx}'
      ],
      extract
   },
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            button: {
               primary: 'var(--button-primary)',
               secondary: 'var(--button-secondary)',
               'hover-primary': 'var(--button-hover-primary)',
               'hover-secondary': 'var(--button-hover-secondary)'
            }
         },
         textColor: {
            primary: {
               white: 'var(--text-primary-white)',
               black: 'var(--text-primary-black)',
               blue: 'var(--text-primary-blue)',
               error: 'var(--text-primary-error)'
            }
         }
      },
      screens
   },
   plugins: [fluid]
} satisfies Config
export default config
