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
import { defineComponent, Teleport, ref, h } from 'vue'
import { props } from './props.ts'
import { useZindex, useBodyPosition, useBodyScroll } from './use.ts'

// let zIndex = 2000

/**
 * 管理组件
 *
 */
//  defineComponent({
//   props,
//   emits: ['close'],
//   setup(props, { emit }) {
//     const show = ref(true)

//     const zIndex = useZindex()
//     useBodyPosition()
//     useBodyScroll(props)

//     const close = () => {
//       if (props.closeOnClickModal) {
//         show.value = false
//         emit('close')
//       }
//     }

//     return {
//       zIndex,
//       show,
//       close
//     }
//   },
//   render({ $props, $slots, zIndex, close, show }) {
//     if (show) {
//       return (
//         <Teleport to="body">
//           <div class="el-popup__wrapper" style={{ zIndex }} onClick={close}>
//             {$slots.default && $slots.default()}
//           </div>
//         </Teleport>
//       )
//     } else {
//       return null
//     }
//   }
// })

const popupWrapper = {
  render({ $slots }) {
    return h(
      'div',
      {
        class: 'el-popup__wrapper'
      },
      $slots.default()
    )
  }
}

export default {
  props,
  emits: ['close'],
  setup(props, { emit }) {
    const show = ref(true)

    const zIndex = useZindex()
    useBodyPosition()
    useBodyScroll(props)

    const close = () => {
      if (props.closeOnClickModal) {
        show.value = false
        emit('close')
      }
    }

    return {
      zIndex,
      show,
      close
    }
  },
  render({ $props, $slots, zIndex, close, show }) {
    return show
      ? h(
          Teleport,
          {
            to: 'body'
          },
          h(popupWrapper, null, $slots.default)
        )
      : null
  }
}
</script>
