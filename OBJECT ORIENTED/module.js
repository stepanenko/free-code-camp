
// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

// We can group these mixins into a module as follows:
let motionModule = (function() {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log('Gliding...');
      }
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log('Flying...');
      }
    }
  }
})();

const bird = {
  name: "Johnny"
}

motionModule.flyMixin(bird);
bird.fly();