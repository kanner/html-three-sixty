var color_cap=3;
var color_secretbody=3;
var color_part=5;

function func() {
	alert("fail");
}

function RecieveCapColor(colornum) {
	var color = GetColorCode(colornum);
	if (color!=0) {
		document.getElementById('cap').style.backgroundColor = color;
        color_cap = colornum;
    }
	else
		alert("неправильный формат данных от flash");
//	alert("ok");
}

function RecieveBodyColor(colornum) {
    var color = GetColorCode(colornum);
    if (color!=0) {
        document.getElementById('secretbody').style.backgroundColor = color;
        color_secretbody = colornum;
    }
    else
        alert("неправильный формат данных от flash");
//  alert("ok");
}

function RecievePartColor(colornum) {
	var color = GetColorCode(colornum);
	if (color!=0) {
		document.getElementById('part').style.backgroundColor = color;
        color_part = colornum;
    }
	else
		alert("неправильный формат данных от flash");
//	alert("ok");
}

function GetColorCode(colornum) {
    var rgb;
    if (colornum ==1) {
//        rgb(0,153,255)
        rgb="rgb(0,153,255)";
    }
    else if (colornum ==2) {
//        rgb(0,51,204)
        rgb="rgb(0,51,204)";
    }
    else if (colornum ==3) {
//        rgb(0,0,0)
        rgb="rgb(0,0,0)";
    }
    else if (colornum ==4) {
//        rgb(255,0,0)
        rgb="rgb(255,0,0)";
    }
    else if (colornum ==5) {
//        rgb(255,255,255)
        rgb="rgb(255,255,255)";
    }
    else if (colornum ==6) {
//        rgb(255,153,0)
        rgb="rgb(255,153,0)";
    }
    else
        return 0

    return rgb
}

// кука на 20 минут
function SetColorCookie()
{
  var time=new Date();
  time.setMinutes(20+time.getMinutes());
  document.cookie="cap="+color_cap+"; path=/; expires="+ time.toGMTString();
  document.cookie="secretbody="+color_secretbody+"; path=/; expires="+ time.toGMTString();
  document.cookie="part="+color_part+"; path=/; expires="+ time.toGMTString();
  // перезагружаем страницу

  location.href="http://prosecret.ru/ordersecret_color.html";
}

/*function DelColorCookie()
{
  var ws=new Date();
  time.setMinutes(20-time.getMinutes());
  document.cookie="_cap_="+color_cap+"; path=/; expires="+ time.toGMTString();
  document.cookie="_secretbody_="+color_secretbody+"; path=/; expires="+ time.toGMTString();
  document.cookie="_part_="+color_part+"; path=/; expires="+ time.toGMTString();
  // перезагружаем страницу

  location.href="/ordersecret_color.html";
}*/

// достаем значения куки
function findCookie(szName) 
{
  var i = 0;
  var nStartPosition = 0;
  var nEndPosition = 0;  
  var szCookieString = document.cookie;  

  while(i <= szCookieString.length) 
  {
    nStartPosition = i;
    nEndPosition = nStartPosition + szName.length;

    if(szCookieString.substring( 
        nStartPosition,nEndPosition) == szName) 
    {
      nStartPosition = nEndPosition + 1;
      nEndPosition = 
        document.cookie.indexOf(";",nStartPosition);

      if(nEndPosition < nStartPosition)
        nEndPosition = document.cookie.length;

      return document.cookie.substring( 
          nStartPosition,nEndPosition);  
      break;    
    }
    i++;  
  }
  return "";
}

// и заносим в выпадающие списки
function ColorLists() {
    var cap = findCookie("cap");
    if (cap!=0 && cap<7) {
        document.getElementById('color_cap').options[cap-1].selected = true;
//        document.getElementById('color_cap').disabled = true;
    }

    var secretbody = findCookie("secretbody");
    if (secretbody!=0  && secretbody<7) {
        document.getElementById('color_secretbody').options[secretbody-1].selected = true;
//        document.getElementById('color_secretbody').disabled = true;
    }

    var part = findCookie("part");
    if (part!=0 && part<7) {
        document.getElementById('color_part').options[part-1].selected = true;
//        document.getElementById('color_part').disabled = true;
    }
}
