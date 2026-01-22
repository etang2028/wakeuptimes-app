const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;

function calcWakeUpTimes() {
	const now = new Date();
	console.log(now.toLocaleString("en-US", {
		timeStyle: "short"
	}));

	const fallAsleepTime = new Date(now);
	fallAsleepTime.setMinutes(
		fallAsleepTime.getMinutes() + 14
	);
	console.log("You will fall asleep at", 
		fallAsleepTime.toLocaleString("en-US", {
		timeStyle: "short"
	}));

	const wakeUpTime = new Date(fallAsleepTime);
	const wakeUpTimes = [];
	for (let i = 0; i < 6; i++) {
		wakeUpTime.setMinutes(
			wakeUpTime.getMinutes() + 90
		);
		const wakeUpTimeString = wakeUpTime.toLocaleString("en-US", {
			timeStyle: "short"
		});
		wakeUpTimes.push(wakeUpTimeString);
	}

	console.log("Wake-up times:", wakeUpTimes.join(', '));
}
