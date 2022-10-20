import PostContent from '../../components/post_detail/post-content'

import { getPostData, getPostsFiles } from '../../lib/posts-util'

export default function PostDetails(props) {
	return <PostContent post={props.post} />
}

export function getStaticProps(context) {
	const { params } = context
	const { slug } = params

	const postData = getPostData(slug)

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	}
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles()

	const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))

	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	}
}
