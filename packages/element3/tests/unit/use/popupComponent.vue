<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  setup() {
    return () => h('h1', { msg: 'msg' }, 'hello word')
  }
})

export default PopupComponent(component)
</script>
