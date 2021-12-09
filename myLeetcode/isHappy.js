/**
 * @param {number} n
 * @return {boolean}
 */
// 方法一
 var isHappy = function(n) {
    //取出数字的每一位
    function handleNum(n){
        let nums = [];
        while (n > 0) {
            nums.push(Math.floor(n % 10))
            n = Math.floor(n / 10)
        }
        return nums;
        //return n.toString().split("")
    }

    var resultArr = [];//保存每次的结果
    while (true) {
        const nums = handleNum(n);
        let sum = 0; //求和结果
        nums.map(item => Math.pow(item, 2)).forEach(v => sum += v);
        //sum = nums.reduce((a,b)=> a + Math.pow(item, 2) ,0)
        //是快乐数
        if (sum === 1) {
            return true;
        }
        //有重复结果
        if (resultArr.indexOf(sum) != -1) {
            return false;
        }
        resultArr.push(sum);
        n = sum;
    }
    
    // resultArr = new Set();
    // while (true) {
    //     const nums = handleNum(n);
    //     let sum = 0;
    //     nums.map(item => Math.pow(item, 2)).forEach(v => sum += v);
    //     if (sum === 1) {
    //         return true;
    //     }
    //     if (resultArr.has(sum)) {
    //         return false;
    //     }
    //     resultArr.add(sum);
    //     n = sum;
    // }
    //...map同理
};
// 方法二
var isHappy = function(n) {
    //下一个数字
    function nextN(n){
        return n
        .toString()
        .split("")
        .map((i) => i ** 2)
        .reduce((a, b) => a + b);
    }
    
  let slow = n;
  let fast = nextN(n);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};
