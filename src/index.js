module.exports = function check(str, bracketsConfig) {
  const open = bracketsConfig.map((el)=> {
    return el[0];
  });
  const close = bracketsConfig.map((el)=> {
    return el[1];
  });

  let stack = [];
  debugger
  for (let i=0; i<str.length; i++) {
    console.log('stack.indexOf(str[i]) > 0',stack.indexOf(str[i]) > 0);
    console.log('close[open.indexOf(str[i])]',close[open.indexOf(str[i])]);
    console.log('str[i]',str[i]);
    if (open.includes(str[i]) && stack.indexOf(str[i]) < 0) {
      stack.push(str[i]);
    } else if (open.includes(str[i]) &&  close[open.indexOf(str[i])] != str[i]) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let lastElement = stack[stack.length - 1];

      if ( open[close.indexOf(str[i])] == lastElement) {
        stack.pop();
      } else {return false};
    }
    
  }
  
  return stack.length === 0;
}
