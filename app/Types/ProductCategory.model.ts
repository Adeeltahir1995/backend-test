export interface CreateProductCategory {
  name: string;
  status?: boolean;
}

export interface UpdateProductCategory {
  name?: string;
  status?: boolean;
}
