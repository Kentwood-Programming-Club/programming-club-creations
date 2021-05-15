function get_hour_from_num(num) {
  var hourNum = num; // deleted '+ 1' and make 0 to 12 AM
  var text = hourNum; //store the new number in another variable
  if (hourNum < 12) {
    text = hourNum + "&nbsp;AM";
  }

  if (hourNum == 12){
    text = hourNum + "&nbsp;PM";
  }

  if (hourNum > 12) {
    text = hourNum - 12 + "&nbsp;PM";
  }

  if (hourNum == 0) { // if hourNum is 0, 
    text = hourNum + 12 + "&nbsp;AM"; // add 12 with AM so that comes with 12 AM. I don't know if I have to do some return 0 thing. Anyway, it works. 
  }
  return text;
}

// 13 PM issue resolved
// add(changed) 12 AM so the day start with 12 AM, not 1 AM.
// I erased all //'s so it seem better. (Of course I understand that all) I wrote some :)