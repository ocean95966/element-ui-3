
import { computed } from 'vue'

let zIndex = 2000

function useZindex() {
   return computed(() => zIndex++)
}

function useMask() {
    // 如果需要遮罩层 给body 加样式
}
export {useZindex, useMask}