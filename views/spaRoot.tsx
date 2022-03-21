import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TopPage } from './pages/top'
import { AboutPage } from './pages/about'

const SpaRoot = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<TopPage />} />
					<Route path={'/about'} element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default SpaRoot
