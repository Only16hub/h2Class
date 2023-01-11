document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("button1").addEventListener("click", function () {
		const x = parseInt(document.getElementById("value1").value);
		const x1 = parseInt(document.getElementById("value2").value);

		document.getElementById("result").textContent = "Result: " + (x + x1);
	});
});
