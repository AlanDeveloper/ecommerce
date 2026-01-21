import type { Category } from './Category'
import type { Flag } from './Flag'

export interface Sneaker {
  id: number
  name: string
  src: string
  originalPrice: number
  price: number
  category: Category
  flag?: Flag
}
