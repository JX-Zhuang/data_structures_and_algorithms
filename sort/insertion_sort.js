//
function insertionSort(arr) {
    // var l = arr.length,
    //     temp;
    // for (var i = 1; i < l; i++) {
    //     //寻找元素arr[i]合适的插入位置
    //     for (var j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
    //         temp = arr[j];
    //         arr[j] = arr[j - 1];
    //         arr[j - 1] = temp;
    //     }
    // }
    // return arr;
    var l = arr.length,
          i = 1,j,temp;
    for(i;i<l;i++){
        for(j = i;j>0&&arr[j]<arr[j-1];j--){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    return arr;
}
//优化插入排序，复制当前项，最后进行一次赋值
function insertionSortOptimize(arr) {
    // var l = arr.length,
    //     temp;
    // for (var i = 1; i < l; i++) {
    //     var current = arr[i];
    //     for (var j = i; j > 0 && current < arr[j - 1]; j--) {
    //         arr[j] = arr[j - 1];
    //     }
    //     arr[j] = current;
    // }
    // return arr;
    var l = arr.length,
         i = 1,j,current;
   for(i;i<l;i++){
       current = arr[i];
       for(j=i;j>0&&current<arr[j-1];j--){
            arr[j] = arr[j-1];
       }
       arr[j] = current;
   }
   return arr;
}
compareOneArr.init(insertionSort);
compareOneArr.init(insertionSortOptimize);
