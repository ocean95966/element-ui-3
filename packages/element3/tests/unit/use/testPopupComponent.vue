<script lang="jsx">
import { defineComponent, h } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

const component = defineComponent({
  setup(props, {attrs, slots, emit}) {
      return () => (
        <PopupComponent {...props}>
          <div>
            {slots.default()}
          </div>
        </PopupComponent>
    )
  }
})
export default component
</script>
