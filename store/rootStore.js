import userStore from './user'
import catalogStore from './catalog'

export default function createStore(initialValue) {
  return () => {
    return {
      user: { ...userStore(), ...initialValue.user },
      catalog: { ...catalogStore(), ...initialValue.catalog }
    }
  }
}