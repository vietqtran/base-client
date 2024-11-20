import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('./_components/pages/HomePage'))

export default function Home() {
   return <HomePage />
}
