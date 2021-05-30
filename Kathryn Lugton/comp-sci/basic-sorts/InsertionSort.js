

//InsertionSort Function:
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {

      let originalIndex = array[i];

      let newIndex = i-1;
        while ((newIndex > -1) && (originalIndex < array[newIndex])) {
          array[newIndex+1] = array[newIndex];
          newIndex--;
        }
        array[newIndex+1] = originalIndex;
  };
  console.log(array);
  return array;
};
insertionSort([20, 30, 11, 7, 2,5,1,6,4])
module.exports = insertionSort;
