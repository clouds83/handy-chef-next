'use server'

import { Recipe } from '@/lib/types'
import prisma from '@/prisma/db'

export const getRecipes = async () => {
  return await prisma.recipe.findMany()
}

export const getRecipe = async (id: string) => {
  return await prisma.recipe.findUnique({
    where: {
      id: id,
    },
  })
}

export const createRecipe = async (data: Recipe) => {
  return await prisma.recipe.create({
    data,
  })
}
