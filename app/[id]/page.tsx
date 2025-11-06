import { getRecetteById } from '@/app/lib/api'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Recipe } from '../types/recipe'

export default async function RecettePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const recette: Recipe | null = await getRecetteById(id)

  if (!recette) return notFound()

  return (
    <div className='flex justify-center items-start min-h-screen'>
      <div className='w-full max-w-2xl'>
        <Link href={`/`}>
          <button className='mb-4 px-4 py-2 border-2 border-black dark:border-white bg-white text-black dark:bg-neutral-900 dark:text-white cursor-pointer transition-all duration-100 ease-out shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_rgba(255,255,255,1)] hover:bg-gray-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:bg-neutral-800 dark:hover:-translate-x-1 dark:hover:-translate-y-1 dark:hover:shadow-[4px_4px_0_rgba(255,255,255,1)] active:bg-gray-200 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:active:bg-neutral-700 dark:active:shadow-[2px_2px_0_rgba(255,255,255,1)]'>
            ← Retour
          </button>
        </Link>
        <article className='bg-white border-2 border-black shadow-[7px_7px_0px_rgba(0,0,0,1)] p-6 md:p-10 max-w-2xl w-full dark:bg-neutral-900 dark:text-white dark:border-white dark:shadow-[4px_4px_0_rgba(255,255,255,1)]'>
          <h1 className='text-2xl font-bold mb-4'>{recette.titre}</h1>

          <p className='mb-6 text-sm'>{recette.description}</p>

          <section className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Ingrédients</h2>
            <ul className='list-disc list-inside space-y-1 text-sm'>
              {recette.ingredients.map((ingr) => (
                <li key={ingr}>{ingr}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>Instructions</h2>
            <ol className='list-decimal list-inside space-y-1 text-sm'>
              {recette.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </div>
  )
}
