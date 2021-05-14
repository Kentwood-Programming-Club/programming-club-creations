function get_hour_from_num(num) {
  var hourNum = num + 1; // add 1 to make it display hour 1-12 instead of 0-11
  var text = hourNum; //store the new number in another variable
  if (hourNum >= 12) {
    // check if our number is greater than or equal to 12
    // if so, we put some text onto the end of it so send it to the return statement.
    text = hourNum - 11 + "&nbsp;PM";
    /* we are subtracting 11 because '0' 
    is a number too, so 11 is the 12th number*/
  }
  /* i know i know im not using an else, 
  but this makes it a little easier to read
  and also makes it so that 'undefined'
  or 'null' cannot show up on screen */
  if (hourNum < 12) {
    text = hourNum + "&nbsp;AM";
    /* im using '&nbsp;' instead of ' ' becasue
     i hoestly dont like the way a hanging 
     space looks at the beginning or end 
     of a string, but its up to you really.*/
  }
  return text;
}

/* still needs some work to omit the '13 PM' 
at the bottom, but fonctionslly works and makes sense now */
