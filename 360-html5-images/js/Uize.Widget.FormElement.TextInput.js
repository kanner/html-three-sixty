/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-13

	http://www.uize.com/reference/Uize.Widget.FormElement.TextInput.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FormElement.TextInput',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;d_c.d_d=function(d_e){var d_f=d_e?d_e.length:0;return d_f>=d_c.d_g&&d_f<=d_c.d_h;};});d_b.prototype.getMoreValidators=function(){return[this.d_d]};d_b.registerProperties({d_g:{name:'minLength',value:0},d_h:{name:'maxLength',value:32767}});return d_b;}});