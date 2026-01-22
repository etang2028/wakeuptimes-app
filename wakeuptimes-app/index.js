const calcBtn = document.getElementById("calc-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");

calcBtn.onclick = calcWakeUpTimes;

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
}
