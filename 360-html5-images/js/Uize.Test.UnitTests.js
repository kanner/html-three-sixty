/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Test.UnitTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.UnitTests',required:['Uize.Test','UizeDotCom.ModulesTree'],builder:function(){var _a=['Uize.Test.Uize.Data','Uize.Test.Uize','Uize.Test.Uize.Array','Uize.Test.Uize.Array.Order','Uize.Test.Uize.Array.Sort','Uize.Test.Uize.Data.Csv','Uize.Test.Uize.Date','Uize.Test.Uize.Date.Formatter','Uize.Test.Uize.Doc','Uize.Test.Uize.String','Uize.Test.Uize.String.Builder','Uize.Test.Uize.String.Lines','Uize.Test.Uize.Url','Uize.Test.Uize.Util','Uize.Test.Uize.Xml','Uize.Test.Uize.Node','Uize.Test.Uize.Node.Classes','Uize.Test.Uize.Template','Uize.Test.Uize.Templates','Uize.Test.Uize.Templates.Calculator','Uize.Test.Uize.Templates.Calendar','Uize.Test.Uize.Templates.Collection','Uize.Test.Uize.Templates.CollectionItem','Uize.Test.Uize.Templates.ColorInfo','Uize.Test.Uize.Templates.HashTable','Uize.Test.Uize.Templates.JstModule','Uize.Test.Uize.Templates.List','Uize.Test.Uize.Templates.SevenSegmentDisplay'],_b={},_c=Uize.Test.testSuite('UIZE JavaScript Framework Unit Tests',_a);for(
var _d= -1,_e=_a.length;++_d<_e;)_b[_a[_d]]=1;var _f=UizeDotCom.ModulesTree(),_g=[];function _h(_i,_j){_i&&_g.push(_i);if(_j){for(var _k in _j)_h(_i+(_i&&'.')+_k,_j[_k]);}}_h('',_f);for(var _l= -1,_m=_g.length,_n;++_l<_m;)!_b[_n=_g[_l]]&&_n.indexOf('Uize.Test')== -1&&_n.lastIndexOf('library')!=_n.length-7&& !_b['Uize.Test.'+_n]&&_c.addTest(Uize.Test.requiredModulesTest(_n));return _c;}});