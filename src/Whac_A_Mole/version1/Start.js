/**
* name 
*/
var Mole;
function StartView()
{
    /**
     * 地鼠初始化x轴位置
     */
    this.MouseX = [
                    [132,323,516],
                    [95,315,510],
                    [80,306,524]
    ];
    /**
     * 地鼠初始化y轴位置
     */
    this.MouseY = [174,253,345];
    //存在矩阵,表示在那个坑存在地鼠
    this.existMatrix=[
                        [0,0,0],
                        [0,0,0],
                        [0,0,0]
    ];
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

    __proto.randomCreateMouse = function randomCreateMouse(){
        var createNum = Math.floor(Math.random() * 2 + 1);
		 for(var i=1;i<=createNum;i++){
		     var a = Math.floor(Math.random() * 3);
			 var b = Math.floor(Math.random() * 3);
			 if(this.existMatrix[a][b]==1){  // 存在地鼠，不产生地鼠
			    //  i--;
			 }else{
			    this.existMatrix[a][b]=1;    //设置已存在地鼠
				var k = Math.floor(Math.random() * 5 + 1);
                var ani = new Mouse(this.mouseUrl,getMouseFrames,"mouse" + k,4)
                var posX = this.MouseX[a][b]
                var posY = this.MouseY[a]
                ani.play() 
                console.log("a:",a,"b:",b,"k:",k)
                console.log("x:",posX,"posY:",posY)
                ani.pos(posX,posY)
                // this.mouseObgArr[a][b] = ani
                this["mouseView" + a].addChild(ani)
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
        //         var ani = new ME_Animation(this.mouseUrl,getMouseFrames,"mouse" + k,4)
        //         var posX = this.MouseX[a][b]
        //         var posY = this.MouseY[a]
        //         ani.play() 
        //         console.log("a:",a,"b:",b,"k:",k)
        //         console.log("x:",posX,"posY:",posY)
        //         ani.pos(posX,posY)
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

    Laya.timer.frameOnce(50,this,stopFun)
    function stopFun(){
        this.randomCreateMouse()
        // for (var index = 0; index < cacheArr.length; index++) {
        //     var element = cacheArr[index];
        //     element.dead()
        // }
    }

    function destory(){
        for (var index = 0; index < cacheArr.length; index++) {
            var element = cacheArr[index];
            element.destory()
        }  
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