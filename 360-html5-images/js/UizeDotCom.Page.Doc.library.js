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
|    /    O /   |    MODULE : UizeDotCom.Page.Doc.library Library Module
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2009-2010 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*?
	Introduction
		The =UizeDotCom.Page.Doc.library= module is a library module that bundles together various JavaScript modules common to the SimpleDoc pages of the UIZE JavaScript Framework's Web site.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	required:'UizeDotCom.Page.library',
	builder:function () {
		

Uize.module({name:'Uize.Tooltip',required:['Uize.Node','Uize.Fade'],builder:function(){var _a=function(){},_b=true,_c=false,_d,_e=Uize.Node;var _f=Uize.getGuid(),_g=[],_h,_i=16;function _j(_k){return _e.getById(typeof _k=='function'?_k():_k);}function _l(){_m()}function _n(_o){if(_o!=_h){if(_o){if(_h){_p.stop();_q();}if(!_o._r){_e.wire(document.body,'scroll',_l,_f);_e.wire(document.documentElement,'mousemove',_l,_f);}_h=_o;_e.setStyle(_h._s,{position:'absolute',zIndex:5000,left:-50000,top:-50000});_e.display(_h._s);_m();}else{_p.get('duration')>0?_p.start():_q();}}else if(_o){_p.stop();_e.setOpacity(_h._s,1);}}_a.showTooltip=function(_k,_t,_r){if(_k=_j(_k)){if(_t!==_c){_g.push({_s:_k,_r:_r});}else{for(var _u=_g.length;--_u> -1;)if(_g[_u]._s==_k)break;_u> -1&&_g.splice(_u,1);}_n(_g[_g.length-1]);}};_a.hideTooltip=function(_k){_a.showTooltip(_k,_c)};var _m=_a.positionTooltip=function(_k,_v){_h&&(_k===_d?(_k=_h._s):_h._s==_j(_k))&&_e.setAbsPos(_k,_e.getEventAbsPos(_v),_i);};
var _p=_a.fade=new Uize.Fade({duration:0});function _q(){_h._r||_e.unwireEventsByOwnerId(_f);_e.display(_h._s,_c);_e.setOpacity(_h._s,1);_h=null;}_p.wire({'Changed.value':function(){_e.setOpacity(_h._s,1-_p.get('progress'))},Done:_q});return _a;}});


Uize.module({name:'Uize.Widget.Tree.List',required:['Uize.Node','Uize.Tooltip','Uize.Xml'],builder:function(d_a){var d_b,d_c=true,d_d=false,d_e=Uize.pathToResources+'Uize_Widget_Tree_List/',d_f=Uize.Node,d_g=Uize.Tooltip,d_h=Uize.Xml.toAttributeValue;var d_i=d_a.subclass(),d_j=d_i.prototype;d_j.setItemExpanded=function(d_k,d_l){var d_m=this;if(d_m.isWired){var d_n=d_m.getItemFromSpecifier(d_k);d_m.displayNode(d_k+'Children',d_n.expanded=typeof d_l=='boolean'?d_l:d_n.expanded===d_d);d_m.setNodeProperties(d_k+'Toggler',{src:d_m.d_o(d_n),title:d_m.d_p(d_n)});}else{d_a.prototype.setItemExpanded.call(d_m,d_k,d_l);}};d_j.d_o=function(d_n){return d_e+this.d_q+'-'+(d_n.expanded===d_d?'collapsed':'expanded')+'.gif';};d_j.d_p=function(d_n){return'Click to '+(d_n.expanded===d_d?'expand':'collapse');};d_j.wireUi=function(){var d_m=this;if(!d_m.isWired){var d_r=d_m.d_r;d_m.traverseTree({itemHandler:function(d_n,d_k){d_r&&d_m.wireNode(d_k+'TitleLink',{mouseover:function(){var d_s=Uize.Node.getById(d_r),d_t=d_n.description;
if(d_s&&d_t){d_f.setInnerHtml(d_s,d_h(d_t));d_g.showTooltip(d_s,d_c);}},mouseout:function(){d_g.showTooltip(d_m.d_r,d_d)}});},beforeSubItemsHandler:function(d_n,d_k){d_m.wireNode([d_k+'TogglerLink',!d_n.link||d_m.d_u?(d_k+'TitleLink'):d_b],{click:function(d_v){if(d_v.shiftKey||d_v.ctrlKey||d_v.metaKey){d_m.setExpandedDepth(d_m.getItemFromSpecifier(d_k).expanded!==d_d?0:(d_v.shiftKey?1:1000),d_k);d_v.cancelBubble=d_c;}else{d_m.setItemExpanded(d_k);}},focus:function(){this.blur()}});}});d_a.prototype.wireUi.call(d_m);}};d_i.registerProperties({d_w:{name:'alwaysLinkHeadings',value:d_d},d_x:{name:'iconBgColor',value:'#aaa'},d_q:{name:'iconTheme',value:'arrows'},d_y:{name:'levelClasses',value:[]},d_u:{name:'linksAlwaysToggleExpanded',value:d_d},d_z:{name:'spaceBeforeText',value:7},d_r:'tooltip'});d_i.set({html:{process:function(input){var d_m=this,d_A=[],d_B=input.idPrefix,d_C=d_i.getBlankImageUrl(),d_D='<img src="'+d_C+'" class="divider" align="center"/>',
d_E='style="'+(input.iconBgColor?('background:'+input.iconBgColor+'; '):'')+'width:9px; height:9px;"',d_y=input.levelClasses,d_F=d_y.length-1;d_m.traverseTree({itemHandler:function(d_n,d_k,d_G){var d_H=d_n.link,d_I=d_i.itemHasChildren(d_n),d_J='<img src="'+d_C+'" width="'+(d_G*(10+input.spaceBeforeText))+'" height="10"/>',d_K=d_y[Math.min(d_G,d_F)];d_A.push('<nobr>'+d_J+(d_i.itemIsDivider(d_n)?d_D:('<span style="width:10px; height:10px; padding-right:'+input.spaceBeforeText+'px;">'+(d_I?('<a id="'+d_B+'-'+d_k+'TogglerLink" href="javascript://"><img id="'+d_B+'-'+d_k+'Toggler" src="'+d_m.d_o(d_n)+'" '+d_E+' border="0" title="'+d_m.d_p(d_n)+'"/></a>'):'<img src="'+d_e+input.iconTheme+'-bullet.gif" '+d_E+'"/>')+'</span>'+(d_H||(d_I&&input.alwaysLinkHeadings)?('<a id="'+d_B+'-'+d_k+'TitleLink" class="'+d_K+'" href="'+(d_H||'javascript://')+'">'+d_n.title+'</a>'):('<span class="'+d_K+'">'+d_n.title+'</span>'))))+'</nobr><br/>');},beforeSubItemsHandler:function(d_n,d_k){
d_A.push('<span id="'+d_B+'-'+d_k+'Children" style="display:'+(d_n.expanded!==d_d?'block':'none')+';">');},afterSubItemsHandler:function(){d_A.push('</span>\n')}});return d_A.join('');}}});return d_i;}});


Uize.module({name:'UizeDotCom.Page.Doc',required:['Uize.Node','Uize.Node.Tree','Uize.Widget.Tree.List','Uize.Url'],builder:function(e_a){var e_b=e_a.subclass(null,function(){var e_c=this;e_c.addChild('contents',Uize.Widget.Tree.List,{levelClasses:['contents-tree-level1','contents-tree-level2','contents-tree-level3','contents-tree-level4'],iconTheme:'arrows-black',iconBgColor:'',tooltip:'contentsTooltip',built:false});}),e_d=e_b.prototype;function e_e(e_f){function e_g(e_h){var e_i=e_h.indexOf('#');return e_i> -1?e_h.slice(0,e_i):e_h;}var e_j=e_f.getAttribute('href');return((e_j.charCodeAt(0)==35||(e_j.indexOf('#')> -1&&e_g(e_j)==e_g(location.href)))?e_j.slice(e_j.indexOf('#')+1):'');}e_d.wireUi=function(){var e_c=this;if(!e_c.isWired){var e_k=e_c.children.contents,e_l=Uize.Node.Tree.getTreeFromList(e_k.getNode());e_c.set({contentsTreeItems:e_l});e_k.set({items:e_l});e_k.setExpandedDepth(1);Uize.Node.injectHtml(document.body,'<div id="contentsTooltip" class="contents-tooltip"></div>'+
'<div id="bodyLinkTooltip" class="body-link-tooltip">'+'<div id="bodyLinkTooltipTitle" class="body-link-tooltip-title"></div>'+'<div id="bodyLinkTooltipDescription" class="body-link-tooltip-description"></div>'+'<div class="body-link-tooltip-more">MORE...</div>'+'</div>');var e_m=document.title.match(/^\s*(.*?)\s*\|/)[1];e_c.wireNode('search','click',function(){location.href=e_c.getPathToRoot()+'search-sections.html?'+e_m;});e_c.wireNode('examples','click',function(){e_c.performSearch('"'+e_m+'"','/examples')});var e_n=Uize.Node.find({tagName:'h1',className:'document-title'})[0];Uize.Node.getStyle(e_n,'position')=='fixed'&&e_c.wireNode(document.body,'click',function(e_o){var e_p=e_o.target||e_o.srcElement;e_p.tagName=='A'&&e_e(e_p)&&setTimeout(function(){var e_q=Uize.Node.isSafari?document.body:document.documentElement;e_q.scrollTop&&(e_q.scrollTop-=48);},100);});var e_r=Uize.Node.find({root:Uize.Node.find({className:'contents0'})[0],tagName:'A',href:/.+/}),e_s=0;function e_t(){var e_u=e_r.length-1;
if(e_s<=e_u){for(var e_v=Math.min(e_u,e_s+19);e_s<=e_v;e_s++)Uize.Node.wire(e_r[e_s],{onmouseover:function(){var e_w=e_e(this),e_x,e_y;if(e_w){var e_z=[0];e_w.replace(/\d+/g,function(e_A){e_z.push(e_A-1)});var e_B=e_k.getItemInfoFromSpecifier(e_z);if(e_B&&e_B.item){e_x=e_B.titleParts.slice(1).join(' ... ');e_y=e_B.item.description||'';}}else{var e_j=this.getAttribute('href'),e_C=Uize.Url.from(e_j);if(e_C.protocol=='http:'&&e_C.host.indexOf('uize.com')== -1){e_x='LINK TO EXTERNAL SITE';e_y=e_j;}}if(e_x&&e_y){Uize.Node.setValue('bodyLinkTooltipTitle',e_x);Uize.Node.setValue('bodyLinkTooltipDescription',e_y);Uize.Tooltip.showTooltip('bodyLinkTooltip');}},onmouseout:function(){Uize.Tooltip.showTooltip('bodyLinkTooltip',false);}});setTimeout(e_t,0);}}e_t();e_a.prototype.wireUi.call(e_c);e_k.setNodeStyle('',{maxHeight:'none',overflow:'visible'});}};return e_b;}});
		Uize.module ({name:'UizeDotCom.Page.Doc.library'});
	}
});

