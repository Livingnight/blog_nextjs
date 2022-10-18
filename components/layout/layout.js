import React, { Fragment } from 'react'

export default function Layout() {
	return (
		<Fragment>
			{/* // Main Navigation */}
			<main>{props.children}</main>
		</Fragment>
	)
}
