let BASE_URL = ''
let TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  TIME_OUT = 5000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000/'
  TIME_OUT = 10000
} else {
  BASE_URL = 'http://coderxkf.org/test'
  TIME_OUT = 15000
}

export { BASE_URL, TIME_OUT }
