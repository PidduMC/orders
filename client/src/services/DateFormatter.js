import Moment from 'moment'

export default {
  formatDate (date) {
    return Moment(String(date)).format('MM/DD/YYYY')
  }
}
