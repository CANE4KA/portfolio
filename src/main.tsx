import { LazyMotion, domAnimation } from 'motion/react'
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from './providers/ThemeProvider'

import './index.css'

const LazyHeader = lazy(() => import('./components/Header'))
const LazyHome = lazy(() => import('./components/Home'))
const LazyAbout = lazy(() => import('./components/About'))
const LazySkills = lazy(() => import('./components/Skills'))
const LazyProjects = lazy(() => import('./components/Projects'))
const LazyContact = lazy(() => import('./components/Contact'))
const LazyFooter = lazy(() => import('./components/Footer'))

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<LazyMotion features={domAnimation}>
				<ThemeProvider>
					<div className='min-h-screen bg-background text-foreground'>
						<LazyHeader />
						<LazyHome />
						<LazyAbout />
						<LazySkills />
						<LazyProjects />
						<LazyContact />
						<LazyFooter />
					</div>
				</ThemeProvider>
			</LazyMotion>
		</Suspense>
	</StrictMode>
)
