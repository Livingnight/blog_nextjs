import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'

import classes from './post-item.module.css'

export default function PostItem(props) {
	const { title, image, excerpt, date, slug } = props.post

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const imagePath = `/images/${slug}/${image}`
	const linkPath = `/posts/${slug}`

	return (
		<li className={classes.image}>
			<Link href={linkPath}>
				<a>
					<div>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							layout='responsive'
						/>
					</div>
					<div>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}
