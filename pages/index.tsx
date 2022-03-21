import dynamic from 'next/dynamic'
export default function Home() {
	const DynamicComponentWithNoSSR = dynamic(() => import('../views/spaRoot'), { ssr: false })
	return <DynamicComponentWithNoSSR />
}
