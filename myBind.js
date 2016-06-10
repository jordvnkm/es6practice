Function.prototype.myBind = function(context) {
  // let that = this;
  return () => {
    // console.log('context : ' + context);
    // console.log('this : ' + this);
    this.apply(context)
  }
}

function Lamp() {
   this.name = "a lamp";
}

const turnOn = function() {
  console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
