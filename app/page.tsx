'use client'

import { useEffect, useState } from 'react'
import RecipeCard from './components/RecipeCard'
import { getAllRecettes } from './lib/api'
import { Recipe } from './types/recipe'

export default function HomePage() {
  const [recettes, setRecettes] = useState<Partial<Recipe>[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecettes()
        setRecettes(data)
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes :', error)
      }
    }

    fetchData()
  }, [])

  const filtered = recettes.filter((r) =>
    r?.titre?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Rechercher une recette...'
        className='mb-8 w-full p-3 border-2 border-black bg-white placeholder:text-gray-600 cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]'
      />
      <section className='grid md:grid-cols-3 gap-6'>
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </>
  )
}
