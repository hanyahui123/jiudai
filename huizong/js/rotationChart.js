//左右轮播  透明度（显示隐藏）  上下轮播
var oBannerBox = document.getElementById("bannerBox");
var oBannerList = document.getElementById("bannerList");
var aList = oBannerList.children;
var oNum = document.getElementById("nums");
var aNums = oNum.children;
aNums[0].className = "hover";
var perWidth = aList[0].offsetWidth;
var oBtn = document.getElementById("btns");
var oPrev = oBtn.children[0];
var oNext = oBtn.children[1];
oBannerList.style.width = perWidth * aList.length + "px";
var i = 0;
var timer = setInterval(function () {
    move();
}, 2000);

//在第一轮,一触发即为第二张图片了
function move() {
    i++;
    //123 123 临界值
    if (i == aList.length) {
        oBannerList.style.left = 0;
        i = 1;
    }
    //即看着控制台为4 其实i已经为1了
    //且除了第一回合 外的回合,是以下方式

    //将图片重置位置 和 向左移动一个图片的距离同时进行
    //因为此时,又将1放至尾部,所以不会出现闪动的效果

    //321 321 临界值
    if (i == -1) {
        oBannerList.style.left = -perWidth * (aList.length - 1) + "px";
        //保证从左边推入 若去掉则为从右边推入
        //即使第六张图直接跳至第一张图的位置!
        //由此可知,这个第六张图的作用,在正向 和 逆向端点处的作用
        //而无缝轮播的关键点就在于此
        //其实,此案例的思想,为对于图片外的盒子移动的距离的把控
        //以使得,对应的操作 ，对应的图片出现在 对应的 显示窗口
        //其中 ,最关键的点在于,首尾 转换的过程
        i = aList.length - 2;
        //返回第三张索引
    }

    //控制角标，让其和展示图片对应
    //先请后加
    for (var j = 0; j < aNums.length; j++) {
        aNums[j].className = "";
    }
    if (i == aNums.length) {
        //图片在最后一张（对应第一张）角标的特殊处理
        aNums[0].className = "hover";
    } else {

        aNums[i].className = "hover";
    }

    startMove(oBannerList, {
        "left": -perWidth * i
    });
    //轮播图特点之一,宽度相同,和瀑布流特点相似

}

//鼠标移入轮播区域 清除定时器
oBannerBox.onmouseover = function () {
    clearInterval(timer);
    oPrev.style.display = "block";
    oNext.style.display = "block";
}
//移出开启
oBannerBox.onmouseout = function () {
    timer = setInterval(function () {
        move();
    }, 3000);
    oPrev.style.display = "none";
    oNext.style.display = "none";
}

//点击两个按钮
oNext.onclick = function () {
    move();
}
oPrev.onclick = function () {
    i -= 2; //i值变小，抵消move（）内部i++
    move();
}

//角标 鼠标移入到1，2，3那个数字上，展现对应的图片
//console.log(aNums.length);  3
for (let j = 0; j < aNums.length; j++) {
    aNums[j].onmouseover = function () {
        i = j - 1;
        //抵消move的加一动作
        console.log(i);
        move();
    }
}