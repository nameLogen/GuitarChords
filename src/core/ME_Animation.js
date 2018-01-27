/**
* name 序列帧动画
*/
function ME_Animation(imageName,getFrameMethod,framesName) {
    ME_Animation.super(this)
    var __proto = ME_Animation.prototype

    /**
     * 帧列表
     * @format {
     *     x: 0,
     *     y: 0,
     *     duration: 0,
     *     collRect: [[left, top, width, height]]
     * }
     */
    this.frames = [];
    /**
     * 循环播放
     */
    // this.loop = true;
    /**
     * 播放倍速
     */
    // this.speed = 1;
    /**
     * @read only
     * 播放状态
     */
    // this.playing = false;
    /**
     * @read only
     * 正在播放的帧索引(第一帧从0开始)
     */
    this.currentFrameIndex = 0;
    /**
     * @read only
     * 正在播放的帧对象
     */
    this.currentFrame = null;
    /**
     * @private
     * 当前帧已播放次数
     */
    this.currentPlayeTimes = 0; //在Animation内部自定义这样，是为了让对象自控制自己的帧变换，间接影响这个数值快慢就是刷新canvas速率的快慢
    /**
     * 多少次界面刷新更换一帧
     */
    this.maxPlayTimes = 4 ;    
    this.frames = getFrameMethod(framesName);   
    this.imageName = imageName
    this.textureArr = []
    for (var j = 0; j < this.frames.length; j++) {
        var rect = this.frames[j];
        this.textureArr.push(createTexture(this.imageName,rect))
    }
    this.currentFrameIndex = 0;
    this.currentFramePlayed = 0;
    /**
     * normal状态更新
     */
	 __proto.update = function(){
        if(this.currentPlayeTimes>=this.maxPlayTimes){
            if(this.currentFrameIndex >=  this.frames.length-2){ 
                this.currentFrameIndex=0;
            }else{			  
                this.currentFrameIndex++;
            }
            var rect = this.frames[this.currentFrameIndex]
            // rect.h = h
            this.currentFrame = this.textureArr[this.currentFrameIndex]//createTexture(this.imageName,rect)
            this.currentPlayeTimes=0;
        }else{
            this.currentPlayeTimes++;    
        }
    }
	   
    __proto.draw = function(){
        this.graphics.clear();
        this.graphics.drawTexture(this.currentFrame);
    }

    __proto.dead = function(){
        this.currentFrame = this.textureArr[this.currentFrameIndex]//createTexture(this.imageName,rect)
        this.draw()
    }

    __proto.stop = function(h){
        this.graphics.clear();
    }

}

Laya.class(ME_Animation,'ME.ME_Animation',Laya.Sprite);
