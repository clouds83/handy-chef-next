'use client'

import { Recipe } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import cn from '@/lib/utils/cn'

export default function RecipeButton({ recipe }: { recipe: Recipe }) {
  const { id } = useParams()
  const isActive = id === recipe?.id

  return (
    <Link href={`/recipe/${recipe?.id}`} className={cn('flex items-center gap-2', { 'bg-lime-100': isActive })}>
      {recipe.imageUrl && (
        <Image
          width={64}
          height={64}
          src={recipe?.imageUrl}
          alt={`${recipe?.name} picture`}
          className='size-16 rounded-full object-cover'
        />
      )}

      <h2 className='font-semibold'>{recipe?.name}</h2>
    </Link>
  )
}
