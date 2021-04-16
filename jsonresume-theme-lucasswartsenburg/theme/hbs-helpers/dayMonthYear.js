const moment = require('moment');

export default date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY')