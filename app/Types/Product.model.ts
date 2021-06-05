export interface CreateProduct {
  user_id: number
  product_category_id: number
  product_sub_category_id: number
  title: string
  description: string
  price: number
}

export interface UpdateProduct {
  user_id?: number
  product_category_id?: number
  product_sub_category_id?: number
  title?: string
  description?: string
  price?: number
}
