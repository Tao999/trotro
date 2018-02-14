var Renderer = function () {
  var self = this
    , requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame
  
  this.queue = {}
  
  requestAnimationFrame(function () {
    self.onFrame()
  })

}

var inSubviews = function (parent, child) {
  return !!parent.subviews[child.cid]
}

var recurseSubviews = function (view, target) {
  if (inSubviews(view, target)) return true
  for (var i in view.subviews) {
    if (inSubviews(view.subviews[i], target)) return true
    if (recurseSubviews(view.subviews[i], target)) return true
  }
  return false
}

Renderer.prototype.getViewsAtLevel = function (level) {
  // get all the views at a certain "level"
  // if this view has no parent, it is level zero
  // if it has 2 parents, it is level 2, etc.
}

Renderer.prototype.getDepth = function () {
  // find the level of the view with the most parents
}

Renderer.prototype.willRenderParent = function (view) {
  for (var i in this.queue) {
    if (recurseSubviews(this.queue[i], view)) return true
  }
  return false
}

Renderer.prototype.render = function (view) {
  this.queue[view.cid] = view
}

Renderer.prototype.onFrame = function () {
  
  // go through levels from zero to last
  // remove their children from the render queue
  // render them, remove them from the queue
  // then render the next level (if any)
  
}