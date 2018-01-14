const moment = require('moment');

const times = function(time) {
    const regex = /^[0-9]*$/g;
    if(regex.test(time)) {
        const unixTime = moment.unix(Number(time));
        return { unix: time, natural: unixTime.format('MMMM D, YYYY') };
    } else {
        if(time.includes('%20')) {
            const timeSplit = time.split('%20');
            const newTime = timeSplit.join(' ');
            return { unix: moment(newTime).format('X'), natural: newTime};
        }        
        return { unix: moment(time).format('X'), natural: time};
    }
}

module.exports = times;