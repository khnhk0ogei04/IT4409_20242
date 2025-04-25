let input = "";
process.stdin.on("data", function(chunk){
  input += chunk;
});

process.stdin.on("end", function(){
  input = input.trim();
  
});

function decodeString(str){
  if (!str.match(/^(\d+[A-Za-z])+$/)){
    return "Dãy nhập vào không đúng khuôn dạng";
  }
  let decodedString = "";
  let i = 0;
  while (i < str.length){
    let count = "";
    while (i < str.length && /\d/.test(str[i])){
      count += str[i];
      i++;
    }
    if (i >= str.length || !/[A-Za-z]/.test(str[i])){
      return "Dãy nhập vào không đúng khuôn dạng";
    }
    let char = str[i];
    i++;
    decodedString += char.repeat(parseInt(count));
  }
  return decodedString;
}