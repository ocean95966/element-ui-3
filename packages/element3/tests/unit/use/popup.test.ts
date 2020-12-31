import { mount } from '@vue/test-utils'
import { usePopup } from '../../../src/use/popup/index'
import { onMounted, Teleport, h, defineComponent } from 'vue'
import PopupComponent from '../../../src/use/popup/PopupComponent.jsx'

describe('open a teleport', () => {
  it('should render teleport when call open method', () => {
    const component = defineComponent({
      setup() {
        return () => h('h1', 'hello word')
      }
    })
    const wrapper = mount({
      components: { component },
      template: `
        <PopupComponent>
              <div id="teleport">title</div>
        </PopupComponent>
        `,
      setup() {
        const { open } = usePopup()
        onMounted(() => open())
      }
    })

    expect(wrapper.find('body > #teleport').exists()).toBeTruthy()
    expect(wrapper.find('body > .el-popup__wrapper').exists()).toBeTruthy()
  })
})
