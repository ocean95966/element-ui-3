import { mount } from '@vue/test-utils'
import popupComponent from './testPopupComponent.vue'
import { createApp } from 'vue'

describe('open a teleport', () => {
  it.only('should render teleport when call open method', () => {
   
    const slotText = 'test'
    const wrapper = mount({
      components: {popupComponent},
      template: `<popupComponent>${slotText}</popupComponent>`
    })
 
    expect(document.querySelector('body > .el-popup__wrapper')).not.toBeUndefined()
    expect(document.body.innerHTML).toContain(slotText)
  })
})
