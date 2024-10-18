//Create Label
const hoverLabel = document.createElement('div');
hoverLabel.className = 'hover-label';
document.body.appendChild(hoverLabel);

function showHoverLabel(e) {
const placeName = e.currentTarget.getAttribute('name');
hoverLabel.textContent = placeName;
hoverLabel.style.display = 'block';
hoverLabel.style.left = `${e.pageX + 20}px`;
hoverLabel.style.top = `${e.pageY}px`;
hoverLabel.style.opacity = '1';
}

function hideHoverLabel() {
hoverLabel.style.display = 'none';
hoverLabel.style.opacity = '0';
}