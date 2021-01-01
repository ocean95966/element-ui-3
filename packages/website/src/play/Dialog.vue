<script lang="jsx">
import { defineComponent, getCurrentInstance, toRaw, reactive } from 'vue'
import popupComponent from 'C:/phpstudy_pro_new/WWW/element3/packages/element3/tests/unit/use/popupComponent.vue'

export default defineComponent({
  setup(props, { attrs }) {
    const state = reactive({
      count: 0
    })

    return () => <popupComponent {...attrs} {...props} />
  }
})
</script>
