<template>
  <Dialog title="hello word"> 这是弹框内容 </Dialog>
</template>
<script>
import { defineComponent } from 'vue'
import Dialog from './Dialog'

export default defineComponent({
  components: { Dialog },

  setup() {
    return {
      tabPosition: 'top'
    }
  }
})
</script>
