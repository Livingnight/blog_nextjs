import Layout from '../components/layout/layout'
import MainNavigation from '../components/layout/main-navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<MainNavigation />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
