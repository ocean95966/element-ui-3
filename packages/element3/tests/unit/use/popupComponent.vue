<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  render({ $props, $attrs }) {
    return <h1>牛逼</h1>
  }
})

export default PopupComponent(component)
</script>
