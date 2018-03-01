/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Widget.EggTimer.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.EggTimer',required:'Uize.Widget.Count',builder:function(c_a){var c_a=Uize.Widget,c_b=c_a.subclass(function(){var c_c=this;c_c.c_d=null;c_c.c_e=false;c_c.c_f=function(){c_c.advance()};}),c_g=c_b.prototype;c_g.advance=function(){var c_c=this;if(c_c.c_e){c_c.children.seconds.down();c_c.c_d=setTimeout(c_c.c_f,1000);}};c_g.resetTo=function(c_h){var c_c=this;c_c.c_e=false;c_c.set({startTime:c_h});c_c.c_i&&c_c.children.seconds.setCount(c_h.seconds);c_c.c_j&&c_c.children.minutes.setCount(c_h.minutes);c_c.c_k&&c_c.children.hours.setCount(c_h.hours);};c_g.reset=function(){this.resetTo(this.c_l);};c_g.resume=function(){var c_c=this;c_c.c_e=true;c_c.c_d=setTimeout(c_c.c_f,1000);};c_g.stop=function(){this.c_e=false;};c_g.wireUi=function(){var c_c=this;if(!c_c.isWired){var c_m=c_c.get('idPrefix');function c_n(c_o,c_p,c_q){var c_r=c_c.addChild(c_o,Uize.Widget.Count,{digits:2,limit:c_q,numbersImagesPath:c_c.c_s,numbersFiletype:c_c.c_t});c_r.wireUi();c_r.setCount(c_p);return c_r;}function c_u(){
if((!c_c.c_j||(c_c.c_j&& !c_c.children.minutes.getCount()))&&(!c_c.c_k||(c_c.c_k&& !c_c.children.hours.getCount()))){c_c.c_e=false;c_c.fire('zero');}}this.c_i&&c_n('seconds',c_c.c_l.seconds,59).wire({zero:c_u,limit:function(){c_c.c_j&&c_c.children.minutes.down()}});c_c.c_j&&c_n('minutes',c_c.c_l.minutes,59).wire('limit',function(){c_c.c_k&&c_c.children.hours.down()});c_c.c_k&&c_n('hours',c_c.c_l.hours,23);c_a.prototype.wireUi.call(c_c);}};c_b.registerProperties({c_l:{name:'startTime',value:{hours:0,minutes:0,seconds:0}},c_q:{name:'limit',value:{hours:0,minutes:0,seconds:0}},c_k:{name:'showHours',value:true},c_j:{name:'showMinutes',value:true},c_i:{name:'showSeconds',value:true},c_v:{name:'direction',value:'down'},c_s:{name:'numbersImagesPath',value:''},c_t:{name:'numbersFiletype',value:'gif'}});return c_b;}});