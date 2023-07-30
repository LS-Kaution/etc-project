import { create } from 'zustand'
import { OrderProduct } from './types'

interface State {
  products: OrderProduct[]
}

interface Action {
  addProduct: (product: OrderProduct) => void
  updateProduct: (product: OrderProduct) => void
  getSubTotal: () => number
  getTotal: () => number
}

export const useStore = create<State & Action>()((set, get) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (product) => set((state) => ({ products: state.products.map((p) => p.id === product.id ? product : p) })),
  getSubTotal: () => {
    const { products } = get()
    let subTotal = 0;

    products.forEach((product) => {
      subTotal += product.price! * product.quantity!;
    });
  
    return subTotal;
  },
  getTotal: () => {
    const subTotal = get().getSubTotal();
    const tax = subTotal * 0.16;
    
    return subTotal + tax;
  }
}))