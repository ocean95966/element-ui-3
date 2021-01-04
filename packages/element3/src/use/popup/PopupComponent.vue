<style scope>
.body-positon-relative {
  position: relative;
  margin: 0 !important;
  padding: 0 !important;
}
.el-mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
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
import { defineComponent, Teleport, ref } from 'vue'
import { props } from './props.ts'
import { useZindex, useBodyStyle } from './use.ts'

// let zIndex = 2000

/**
 * 管理组件
 *
 */
export default defineComponent({
  props,
  emits: ['closeOnClickModal'],
  setup(props, { emit }) {
    const show = ref(true)

    const zIndex = useZindex()

    useBodyStyle()

    const close = () => {
      show.value = false
      emit('closeOnClickModal')
    }

    return {
      zIndex,
      show,
      close
    }
  },
  render({ $props, $slots, zIndex, close, show }) {
    if (show) {
      return (
        <Teleport to="body">
          {$props.modal === true ? (
            <div class="el-mask" onClick={close}></div>
          ) : (
            ''
          )}
          <div class="el-popup__wrapper" style={{ zIndex }}>
            {$slots.default && $slots.default()}
          </div>
        </Teleport>
      )
    } else {
      return null
    }
  }
})
</script>
