const calcBtn = document.getElementById("calc-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");

calcBtn.addEventListener("click", calcWakeUpTimes);
refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => {
	promptSection.classList.remove("hidden");
	imageContainer.classList.remove("hidden");
	resultSection.classList.add("hidden");
});

function calcWakeUpTimes() {
	
	const fallAsleepTime = new Date();
	fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

	const wakeUpTime = new Date(fallAsleepTime);
	wakeUpHoursDiv.innerHTML = ""; // clear previous results

	for (let i = 0; i < 6; i++) {
		wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
		const timeString = wakeUpTime.toLocaleString("en-US", {
			timeStyle: "short"
		});

		// create div for each time
		const cycleDiv = document.createElement("div");
		cycleDiv.classList.add("cycle");
		cycleDiv.setAttribute("id", `cycle-${i}`);
		cycleDiv.textContent = timeString;
		wakeUpHoursDiv.appendChild(cycleDiv);
	}

	promptSection.classList.add("hidden");
	imageContainer.classList.add("hidden");
	resultSection.classList.remove("hidden");
}
