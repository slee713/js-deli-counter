function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  }

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else if (katzDeliLine.length>0){
      var string = 'The line is currently:'
      for (let i=0; i<katzDeliLine.length; i++){
        if (i===katzDeliLine.length - 1){
         string=  string + ` ${i+1}. ${katzDeliLine[i]}`
       } else {
         string=  string + ` ${i+1}. ${katzDeliLine[i]}`
       }
     }
   }
  return string
}

function acurrentLine(katzDeliLine){
  let result;
  const message = "The line is currently"

  if (katzDeliLine.length === 0){
    result = message + " empty."
  } else {
      result = message + ":";

      for (let i = 0; i < katzDeliLine.length; i++) {
        const person = ` ${i + 1}. ${katzDeliLine[i]}`;
        result += (i === katzDeliLine.length - 1) ? person : person + ",";
     }
   }
  return result;
}
