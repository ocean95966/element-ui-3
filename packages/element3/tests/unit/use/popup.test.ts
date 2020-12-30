import { mount } from '@vue/test-utils'
import { useTeleport } from '../../../src/use/popup/index'
import { defineComponent, onMounted } from 'vue'

const component = defineComponent({
  template: '<div id="teleport">title</div>'
})

describe('open a teleport', () => {
  it('should render teleport when call open method', () => {
    const com = defineComponent({
      setup() {
        const teleport = useTeleport()

        onMounted(() => teleport.open())
      }
    })
    const wrapper = mount(com)

    expect(wrapper.find('body > #teleport').exists()).toBeTruthy()
    expect(wrapper.find('body > #teleport').classes()).toContain(
      'el-popup__wrapper'
    )
  })
})
