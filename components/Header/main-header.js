'use client'
import Link from "next/link"
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"


export default function Header() {

	return (
		<div>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logoImg} alt="a plate with food in it" priority></Image> Next Level Food
				</Link>

				<NavLink />
			</header>
		</div>
	)
}
