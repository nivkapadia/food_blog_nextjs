'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import classes from './nav-link.module.css'


export default function NavLink() {


	const path = usePathname()

	return (

		<nav className={classes.nav}>
			<ul>
				<li>
					<Link href="/meals" className={
						path.startsWith('/meals') ? classes.active : undefined
					}>Browse Meals</Link>
					<Link href="/community"
						className={
							path.startsWith('/community') ? classes.active : undefined
						}
					>Community</Link>
				</li>
			</ul>
		</nav>

	)
}
