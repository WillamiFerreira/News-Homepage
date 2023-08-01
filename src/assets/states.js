import {create} from 'zustand';

const useStore = create((set) => ({
  show: false,
  setShow: () => set((state) => ({show: state.show = !state.show}))
}));

export default useStore;