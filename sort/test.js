//生成测试数组
var creatArr = function(){
  var length = arguments[2]||100,
      arr = [],
      min = arguments[0]||0,
      max = arguments[1]||100;
  for(var i = 0;i<length;i++){
    arr[i] = Math.floor(Math.random()*(max - min)+min);
  }
  return arr ;
};

//返回函数执行时间
var getTime = function(foo,argus){
  var start,end;
  start = new Date().getTime();
  foo(argus);
  end = new Date().getTime();
  return end-start;
};

//测试排序后的数组是否正确
var isSort = function(arr){
  for(var i = 0,l = arr.length-1;i<l;i++){
    if(arr[i]>arr[i+1]){
      return false;
    }
  }
  return true;
};

//测试排序算法
var compareOneArr = {
  arr:creatArr(10,10000,10000),
  init:function(fun){
    var arrCopy = this.arr.slice(0);
    console.log(arrCopy);
    console.log("num:"+10000,"time:"+getTime(fun,arrCopy));
    console.log(isSort(arrCopy));
    console.log(arrCopy);
  }
};
var compareManyArr = function(fun,total){
  total = total||20;
  for(var n = 1;n<=total;n++){
    var num = n*10000;
    var arr = creatArr(10,100000,num);
    console.log("num:"+num,"time:"+getTime(fun,arr));
    console.log(isSort(arr));
  }
};
