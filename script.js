const toggleButton = document.getElementById('button');

toggleButton.addEventListener('click', async () => {
    try {
        // await navigator.permissions.request({ name: 'camera' });
        const stream = await navigator.mediaDevices.getUserMedia({ video: { torch: true } });
        const track = stream.getVideoTracks()[0];
        await track.applyConstraints({ advanced: [{ torch: true }] });
        console.log('Flashlight toggled on');
    } catch (error) {
        console.error('Failed to toggle flashlight:', error);
    }
});

var i = 0; //indicating light is off initially
function glow() {
  if (i == 0) {
    document.getElementById("light").style.visibility = "visible";
    i = 1; //indicating light is now on
    toggleButton.style.top = "85px";
    toggleButton.style.boxShadow = "none";
  } else {
    document.getElementById("light").style.visibility = "hidden";
    toggleButton.style.top = "80px";
    toggleButton.style.boxShadow = "0px 5px #666666";
    i = 0; //indicating light is now off
  }
}

