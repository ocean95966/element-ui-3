<style scope>
.body-positon-relative {
  position: relative;
}
.el-mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1999;
  width: 100%;
  height: 100%;
  background: black;
}
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
import {
  defineComponent,
  reactive,
  computed,
  toRaw,
  Teleport,
  ref,
  getCurrentInstance,
  onBeforeMount
} from 'vue'
import { props } from './props.ts'
import { useZindex, useBodyStyle } from './use.ts'

let zIndex = 2000

/**
 * 管理组件
 *
 */
export default defineComponent({
  props,
  setup() {
    const zIndex = useZindex()
    useBodyStyle()

    const useMark = () => {
      if (props.mask) {
        // set body height
        const bodyHeight = document.boby.clientWidth
        return <div class="el-mask"></div>
      }
    }
    return {
      zIndex,
      useMark
    }
  },
  render({ $props, $attrs, $slots, zIndex, useMark }) {
    return (
      <Teleport to="body">
        {useMark()}
        <div class="el-popup__wrapper" style={{ zIndex }}>
          {$slots.default()}
        </div>
      </Teleport>
    )
  }
})
</script>
