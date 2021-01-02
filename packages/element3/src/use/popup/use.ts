
import { computed, onBeforeMount, onBeforeUnmount } from 'vue'
import { getStyle, addClass, removeClass, hasClass } from '../../../src/utils/dom'

let zIndex = 2000

function useZindex() {
   return computed(() => zIndex++)
}

function useBodyStyle() {
    // 如果需要遮罩层 给body 加样式
    const body = document.body
    onBeforeMount(() => {
      if (!hasClass(body, 'body-positon-relative')) {
         addClass(body, 'body-positon-relative')
      }
    })

    onBeforeUnmount(() => {
        // 要判断是否是最后一个元素
    })
}
export {useZindex, useBodyStyle}