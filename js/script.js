

console.log(moment().second());
var second = moment().second();

$(function() {
	var degree = 0
	// minute hand needs to rotate every second
	// rotate is to rotate 3 degrees every time the second changes
	// query moment.second to know when second changes
setInterval(function() {
	var secDeg = (moment().second() + 30) * 6
	var minDeg = (moment().minute() + 30) * 6 + (Math.floor(moment().second() / 10))
	var hrDeg = ((moment().hour() % 12) + 9) * 30

	$('#secHand').show().css({ WebkitTransform: 'rotate(' + secDeg + 'deg)'}).fadeOut(800);
	$('#minHand').show().css({ WebkitTransform: 'rotate(' + minDeg + 'deg)'});
	$('#hourHand').show().css({ WebkitTransform: 'rotate(' + hrDeg + 'deg)'});

}, 1000)

});	