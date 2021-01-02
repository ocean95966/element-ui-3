<style scope>
  .el-popup__wrapper {
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
<script lang="jsx">
import { defineComponent, reactive, computed, toRaw, Teleport, ref, getCurrentInstance, onBeforeMount } from 'vue'
import { props } from './props.ts'
import { increateZindex } from './PopupManager.ts'

let zIndex = 2000

/**
 * 管理组件
 * 
 */
export default defineComponent({
    props,
    setup() {
       
       const zIndex = computed(() => increateZindex(), {immediate: true})

       return {
          zIndex
       }
    },
    render({ $props, $attrs, $slots, zIndex }) {
      return (
               <Teleport to="body">
                  <div class="el-popup__wrapper" style={{zIndex}} >
                    {$slots.default()}
                  </div>
              </Teleport>
              )
    }
  })

</script>
