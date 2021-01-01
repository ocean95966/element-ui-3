<script lang="jsx">
import { defineComponent, Teleport, toRaw, ref, getCurrentInstance } from 'vue'

export default (component) =>
  defineComponent({
    render({ $props, $attrs }) {
      console.log(toRaw($attrs), 8888)
      return (
        <Teleport to="body">
          <div class="el-popup__wrapper" {...$props} {...$attrs}>
            <component />
          </div>
        </Teleport>
      )
    }
  })
</script>
