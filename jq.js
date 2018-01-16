/*Created by Mr.袁 on 2017/11/27.*/
function YMquery(obj) {
    this.obj = document.querySelectorAll(obj);
}
function $(obj) {
    return new YMquery(obj)
}
YMquery.fn = YMquery.prototype = {
    css: function (attr, value) {
        if (arguments.length == 2) {//获取传入的参数个数
            for (var i = 0; i < this.obj.length; i++) {
                this.obj[i].style[attr] = value;
            }
            return this
        } else {
            if (typeof attr == "string") {
                return getstyle(this.obj, attr)
            } else {
                for (var i = 0; i < this.obj.length; i++) {
                    for (var j in attr) {
                        this.obj[i].style[j] = attr[j];
                    }
                }
                return this
            }
        }
    },
    html: function (attr) {
        for (var i = 0; i < this.obj.length; i++) {
            if (arguments.length == 1) {
                this.obj[i].innerHTML = attr
            } else {
                this.obj[i]=this.obj[i]
            }
        }
    }
};
function getstyle(obj, attr) {
    return obj.currentStyle == true ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]
}