<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  setup(props) {
    return () => h('h1', ...props, 'hello word')
  }
})

export default PopupComponent(component)
</script>
