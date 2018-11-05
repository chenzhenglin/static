function $(id_) {
    var _oDom;
    if (id_.indexOf(".") === 0) {
        var _name = id_.substring(1);
        _oDom = document.getElementsByClassName(_name);
    } else if (id_.indexOf("#") === 0) {
        var _id = id_.substring(1);
        _oDom = document.getElementById(_id);
    }
    return _oDom;
}

var oAnimation = {
    mouseOver: function (dom_,cb_) {
        dom_.onmouseover = cb_;
    },
    mouseOut: function (dom_,cb_) {
        dom_.onmouseout = cb_;
    },
    addEventListener: function (dom1_, dom2_, left1_, left2_, animationName1_, animationName2_) {
        var _len_1 = dom1_.length;
        var _len_2 = dom2_.length;
        var _len = (_len_1 > _len_2) ? _len_2 : _len_1;
        for (var i = 0; i < _len; i++) {
            (function (i) {
                var _dom_1 = dom1_[i];
                var _dom_2 = dom2_[i];
                oAnimation.mouseOver(_dom_1, function () {
                    _dom_2.style.animationName = animationName1_;
                    _dom_2.style.animationDuration = "1s";
                    _dom_2.style.animationFillMode = "forwards";
                    _dom_2.style.left = left1_ + "px";
                });
                oAnimation.mouseOut(_dom_1, function () {
                    _dom_2.style.animationName = animationName2_;
                    _dom_2.style.animationDuration = "1s";
                    _dom_2.style.animationFillMode = "forwards";
                    _dom_2.style.left = left1_ + "px";
                });
            })(i);
        }
    }
};

var oTranslate = {

};

function init() {
    // 添加落焦动画 start
    var _itemDom1 = $(".item");
    var _imgDom1 = $(".item-img");
    oAnimation.addEventListener(_itemDom1, _imgDom1, 215, 210, "panToLeft", "panToRight");

    var _itemDom2 = $(".r-item");
    var _imgDom2 = $(".r-item-img");
    oAnimation.addEventListener(_itemDom2, _imgDom2, 0, -10, "rPanToLeft", "rPanToRight");
    // 添加落焦动画 end
    var _barLeftDom = $(".r-bar-left")[0];
    console.log(_barLeftDom);
    var _barRightDom = $(".r-bar-right")[0];
    var _rUl = $(".r-ul")[0];

    _barLeftDom.addEventListener('click',function(){
        var _rUl_left = getStyleByAttr(_rUl,"left");
        _rUl_left = _rUl_left.replace(/[px]/g,"");
        _rUl_left = parseInt(_rUl_left,10);
        console.log(_rUl_left);
        if(0 != _rUl_left){
            _rUl.style.left = (_rUl_left + 390)+"px";
        }
    },false);
    _barRightDom.addEventListener('click',function(){
        var _rUl_left = getStyleByAttr(_rUl,"left");
        _rUl_left = _rUl_left.replace(/[px]/g,"");
        _rUl_left = parseInt(_rUl_left,10);
        console.log(_rUl_left);
        _rUl.style.left = (_rUl_left - 390)+"px";
    },false);
}

function getStyleByAttr(ele_,attr_){
    if(ele_.currentStyle){//兼容ie
        return ele_.currentStyle[attr_];
    } else {
        return getComputedStyle(ele_,null)[attr_];
    }
}

window.onload = function () {
    init();
};
