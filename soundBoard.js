let sounds 
let EmbedControllerInstance; 
let playbackUpdateListener;
let currentTrack = null;
let trackObj = [];

let lastCallTime = 0;
const throttleDelay = 1000; // 1 second

let emtpySoundBoard = [
{ id: 1, url: "", startTime: "", endTime: "", note:"" },
{ id: 2, url: "", startTime: "", endTime: "", note:"" },
{ id: 3, url: "", startTime: "", endTime: "", note:"" },
{ id: 4, url: "", startTime: "", endTime: "", note:"" },
{ id: 5, url: "", startTime: "", endTime: "", note:"" },
{ id: 6, url: "", startTime: "", endTime: "", note:"" },
{ id: 7, url: "", startTime: "", endTime: "", note:"" },
{ id: 8, url: "", startTime: "", endTime: "", note:"" },
{ id: 9, url: "", startTime: "", endTime: "", note:"" },
];



function editTrack(inputNumber, newTrackObj) {
const editTrack = document.getElementById('editTrack');
const trackUrl = document.getElementById('trackUrl');
const trackStart = document.getElementById('trackStart');
const trackEnd = document.getElementById('trackEnd');
const trackNote = document.getElementById('trackNote');

console.log(newTrackObj)

if(newTrackObj.length === 0){
sounds.push({ id: parseInt(inputNumber), url: "", startTime: "", endTime: "", note:"" })
}

newTrackObj = sounds.find(entry => parseInt(entry.id) === parseInt(inputNumber))

trackObj = newTrackObj

if (newTrackObj) {
trackUrl.value = trackObj.url;
trackStart.value = trackObj.startTime;
trackEnd.value =trackObj.endTime;
trackNote.value = trackObj.note;
}else{
trackUrl.value = "";
trackStart.value = "";
trackEnd.value = "";
trackNote.value = "";
}

editTrack.style.display = "block"
}

function closeEditTrack() {
const editTrack = document.getElementById('editTrack');
editTrack.style.display = "none"
}

function saveTrack() {
const editTrack = document.getElementById('editTrack');
const trackNote = document.getElementById('trackNote').value;
const trackUrl = document.getElementById('trackUrl').value;
const trackStart = document.getElementById('trackStart').value;
const trackEnd = document.getElementById('trackEnd').value;

if (trackObj) {
trackObj.url = trackUrl;
trackObj.note = trackNote;
trackObj.startTime = trackStart;
trackObj.endTime = trackEnd;
}

console.log(trackObj)

sounds = sounds.filter(entry => entry.url !== "")

saveData();
editTrack.style.display = "none"

}

window.onSpotifyIframeApiReady = (IFrameAPI, uri) => {
IFrameAPI.createController(document.getElementById('spotify-iframe'), {
uri: uri, 
robustness: 'low' 
}, (EmbedController) => {
EmbedControllerInstance = EmbedController;

});
};


function addPlaybackUpdateListener(trackObj) {
    // Remove existing listener if it exists
    if (playbackUpdateListener) {
        EmbedControllerInstance.removeListener('playback_update', playbackUpdateListener);
    }

    // Define the new listener
    playbackUpdateListener = e => {
        const position = e.data.position / 1000; // Convert milliseconds to seconds
        let stopAtSeconds = trackObj.endTime; // Example: stop playback after 30 seconds


        if (position >= stopAtSeconds) {
               
                EmbedControllerInstance.seek(trackObj.startTime * 1000); // Seek back to start time
                EmbedControllerInstance.play(); // Resume playback 
            
                           
        }
    };

    // Add the new listener
    if(trackObj.endTime){
    EmbedControllerInstance.addListener('playback_update', playbackUpdateListener);
    }
}

function playTrack(trackObj){
  const now = Date.now();
    if (now - lastCallTime < throttleDelay) return;
    lastCallTime = now;

const uri = extractId(trackObj.url)
EmbedControllerInstance.loadUri(uri, false, trackObj.startTime);  
currentTrack = trackObj.id;

addPlaybackUpdateListener(trackObj);
changeHelp(`Playing: ${trackObj.note}`)
EmbedControllerInstance.play();

}

function extractId(url) {
  const spotifyTrackMatch = url.match(/track\/([^\?]+)/);
  const spotifyPlaylistMatch = url.match(/playlist\/([^\?]+)/);
  const youtubeMatch = url.match(/youtube\.com\/watch\?v=([^\?]+)/) || url.match(/youtu\.be\/([^\?]+)/);

  if (spotifyTrackMatch && spotifyTrackMatch[1]) {
      return `spotify:track:${spotifyTrackMatch[1]}`;
  } else if (spotifyPlaylistMatch && spotifyPlaylistMatch[1]) {
      return `spotify:playlist:${spotifyPlaylistMatch[1]}`;
  } else if (youtubeMatch && youtubeMatch[1]) {
      return `youtube:${youtubeMatch[1]}`;
  }
  return null;
}








