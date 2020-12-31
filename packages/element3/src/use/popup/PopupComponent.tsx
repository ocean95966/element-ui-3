import { defineComponent, Teleport, ref, getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const show = ref(false)

    const toggle = (value: boolean) => (show.value = value)

    useExpose({ toggle })

    return (
      <Teleport to="body" v-if="show">
        {$solt.defalut}
      </Teleport>
    )
  }
})

function useExpose(apis) {
  const instance = getCurrentInstance()
  if (instance) {
    Object.assign(instance.proxy, apis)
  }
}
