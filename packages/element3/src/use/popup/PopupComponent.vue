<script lang="jsx">
import { defineComponent, toRaw, Teleport, ref, getCurrentInstance } from 'vue'
import { props } from './props.ts'
export default defineComponent({
    props,
    render({ $props, $attrs, $slots }) {
      return (
               <Teleport to="body">
                  <div class="el-popup__wrapper">
                    {$slots.default()}
                  </div>
              </Teleport>
              )
    }
  })

</script>
