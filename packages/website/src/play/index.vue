<template>
  <Dialog abc="hello word" />
</template>
<script>
import { defineComponent } from 'vue'
import Dialog from './Dialog'

export default defineComponent({
  components: { Dialog },

  data() {
    return {
      tabPosition: 'top'
    }
  }
})
</script>
