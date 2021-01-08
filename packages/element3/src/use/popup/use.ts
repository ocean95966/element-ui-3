import { computed, onBeforeMount, onBeforeUnmount, onUnmounted } from 'vue'
import {
  getStyle,
  addClass,
  removeClass,
  hasClass
} from '../../../src/utils/dom'

let zIndex = 2000

let useBodyScrollCounter = 0
let useBodyPositionCounter = 0

const body = document.body
function useZindex() {
  return computed(() => zIndex++)
}

function useBodyPosition() {
  // 如果需要遮罩层 给body 加样式
  useBodyPositionCounter++
  onBeforeMount(() => {
    if (!hasClass(body, 'body-positon-relative')) {
      addClass(body, 'body-positon-relative')
    }
  })

  onBeforeUnmount(() => {
    // 要判断是否是最后一个元素
    useBodyPositionCounter--

    if (useBodyScrollCounter <= 1) {
      removeClass(body, 'body-positon-relative')
    }
  })
}

function useBodyScroll({ lockScroll }) {
  useBodyScrollCounter++
  onBeforeMount(() => {
    if (lockScroll && !hasClass(body, 'el-popup-parent--hidden')) {
      addClass(body, 'el-popup-parent--hidden')
    }
  })

  onUnmounted(() => {
    useBodyScrollCounter--
    if (lockScroll || useBodyScrollCounter <= 1) {
      removeClass(document.body, 'el-popup-parent--hidden')
    }
  })
}

export { useZindex, useBodyScroll, useBodyPosition }
