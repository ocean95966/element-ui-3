<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  render({ $props, $attrs, $slots }) {
    return (
      <div>
        <h1>这里是框架代码</h1>
        {$slots.default()}
      </div>
    )
  }
})

export default PopupComponent(component)
</script>
