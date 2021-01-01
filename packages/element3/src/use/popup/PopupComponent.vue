<style scoped>
</style>
<script lang="jsx">
import { defineComponent, Teleport, toRaw, ref, getCurrentInstance } from 'vue'
import { props } from './props.ts'
export default (component) =>
  defineComponent({
    props,
    render({ $props, $attrs, $slots }) {
      console.log(toRaw($props))
      if ($props.show) {
             return (
               <Teleport to="body" >
                <div class="el-popup__wrapper">
                  <component {...$props}  {...$attrs}>
                    {' '}
                    {$slots.default()}{' '}
                  </component>
                </div>
              </Teleport>
              )
      }
    }
  })
</script>
