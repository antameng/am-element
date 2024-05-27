import { makeInstaller } from '@am-element/utils'
import components from './components'
import '@am-element/theme/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const install = makeInstaller(components)
export * from '@am-element/components'
export default install
