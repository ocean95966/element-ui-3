<template>
  <popupComponent msg="hello word" />
</template>
<script>
import { defineComponent } from 'vue'
import popupComponent from 'C:/phpstudy_pro_new/WWW/element3/packages/element3/tests/unit/use/popupComponent'
export default defineComponent({
  components: { popupComponent },
  data() {
    return {
      tabPosition: 'top'
    }
  }
})
</script>
