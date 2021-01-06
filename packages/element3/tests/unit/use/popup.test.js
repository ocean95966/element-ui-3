import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { PopupComponent } from '../../../src/use/popup/index.ts'

/**
 * mock 原生的tigger
 *
 */
Element.prototype.trigger = function (eventName) {
  this.dispatchEvent(new Event(eventName))
}

describe('open a teleport', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('should render teleport when call open method', () => {
    const slotText = 'test'
    mount({
      components: { PopupComponent },
      template: `<PopupComponent>${slotText}</PopupComponent>`
    })

    expect(document.querySelector('body > .el-popup__wrapper')).not.toBeNull()
    expect(
      getComputedStyle(
        document.querySelector('body > .el-popup__wrapper'),
        null
      ).getPropertyValue('z-index')
    ).toBe('2000')
    expect(document.body.innerHTML).toContain(slotText)
  })

  it('should auto increament z-index when render', () => {
    mount({
      components: { PopupComponent },
      template: `<PopupComponent></PopupComponent>`
    })

    mount({
      components: { PopupComponent },
      template: `<PopupComponent></PopupComponent>`
    })

    expect(
      getComputedStyle(
        document.querySelectorAll('body > .el-popup__wrapper')[1],
        null
      ).getPropertyValue('z-index')
    ).toBe('2002')
  })

  it('should destory mask and teleport when click modal', async () => {
    let clicked = false

    mount({
      setup() {
        const close = () => (clicked = true)
        return {
          closeOnClickModal: true,
          close
        }
      },
      components: { PopupComponent },
      template: `<PopupComponent :closeOnClickModal="true" @close="close"></PopupComponent>`
    })

    document.querySelector('.el-popup__wrapper').trigger('click')

    await nextTick()

    expect(document.querySelector('body > .el-popup__wrapper')).toBeNull()
    expect(clicked).toBeTruthy()
  })
  it('lockScroll', async () => {
    mount({
      components: { PopupComponent },
      template: `<PopupComponent :modal="true" :lockScroll="true"><div>123</div></PopupComponent>`
    })
    expect(document.querySelector('.el-popup-parent--hidden')).toBeTruthy()
    document.querySelector('.el-popup__wrapper').trigger('click')
    await nextTick()
    expect(document.querySelector('.el-popup-parent--hidden')).toBeNull()
  })
})
