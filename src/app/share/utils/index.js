export function formatTimestamp(timestamp) {
    const now = new Date(+timestamp);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours();
    let minutes = '';
    if (now.getMinutes() < 10) {
        minutes = '0' + now.getMinutes();
    } else {
        minutes = now.getMinutes().toString();
    }
    const ampm = hours >= 12 ? 'pm' : 'am';
    return day + ' ' + month + ' ' + date + ' at ' + hours + ':' + minutes + ' ' + ampm;
}


export function getDateOfBirth(date) {
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
}

export function firstLetterToUpperCase(name) {
    return name[0].toLocaleUpperCase() + name.slice(1, name.length)
}

