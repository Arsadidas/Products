export interface IProduct {
    id?: number
    createdAt?:  string
    name?: string
    url?: string
    imageUrl?: string
    price?: number
    count?: number
    description?: string
}

export interface IProducts {
    products: IProduct[]
    currentProduct?:IProduct | null
    status: 'loading' | 'succeeded' | 'failed';
    error: null | string
}