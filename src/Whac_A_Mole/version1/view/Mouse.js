/*
* 地鼠类
*/

function Mouse(url,frameFun,k,a,b,existMatrix) {
    Mouse.super(this)
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
    this.MouseY = [0,0,0];
    this.Heights = [106,106,106,120,130]
    this.OffH = [0,0,0,-10,-25]
    var __proto = Mouse.prototype;
    this.url = url;
    this.frameName = "mouse" + k;
    // this.frameNum = frameNum;
    this.frameFun = frameFun;
    this.existMatrix = existMatrix;
    this.a = a;
    this.b = b;
    this.k = k;
    var posX = this.MouseX[a][b]
    var posY = this.MouseY[a] + this.OffH[k]
    /**
    * 精灵状态， show和hide，show就包括normal和dead
    */
    this.up=1; //向上飘
    this.duration=3;//刷新一次向上飘的像素
    this.disppearDuration=45;//'dead'状态下消失计数
    this.x = posX
    /**
     * 最终的y位置,因为为了实现地鼠向上冒的效果
     */
    this.finalY = posY;
    this.finalHeight=this.Heights[k];
    this.y = this.finalY+this.finalHeight;
    this.width = 131
    this.height=150;
    this.size(this.width,this.height)

    this.starAnim = null
    this.anim = new ME_Animation(url,frameFun,this.frameName)
    this.addChild(this.anim)
    __proto.init = function init(){
        this.state = "stop"
        console.log("mouse create")
        // this.size(100,100);
        Laya.timer.frameLoop(2,this,this.playAni);
    }

    __proto.playAni = function playAni(){
        // console.log("playAni",this.a,this.b)
        if (this.state == "play") {
            if(this.up==1&&this.y>this.finalY){
                this.y-=this.duration; 
                // this.height+=this.duration;
            }else{
                this.up=0;
                this.y+=this.duration;
                // this.height-=this.duration;
            }
            if(this.y > this.finalY+this.finalHeight){        
                this.destory()
            }else{
                this.anim.update();
                this.anim.draw();
            }

        }else if(this.state == "dead"){
            this.anim.dead()
            this.disppearDuration--;
            console.log("disppearDuration",this.disppearDuration)
            if(this.disppearDuration<=0){
                this.destory()
            }
        }
    }
    
    __proto.play = function play(){
        this.state = "play"
    }

    __proto.stop = function stop(){
        this.state = "stop"
        Laya.timer.clear(this,this.playAni)
    }

    __proto.dead = function dead(){
        if (this.state == "dead"){
            return;
        }
        this.state = "dead"
        this.starAnim = Mole.VertigoStar.createStarAnimition();
        this.addChild(this.starAnim);  
    }

    __proto.destory = function destory(){
        Laya.timer.clearAll(this);
        this.anim.stop();
        this.existMatrix[this.a][this.b] = 0
        // if (this.parent){
        //     this.parent.removeChild(this)
        // }
        if(this.starAnim){
            // this.starAnim.set
            this.removeChild(this.starAnim)
        }
        // alert("remove")
    }
    this.init()
}
Laya.class(Mouse,'Mole.Mouse',Laya.View);