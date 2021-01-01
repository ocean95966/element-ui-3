<script lang="jsx">
import { defineComponent, Teleport, toRaw, ref, getCurrentInstance } from 'vue'

export default (component) =>
  defineComponent({
    render({ $props, $attrs, $slots }) {
      console.log($slots)
      return (
        <Teleport to="body">
          <div class="el-popup__wrapper">
            <component {...$props} {...$attrs}>
              {' '}
              {$slots.default()}{' '}
            </component>
          </div>
        </Teleport>
      )
    }
  })
</script>
