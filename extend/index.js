
import "weex-vue-render"
import nativeEvent from './modules/nativeEvent'
import globalEvent from 'weex-vue-global-event'

weex.install(globalEvent)
weex.registerModule('nativeEvent',nativeEvent);

