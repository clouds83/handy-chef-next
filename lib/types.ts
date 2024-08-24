export type Recipe = {
  name: string
  imageUrl?: string | null
  servings?: number | null
  prepTime?: number | null
  ingredients?: string | null
  instructions?: string | null
}

export type Ingredient = {
  name: string
  amount: number
  unit: string
}
