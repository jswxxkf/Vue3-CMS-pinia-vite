import type { App } from 'vue'

import { Iphone, UserFilled } from '@element-plus/icons-vue'
const icons = [Iphone, UserFilled]

export default function (app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
