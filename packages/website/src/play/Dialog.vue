<script lang="jsx">
import { defineComponent, getCurrentInstance, toRaw, reactive } from 'vue'
import popupComponent from 'C:/phpstudy_pro_new/WWW/element3/packages/element3/tests/unit/use/popupComponent.vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    // 这里是框架的export
    /**
     * 这里是处理各自组建的业务逻辑的
     * 1. 如果是modal框 v-modal 控制是否显示
     * 2. 如果是message 就是直接显示/延时销毁
     *
     */
    const state = reactive({
      count: 0
    })
    console.log(attrs, emit)
    const close = () => emit('update:modelValue', false)

    setTimeout(() => {
       close()
    }, 2000);
    return () => (
      if () {
        
      }
      <popupComponent {...attrs} {...{ props }}>
        {' '}
        {slots.default()}
        {slots.footer()}
      </popupComponent>
    )
  }
})
</script>
