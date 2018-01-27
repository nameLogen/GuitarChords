var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainBtnViewUI=(function(_super){
		function MainBtnViewUI(){
			

			MainBtnViewUI.__super.call(this);
		}

		CLASS$(MainBtnViewUI,'ui.test.Main.MainBtnViewUI',_super);
		var __proto__=MainBtnViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainBtnViewUI.uiView);

		}

		MainBtnViewUI.uiView={"type":"View","props":{"width":200,"height":640},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"skin":"comp/bg.png","height":640}},{"type":"Label","props":{"y":-1,"x":74,"width":53,"valign":"middle","text":"打\\n地\\n鼠","height":640,"fontSize":40,"font":"Microsoft YaHei","color":"#0f44b5","bold":true,"align":"center"}}]};
		return MainBtnViewUI;
	})(View);
var MainViewUI=(function(_super){
		function MainViewUI(){
			
		    this.openMoleBtn=null;

			MainViewUI.__super.call(this);
		}

		CLASS$(MainViewUI,'ui.test.Main.MainViewUI',_super);
		var __proto__=MainViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.test.Main.MainBtnViewUI",ui.test.Main.MainBtnViewUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainViewUI.uiView);

		}

		MainViewUI.uiView={"type":"View","props":{"width":1134,"height":640},"child":[{"type":"MainBtnView","props":{"y":0,"x":0,"var":"openMoleBtn","runtime":"ui.test.Main.MainBtnViewUI"}}]};
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
var StartViewUI=(function(_super){
		function StartViewUI(){
			
		    this.mouseView0=null;
		    this.hole1=null;
		    this.mouseView1=null;
		    this.hole2=null;
		    this.mouseView2=null;
		    this.hole3=null;
		    this.startGameBg=null;
		    this.gameOverBg=null;
		    this.closeBtn=null;

			StartViewUI.__super.call(this);
		}

		CLASS$(StartViewUI,'ui.test.Whac_A_Mole.version1.StartViewUI',_super);
		var __proto__=StartViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StartViewUI.uiView);

		}

		StartViewUI.uiView={"type":"Dialog","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":63,"x":220,"skin":"comp/whac_a_mole/version1/bg_canvas.png"}},{"type":"View","props":{"y":240,"x":220,"width":750,"var":"mouseView0","layoutEnabled":true,"height":100},"child":[{"type":"View","props":{"y":-181,"x":62,"width":750,"renderType":"mask","mouseEnabled":true,"height":287},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":649,"lineWidth":1,"height":286,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":274,"x":221,"var":"hole1","skin":"comp/whac_a_mole/version1/bg_hole1.png"}},{"type":"View","props":{"y":333,"x":230,"width":750,"var":"mouseView1","height":98},"child":[{"type":"View","props":{"y":-190,"x":42,"width":750,"renderType":"mask","height":285},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":649,"lineWidth":1,"height":286,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":385,"x":218,"var":"hole2","skin":"comp/whac_a_mole/version1/bg_hole2.png"}},{"type":"View","props":{"y":432,"x":240,"width":750,"var":"mouseView2","height":100},"child":[{"type":"View","props":{"y":-187,"x":24,"width":750,"renderType":"mask","height":287},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":649,"lineWidth":1,"height":286,"fillColor":"#ff0000"}}]}]},{"type":"Image","props":{"y":488,"x":220,"var":"hole3","skin":"comp/whac_a_mole/version1/bg_hole3.png"}},{"type":"Image","props":{"y":63,"x":220,"visible":false,"var":"startGameBg","skin":"comp/whac_a_mole/version1/set_board.png"}},{"type":"Image","props":{"y":63,"x":220,"visible":false,"var":"gameOverBg","skin":"comp/whac_a_mole/version1/bg_gameover.png"}},{"type":"Button","props":{"y":56,"x":992,"var":"closeBtn","skin":"comp/btn_close.png","scaleY":2,"scaleX":2}}]};
		return StartViewUI;
	})(Dialog);