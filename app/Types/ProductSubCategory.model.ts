export interface CreateProductSubCategory {
  name: string;
  product_category_id: number;
  status?: boolean;
}

export interface UpdateProductSubCategory {
  name?: string;
  product_category_id?: number;
  status?: boolean;
}
