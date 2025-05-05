import { database } from '@/firebase.config'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { Recipe } from '../types/recipe'

export async function getAllRecettes(): Promise<Partial<Recipe>[]> {
  const recettesRef = collection(database, 'recettes')
  const snapshot = await getDocs(recettesRef)

  const recettes: Partial<Recipe>[] = snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      titre: data.titre,
      description: data.description,
    }
  })

  return recettes
}

export const getRecetteById = async (id: string): Promise<Recipe | null> => {
  const docRef = doc(database, 'recettes', id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return null

  const data = docSnap.data()

  return {
    id: docSnap.id,
    titre: data.titre,
    description: data.description,
    ingredients: data.ingredients,
    instructions: data.instructions,
  }
}
