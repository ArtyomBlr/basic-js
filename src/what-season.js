module.exports = function getSeason(/* date */) {
  throw 'Not implemented';
  // remove line with error and write your code here
    if(!date){
        return 'Unable to determine the time of year!';
    }

    let month = date.getUTCMonth();
    if(month == 11 || month < 2){
        return 'winter';
    } else if(month <= 4 && month >= 2){
        return 'spring';
    } else if(month <= 7 && month >= 5){
        return 'summer';
    } else if(month <= 10 && month >= 8){
        return 'autumn';
    }
  
};
