import * as http from './base'

const applyDevices = (data) => {
  return http.post('/devices/apply', data)
}

export {applyDevices}
