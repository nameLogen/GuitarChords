/*
* 地鼠类
*/

function Mouse(url,frameFun,frameName,frameNum) {
    this.url = url;
    this.frameName = frameName;
    this.frameNum = frameNum;
    this.frameFun = frameFun;
    Mouse.__super.call(this,url,frameFun,frameName,frameNum);

}
Laya.class(Mouse,'Mole.Mouse',ME_Animation);