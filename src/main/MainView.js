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
        this.openMoleBtn.on(Event.CLICK, this, onOpenMoleBtnClick);
        var __proto = MainView.prototype
        function onOpenMoleBtnClick()
        {
            this.visible = false;
            Mole.Start.showStartView(this)
        }

    }
    
    return MainView;
}());

