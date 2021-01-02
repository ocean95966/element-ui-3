<template>
  <Dialog title="hello word" v-model="show">
    <span @click="clickHandle">fdsfsdafsdafsdaf</span>
    <template v-slot:footer>
    <div class="dialog-footer">
        this is footer
    </div>
  </template>
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
    const show = ref(true)
    watch(count, () => {
      console.log('```````````', count.value)
    })
    return {
      clickHandle,
      show,
      tabPosition: 'top'
    }
  }
})
</script>
