import { defineComponent, getCurrentInstance, Teleport } from 'vue'

const usePopup = () => {
  const open = () => {
    const instance = getCurrentInstance()
    const toggle = (instance.proxy as any).toggle
    toggle(true)
  }

  return {
    open
  }
}

export default usePopup
