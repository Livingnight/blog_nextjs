import Image from '../../node_modules/next/image'
import ReactMarkdown from '../../node_modules/react-markdown/index'
import classes from './post-content.module.css'

import PostHeader from './post-header'

export default function PostContent(props) {
	const { post } = props

	const imagePath = `/images/${post.slug}/${post.image}`

	const customRenderers = {
		// image(image) {
		//   return (
		//     <Image
		//       src={`/images/posts/${post.slug}/${image.url}`}
		//       alt={image.alt}
		//       width={600}
		//       height={300}
		//     />
		//   )
		// }
		p(paragraph) {
			const { node } = paragraph

			if (node.children[0].tagName === 'img') {
				const image = node.children[0]

				return (
					<div className={classes.image}>
						<Image
							src={`/images/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				)
			}
			return <p>{paragraph.children}</p>
		},
	}
	return (
		<article className={classes.content}>
			<PostHeader
				title={post.title}
				image={imagePath}
			/>
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	)
}
