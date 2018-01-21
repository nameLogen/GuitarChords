/*
* name;
*/
var AnimationUtils = (function () {
    function AnimationUtils() {
    }
    return AnimationUtils;
}());

function createTexture(resUrl,rect){
    var texture = Laya.loader.getRes(resUrl)
    var texEnd = Laya.Texture.create(texture,rect.x,rect.y,rect.w,rect.h);
    return texEnd
}