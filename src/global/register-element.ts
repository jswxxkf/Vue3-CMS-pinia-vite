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
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination
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
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
