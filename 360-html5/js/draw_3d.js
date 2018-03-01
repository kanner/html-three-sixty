	$(document).ready(function() {
		$('#color_picker1').colorPicker( {
			defaultColor:8, // индекс цвета по-умолчанию
			columns:9,     // количество цветов
			
			click:function(c){
				$('#output1').html(c);
			}
		});
	});
	
	$(document).ready(function() {
		$('#color_picker2').colorPicker( {
			defaultColor:7, // индекс цвета по-умолчанию
			columns:9,     // количество цветов
			
			click:function(c){
				$('#output2').html(c);
			}
		});
	});
	
	$(document).ready(function() {
		$('#color_picker3').colorPicker( {
			defaultColor:7, // индекс цвета по-умолчанию
			columns:9,     // количество цветов
			
			click:function(c){
				$('#output3').html(c);
			}
		});
	});

	function scene() {
		this.solid_number = 0;
		this.solid = new Array();
		this.observer = [0, 0, 0];
		this.distance = -650;
	}

	var world = new scene();
	var world1 = new scene();

	var colore = 'rgb(255,255,255)';
	var alpha = 1;
	var teta_x_global = 0;
	var teta_y_global = 0;
	var motion = 0;
	var id_timer=0;

	function init() {
		world.solid[world.solid_number++] = new  body([255,255,255],[255,255,255]);
		world.solid[world.solid_number++] = new  body_part([0,0,0],[0,0,0]);
		world.solid[world.solid_number++] = new  usb([84,84,84],[84,84,84]);
		world.solid[world.solid_number++] = new  caps([0,0,0],[0,0,0]);
		world.solid[world.solid_number++] = new  lines([255,255,255],[255,255,255]);

		scale_solid([3, 3, 3],world.solid[world.solid_number-1]);
		scale_solid([3, 3, 3],world.solid[world.solid_number-2]);
		scale_solid([3, 3, 3],world.solid[world.solid_number-3]);
		scale_solid([3, 3, 3],world.solid[world.solid_number-4]);
		scale_solid([3, 3, 3],world.solid[world.solid_number-5]);

		translate_solid([-world.solid[world.solid_number-1].center[0], -world.solid[world.solid_number-1].center[1], -world.solid[world.solid_number-1].center[2]],world.solid[world.solid_number-1]);
		translate_solid([-world.solid[world.solid_number-2].center[0], -world.solid[world.solid_number-2].center[1], -world.solid[world.solid_number-2].center[2]],world.solid[world.solid_number-2]);
		translate_solid([-world.solid[world.solid_number-3].center[0], -world.solid[world.solid_number-3].center[1], -world.solid[world.solid_number-3].center[2]],world.solid[world.solid_number-3]);
		translate_solid([-world.solid[world.solid_number-4].center[0], -world.solid[world.solid_number-4].center[1], -world.solid[world.solid_number-4].center[2]],world.solid[world.solid_number-4]);
		translate_solid([-world.solid[world.solid_number-5].center[0], -world.solid[world.solid_number-5].center[1], -world.solid[world.solid_number-5].center[2]],world.solid[world.solid_number-5]);

		translate_solid([0, 0, -1100],world.solid[world.solid_number-1]);
		translate_solid([0, 0, -1100],world.solid[world.solid_number-2]);
		translate_solid([0, 0, -1100],world.solid[world.solid_number-3]);
		translate_solid([0, 0, -1100],world.solid[world.solid_number-4]);
		translate_solid([0, 0, -1100],world.solid[world.solid_number-5]);

		document.onkeydown = onKeyDown;
		//document.onmousemove = onMouseMove;
		setInterval(draw,10);
	}

	/*function changeModel() {
		clearInterval(id_timer);
		var canvas = document.getElementById("display");

		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,1000,550);
        }
        else {
        	alert('„то то не так, возможно вам нужен браузер поновее?');
        }

        if (document.getElementById("modello").value=='secret-small') {
        	world.solid[0] = new  dinosaur([255,255,255],[0,0,0]);
        	scale_solid([3, 3, 3],world.solid[world.solid_number-1]);
        	translate_solid([-world.solid[world.solid_number-1].center[0], -world.solid[world.solid_number-1].center[1], -world.solid[world.solid_number-1].center[2]],world.solid[world.solid_number-1]);
        	translate_solid([0, 0, -1100],world.solid[world.solid_number-1]);
        }

        id_timer =setInterval(draw,10);
    }*/

    function onKeyDown(evt) {
    	if(evt.keyCode==32)
			rotate_stop();
		if(evt.keyCode==37)
			rotate_left();
		if(evt.keyCode==38)
			rotate_up();
		if(evt.keyCode==39)
			rotate_right();
		if(evt.keyCode==40)
			rotate_down();
		/*if(evt.keyCode==77)
        motion = (motion+1) % 2;
        if(evt.keyCode==82)
          colore = 'rgb(255,0,0)';
        if(evt.keyCode==71)
          colore = 'rgb(0,255,0)'; 
        if(evt.keyCode==89)
          colore = 'rgb(255,255,0)';
        if(evt.keyCode==66)
          colore = 'rgb(0,0,255)';  
        if(evt.keyCode==87)
          colore = 'rgb(255,255,255)';    
        if(evt.keyCode==49)
          alpha = 0.1;
        if(evt.keyCode==50)
          alpha = 0.15;
        if(evt.keyCode==51)
          alpha = 0.2;
        if(evt.keyCode==52)
          alpha = 0.25;
        if(evt.keyCode==53)
          alpha = 0.3;
        if(evt.keyCode==54)
          alpha = 0.4;
        if(evt.keyCode==55)
          alpha = 0.5;
        if(evt.keyCode==56)
          alpha = 0.6;
        if(evt.keyCode==57)
          alpha = 0.7;
        if(evt.keyCode==48)
          alpha = 1.0;*/
    }

    function onMouseMove(evt) {
    	var x = evt.pageX-document.getElementById("display").offsetLeft;
    	var y = evt.pageY-document.getElementById("display").offsetTop;

    	box=document.getElementById("rotate_chkbox");
    	if (box.checked) {
    		//rotate_disable_buttons();
		
			if ((x>0) && (x<1000) &&(y>0) && (y<550)) {
			  teta_y_global = 0.10*(x-500)/500;
			  teta_x_global = 0.10*(y-275)/275;
			}
		}
		else {
			//rotate_enable_buttons();
			teta_x_global = 0;
			teta_y_global = 0;
		}
	}

	function draw() {
		var canvas = document.getElementById("display");

		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			
			if (motion==0) {
				ctx.clearRect(0,0,1000,550);
			}
			/*else {
				ctx.globalAlpha= 0.2;
				ctx.fillStyle = 'rgb(255,255,255)';
				ctx.fillRect(0,0,1000,550);
			}*/

			ctx.fillStyle = colore;
			ctx.strokeStyle = 'rgb(0,0,0)';
			ctx.lineWidth = 0.5;
			ctx.globalAlpha= alpha;

			var parametrig1 = get_rotation_parameter([0, 0, -1100], [0, 1, 0], teta_y_global);
			var parametrig2 = get_rotation_parameter([0, 0, 0], [0, 1, 0], teta_y_global);
			var parametrig1a = get_rotation_parameter([0, 0, -1100], [1, 0, 0], teta_x_global);
			var parametrig2a = get_rotation_parameter([0, 0, 0], [1, 0, 0], teta_x_global);

			for (var i=0; i<world.solid_number; i++) {
				rotate_solid_fast(parametrig1, parametrig2, world.solid[i]);
				rotate_solid_fast(parametrig1a, parametrig2a, world.solid[i]);
			}

			// счетчик
			var contatore = 0;
			visible_polygons = new Array();

			var delta_x;
			var delta_y;
			var delta_z;

			// проходим по всем фигурам
			for (var j=0; j<world.solid_number; j++) {
				// смотрим сколько точек
				for (var i=0; i<world.solid[j].points_number; i++) {
					world.solid[j].distances[i]= Math.pow(world.solid[j].points[i][0],2) + Math.pow(world.solid[j].points[i][1],2) + Math.pow(world.solid[j].points[i][2],2);
				}
			}

//visible_polygons_figure = new Array();
			// проходим по всем фигурам
			for (var j=0; j<world.solid_number; j++) {
				// смотрим сколько плоскостей
				for (var i=0; i<world.solid[j].faces_number; i++) {
					var max =world.solid[j].distances[world.solid[j].faces[i][0]];
					for (var w=1; w<world.solid[j].faces[i].length; w++) {
						if (world.solid[j].distances[world.solid[j].faces[i][w]]>max)
							max=world.solid[j].distances[world.solid[j].faces[i][w]];
					}
					visible_polygons[contatore++/*++*/] = {solid:j, vertex:world.solid[j].faces[i], fillcolor:world.solid[j].fillcolor, linecolor:world.solid[j].linecolor, distance:max};
//visible_polygons_figure[contatore++] = j
/*visible_polygons [contatore] = new Array();
visible_polygons [contatore++][0] = j;*/
				}
			}
//alert(visible_polygons_figure);
/*for (var l=0; l<contatore; l++)
	alert(visible_polygons[l][0]);*/

			visible_polygons.sort(sortfunction);
			var projected_points = new Array();
			for (var j=0; j<world.solid_number; j++) {
				projected_points[j]=new Array();
				for (var i=0; i<world.solid[j].points.length; i++) {
					projected_points[j][i] = project(world.distance, world.solid[j].points[i]);
				}
			}
//ctx.fillStyle = 'rgb(255,3,3)';
//alert(contatore); - 60!
			for (var i=0; i<contatore; i++) {
				ctx.beginPath();
				var indice_solido = visible_polygons[i].solid;
				var indici_vertici = visible_polygons[i].vertex;

/*if (visible_polygons_figure[i]==1)
	ctx.fillStyle = 'rgb(255,255,255)';
else
	ctx.fillStyle = 'rgb(255,3,3)';*/
if (visible_polygons[i].solid==0)
	ctx.fillStyle = document.getElementById('output1').innerHTML;
else if (visible_polygons[i].solid==1)
	ctx.fillStyle = document.getElementById('output2').innerHTML;
else if (visible_polygons[i].solid==2)
	ctx.fillStyle = 'silver';
else if (visible_polygons[i].solid==3)
	ctx.fillStyle = document.getElementById('output3').innerHTML;
else if (visible_polygons[i].solid==4)
	if (document.getElementById('output3').innerHTML == "rgb(255,241,0)" || document.getElementById('output3').innerHTML == "rgb(255,255,255)")
		ctx.fillStyle = 'rgb(0,0,0)';
	else
		ctx.fillStyle = 'rgb(255,255,255)';
else
	ctx.fillStyle = 'rgb(255,255,255)';

				ctx.moveTo(projected_points[indice_solido][indici_vertici[0]][0],projected_points[indice_solido][indici_vertici[0]][1]);
				for (var z=1;z<visible_polygons[i].vertex.length;z++) {
					ctx.lineTo(projected_points[indice_solido][indici_vertici[z]][0],projected_points[indice_solido][indici_vertici[z]][1]);
				}
//if (i>30)
//ctx.fillStyle = 'rgb(255,3,3)';
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
			}
//			ctx.fillRect([84,84,84],0,1000,550);
		}
		else {
			alert('„то то не так, возможно вам нужен браузер поновее?');
		}
	}

	function sortfunction(a, b) {
		return(b.distance-a.distance);
	}
	
	/*teta_y_global = 0.10*(-200)/500;
	window.setTimeout('teta_y_global = 0;', 500);*/

	function rotate_left() {
		rotate_disable_mouse();
		if (teta_y_global == 0 || teta_y_global > 0)
			teta_y_global = 0.10*(-100)/500;
		else
			teta_y_global = 0;
	}
	
	function rotate_right() {
		rotate_disable_mouse();	
		if (teta_y_global == 0 || teta_y_global < 0)
			teta_y_global = 0.10*(100)/500;
		else
			teta_y_global = 0;
	}
	function rotate_up() {
		rotate_disable_mouse();
		if (teta_x_global == 0 || teta_x_global > 0)
			teta_x_global = 0.10*(-50)/275;
		else
			teta_x_global = 0;
	}
	function rotate_down() {
		rotate_disable_mouse();
		if (teta_x_global == 0 || teta_x_global < 0)
			teta_x_global = 0.10*(50)/275;
		else
			teta_x_global = 0;
	}
	function rotate_stop() {
		rotate_disable_mouse();
		teta_x_global = 0;
		teta_y_global = 0;
	}
	
	function rotate_disable_mouse() {
		document.onmousemove = 0;
		box=document.getElementById("rotate_chkbox");
		box.checked = 0;
		teta_x_global = 0;
		teta_y_global = 0;
	}
	/*function rotate_disable_buttons() {
		btn=document.getElementById("rotate_up");
		btn.disabled=1;
		btn=document.getElementById("rotate_down");
		btn.disabled=1;
		btn=document.getElementById("rotate_left");
		btn.disabled=1;
		btn=document.getElementById("rotate_right");
		btn.disabled=1;
	}
	
	function rotate_enable_buttons() {
		btn=document.getElementById("rotate_up");
		btn.disabled=0;
		btn=document.getElementById("rotate_down");
		btn.disabled=0;
		btn=document.getElementById("rotate_left");
		btn.disabled=0;
		btn=document.getElementById("rotate_right");
		btn.disabled=0;
	}*/