import { Teleport, ref, h } from 'vue'
import { props } from './props'
import { useZindex, useBodyScroll } from './use'

const popupWrapper = {
  render({ $slots }) {
    return h('div', null, $slots.default ? $slots.default() : null)
  }
}

export default {
  props,
  emits: ['close'],
  setup(props, { emit, attrs }) {
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
  render({ $props, $attrs, $slots, zIndex, close, show }) {
    return show
      ? h(
          Teleport,
          {
            to: 'body'
          },
          h(
            popupWrapper,
            {
              style: {
                zIndex
              },
              class: $attrs.class,
              onClick: close
            },
            $slots?.default
          )
        )
      : null
  }
}
