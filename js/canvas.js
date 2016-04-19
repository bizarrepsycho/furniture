var Result = "test";

function updatevariable(data) { 
    var Result = data;

	//FRONT VIEW DIAGRAM
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
 
	// begin draw 
	ctx.beginPath();

	// main couch frame
	ctx.moveTo(50, 10);
	ctx.lineTo(150, 10);
	ctx.quadraticCurveTo(160, 10, 160, 20);
	ctx.lineTo(160, 100);
	ctx.lineTo(40, 100);
	ctx.lineTo(40, 20);
	ctx.quadraticCurveTo(40, 10, 50, 10);

	//2-seater dividers
	ctx.moveTo(100,10);
	ctx.lineTo(100, 60);

	//2-seater arch dividers
	ctx.moveTo(40,50);
	ctx.quadraticCurveTo(70, 45, 100, 50);
	ctx.quadraticCurveTo(130, 45, 160, 50);

	// line divider on couch
	ctx.moveTo(40, 60);
	ctx.lineTo(160, 60);

	// left arm rest
	ctx.moveTo(40, 40);
	ctx.quadraticCurveTo(30, 33, 20, 40);
	ctx.lineTo(20, 100);
	ctx.lineTo(40, 100);

	// right arm rest
	ctx.moveTo(160, 40);
	ctx.quadraticCurveTo(170, 33, 180, 40);
	ctx.lineTo(180, 100);
	ctx.lineTo(160, 100);

	// fill frame with color
	ctx.fillStyle = Result;
	ctx.fill();

	ctx.font = "20px Arial";
	ctx.strokeText("Front view",50,140);

	// draw
	ctx.stroke();


	ctx.beginPath();

	// left leg x=25-35; y=100-110
	ctx.moveTo(25, 100);
	ctx.lineTo(35, 100);
	ctx.lineTo(35, 105);
	ctx.lineTo(25, 105);
	ctx.lineTo(25, 100);

	//right leg x=165-175; y=100-110
	ctx.moveTo(165, 100);
	ctx.lineTo(175, 100);
	ctx.lineTo(175, 105);
	ctx.lineTo(165, 105);
	ctx.lineTo(165, 100);

	ctx.fillStyle = 'brown';
	ctx.fill();

	ctx.stroke();

	//REAR VIEW DIAGRAM
	var c = document.getElementById("myCanvas1");
	var ctx = c.getContext("2d");

	// begin draw 
	ctx.beginPath();

	// main couch frame
	ctx.moveTo(50, 10);
	ctx.lineTo(150, 10);
	ctx.quadraticCurveTo(160, 10, 160, 20);
	ctx.lineTo(160, 100);
	ctx.lineTo(40, 100);
	ctx.lineTo(40, 20);
	ctx.quadraticCurveTo(40, 10, 50, 10);

	// left arm rest
	ctx.moveTo(40, 40);
	ctx.quadraticCurveTo(30, 33, 20, 40);
	ctx.lineTo(20, 100);
	ctx.lineTo(40, 100);

	// right arm rest
	ctx.moveTo(160, 40);
	ctx.quadraticCurveTo(170, 33, 180, 40);
	ctx.lineTo(180, 100);
	ctx.lineTo(160, 100);

	// fill frame with color
	ctx.fillStyle = Result;
	ctx.fill();

	ctx.font = "20px Arial";
	ctx.strokeText("Rear view",50,140);

	// draw
	ctx.stroke();

	ctx.beginPath();

	// left leg x=25-35; y=100-110
	ctx.moveTo(25, 100);
	ctx.lineTo(35, 100);
	ctx.lineTo(35, 105);
	ctx.lineTo(25, 105);
	ctx.lineTo(25, 100);

	//right leg x=165-175; y=100-110
	ctx.moveTo(165, 100);
	ctx.lineTo(175, 100);
	ctx.lineTo(175, 105);
	ctx.lineTo(165, 105);
	ctx.lineTo(165, 100);

	ctx.fillStyle = 'brown';
	ctx.fill();

	ctx.stroke();

	//SIDE VIEW DIAGRAM
	var c = document.getElementById("myCanvas2");
	var ctx = c.getContext("2d");

	// begin draw 
	ctx.beginPath();

	ctx.moveTo(40, 40);
	ctx.lineTo(40, 20);
	ctx.quadraticCurveTo(40, 10, 30, 10);
	ctx.lineTo(20, 10);
	ctx.lineTo(20, 100);
	ctx.lineTo(90, 100);
	ctx.lineTo(90, 50);
	ctx.quadraticCurveTo(90, 40, 80, 40);
	ctx.lineTo(20, 40);

	// fill frame with color
	ctx.fillStyle = Result;
	ctx.fill();

	ctx.font = "20px Arial";
	ctx.strokeText("Side view",50,140);

	ctx.stroke();

	ctx.beginPath();

	// left leg x=25-35; y=100-110
	ctx.moveTo(25, 100);
	ctx.lineTo(35, 100);
	ctx.lineTo(35, 105);
	ctx.lineTo(25, 105);
	ctx.lineTo(25, 100);

	//right leg x=75-85; y=100-110
	ctx.moveTo(75, 100);
	ctx.lineTo(85, 100);
	ctx.lineTo(85, 105);
	ctx.lineTo(75, 105);
	ctx.lineTo(75, 100);

	ctx.fillStyle = 'brown';
	ctx.fill();

	ctx.stroke();
}