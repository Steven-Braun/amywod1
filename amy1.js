/**
 * amywod1
 * Created by steven on 9/21/2016.
 */
const test1 = [1, 3, 5, 6];

function  position(data, target) {
  let index = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
      return "The position of the target is at " + i;
    }
    else
      if (target === 0) {
        return "The position of target is at " + target;
      }
      else
        if (data[i] > target) {
          index = i
          return "The target should be at " + i;
        }
        else if (target > data[data.length-1]){
          return "The target is at "+ data.length;
        }
  }
}

console.log(position(test1, 5));
console.log(position(test1,2));
console.log(position(test1,7));
console.log(position(test1,0));