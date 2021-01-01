<template>
  <Dialog title="hello word" :show="false">
    <span @click="clickHandle">fdsfsdafsdafsdaf</span>
  </Dialog>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import Dialog from './Dialog'

export default defineComponent({
  components: { Dialog },

  setup() {
    const count = ref(0)
    const clickHandle = () => count.value++
    watch(count, () => {
      console.log('```````````', count.value)
    })
    return {
      clickHandle,
      tabPosition: 'top'
    }
  }
})
</script>
