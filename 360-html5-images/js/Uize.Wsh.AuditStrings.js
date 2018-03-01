/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Wsh.AuditStrings.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Wsh.AuditStrings',required:['Uize.Scruncher','Uize.Data','Uize.String'],builder:function(){var _a=function(){};var _b=['abort','activate','afterupdate','beforedeactivate','beforeeditfocus','beforeupdate','blur','cellchange','change','click','dblclick','deactivate','drag','dragend','dragenter','dragleave','dragover','drop','error','finish','focus','help','keydown','keypress','keyup','load','losecapture','mousedown','mousemove','mouseup','mouseout','mouseover','propertychange','readystatechange','rowenter','rowexit','rowsdelete','rowsinserted','scroll','submit','start','unload'],_c=['function','object','string','undefined','alt','href','src','ajax','json','CSS1Compat','div','DIV','hr','HR','iframe','IFRAME','img','IMG','li','LI','ol','OL','span','SPAN','td','TD','textarea','TEXTAREA','tr','TR','ul','UL','.asp','.ASP','.gif','.html','.jpg','.js','.jst','.png','.PNG','.txt','.xhtml','.xml'].concat(_b,Uize.Data.map('\'on\' + value',_b)),_d;_a.perform=function(_e){var _f=/\.js$/,
_g=_e.sourceFolderName;if(!_d)_d=Uize.Data.getLookup(_c);Uize.Wsh.buildFiles(Uize.copyInto({targetFolderPathCreator:function(_h){return Uize.String.endsWith(_h,_g)?_h:null;},targetFilenameCreator:function(_i){return _f.test(_i)?_i:null;},fileBuilder:function(_i,_j){var _k=Uize.Scruncher.scrunch(_j,{AUDITSTRINGS:true}),_l=_k.stringsMap,_m=Uize.Data.getKeys(_l),_n=[],_o=[],_p=[],_q=[];_m.sort();for(var _r= -1,_s=_m.length;++_r<_s;){var _t=_m[_r];(_d[_t]|| !/\S/.test(_t)|| !/[a-zA-Z]/.test(_t)||/^(#|0x)([0-9a-fA-F]{3}){1,2}$/.test(_t)||/^[A-Z][a-zA-Z0-9$_]*(\.[a-zA-Z0-9$_]+)+$/.test(_t)||/^Uize/i.test(_t)||/^[a-zA-Z0-9$_]*_[a-zA-Z0-9$_]*$/.test(_t)||/^Changed\.(\*|[a-zA-Z0-1]+)$/.test(_t)||/^\S*[\/\\][\w_]+[\/\\]\S*$/.test(_t)||/^\$?[a-zA-Z][a-z0-9]*([A-Z][a-z0-9]+)+$/.test(_t)?_n:(/[a-zA-Z]{2,}/.test(_t)&& !/^\S*[\w_]+[\/\\][\w_]+\S*$/.test(_t)?(/\b[a-zA-Z][a-z]*\s[a-z]+\s[a-zA-Z][a-z]*\b/.test(_t)?_q:_p):_o)).push(_t+' --- '+_l[_t]);}return{logDetails:'\t\tNON-INTERNATIONALIZABLE STRINGS\n'+
Uize.String.hugJoin(_n,'\t\t\t','\n')+'\n'+'\t\tLIKELY NON-INTERNATIONALIZABLE STRINGS\n'+Uize.String.hugJoin(_o,'\t\t\t','\n')+'\n'+'\t\tPOSSIBLY INTERNATIONALIZABLE STRINGS\n'+Uize.String.hugJoin(_p,'\t\t\t','\n')+'\n'+'\t\tLIKELY INTERNATIONALIZABLE STRINGS\n'+Uize.String.hugJoin(_q,'\t\t\t','\n')};}},_e,{alwaysBuild:true,dryRun:true}));};return _a;}});