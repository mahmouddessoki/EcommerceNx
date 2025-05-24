export interface IBestSellerData {
  message: string,
  bestSeller: IBestSellerRes[]
}

export interface IBestSellerRes {
  rateAvg: number
  rateCount: number
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  createdAt: string
  updatedAt: string
  __v: number
  isSuperAdmin: boolean
  sold?: number
  id: string
  discount?: number;
}