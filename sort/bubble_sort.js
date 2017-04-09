function bubbleSort(arr) {
    var l = arr.length,
        temp;
    for (var i = 0; i < l - 1; i++) {
        for (var j = 0; j < l - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //交换
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//优化1.
function bubbleSortOptimize1(arr) {
    var l = arr.length,
        temp, swapped;
    // do {
    //     swapped = false;
    //     for (var i = 1; i < l; i++) {
    //         if (arr[i - 1] > arr[i]) {
    //             //交换
    //             temp = arr[i - 1];
    //             arr[i - 1] = arr[i];
    //             arr[i] = temp;
    //             swapped = true;
    //         }
    //     }
    //     l--;
    // } while (swapped);
    for(;;){
        swapped = false;
        for (var i = 1; i < l; i++) {
            if (arr[i - 1] > arr[i]) {
                //交换
                temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        if(!swapped){
          break;
        }
        l--;
    }
}
// compareOneArr.init(bubbleSort);
// compareOneArr.init(bubbleSortOptimize1);
