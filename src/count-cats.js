module.exports = function countCats(backyard) {
  throw 'Not implemented';
  var a = [];
  backyard.forEach(function(index, array){
    if(array[index] !== '^^') {
      return 0;
    } else if(array[index] === '^^') {
      a.push(array[index]);
      return a.length;
    };
  });
    
  };

