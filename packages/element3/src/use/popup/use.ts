import { computed, onBeforeMount, onBeforeUnmount, onUnmounted } from 'vue'
import {
  getStyle,
  addClass,
  removeClass,
  hasClass
} from '../../../src/utils/dom'

let zIndex = 2000

let components = 0

function useZindex() {
  return computed(() => zIndex++)
}

function useBodyStyle({ lockScroll }) {
  // 如果需要遮罩层 给body 加样式
  const body = document.body
  components++
  onBeforeMount(() => {
    if (!hasClass(body, 'body-positon-relative')) {
      addClass(body, 'body-positon-relative')
    }
  })

  onBeforeUnmount(() => {
    // 要判断是否是最后一个元素
    components--

    if (components <= 1) {
      removeClass(body, 'body-positon-relative')
    }
  })
  onUnmounted(() => {
    if (lockScroll || !hasClass(document.body, 'el-popup-parent--hidden')) {
      addClass(document.body, 'el-popup-parent--hidden')
    }
  })
}

export { useZindex, useBodyStyle }
