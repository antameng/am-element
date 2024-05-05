import { makeInstaller } from '@am-element/utils'
import components from './components'
import '@am-element/theme/index.css'
const install = makeInstaller(components)
export * from '@am-element/components'
export default install
