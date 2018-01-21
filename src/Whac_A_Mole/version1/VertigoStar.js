/**
* name 
*/
var Mole;
(function (Mole) {
    var VertigoStar = (function () {
        function VertigoStar() {
        }

        VertigoStar.createStarAnimition = function createStarAnimition()
        {
            this.roleAni = new Laya.Animation();
            // //添加到舞台
            // Laya.stage.addChild(this.roleAni);
            //创建动画模板dizziness
            Laya.Animation.createFrames(aniUrls("f-",12),"star");
            //循环播放动画
            this.roleAni.play(0,true,"star");    

            return this.roleAni
        }
        /**
         * 创建一组动画的url数组（美术资源地址数组）
         * @param aniName  动作的名称，用于生成url
         * @param length   动画最后一帧的索引值，
         */        
        function aniUrls(aniName,length)
        {
            var urls=[];
            for(var i=0;i<length;i++)
            {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push("comp/whac_a_mole/version1/star/" + aniName + i + ".png")
                urls.push("comp/whac_a_mole/version1/star/" + aniName + i + ".png")
            }
            return urls;
        }
            return VertigoStar;
        }());

    Mole.VertigoStar = VertigoStar;
})(Mole || (Mole = {}));