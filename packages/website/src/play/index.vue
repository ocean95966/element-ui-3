<template>
  <div>
    <Dialog v-model="show" :closeOnClickModal="true">
      <span @click="clickHandle">fdsfsdafsdafsdaf</span>
      <template v-slot:footer>
        <div class="dialog-footer" style="color: red">点击框空白关闭</div>
      </template>
      <button @click="show = false">点击我关闭</button>
    </Dialog>
    <!-- <el-dialog
      title="提示"
      :visible="true"
      width="30%"
      :close-on-click-modal="true"
      center
    ></el-dialog> -->
  </div>
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
