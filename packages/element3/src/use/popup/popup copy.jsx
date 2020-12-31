import { defineComponent, getCurrentInstance, Teleport, expose } from 'vue'
import {IProps} from './props'

export default defineComponent({
     setup() {
        const instance = getCurrentInstance()

        return {
            instance
        }
     },
     render() {
        return (<div></div>) 
     }
})