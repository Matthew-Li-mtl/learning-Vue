// https://justmatt9610.github.io/page

var bignum = 0;
var clicks = 0;

export function time() {
    const now = new Date(); // Get the current date and time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours = 0, set it to 12 (midnight or noon)

    // Add leading zeros to minutes and seconds if needed
	let info = [hours, minutes, seconds, ampm];
	return info;
}

export function timeString(info) {
	var hours = info[0];
	var minutes = info[1];
	var seconds = info[2];
	var ampm = info[3];
	
	minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
	
	const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return formattedTime;
}

export function updateText(id, newText) {
    document.getElementById(id).innerHTML = newText;
}

export function testButton() {
	var info = time();
	const hours = info[0];
	const minutes = info[1];
	const seconds = info[2];
	
	var timeStr = timeString(info);
    //updateText("testButton", timeStr);
	
	const hourFactors = factors(hours);
	const minuteFactors = factors(minutes);
	const secondFactors = factors(seconds);
	/*
	console.log(hourFactors);
	console.log(minuteFactors);
	console.log(secondFactors);
	*/
	//const hourFactorsString = arrToString(hourFactors, separator = ", ");
	//const minuteFactorsString = arrToString(minuteFactors, separator = ", ");
	//const secondFactorsString = arrToString(secondFactors, separator = ", ");
	
	//console.log(hourFactorsString);
	//console.log(minuteFactorsString);
	//console.log(secondFactorsString);
	
	//updateText(id = "hourFactors", "Hour factors: " + hourFactorsString);
	//updateText(id = "minuteFactors", "Minute factors: " + minuteFactorsString);
	//updateText(id = "secondFactors", "Second factors: " + secondFactorsString);
	
	const totalAddition = sum(hourFactors) + sum(minuteFactors) + sum(secondFactors);
	
	//updateText("totalAddition", "Total added: " + totalAddition.toString());
	
	bignum += totalAddition;
	//clicks += 1;
	//ratio = Math.round((bignum / clicks) * 100) / 100;

    return totalAddition; //major change from original website
	
	//updateText("bignum", "your Big Number: " + bignum.toString());
	//updateText("clicks", "your clicks: " + clicks.toString());
	//updateText("ratio", "your Ratio: " + ratio.toString());
}





export function factors(num) {
	if (num == 0) {
		return [0];
	}
	
	let factors = [];
    for (let i = 0; i < num; i++) {
		if (num / i % 1 == 0) {
			factors.push(i);
		}
	}
	
	factors.push(num);
	return factors;
}

export function arrToString(arr, separator="") {
	var string = "";
	for (let i = 0; i < arr.length; i++) {
		string += arr[i] + separator;
	}

	string = string.slice(0, -1 * (separator.length));

	return string;
}

export function sum(arr) {
	var total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

export default {
    time,
    timeString,
    //updateText,
    testButton,
    factors,
    arrToString,
    sum
}