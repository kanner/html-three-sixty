/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-21

	http://www.uize.com/reference/Uize.Widget.Picker.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Picker.Selector',required:['Uize.Widget.Options','Uize.Widget.SelectorOption'],builder:function(e_a){var e_b=true,e_c=false;var e_d=e_a.subclass(null,function(){var e_e=this,e_f=e_e.addChild('options',Uize.Widget.Options,{optionWidgetClass:Uize.Widget.SelectorOption,html:e_b,built:e_c});function e_g(e_h){function e_i(e_j){var e_k='Changed.'+e_j;function e_l(e_m,e_n){e_n.wire(e_k,function(){e_m.set(e_j,e_n.get(e_j))})}e_l(e_e,e_f);e_l(e_f,e_e);}for(var e_o= -1;++e_o<e_h.length;)e_i(e_h[e_o]);}e_g(['tentativeValue','tentativeValueNo','value','valueNo','values']);e_f.wire({Click:function(){e_e.set({isDirty:e_b})},'Changed.values':function(){e_e.syncNodeMap()}});}),e_p=e_d.prototype;e_d.registerProperties({e_q:{name:'isMultiSelect',value:e_c},e_r:{name:'tentativeValueNo',value:-1},e_s:{name:'valueNo',value:-1}});return e_d;}});