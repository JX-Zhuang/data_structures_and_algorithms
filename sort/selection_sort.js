//1.选择数组中最小的项
//2.最小的项与数组的第一项交换位置
function selectionSort(arr) {
    // var l = arr.length,
    //     temp;
    // for (var i = 0; i < l; i++) {
    //     var minIndex = i;
    //     //找最小值
    //     for (var j = i + 1; j < l; j++) {
    //         if (arr[j] < arr[minIndex]) {
    //             minIndex = j;
    //         }
    //     }
    //     temp = arr[i];
    //     arr[i] = arr[minIndex];
    //     arr[minIndex] = temp;
    // }
    // return arr;
    var l = arr.length,
    i = 0,temp,minIndex,j;
    for(i;i<l;i++){
        minIndex = i;
        for(j = i+1;j<l;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
compareOneArr.init(selectionSort);
