var controlBox = document.getElementsByClassName("control-box")[0];
var volumeControl = controlBox.querySelector(".volume-control");
var volumeInput = volumeControl.querySelector("input[type=range]");

function setBars() {
	var volume = parseInt(volumeInput.value);
	volumeControl.className = "volume-control";

	if (volume > 0) {
		controlBox.classList.add("volume-on");
		volumeControl.classList.add("volume-" + volume);
	} else {
		controlBox.classList.remove("volume-on");
	}
}

volumeInput.addEventListener("input", setBars);
setBars();