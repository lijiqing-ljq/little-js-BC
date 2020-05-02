(function() {
    let timerId = null;
    function linearAnimation(ele, target) {
        clearInterval(timerId);
        timerId = setInterval(function () {
            // 1.拿到元素当前的位置
            let begin = parseInt(ele.style.marginLeft) || 0;
            // 2.定义变量记录步长
            //         0  -  500 = -500    13
            //         500 -  200 = 300    -13
            let step = (begin - target) > 0 ? -13 : 13;
            // 3.计算新的位置
            begin += step;
            console.log(Math.abs(target - begin), Math.abs(step));
            if(Math.abs(target - begin) <= Math.abs(step)){
                clearInterval(timerId);
                begin = target;
            }

            // 4.重新设置元素的位置
            ele.style.marginLeft = begin + "px";
        }, 100);
    }
    function easeAnimation(ele, target) {
        clearInterval(timerId);
        timerId = setInterval(function () {
            // 1.拿到元素当前的位置
            let begin = parseInt(ele.style.marginLeft) || 0;
            // 2.定义变量记录步长
            // 公式: (结束位置 - 开始位置) * 缓动系数(0 ~1)
            let step = (target - begin) * 0.3;
            console.log(step);
            // 3.计算新的位置
            begin += step;
            if(Math.abs(Math.floor(step)) <= 1){
                clearInterval(timerId);
                begin = target;
            }
            // 4.重新设置元素的位置
            ele.style.marginLeft = begin + "px";
        }, 100);
    }

    // 将函数绑定到window对象上, 这样全局就可以使用了
    window.linearAnimation = linearAnimation;
    window.easeAnimation = easeAnimation;
})();