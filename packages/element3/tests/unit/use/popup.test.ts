import { mount } from '@vue/test-utils'
import popupComponent from './popupComponent'

describe('open a teleport', () => {
  it('should render teleport when call open method', () => {
    console.log(popupComponent)
    const wrapper = mount(popupComponent)

    expect(wrapper.find('body > #teleport').exists()).toBeTruthy()
    expect(wrapper.find('body > .el-popup__wrapper').exists()).toBeTruthy()
  })
})
