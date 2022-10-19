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

	const imagePath = `/images/posts/${slug}/${image}`
	return (
		<li className={classes.image}>
			<Link>
				<a>
					<div>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
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
