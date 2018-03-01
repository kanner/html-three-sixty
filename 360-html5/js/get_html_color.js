// кука на 20 минут
function SetHTMLColorCookie()
{
var color_cap=document.getElementById('output3').innerHTML;
var color_secretbody=document.getElementById('output1').innerHTML;
var color_part=document.getElementById('output2').innerHTML;
  var time=new Date();
  time.setMinutes(20+time.getMinutes());
  document.cookie="html_cap="+color_cap+"; path=/; expires="+ time.toGMTString();
  document.cookie="html_secretbody="+color_secretbody+"; path=/; expires="+ time.toGMTString();
  document.cookie="html_part="+color_part+"; path=/; expires="+ time.toGMTString();
  // перезагружаем страницу

  location.href="http://prosecret.ru/ordersecret_html_color.html";
}

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
function HTMLColorLists() {
    var cap = HTMLCheckColor(findCookie("html_cap"));
    if (cap!=0) {
        document.getElementById('color_cap').options[cap-1].selected = true;
//        document.getElementById('color_cap').disabled = true;
    }

    var secretbody = HTMLCheckColor(findCookie("html_secretbody"));
    if (secretbody!=0) {
        document.getElementById('color_secretbody').options[secretbody-1].selected = true;
//        document.getElementById('color_secretbody').disabled = true;
    }

    var part = HTMLCheckColor(findCookie("html_part"));
    if (part!=0) {
        document.getElementById('color_part').options[part-1].selected = true;
//        document.getElementById('color_part').disabled = true;
    }
}

function HTMLCheckColor(cookie) {
	color=new Array(0, "rgb(236,0,141)", "rgb(238,28,37)", "rgb(255,241,0)", "rgb(0,166,81)", "rgb(0,173,238)", "rgb(0,103,179)", "rgb(4,46,110)", "rgb(255,255,255)", "rgb(35,31,32)");
	for (var i=0; i<10; i++) {
		if (cookie==color[i])
			return i;
	}
	return 0;
}

/*function info() {
	alert(document.getElementById('output3').innerHTML);
}*/