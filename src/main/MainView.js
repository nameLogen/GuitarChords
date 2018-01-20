/*
* name;
*/
var Label = Laya.Label;
var Text = Laya.Text;
var MainView = (function () {
    function MainView() {
        var Event = laya.events.Event;
        // createSampleText();
        MainView.super(this);
        this.btn.on(Event.CLICK, this, onBtnClick);
        var __proto=MainView.prototype;
        function onBtnClick()
        {
            //手动控制组件属性
            // var text = createSampleText()
            this.createLabel("#0080FF", "#00FFFF").pos(290, 150);
            // this.view.addChild(text)
        }
        this.createSampleText = function createSampleText()
        {
            var text = new Text();``
            text.overflow = Text.HIDDEN;

            text.color = "#FFFFFF";
            text.font = "Impact";
            text.fontSize = 20;
            text.borderColor = "#FFFF00";
            text.x = 80;

            Laya.stage.addChild(text);
            text.text = "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL\n" + "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL\n" + "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL";

            return text;
        }
__proto.createLabel = function createLabel(color, strokeColor)
        {
            const STROKE_WIDTH = 4;

            var label = new Label();
            label.font = "Microsoft YaHei";
            label.text = "SAMPLE DEMO";
            label.fontSize = 30;
            label.color = color;

            if (strokeColor)
            {
                label.stroke = STROKE_WIDTH;
                label.strokeColor = strokeColor;
            }

            Laya.stage.addChild(label);

            return label;
        }
        
    }
    
    return MainView;
}());

