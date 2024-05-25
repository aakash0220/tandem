import moment from 'moment';

export function convertTimestampToDateTime(timestamp) {
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
}
