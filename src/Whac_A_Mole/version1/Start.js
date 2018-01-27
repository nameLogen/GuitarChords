/**
* name 
*/
var Mole;
function StartView()
{
    // this.MouseY = [180,261,354];
    //存在矩阵,表示在那个坑存在地鼠
    this.existMatrix=[
                        [0,0,0],
                        [0,0,0],
                        [0,0,0]
    ];
    this.mouseArr=[];

    this.mouseUrl = "comp/whac_a_mole/version1/mouse.png";
    var Event = laya.events.Event;
    StartView.super(this);
    var __proto = StartView.prototype
    this.mouseObgArr = []
    this.closeBtn.on(Event.CLICK, this, onCloseBtnClick);
    this.on(Event.REMOVED,this,onRemoveHandler)
    function onRemoveHandler(){
        destory()
    }
    function onCloseBtnClick(){
        Mole.Start.hideMainView();
    }

    __proto.createMouse  = function createMouse(){
        for (var i = 0; i < 3; i++) {
            this.mouseArr[i] = []
            for(j=0;j<3;j++){
                this.mouseArr[i][j] = []
                for (var k = 0; k < 5; k++) {
                    var ani = new Mouse(this.mouseUrl,getMouseFrames,k + 1,i,j,this.existMatrix)
                    ani.on(Event.CLICK, ani, onBtnClick);
                    function onBtnClick(){
                        this.dead()
                    }
                    this.mouseArr[i][j][k] = ani
                    this["mouseView" + i].addChild(ani)
                }
			}
        }
    }
    this.createMouse()

    __proto.randomCreateMouse = function randomCreateMouse(){
        var createNum = Math.floor(Math.random() * 2 + 1);
		 for(var i=1;i<=createNum;i++){
		     var a = Math.floor(Math.random() * 3);
			 var b = Math.floor(Math.random() * 3);
			 if(this.existMatrix[a][b]==1){  // 存在地鼠，不产生地鼠
			     i--;
			 }else{
			    this.existMatrix[a][b]=1;    //设置已存在地鼠
				var k = Math.floor(Math.random() * 5);
                // var ani = new Mouse(this.mouseUrl,getMouseFrames,k,a,b,this.existMatrix)
                // ani.on(Event.CLICK, ani, onBtnClick);
                // function onBtnClick(){
                //     this.dead()
                // }
                var ani = this.mouseArr[a][b][k]
                ani.state = "play"
                ani.play() 
                // this["mouseView" + a].addChild(ani)
			 }
		 }

        //         var createNum = 30
		//  for(var i=1;i<=createNum;i++){
		//      var a = Math.floor(Math.random() * 3);
		// 	 var b = Math.floor(Math.random() * 3);
		// 	 if(this.existMatrix[a][b]==1){  // 存在地鼠，不产生地鼠
		// 	    //  i--;
		// 	 }else{
		// 	    this.existMatrix[a][b]=1;    //设置已存在地鼠
		// 		var k = Math.floor(Math.random() * 5 + 1);
        //         var posX = this.MouseX[a][b]
        //         var posY = this.MouseY[a]
        //         var ani = new Mouse(this.mouseUrl,getMouseFrames,"mouse" + k,posX,posY + this.OffH[k],this.Heights[k])
        //         ani.on(Event.CLICK, ani, onBtnClick);
        //         function onBtnClick(){
        //             // alert("111111111")
        //             this.dead()
        //         }
        //         ani.play() 
        //         // ani.pos(posX,posY + ani.height)
        //         console.log("randomCreateMouse",posY,ani.height,posY-ani.height)
        //         // this.mouseObgArr[a][b] = ani
        //         this["mouseView" + a].addChild(ani)
		// 	 }
		//  }
    }


    // var countW = 0
    // var countH = 0 
    // var cacheArr = []

    // for (var i = 0; i < 5; i++) {
    //     countW = countW + 200
    //     var ani = new ME_Animation(this.mouseUrl,getMouseFrames,"mouse" + (i + 1),4)
    //     ani.pos(countW,0)
    //     ani.play() 
    //     // mouseObgArr[i] = ani
    //     this.addChild(ani)
    // }

    Laya.timer.loop(2000,this,stopFun)
    function stopFun(){
        this.randomCreateMouse()
        // for (var index = 0; index < cacheArr.length; index++) {
        //     var element = cacheArr[index];
        //     element.dead()
        // }
    }

    function destory(){
        // for (var index = 0; index < cacheArr.length; index++) {
        //     var element = cacheArr[index];
        //     element.destory()
        // }  
    }


}
Laya.class(StartView, "StartView", StartViewUI);

(function (Mole) {
    var Start = (function () {
        function Start(mainView) {
            this.mainView = mainView
            console.info(mainView)
        }
        Start.showStartView = function showStartView()
        {
            this.startView = new StartView();
            Laya.Dialog.manager.open(this.startView)
        }

        Start.hideMainView = function hideMainView()
        {
            Laya.mainView.visible = true;
            Laya.Dialog.manager.close(this.startView);
        }

        return Start;
    }());
    Mole.Start = Start;
})(Mole || (Mole = {}));