/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-21

	http://www.uize.com/reference/Uize.Widget.SelectorOption.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.SelectorOption',superclass:'Uize.Widget.Button',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;d_c.wire('Changed.selected',function(){d_c.d_d()});}),d_e=d_b.prototype;d_e.d_d=function(){var d_c=this;if(d_c.isWired){d_c.setNodeProperties('input',{checked:d_c.get('selected')});}};d_e.updateUi=function(){var d_c=this;if(d_c.isWired){d_c.d_d();d_a.prototype.updateUi.call(d_c);}};d_e.wireUi=function(){var d_c=this;if(!d_c.isWired){var d_f=d_c.getNode('input');d_c.wireNode(d_f,'change',function(){d_c.set({selected:d_f.checked})});d_a.prototype.wireUi.call(d_c);}};return d_b;}});