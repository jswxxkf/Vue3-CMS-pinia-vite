import type { App } from 'vue'
import registerElement from './register-element'
import registerIcons from './register-icons'
import registerProperties from './register-properties'

export function globalRegister(app: App) {
  registerElement(app)
  // registerIcons(app)
  registerProperties(app)
}
