<script lang="jsx">
import { defineComponent, Teleport, ref, getCurrentInstance } from 'vue'

export default (component, warpperProps = {}) =>
  defineComponent({
    render(props, bindings) {
      console.log(props, bindings)
      return (
        <Teleport to="body" v-if="show">
          <div class="el-popup__wrapper">
            <component {...warpperProps} {...props} />
          </div>
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
</script>
