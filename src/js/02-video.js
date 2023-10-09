import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKey = "videoplayer-current-time";

player.on('timeupdate', throttle(getTime, 1000));

function getTime(param) {
    const second = param.seconds;
    localStorage.setItem(localKey, second);
}

const time = localStorage.getItem(localKey);

player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
})

