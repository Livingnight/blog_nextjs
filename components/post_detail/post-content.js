import ReactMarkdown from '../../node_modules/react-markdown/index'
import classes from './post-content.module.css'

import PostHeader from './post-header'

export default function PostContent(props) {
	const { post } = props

	const imagePath = `/images/${post.slug}/${post.image}`

	return (
		<article className={classes.content}>
			<PostHeader
				title={post.title}
				image={imagePath}
			/>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	)
}
