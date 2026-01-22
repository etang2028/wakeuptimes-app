const now = new Date();
console.log(now.toLocaleString("en-US", {
	timeStyle: "short"
}));

const fallAsleepTime = new Date(now);
fallAsleepTime.setMinutes(
	fallAsleepTime.getMinutes() + 14
);
console.log(fallAsleepTime.toLocaleString("en-US", {
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

console.log(wakeUpTimes.join(', '));