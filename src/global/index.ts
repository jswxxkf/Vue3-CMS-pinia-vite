import type { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app: App) {
  registerElement(app)
}