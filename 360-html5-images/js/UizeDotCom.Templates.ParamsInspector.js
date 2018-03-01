/*
	UIZE Web Site 2010-08-30

	http://www.uize.com/reference/UizeDotCom.Templates.ParamsInspector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.ParamsInspector',required:['UizeDotCom.Templates.ParamsTable'],builder:function(){var _a=function(){};_a.process=function(input){var output=[];output.push('\r\n<div class="tabShell">\r\n	<div class="tabStubShell">\r\n		<a id="',input.idPrefix,'_tabs_option0" class="tabStub" href="javascript://">PRESETS</a>\r\n		<a id="',input.idPrefix,'_tabs_option1" class="tabStub" href="javascript://">PARAMS</a>\r\n		<br style="clear:left;"/>\r\n	</div>\r\n	<div class="tabBodyShell">\r\n		<div id="',input.idPrefix,'_tabs-option0TabBody" class="tabBodyInactive">\r\n			<div id="',input.idPrefix,'-presets" class="selectorLinks">');for(var _b in input.presets){output.push('\r\n				<a href="javascript://" onfocus="this.blur ()" class="buttonLink">',_b,'</a>');}
output.push('\r\n			</div>\r\n		</div>\r\n		<div id="',input.idPrefix,'_tabs-option1TabBody" class="tabBodyInactive" style="overflow:auto;">\r\n			',UizeDotCom.Templates.ParamsTable.process({idPrefix:input.idPrefix,params:input.params}),'\r\n		</div>\r\n	</div>\r\n</div>\r\n<div id="',input.idPrefix,'_preview" class="button">',input.previewButtonText,'</div>\r\n\r\n');return output.join('');};_a.input={idPrefix:'string',params:'object',presets:'object',previewButtonText:'string'};return _a;}});