let currentTrack = [];
let trackObj = [];

let soundBoardData = [
    { id: 1, url: "", startTime: "0", endTime: "" },
    { id: 2, url: "", startTime: "0", endTime: "" },
    { id: 3, url: "", startTime: "0", endTime: "" },
    { id: 4, url: "", startTime: "0", endTime: "" },
    { id: 5, url: "", startTime: "0", endTime: "" },
    { id: 6, url: "", startTime: "0", endTime: "" },
    { id: 7, url: "", startTime: "0", endTime: "" },
    { id: 8, url: "", startTime: "0", endTime: "" },
    { id: 9, url: "", startTime: "0", endTime: "" },
  ];

  let EmbedControllerInstance; 

    window.onSpotifyIframeApiReady = (IFrameAPI, uri) => {
      IFrameAPI.createController(document.getElementById('embed-iframe'), {
        uri: uri, 
      }, (EmbedController) => {
        EmbedControllerInstance = EmbedController; 
      });
      
    };

    

    function playTrack(trackObj){
        const uri = extractId(trackObj.url)
        EmbedControllerInstance.loadUri(uri, false, trackObj.startTime);  
        EmbedControllerInstance.play();
        currentTrack = trackObj;

        if(trackObj && trackObj.endTime !== ""){
        EmbedControllerInstance.addListener('playback_update', e => {
            const position = e.data.position / 1000; // Convert milliseconds to seconds
            const stopAtSeconds = trackObj.endTime; // Example: stop playback after 30 seconds
      
            if (position >= stopAtSeconds) {
                EmbedControllerInstance .pause(); // Pause playback when the desired time is reached
            }
          });
        }
        
    }

    function extractId(url) {
        const trackMatch = url.match(/track\/([^\?]+)/);
        const playlistMatch = url.match(/playlist\/([^\?]+)/);
      
        if (trackMatch && trackMatch[1]) {
          return `spotify:track:${trackMatch[1]}`;
        } else if (playlistMatch && playlistMatch[1]) {
          return `spotify:playlist:${playlistMatch[1]}`;
        }
        return null;
      }
      

    function generateSoundBoardTable(data = soundBoardData) {
        let tableHTML = `
          <table border="1" class="table" style="border-collapse: collapse; width: 100%;">
            <tbody>
              <tr>
                <td  tabindex="0"  class="tableCell tableHeader" style="">Start</td>
                <td  tabindex="0"  class="tableCell tableHeader" style="">End</td>    
                <td  tabindex="0"  class="tableCell tableHeader" style="">URL</td>
                <td  tabindex="0"  class="tableCell tableHeader" style="">#</td>
         
              </tr>
        `;
        
        if(!data){
            soundBoardData = [
                { id: 1, url: "", startTime: "0", endTime: "" },
                { id: 2, url: "", startTime: "0", endTime: "" },
                { id: 3, url: "", startTime: "0", endTime: "" },
                { id: 4, url: "", startTime: "0", endTime: "" },
                { id: 5, url: "", startTime: "0", endTime: "" },
                { id: 6, url: "", startTime: "0", endTime: "" },
                { id: 7, url: "", startTime: "0", endTime: "" },
                { id: 8, url: "", startTime: "0", endTime: "" },
                { id: 9, url: "", startTime: "0", endTime: "" },
              ];
              data = soundBoardData
        }
      
        data.forEach(item => {
          tableHTML += `
            <tr>
              <td  tabindex="0"  class="tableCell" style="">${item.startTime}</td>
              <td  tabindex="0"  class="tableCell" style="">${item.endTime}</td>
              <td  tabindex="0"  class="tableCell" style="">${item.url}</td>
              <td  tabindex="0"  class="tableCell" style="">${item.id}</td>

            </tr>
          `;
        });
      
        tableHTML += `
            </tbody>
            </table>
             <button class="button" onclick="updateSoundBoardData()">Save</button>
        `;
      
        return tableHTML;
      }

      function editTrack(newTrackObj) {
        const editTrack = document.getElementById('editTrack');
        const trackUrl = document.getElementById('trackUrl');
        const trackStart = document.getElementById('trackStart');
        const trackEnd = document.getElementById('trackEnd');

        trackObj = newTrackObj

        if (newTrackObj) {
        trackUrl.value = trackObj.url;
        trackStart.value = trackObj.startTime;
        trackEnd.value =trackObj.endTime;
        }else{
        trackUrl.value = "";
        trackStart.value = "";
        trackEnd.value = "";
        }

        editTrack.style.display = "block"
        
        }


      function closeEditTrack() {
        const editTrack = document.getElementById('editTrack');
        editTrack.style.display = "none"
      }

      function saveTrack() {
        const editTrack = document.getElementById('editTrack');
        const trackUrl = document.getElementById('trackUrl').value;
        const trackStart = document.getElementById('trackStart').value;
        const trackEnd = document.getElementById('trackEnd').value;
        
        if (trackObj) {
          trackObj.url = trackUrl;
          trackObj.startTime = trackStart;
          trackObj.endTime = trackEnd;
        }

        saveData();
        editTrack.style.display = "none"
        
        }

      function updateSoundBoardData() {
       
      
        // Get all table rows (excluding the header row)
        const rows = Array.from(document.querySelectorAll('.table tr')).slice(1);
      
        rows.forEach((row, rowIndex) => {
          const cells = row.children;
      
          // Extract data from each cell
          const startTime = cells[0].textContent;
          const endTime = cells[1].textContent;
          const url = cells[2].textContent;
          const id = parseInt(cells[3].textContent);

      
          // Find and update the corresponding entry in soundBoardData
          const entry = soundBoardData.find(item => item.id === id);
          if (entry) {
            entry.url = url;
            entry.startTime = startTime;
            entry.endTime = endTime;
          }
        });
      
        saveData();
      }
      
      

  
      
 

