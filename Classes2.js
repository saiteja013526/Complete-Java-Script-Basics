import parentclass from './Classes.js';

class childclass extends parentclass {
  childclassfunction(){
    console.log("this is child class");
  }
}
const c = new childclass();
c.childclassfunction();
c.parentFunction();
