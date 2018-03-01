// основной корпус
function body(fillcolor, linecolor)
{

this.points=[[0,0,0],
// точки поверхности корпуса (верхн€€ часть)
[-17,40,7],[-16,40,8],[-17,-40,7],[-16,-40,8],[-15,-40,3],[-15,-45,3],[-10,-40,3],[-10,-42,3],
[17,40,7],[16,40,8],[17,-40,7],[16,-40,8],[15,-40,3],[15,-45,3],[10,-40,3],[10,-42,3],
// точки поверхности корпуса (нижн€€ часть)
[-17,40,-7],[-16,40,-8],[-17,-40,-7],[-16,-40,-8],[-15,-40,-3],[-15,-45,-3],[-10,-40,-3],[-10,-42,-3],
[17,40,-7],[16,40,-8],[17,-40,-7],[16,-40,-8],[15,-40,-3],[15,-45,-3],[10,-40,-3],[10,-42,-3],
];

this.faces=[
// горизонтальные поверхности корпуса
[1,2,4,3],
[9,10,12,11],
[2,4,12,10],
[5,6,14,13,15,16,8,7],

[17,18,20,19],
[25,26,28,27],
[18,20,28,26],
[22,30,29,31,32,24,23,21],

// вертикальные поверхности корпуса
[1,2,10,9,25,26,18,17],
[1,3,19,17],
[9,11,27,25],
[3,4,12,11,27,28,20,19],
[5,6,22,21],[6,14,30,22],[14,13,29,30],
//[7,8,24,23],[8,16,32,24],[15,16,32,31],
];

		this.normals = new Array();

        for (var i=0; i<this.faces.length; i++)
        {
          this.normals[i] = [0, 0, 0];
        }
        
        this.center = [0, 1000, 0];
				
        for (var i=0; i<this.points.length; i++)
        {
			this.center[0] += this.points[i][0];
			this.center[1] += this.points[i][1];
			this.center[2] += this.points[i][2];
        }
				
				this.distances = new Array();
				for (var i=1; i<this.points.length; i++)
				{
					this.distances[i] = 0;
				}
				
				this.points_number = this.points.length;
				this.center[0] = this.center[0]/(this.points_number-1);
				this.center[1] = this.center[1]/(this.points_number-1);
				this.center[2] = this.center[2]/(this.points_number-1);
				
				this.faces_number = this.faces.length;
				this.axis_x = [1, 0, 0];
				this.axis_y = [0, 1, 0];
				this.axis_z = [0, 0, 1];
				this.fillcolor = [255,3,3];
				this.linecolor = [255,3,3];
}

// штучка корпуса
function body_part(fillcolor, linecolor)
{

this.points=[[0,0,0],
// точки штучки (верхн€€ часть)
[-15,46,5],[-14,46,6],[-15,42,5],[-14,42,6],[-17,42,7],[-16,42,8],[-17,40,7],[-16,40,8],
[15,46,5],[14,46,6],[15,42,5],[14,42,6],[17,42,7],[16,42,8],[17,40,7],[16,40,8],
// точки штучки (нижн€€ часть)
[-15,46,-5],[-14,46,-6],[-15,42,-5],[-14,42,-6],[-17,42,-7],[-16,42,-8],[-17,40,-7],[-16,40,-8],
[15,46,-5],[14,46,-6],[15,42,-5],[14,42,-6],[17,42,-7],[16,42,-8],[17,40,-7],[16,40,-8],
];

this.faces=[
// горизонтальные поверхности
[1,3,4,2],[9,10,12,11],[2,4,12,10],
[5,6,8,7],[13,14,16,15],[6,8,16,14],
[17,18,20,19],[25,26,28,27],[18,20,28,26],
[21,22,24,23],[29,30,32,31],[22,24,32,30],
// вертикальные поверхности
[1,3,19,17],[5,7,23,21],
[9,11,27,25],[29,31,15,13],
[1,2,10,9,25,26,18,17],
[5,6,14,13,29,30,22,21]
];

		this.normals = new Array();

        for (var i=0; i<this.faces.length; i++)
        {
          this.normals[i] = [0, 0, 0];
        }
        
        this.center = [0, -1040, 0];
				
        for (var i=0; i<this.points.length; i++)
        {
			this.center[0] += this.points[i][0];
			this.center[1] += this.points[i][1];
			this.center[2] += this.points[i][2];
        }
				
				this.distances = new Array();
				for (var i=1; i<this.points.length; i++)
				{
					this.distances[i] = 0;
				}
				
				this.points_number = this.points.length;
				this.center[0] = this.center[0]/(this.points_number-1);
				this.center[1] = this.center[1]/(this.points_number-1);
				this.center[2] = this.center[2]/(this.points_number-1);
				
				this.faces_number = this.faces.length;
				this.axis_x = [1, 0, 0];
				this.axis_y = [0, 1, 0];
				this.axis_z = [0, 0, 1];
				this.fillcolor = fillcolor;
				this.linecolor = linecolor;
}

// usb-порт
function usb(fillcolor, linecolor)
{

this.points=[[0,0,0],
// точки поверхности usb с дырками (верхн€€ часть)
[-12,46,4],[-12,70,4],[-8,56,4],[-8,60,4],[-4,56,4],[-4,60,4],
[12,46,4],[12,70,4],[8,56,4],[8,60,4],[4,56,4],[4,60,4],
// точки поверхности usb с дырками (нижн€€ часть)
[-12,46,-4],[-12,70,-4],[-8,56,-4],[-8,60,-4],[-4,56,-4],[-4,60,-4],
[12,46,-4],[12,70,-4],[8,56,-4],[8,60,-4],[4,56,-4],[4,60,-4],
// внутренние точки usb
[-12,46,0],[-12,70,0],[12,46,0],[12,70,0],
// нижн€€ лини€ usb
[0,46,-4],[0,50,-4],[2,50,-4],[2,54,-4],[0,54,-4],[0,62,-4],[2,62,-4],[2,66,-4],[0,66,-4],[0,70,-4],
[1,51,-4],[1,53,-4],[1,63,-4],[1,65,-4],
];

this.faces=[
// горизонтальна€ поверхность usb
[3,4,6,5],[11,12,10,9],
[1,2,8,7],
// нижн€€ поверхность usb
[15,16,18,17],[21,22,24,23],
[13,14,20,19],
// внутренн€€ поверхность usb
[25,26,28,27],
// вертикальна€ поверхность
//[2,8,28,26],
[14,20,28,26],[1,2,14,13],[7,8,20,19],[1,7,19,13],
[14,26,25,27,28,20],
//[2,26,25,27,28,8],
// нижн€€ лини€ usb
[29,30,31,32,33,34,35,36,37,38],
[41,42],[39,40],

];

		this.normals = new Array();

        for (var i=0; i<this.faces.length; i++)
        {
          this.normals[i] = [0, 0, 0];
        }
        
        this.center = [0, -2000, 0];
				
        for (var i=0; i<this.points.length; i++)
        {
			this.center[0] += this.points[i][0];
			this.center[1] += this.points[i][1];
			this.center[2] += this.points[i][2];
        }
				
				this.distances = new Array();
				for (var i=1; i<this.points.length; i++)
				{
					this.distances[i] = 0;
				}
				
				this.points_number = this.points.length;
				this.center[0] = this.center[0]/(this.points_number-1);
				this.center[1] = this.center[1]/(this.points_number-1);
				this.center[2] = this.center[2]/(this.points_number-1);
				
				this.faces_number = this.faces.length;
				this.axis_x = [1, 0, 0];
				this.axis_y = [0, 1, 0];
				this.axis_z = [0, 0, 1];
				this.fillcolor = fillcolor;
				this.linecolor = linecolor;
}

// колпачок
function caps(fillcolor, linecolor)
{
this.points=[[0,0,0],
// колпачок (верхн€€ часть)
[-17,122,4],[-16,122,5], [-17,90,4],[-16,90,5],
[17,122,4],[16,122,5], [17,90,4],[16,90,5],
// колпачок (нижн€€ часть)
[-17,122,-4],[-16,122,-5], [-17,90,-4],[-16,90,-5],
[17,122,-4],[16,122,-5], [17,90,-4],[16,90,-5],
// колпачок (внутренн€€ часть)
];

this.faces=[
// колпачок (верхн€€ и нижн€€ части)
[1,2,4,3],[5,6,8,7],[2,4,8,6],
[9,10,12,11],[13,14,16,15],[10,12,16,14],
// колпачок боковые плоскости
[1,3,11,9], [5,7,15,13],
// колпачок - плоскость в дырке
[1,2,6,5,13,14,10,9],
];

		this.normals = new Array();

        for (var i=0; i<this.faces.length; i++)
        {
          this.normals[i] = [0, 0, 0];
        }
        
        this.center = [0, -1500, 0];
				
        for (var i=0; i<this.points.length; i++)
        {
			this.center[0] += this.points[i][0];
			this.center[1] += this.points[i][1];
			this.center[2] += this.points[i][2];
        }
				
				this.distances = new Array();
				for (var i=1; i<this.points.length; i++)
				{
					this.distances[i] = 0;
				}
				
				this.points_number = this.points.length;
				this.center[0] = this.center[0]/(this.points_number-1);
				this.center[1] = this.center[1]/(this.points_number-1);
				this.center[2] = this.center[2]/(this.points_number-1);
				
				this.faces_number = this.faces.length;
				this.axis_x = [1, 0, 0];
				this.axis_y = [0, 1, 0];
				this.axis_z = [0, 0, 1];
				this.fillcolor = fillcolor;
				this.linecolor = linecolor;
}

// линии на колпачке
function lines(fillcolor, linecolor) {
this.points=[[0,0,0],
[-10,94,5],[-10,118,5],[-8,118,5],[-8,94,5],
[-4,94,5],[-4,118,5],[-2,118,5],[-2,94,5],
[10,94,5],[10,118,5],[8,118,5],[8,94,5],
[4,94,5],[4,118,5],[2,118,5],[2,94,5]];

this.faces=[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]];


		this.normals = new Array();

        for (var i=0; i<this.faces.length; i++)
        {
          this.normals[i] = [0, 0, 0];
        }
        
        this.center = [0, -1500, -90];
				
        for (var i=0; i<this.points.length; i++)
        {
			this.center[0] += this.points[i][0];
			this.center[1] += this.points[i][1];
			this.center[2] += this.points[i][2];
        }
				
				this.distances = new Array();
				for (var i=1; i<this.points.length; i++)
				{
					this.distances[i] = 0;
				}
				
				this.points_number = this.points.length;
				this.center[0] = this.center[0]/(this.points_number-1);
				this.center[1] = this.center[1]/(this.points_number-1);
				this.center[2] = this.center[2]/(this.points_number-1);
				
				this.faces_number = this.faces.length;
				this.axis_x = [1, 0, 0];
				this.axis_y = [0, 1, 0];
				this.axis_z = [0, 0, 1];
				this.fillcolor = fillcolor;
				this.linecolor = linecolor;
}