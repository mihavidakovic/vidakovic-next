import { motion } from 'framer-motion';
import '../styles/main.scss'

function MyApp({ Component, pageProps, router }) {
  return (
		<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
			pageInitial: {
				opacity: 0
			},
			pageAnimate: {
				opacity: 1
			},
		}}>
			<Component {...pageProps} className="App" />
		</motion.div>
	)
}

export default MyApp
