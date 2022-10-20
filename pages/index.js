import { Fragment } from 'react'

import FeaturedPosts from '../components/homePage/featured-posts'
import Hero from '../components/homePage/hero'
import { getFeaturedPosts } from '../lib/posts-util'

export default function Home(props) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={props.post} />
		</Fragment>
	)
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			posts: featuredPosts,
		},
	}
}
