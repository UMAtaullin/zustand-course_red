//функция create используется для создания хранилища состояния
import { create } from 'zustand';

// слово interface в TypeScript обозначает конструкцию, используемую для описания структуры объектов и функций. Интерфейсы позволяют определять, какие свойства и методы должны присутствовать у объекта
interface IBearStore {
  bears: number
  incrementBears: () => void
  removeAllBears: () => void
}

// создание хранилища состояния
export const useBearStore = create<IBearStore>(
  (set) => ({
    bears: 0,
    incrementBears: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })
)