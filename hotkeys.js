
function addHotkeys() {

document.addEventListener('keydown', (event) => {
const key = event.key.toLowerCase(); // Convert the pressed key to lowercase
const placeName = document.getElementById('placeName')


if (
!writeBox.contains(document.activeElement) &&
!placeName.contains(document.activeElement) 
) {

switch (key) {
//For Nav
case 'p':
handlePaint();
break;
case 'l':
handleLoad();
break;
case 's':
handleExport();
break;
case 'e':
handleEnter();
break;
case 'q':
handleExit();
break;

//For Painting
case '1':
isPainting? currentColor = 'rgb(17, 132, 17)' : '';
break;
case '2':
isPainting? currentColor = 'rgb(47, 47, 181)' : '';
break;
case '3':
isPainting? currentColor = 'rgb(132, 132, 55)' : '';
break;
case '4':
isPainting? currentColor = 'rgb(85, 25, 25)' : '';
break;
case '5':
isPainting? currentColor = 'rgba(215, 234, 215, 0.573)' : '';
break;

}
}

});  


}

addHotkeys();
