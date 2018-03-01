/*______________
|       ______  |   B U I L T     O N     U I Z E     F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |   This JavaScript application is developed using the object
|   /    / /    |   oriented UIZE JavaScript framework as its foundation.
|  /    / /  /| |
| /____/ /__/_| |    ONLINE : http://www.uize.com
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeDotCom.Page.Example.library Library Module
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2009-2010 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*?
	Introduction
		The =UizeDotCom.Page.Example.library= module is a library module that bundles together various JavaScript modules common to the example pages of the UIZE JavaScript Framework's Web site.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	required:'UizeDotCom.Page.library',
	builder:function () {
		

Uize.module({name:'UizeDotCom.Page.Example',required:['Uize.Node','Uize.Url'],builder:function(e_a){var e_b=e_a.subclass(),e_c=e_b.prototype;e_c.wireUi=function(){var e_d=this;if(!e_d.isWired){e_d.wireNode('viewSource','click',function(){e_d.viewSource(location.href,'SOURCE CODE FOR &gt;&gt; '+document.title);});e_d.e_e&&e_d.wireNode(Uize.Node.find({tagName:'A',className:/\blinkedJs\b/}),'click',function(){e_d.e_e(this.title||this.innerHTML)});e_a.prototype.wireUi.call(e_d);var e_f=Uize.Url.fromParams(location.href).tour;e_f&&Uize.module({required:['UizeDotCom.Templates.Tour','Uize.Tooltip','Uize.Url','UizeDotCom.Examples'],builder:function(){Uize.Node.injectHtml(document.body,UizeDotCom.Templates.Tour.process({tour:e_f,pageUrl:location.href}));function e_g(e_h){var e_i=arguments.callee.e_j;if(!e_i){e_i=arguments.callee.e_j={};for(var e_k= -1,e_l=UizeDotCom.Examples(),e_m=e_l.length;++e_k<e_m;){var e_n=e_l[e_k];e_i[Uize.Url.from(e_n.path).fileName]=e_n;}}return e_i[Uize.Url.from(e_h).fileName];}e_d.wireNode(
Uize.Node.find({tagName:'a',className:/\b(tourPage|tourButton)\b/}),{mouseover:function(){var e_n=e_g(this.getAttribute('href'));e_d.setNodeValue('tourPageTooltip-title',e_n.title);e_d.setNodeValue('tourPageTooltip-description',e_n.description);e_d.setNodeValue('tourPageTooltip-keywords',e_n.keywords||'-- NONE --');Uize.Tooltip.showTooltip('page-tourPageTooltip');},mouseout:function(){Uize.Tooltip.showTooltip('page-tourPageTooltip',false)}});}});}};e_b.registerProperties({e_e:'evaluator'});e_b.set({showFooter:false});return e_b;}});


Uize.module({name:'Uize.Tooltip',required:['Uize.Node','Uize.Fade'],builder:function(){var _a=function(){},_b=true,_c=false,_d,_e=Uize.Node;var _f=Uize.getGuid(),_g=[],_h,_i=16;function _j(_k){return _e.getById(typeof _k=='function'?_k():_k);}function _l(){_m()}function _n(_o){if(_o!=_h){if(_o){if(_h){_p.stop();_q();}if(!_o._r){_e.wire(document.body,'scroll',_l,_f);_e.wire(document.documentElement,'mousemove',_l,_f);}_h=_o;_e.setStyle(_h._s,{position:'absolute',zIndex:5000,left:-50000,top:-50000});_e.display(_h._s);_m();}else{_p.get('duration')>0?_p.start():_q();}}else if(_o){_p.stop();_e.setOpacity(_h._s,1);}}_a.showTooltip=function(_k,_t,_r){if(_k=_j(_k)){if(_t!==_c){_g.push({_s:_k,_r:_r});}else{for(var _u=_g.length;--_u> -1;)if(_g[_u]._s==_k)break;_u> -1&&_g.splice(_u,1);}_n(_g[_g.length-1]);}};_a.hideTooltip=function(_k){_a.showTooltip(_k,_c)};var _m=_a.positionTooltip=function(_k,_v){_h&&(_k===_d?(_k=_h._s):_h._s==_j(_k))&&_e.setAbsPos(_k,_e.getEventAbsPos(_v),_i);};
var _p=_a.fade=new Uize.Fade({duration:0});function _q(){_h._r||_e.unwireEventsByOwnerId(_f);_e.display(_h._s,_c);_e.setOpacity(_h._s,1);_h=null;}_p.wire({'Changed.value':function(){_e.setOpacity(_h._s,1-_p.get('progress'))},Done:_q});return _a;}});
		Uize.module ({name:'UizeDotCom.Page.Example.library'});
	}
});

