<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  render({ $props, $attrs, $slots }) {
    return (
      <PopupComponent>
        <div>
          <h1>这里是框架代码</h1>
          {$slots.default()}
        </div>
      </PopupComponent>
    )
  }
})

export default component
</script>
