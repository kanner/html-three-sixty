/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Widget.Dialog.xResizable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.xResizable',required:['Uize.Widget.Resizer','Uize.Node'],builder:function(c_a_a){var c_a_b=c_a_a.prototype;c_a_b.c_a_c=function(){var c_a_d=this,c_a_e=c_a_d.c_a_e;if(c_a_d.c_a_f&& !c_a_e){(c_a_d.c_a_e=c_a_e=c_a_d.addChild('resizer',Uize.Widget.Resizer,{constrain:false,minHeight:0,minWidth:150})).wire({'Changed.inDrag':function(){c_a_d.set({inDrag:c_a_e.get('inDrag')})},'Drag Start':c_a_d,'Drag Done':function(c_a_g){c_a_d.set({width:c_a_e.get('width'),height:c_a_e.get('height')});c_a_d.fire(c_a_g);}});function c_a_h(){if(c_a_d.isWired&&c_a_d.get('shown')){var c_a_i=c_a_d.getNode();if(Uize.Node.getStyle(c_a_i,'display')!='none'){var c_a_j=Uize.Node.getCoords(c_a_i);c_a_e.set({left:c_a_j.left,top:c_a_j.top,width:c_a_j.width,height:c_a_j.height});}}};c_a_d.wire({'After Show':c_a_h,'Changed.width':c_a_h,'Changed.height':c_a_h,'Drag Done':c_a_h});if(c_a_d.isWired){c_a_d.c_a_k();c_a_d.get('shown')&&c_a_h();c_a_e.wireUi();}}};c_a_b.c_a_k=function(){var c_a_d=this;
if(c_a_d.isWired&&c_a_d.c_a_f&& !c_a_d.c_a_l){c_a_d.c_a_l=true;c_a_d.c_a_e.set({areaNodes:[c_a_d.getNode()],nodeMap:{move:null,shell:document.documentElement}});}};c_a_b.atEndOfOmegaStructor=function(){this.c_a_c()};c_a_b.afterWireUi=function(){this.c_a_k()};c_a_a.registerProperties({c_a_f:{name:'resizable',onChange:function(){var c_a_d=this;c_a_d.c_a_c();c_a_d.c_a_k();c_a_d.c_a_e&&c_a_d.c_a_e.set({enabled:c_a_d.c_a_f?'inherit':false});}}});}});