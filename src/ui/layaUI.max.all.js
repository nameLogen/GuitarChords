var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainViewUI=(function(_super){
		function MainViewUI(){
			
		    this.btn=null;
		    this.view=null;

			MainViewUI.__super.call(this);
		}

		CLASS$(MainViewUI,'ui.test.Main.MainViewUI',_super);
		var __proto__=MainViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainViewUI.uiView);

		}

		MainViewUI.uiView={"type":"View","props":{"width":1134,"height":640},"child":[{"type":"Button","props":{"var":"btn","skin":"comp/button.png","label":"label"}},{"type":"View","props":{"y":113,"x":45,"var":"view"},"child":[{"type":"Text","props":{"text":"text"}}]}]};
		return MainViewUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);