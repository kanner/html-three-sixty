/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-13

	http://www.uize.com/reference/Uize.Widget.FormElement.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FormElement',required:['Uize.Node','Uize.Node.Event','Uize.Widget.Collapsy','Uize.Node.Classes'],builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e,c_f={nearest:'round',up:'ceil',down:'floor'},c_g='never',c_h='tentativeValueChanged',c_i='valueChanged',c_j='validated',c_k='finished',c_l='validatedAfterFirstFinish';var c_m=c_a.subclass(c_d,function(){var c_n=this;c_n.wire({'Changed.busyInherited':c_o.c_p,'Changed.enabledInherited':c_o.c_p});c_n.c_q=c_n.addChild('warning',Uize.Widget.Collapsy,c_n.c_r);c_n.c_s();c_n.c_t=c_b;c_n.c_u=c_n.c_v;}),c_o=c_m.prototype;c_o.c_w=function(){var c_n=this,c_x=c_n.c_x,c_y=c_n.c_z(),c_A=c_n.c_B;c_n.set({c_B:(c_n.c_C&&c_n.c_D==c_c)&&((c_y&&c_y.get('warningShown'))||(c_n.c_E&&(c_x==c_j||(c_x==c_k&&(c_n.c_F||c_A))||(c_x==c_l&&(c_n.c_G||c_A)))))});};c_o.c_H=function(){return this.getNode('input')};c_o.c_z=function(){var c_I=this.parent,c_y;if(c_I&&c_I.parent){c_y=c_I.parent;if(!c_y.isForm)c_y=c_d;}return c_y;};c_o.c_J=function(){
this.setNodeProperties(this.c_H(),{name:this.c_K})};c_o.c_p=function(){var c_n=this;if(c_n.isWired){var c_L=c_n.get('enabledInherited')&& !c_n.get('busyInherited');c_n.setNodeProperties(c_n.c_H(),{readOnly:!c_L,disabled:!c_L});}};c_o.c_M=function(){var c_n=this;if(c_n.isWired){var c_N=c_n.c_H(),c_v=c_n.c_v;c_v+''!=c_n.getNodeValue(c_N)&&c_n.setNodeValue(c_N,c_v);}};c_o.c_O=function(){var c_n=this,c_B=c_n.c_B,c_P=c_n.c_Q||c_n.c_P;c_n.c_q&&c_n.c_q.set(c_m.copyInto({shown:c_B},c_P?{expandedMessage:c_P}:c_d));if(c_n.isWired){function c_R(c_S){Uize.Node.Classes.setState(c_n.getNode(c_S),c_n.c_T,c_B)}c_R(c_n.c_H());c_R('label');}c_n.fire('Warning UI Updated');};c_o.c_s=function(){var c_n=this,c_U=c_n.c_U;if(!c_n.get('valueConformerFn')||c_n.c_V){if(c_U){var c_W=c_U.type,c_X=c_U.properties||{};if(c_W=='inValues'){c_n.set({c_Y:function(c_v){var c_Z=c_n.c_Z,c_0=c_Z.length?c_m.findRecordNo(c_Z,{name:c_v}): -1;return c_0> -1?c_v:(c_Z.length?c_Z[0].name:c_d);}});c_n.c_V=c_b;}else if(c_W=='increment'){var
 c_1=c_X.increment,c_2=c_X.roundDirection;if(c_1&&c_1!=1){c_X.roundDirection=c_2=c_2&&c_f[c_2]?c_2:'nearest';function c_3(c_v){return Math.round(c_v*Math.pow(10,14))/Math.pow(10,14)}c_n.set({c_Y:function(c_v){return c_m.isNumber(+c_v)?(c_3(Math[c_f[c_2]](c_3(c_v/c_1))*c_1)):c_v}});c_n.c_V=c_b;}}}else{c_n.set({c_Y:c_d});c_n.c_V=c_c;}}};c_o.c_4=function(){var c_n=this;if(c_n.c_t){var c_5=c_n.c_5,c_6=(c_m.isArray(c_5)?c_5:(c_5!=c_d?[c_5]:[])).concat(c_n.getMoreValidators());;function c_7(c_D){c_n.set({c_D:c_D})}if(c_6!=c_d){var c_v=c_n.c_8==c_h?c_n.c_9:c_n.c_v,c_ba=c_6.length,c_bb= -1;function c_bc(){if(++c_bb<c_ba){function c_bd(c_D,c_Q){if(!c_D){c_n.c_Q=c_Q;c_7(c_c);}else c_bc();}var c_be=c_6[c_bb],c_D=c_be instanceof RegExp?c_be.test(c_v):(c_be.func||typeof c_be=='function'?(c_be.func||c_be).call(c_n,c_v,c_bd):c_v==c_be);c_D!=c_d&&c_bd(c_D,c_be.msg);}else c_7(c_b);}c_bc();}else c_7(c_c)}};c_o.blur=function(){var c_N=this.c_H();c_N&&(Uize.Node.isNode(c_N)?c_N:c_N[0]).blur();};c_o.checkWarningShown=c_o.c_w;
c_o.focus=function(){var c_N=this.c_H();c_N=Uize.Node.isNode(c_N)?c_N:c_N[0];c_N.focus();var c_bf=c_N.value?c_N.value.length:0;if(c_bf==0)return;if(c_N.createTextRange){var c_bg=c_N.createTextRange();c_bg.move('character',c_bf);c_bg.select();}else if(c_N.setSelectionRange)c_N.setSelectionRange(c_bf,c_bf);};c_o.getInputNode=c_o.c_H;c_o.getMoreValidators=function(){return[]};c_o.getProperties=function(){var c_n=this,c_bh=c_n.c_bh,c_v=c_n.c_v,c_bi={value:c_v};if(c_n.isWired){var c_N=c_n.c_H();if(c_bh=='select-one'){var c_bj=c_N.selectedIndex;Uize.copyInto(c_bi,{selectedIndex:c_bj,text:c_bj> -1?c_N.options[c_bj].text:c_d});}else if(c_bh=='select-multiple'){c_bi=[];var c_bk=c_N.options,c_bl=0,c_bm=c_bk.length,c_bn;for(;c_bl<c_bm;c_bl++)(c_bn=c_bk[c_bl]).selected&&c_bi.push({value:c_bn.value,selectedIndex:c_bn.selectedIndex,title:c_bn.title});}}return c_bi;};c_o.restore=function(){var c_n=this;c_n.set({c_G:c_c,c_bo:c_c,c_bp:'inherit',c_v:c_n.c_u});};c_o.syncNodeMap=function(){var c_n=this;if(c_n.c_bh=='radio'){
c_n.set({nodeMap:c_m.copyInto(c_n.get('nodeMap')||{},{input:Uize.Node.find({tagName:'INPUT',type:'radio',name:c_n.c_K})})})}};c_o.updateUi=function(){var c_n=this;c_n.c_p();c_n.c_M();c_n.c_O();c_a.prototype.updateUi.call(c_n);};c_o.validate=c_o.c_4;c_o.wireUi=function(){var c_n=this;if(!c_n.isWired){var c_N=c_n.c_H();if(c_N){c_n.c_bh=c_N.type;c_n.c_K=c_N.name;function c_bq(c_br,c_bs){c_n.fire({name:c_br,domEvent:c_bs})}function c_bt(c_bu){c_bq('Click',c_bu)}function c_bv(c_bu){c_bw();c_bq('Blur',c_bu);c_n.c_q.set({collapsed:c_b});}function c_bx(c_bu){c_bq('Focus',c_bu);c_n.c_q.set({collapsed:c_c});}function c_by(c_bu){c_bq('Key Up',c_bu)}function c_bw(c_bz){c_n.set({c_v:c_n.getNodeValue(c_N)});!c_bz&&c_n.c_bp!=c_b&&c_n.set({c_bp:c_b});}switch(c_n.c_bh){case'text':case'textarea':case'password':c_n.wireNode(c_N,{keyup:function(c_bu){if(Uize.Node.Event.isKeyEnter(c_bu)&&c_n.c_bh!='textarea'){c_bw();c_bq('Ok',c_bu);}else if(Uize.Node.Event.isKeyEscape(c_bu)){c_n.c_M();c_bq('Cancel',c_bu);c_N.blur();}else{
c_n.set({c_9:c_n.getNodeValue(c_N),c_F:c_c});}c_by(c_bu);},blur:c_bv,focus:c_bx,click:c_bt});break;case'hidden':c_n.wireNode(c_N,'change',c_bw);break;case'radio':c_n.syncNodeMap();c_N=c_n.c_H();case'checkbox':c_n.wireNode(c_N,{blur:c_bv,click:function(c_bu){c_bw();c_bt(c_bu);},change:c_bw,focus:c_bx});break;case'select-one':case'select-multiple':c_n.wireNode(c_N,{change:c_bw,blur:c_bv,click:function(c_bu){c_bw();c_bt(c_bu);},keyup:function(c_bu){c_bw();c_by(c_bu);},focus:c_bx});break;}c_n.c_v==c_e&&c_bw(c_b);c_n.c_u=c_n.c_v;c_n.c_4();}c_a.prototype.wireUi.call(c_n);}};c_m.validateWhenType={never:c_g,tentativeValueChanged:c_h,valueChanged:c_i,finished:c_k};c_m.warningShownWhenType={validated:c_j,finished:c_k,validatedAfterFirstFinish:c_l};c_m.registerProperties({c_K:'elementName',c_T:{name:'errorClassName',value:'error'},c_bp:{name:'isDirty',onChange:function(){var c_n=this,c_y=c_n.c_z(),c_bp=c_n.c_bp=='inherit'?(c_y?c_y.get('isDirtyInherited'):c_c):c_n.c_bp;c_n.set({c_E:c_bp});},value:'inherit'},c_E:{
name:'isDirtyInherited',onChange:c_o.c_w,value:c_c},c_F:{name:'isFinished',onChange:function(){var c_n=this;if(c_n.c_F&&c_n.c_t){c_n.c_8==c_k&&c_n.c_4();!c_n.c_G&&c_n.set({c_G:c_b});}c_n.c_w();},value:c_b},c_D:{name:'isValid',onChange:c_o.c_w,value:c_c},c_bA:{name:'nameMappings',value:{}},c_9:{name:'tentativeValue',onChange:function(){this.c_8==c_h&&this.c_4()},value:c_d},c_bh:'type',c_8:{name:'validateWhen',value:c_h},c_5:{name:'validator',onChange:c_o.c_4,value:c_d},c_v:{conformer:function(c_v){var c_n=this;c_v=c_n.c_bh=='checkbox'?c_v==c_b:c_v;return typeof this.c_Y=='function'?this.c_Y(c_v):c_v},name:'value',onChange:function(){var c_n=this;c_n.set({c_9:c_n.c_v,c_F:c_b});c_n.c_8==c_i&&c_n.c_4();c_n.c_M();},value:c_d},c_U:{name:'valueConformer',onChange:c_o.c_s},c_Y:'valueConformerFn',c_Z:{name:'values',onChange:function(){var c_n=this;c_n.c_s();var c_Y=c_n.c_Y;c_Y&&c_n.set({c_v:c_Y(c_n.c_v)});},value:[]},c_bB:{name:'warningAllowed',onChange:function(){var c_n=this,c_y=c_n.c_z(),c_bB=c_n.c_bB=='inherit'
?(c_y?c_y.get('warningAllowedInherited'):c_b):c_n.c_bB;c_n.set({c_C:c_bB});},value:'inherit'},c_C:{name:'warningAllowedInherited',onChange:c_o.c_w,value:c_c},c_P:{name:'warningMessage',onChange:c_o.c_O},c_r:{name:'warningMessageProperties',onChange:function(){this.c_q.set(this.c_r||{})}},c_B:{name:'warningShown',onChange:c_o.c_O,value:c_c},c_x:{name:'warningShownWhen',onChange:c_o.c_w,value:c_j},c_G:{name:'_finishedAtLeastOnce',onChange:c_o.c_w,value:c_c}});return c_m;}});