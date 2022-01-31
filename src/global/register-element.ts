import type { App } from 'vue'

import 'element-plus/theme-chalk/base.css'
import {
  ElIcon,
  ElButton,
  ElForm,
  ElFormItem,
  ElAside,
  ElTabs,
  ElTabPane,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItem
} from 'element-plus'

const components = [
  ElIcon,
  ElButton,
  ElForm,
  ElFormItem,
  ElAside,
  ElTabs,
  ElTabPane,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItem
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
