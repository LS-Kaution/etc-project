import { create } from 'zustand'
import { OrderDetail } from '../types'

interface State {
  products: OrderDetail[]
}

interface Action {
  addProduct: (product: OrderDetail) => void
  deleteProduct: (productId: string) => void
  updateProduct: (product: OrderDetail) => void
  getSubTotal: () => number
  getTotal: () => number
  clearProducts: () => void
}

export const useOrderDetailStore = create<State & Action>()((set, get) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (id) => set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
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
    
    return parseFloat((subTotal + tax).toFixed(2));
  },
  clearProducts: () => set({ products: [] })
}))