import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getTime, 1000));

function getTime(event) {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    }).catch(function(error) {});
}

const time = JSON.parse(localStorage.getItem("videoplayer-current-time"));

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

