'use server'

import { verifyAuth } from '@/lib/auth'
import { Recipe } from '@/lib/types'
import prisma from '@/prisma/db'
import { redirect } from 'next/navigation'

export const getRecipes = async () => {
  const { user } = await verifyAuth()

  if (!user) {
    throw new Error('User not found')
  }

  return await prisma.recipe.findMany({
    where: {
      userId: user.id,
    },
  })
}

export const getRecipe = async (id: string) => {
  return await prisma.recipe.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      userId: true,
      imageUrl: true,
      servings: true,
      prepTime: true,
      ingredients: true,
      instructions: true,
    },
  })
}

export const createRecipe = async (data: Recipe) => {
  const { user } = await verifyAuth()

  if (!user) {
    throw new Error('User not found')
  }

  if (!data.name) {
    throw new Error('Name is required')
  }

  const newRecipe = await prisma.recipe.create({
    data: {
      ...data,
      id: (data.id as string) || undefined,
      ingredients: JSON.stringify(data.ingredients) || null,
      userId: user.id,
    },
  })

  redirect(`/recipe/${newRecipe.id}`)
}

export const deleteRecipe = async (id: string) => {
  await prisma.recipe.delete({
    where: {
      id: id,
    },
  })

  redirect('/')
}

export const updateRecipe = async (id: string, data: Recipe) => {
  await prisma.recipe.update({
    where: {
      id: id,
    },
    data: {
      ...data,
      id,
      ingredients: JSON.stringify(data.ingredients) || null,
    },
  })

  redirect(`/recipe/${id}`)
}
