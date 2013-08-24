/**
 * Handles debouncing of events via requestAnimationFrame
 * @see http://www.html5rocks.com/en/tutorials/speed/animations/
 * @param {Function} callback The callback to handle whichever event
 */
function Debouncer (callback) {
  this.callback = callback;
  this.ticking = false;
}
Debouncer.prototype = {
  constructor : Debouncer,

  /**
   * dispatches the event to the supplied callback
   */
  update : function() {
    this.callback && this.callback();
    this.ticking = false;
  },

  /**
   * ensures events don't get stacked
   */
  requestTick : function() {
    if(!this.ticking) {
      requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  },

  /**
   * Attach this as the event listeners
   */
  handleEvent : function() {
    this.update();
    this.requestTick();
  }
};