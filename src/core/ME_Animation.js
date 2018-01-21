/**
* name 序列帧动画
*/
function ME_Animation(url,frameFun,frameName,frameNum) {
    ME_Animation.super(this)
    this.url = url;
    this.frameName = frameName;
    this.frameNum = frameNum;
    this.frameFun = frameFun;
    this.rects = this.frameFun(this.frameName)
       
    var __proto = ME_Animation.prototype;

    __proto.init = function init(){
        this.state = "stop"
        this.count = 0
        this.textureArr = []
        console.log(this.rects)
        for (var j = 0; j < this.rects.length; j++) {
            var rect = this.rects[j]
            this.textureArr.push(createTexture(this.url,rect))
        }
        
        Laya.timer.frameLoop(8,this,this.playAni);

    }

    __proto.playAni = function playAni(){
        if (this.state == "play") {
            this.graphics.clear();
            this.graphics.drawTexture(this.textureArr[this.count])//,
            this.count++;
            if(this.count>=this.frameNum - 1){
                this.count = 0;
            }
        }else if(this.state == "dead"){
            this.graphics.clear();
            this.graphics.drawTexture(this.textureArr[this.frameNum - 1])//,
            this.count++;
            if(this.count>=this.frameNum){
                this.count = 0;
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
        this.state = "dead"
        var ani = Mole.VertigoStar.createStarAnimition();
        this.addChild(ani);  
    }

    __proto.destory = function destory(){
        Laya.timer.clearAll(this);
        this.graphics.clear();
    }
    this.init()
}

Laya.class(ME_Animation,'ME.ME_Animation',Laya.Sprite);
