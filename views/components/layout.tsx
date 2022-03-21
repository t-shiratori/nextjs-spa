import React from 'react'
import { Navigation } from './navigation'

type TLayout = {
	children: React.ReactElement
}

export const Layout = ({ children }: TLayout): JSX.Element => {
	return (
		<div>
			<Navigation />
			<main className="m-4">{children}</main>
		</div>
	)
}
