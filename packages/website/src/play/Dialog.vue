<script lang="jsx">
import { defineComponent } from 'vue'
import { PopupComponent } from 'A:/www/element3/packages/element3/src/use/popup/index.ts'

const createComponent = (type, message) => {
  return defineComponent({
    propsData: {
      type,
      message
    },
    props: {
      modelValue: {
        type: Boolean
      },
      type: String,
      message: String
    },
    emits: ['update:modelValue'],
    setup(props, { attrs, slots }) {
      // 这里是框架的export
      /**
       * 这里是处理各自组建的业务逻辑的
       * 1. 如果是modal框 v-modal 控制是否显示
       * 2. 如果是message 就是直接显示/延时销毁
       *
       */
      // const state = reactive({
      //   count: 0
      // })

      // const close = () => emit('update:modelValue', false)

      return () => {
        if (props.modelValue) {
          return (
            <PopupComponent {...attrs} {...{ props }} {...{ mask: true }}>
              {type} {message}
              <br />
              {slots.default()}
              {slots.footer()}
            </PopupComponent>
          )
        }
      }
    }
  })
}

export default createComponent('alert', 'success')
</script>
