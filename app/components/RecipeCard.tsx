import Link from 'next/link'
import { Recipe } from '../types/recipe'

interface Props {
  recipe: Partial<Recipe>
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <div
      key={recipe.id}
      className='flex flex-col justify-between border-3 border-black bg-white dark:bg-neutral-700 p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[2px_2px_0_rgba(255,255,255,1)] dark:hover:shadow-[3px_3px_0_rgba(255,255,255,1)] h-40 w-96 md:w-full md:h-52 mx-auto'
    >
      <div>
        <h2 className='md:text-2xl font-bold'>{recipe.titre}</h2>
        <p className='text-sm md:text-base'>{recipe.description}</p>
      </div>

      <Link href={`/${recipe.id}`} className='mt-auto'>
        <button className='mt-4 px-4 py-2 border-2 border-black dark:bg-neutral-800 dark:border-white p-2.5 bg-pink-500 text-white hover:bg-pink-600 dark:hover:bg-neutral-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_rgba(255,255,255,1)] dark:hover:shadow-[3px_3px_0_rgba(255,255,255,1)] active:bg-pink-700 cursor-pointer'>
          Voir plus
        </button>
      </Link>
    </div>
  )
}

export default RecipeCard
