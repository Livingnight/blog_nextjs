import React, { Fragment } from 'react'

export default function Layout(props) {
	return (
		<Fragment>
			{/* // Main Navigation */}
			<main>{props.children}</main>
		</Fragment>
	)
}
