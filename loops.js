function forLoop(array){
  var array = [...array, "I am 0 strange loops."]
  array.push("I am 1 strange loop.")
  for (let i = 2; i < 25; i++){
    array.push("I am "+i+" strange loops.")
  }
  return array
<<<<<<< HEAD
}//non-destructive!
=======
}
>>>>>>> 4d88f8bf3d27f9b76f3766217ddae97877d6df41
function whileLoop(countdown){
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'
}
function doWhileLoop(array){
<<<<<<< HEAD
  var i = 0

  function incrementVariable() {
    i = i + 1
    if (i<=4){
      return true
    }
    else{
      return false
    }
  }

  do {
    array.shift()
  } while (array.length > 0 && incrementVariable())
  return array
=======
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
    console.log("doo-bee-doo-bee-doo");
    ;
  } while (array.length);
>>>>>>> 4d88f8bf3d27f9b76f3766217ddae97877d6df41
}
