var d = new Date();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var date = ["1-1","1-2","1-3","1-4","1-5","1-6","1-7","2-1","2-2","2-3","2-4","2-5","2-6","2-7","3-1","3-2","3-3","3-4","3-5","3-6","3-7","4-1","4-2","4-3","4-4","4-5","4-6","4-7","5-1","5-2","5-3","5-4","5-5","5-6","5-7"];
document.getElementById("month").innerHTML = month[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();
var first_date_of_mon = new Date(d.getFullYear(),d.getMonth(),1);
var first_week_of_mon = first_date_of_mon.getDay();
for (i=0;i<35;i++) {
  document.getElementById(date[i]).setAttribute("onclick","clk(this)");
}
if (first_week_of_mon == 1) {
  document.getElementById("1-1").innerHTML = "1";
  var s_date = 0;
} else if (first_week_of_mon == 2) {
  document.getElementById("1-2").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  var s_date = 1;
} else if (first_week_of_mon == 3) {
  document.getElementById("1-3").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  document.getElementById("1-2").style.visibility = "hidden";
  var s_date = 2;
} else if (first_week_of_mon == 4) {
  document.getElementById("1-4").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  document.getElementById("1-2").style.visibility = "hidden";
  document.getElementById("1-3").style.visibility = "hidden";
  var s_date = 3;
} else if (first_week_of_mon == 5) {
  document.getElementById("1-5").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  document.getElementById("1-2").style.visibility = "hidden";
  document.getElementById("1-3").style.visibility = "hidden";
  document.getElementById("1-4").style.visibility = "hidden";
  var s_date = 4;
} else if (first_week_of_mon == 6) {
  document.getElementById("1-6").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  document.getElementById("1-2").style.visibility = "hidden";
  document.getElementById("1-3").style.visibility = "hidden";
  document.getElementById("1-4").style.visibility = "hidden";
  document.getElementById("1-5").style.visibility = "hidden";
  var s_date = 5;
} else if (first_week_of_mon == 7) {
  document.getElementById("1-7").innerHTML = "1";
  document.getElementById("1-1").style.visibility = "hidden";
  document.getElementById("1-2").style.visibility = "hidden";
  document.getElementById("1-3").style.visibility = "hidden";
  document.getElementById("1-4").style.visibility = "hidden";
  document.getElementById("1-5").style.visibility = "hidden";
  document.getElementById("1-6").style.visibility = "hidden";
  var s_date = 6;
}
for (i=2;i<32;i++) {
  if (new Date(d.getFullYear(),d.getMonth(),i).getMonth() == d.getMonth()) {
    document.getElementById(date[s_date+(i-1)]).innerHTML = i;
	var pos = s_date+(i-1);
  }
}
for (i=pos+1;i<35;i++) {
  document.getElementById(date[i]).style.visibility = "hidden";
}
function clk(e) {
  if (e.style.background == "") {
    e.style.background = "#66f542";
  } else if (e.style.background == "rgb(102, 245, 66)") {
    e.style.background = "#f5b942";
  } else if (e.style.background == "rgb(245, 185, 66)") {
    e.style.background = "#f54242";
  } else {
    e.style.background = "";
  }
}
