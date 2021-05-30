

//BubbleSort Function:
const bubbleSort = function(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j<= array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tempPosition = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempPosition
      };
    };
  }
  console.log(array);
  return array;
  };

bubbleSort([6,7,8,3,4,8])

module.exports = bubbleSort;


// //solution
//
// function bubbleSort(array) {
//
//   let needToIterate = true;
//
//   let end = array.length - 1;
//
//   while(needToIterate === true){
//     needToIterate = false;
//
//     for(let i = 0; i < end; i++){
//
//       if(array[i] > array[i+1]){
//     [ array[i], array[i+1] ] = [ array[i+1], array[i] ]
//         needToIterate = true;
//       }
//     }
//     end--;
//   }
//     return array;
// }
//
// module.exports = bubbleSort;
