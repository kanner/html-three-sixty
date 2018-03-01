/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-13

	http://www.uize.com/reference/Uize.Widget.Collapsy.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Collapsy',required:'Uize.Node.Classes',builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype,c_d=true,c_e=false;c_c.c_f=function(){var c_g=this;if(c_g.isWired){var c_h=c_g.c_h;c_g.setNodeStyle('',{display:c_h?'inline':'none'});if(c_h){c_g.setNodeInnerHtml('text',c_g.c_i(c_g.c_j?c_g.c_k:c_g.c_l));Uize.Node.Classes.setState(c_g.getNode(''),[c_g.c_m,c_g.c_n],c_g.c_j);}}};c_c.c_i=function(c_o){return c_o?(typeof c_o=='function'?c_o():c_o):c_o;};c_c.getCollapsedMessage=function(){return this.c_i(this.c_k)};c_c.getExpandedMessage=function(){return this.c_i(this.c_l)};c_c.updateUi=function(){this.c_f();c_a.prototype.updateUi.call(this);};c_c.wireUi=function(){var c_g=this;if(!c_g.isWired){function c_p(c_j){c_g.set({c_j:c_j})}c_g.wireNodeEvents('',{onmouseover:function(){c_p(c_e)},onmouseout:function(){c_p(c_d)}});c_a.prototype.wireUi.call(c_g);}};c_b.registerProperties({c_j:{name:'collapsed',onChange:c_c.c_f,value:c_d},c_n:'collapsedClass',c_k:{name:'collapsedMessage',
onChange:c_c.c_f,value:''},c_m:'expandedClass',c_l:{name:'expandedMessage',onChange:c_c.c_f},c_h:{name:'shown',onChange:c_c.c_f,value:c_e}});return c_b;}});