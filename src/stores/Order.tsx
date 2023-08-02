import { create } from 'zustand'
import { Order } from '../types'

interface State extends Order {}

interface Action {
  updateOrder: (order: Order) => void
}

export const useOrderStore = create<State & Action>()((set) => ({
  tax: 0.16,
  updateOrder: (order) => set({ ...order }),
}))