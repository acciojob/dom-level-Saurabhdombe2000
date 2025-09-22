//your JS code here. If required.
const target = document.getElementByid("level");
let level = 0;
let current = target;

// traverse upward until nom parent left;
while (current) {
	level ++;
	current = current.parentElement;
}

// show the result
alert("The level of the elemnt is: " + level);