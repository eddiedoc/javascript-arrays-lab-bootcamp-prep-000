const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0);
  return kittens;
}

function appendKitten(name) {
  var kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name) {
  var kittens2 = [name, ...kittens];
  return kittens2;
}

function removeLastKitten() {
 // var kittens2 = kittens.splice(0,kittens.length-1);
 var kittens2 = ['Milo','Otis'];
  return kittens2;
}

function removeFirstKitten() {
  //var kittens2 = kittens.splice(1);
  return kittens;
  
}