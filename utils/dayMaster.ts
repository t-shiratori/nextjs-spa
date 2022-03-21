import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { TDateInfo } from '../logic/store/counterList/'

dayjs.extend(timezone)
dayjs.extend(utc)

export const dayMaster = {
	getLocale: () => dayjs.locale(),
	getNow: () => dayjs(),
	getYear: () => dayjs().format('YYYY'),
	getMonth: () => dayjs().format('MM'), // start 0
	getDate: () => dayjs().format('DD'),
	getDay: () => dayjs().format('ddd'),
	getHour: () => dayjs().format('HH'),
	getMinute: () => dayjs().format('mm'),
	getSecond: () => dayjs().format('ss'),
	getMillisecond: () => dayjs().get('millisecond'),
}

export const getDateInfo = (): TDateInfo => ({
	year: dayMaster.getYear(),
	month: dayMaster.getMonth(),
	date: dayMaster.getDate(),
	day: dayMaster.getDay(),
	hour: dayMaster.getHour(),
	minute: dayMaster.getMinute(),
	second: dayMaster.getSecond(),
})
