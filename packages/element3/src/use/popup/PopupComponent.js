import { Teleport, ref, h } from 'vue'
import { props } from './props'
import { useZindex, useBodyScroll } from './use'

const popupWrapper = {
  render({ $slots }) {
    return <div>{$slots.default ? $slots.default() : null}</div>
  }
}

export default {
  props,
  emits: ['close'],
  setup(props, { emit }) {
    const show = ref(true)

    const zIndex = useZindex()

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
  render({ $attrs, $slots, zIndex, close, show }) {
    if (show) {
      return (
        <Teleport to="body">
          <popupWrapper style={{ zIndex }} class={$attrs.class} onClick={close}>
            {$slots.default ? $slots.default() : null}
          </popupWrapper>
        </Teleport>
      )
    }

    return null
  }
}
