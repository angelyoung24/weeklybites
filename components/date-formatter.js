import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return (
  <div>
  <time className="justify-center" dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
  </div>
  )
}
