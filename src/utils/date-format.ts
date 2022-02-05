import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(UtcString: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(UtcString).utcOffset(8).format(format)
}
