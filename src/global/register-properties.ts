import type { App } from 'vue'
// utils
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(timeString: string) {
      return formatUtcString(timeString)
    }
  }
}
