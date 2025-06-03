import Link from 'next/link'
import { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function fetchMeals() {
  const meals = await getMeals()
  return meals
}

export default function MealPage() {
  return <div>
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
      <Suspense>
        fetching meals...
      </Suspense>
      <MealsGrid meals={fetchMeals} />
    </main>
  </div>
}
