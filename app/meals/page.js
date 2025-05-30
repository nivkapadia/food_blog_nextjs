import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'

export default function MealPage() {
  return <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created {' '}
        <span className={classes.highlight}> by you </span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and convineint.</p>
      <p classname={classes.cta}>
        <Link href="/meals/share">
          Share your Favorite Recipe
        </Link>
      </p>
    </header >
    <main className={classes.main}>
      <MealsGrid meals={[]} />
    </main>
  </>
}
