'use strict';

if (typeof window == 'undefined') {
  window = getApp();
}
var Hoo = window.Hoo || {};

Hoo.define('Hoo.util.Array', {
  statics: {
    /**
     * 删除数组对应index位置的元素并返回新的数组
     */
    remove: function remove(array, index) {
      array.splice(index, 1);
    },
    removeObject: function removeObject(array, obj) {},
    each: function each(array, callback, scope) {
      for (var i = 0, len = array.length; i < len; i++) {
        var res = callback.call(scope || this, i, array[i]);
        if (typeof res != 'undefined' && res) {
          break;
        }
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvby51dGlsLmFycmF5LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdldEFwcCIsIkhvbyIsImRlZmluZSIsInN0YXRpY3MiLCJyZW1vdmUiLCJhcnJheSIsImluZGV4Iiwic3BsaWNlIiwicmVtb3ZlT2JqZWN0Iiwib2JqIiwiZWFjaCIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwibGVuIiwibGVuZ3RoIiwicmVzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU9BLE1BQVAsSUFBaUIsV0FBckIsRUFBa0M7QUFBRUEsV0FBU0MsUUFBVDtBQUFvQjtBQUN4RCxJQUFJQyxNQUFNRixPQUFPRSxHQUFQLElBQWMsRUFBeEI7O0FBRUFBLElBQUlDLE1BQUosQ0FBVyxnQkFBWCxFQUE2QjtBQUMzQkMsV0FBUztBQUNQOzs7QUFHQUMsWUFBUyxnQkFBU0MsS0FBVCxFQUFlQyxLQUFmLEVBQXFCO0FBQzNCRCxZQUFNRSxNQUFOLENBQWFELEtBQWIsRUFBb0IsQ0FBcEI7QUFDRixLQU5NO0FBT1BFLGtCQUFlLHNCQUFTSCxLQUFULEVBQWVJLEdBQWYsRUFBbUIsQ0FFakMsQ0FUTTtBQVVQQyxVQUFPLGNBQVNMLEtBQVQsRUFBZU0sUUFBZixFQUF3QkMsS0FBeEIsRUFBOEI7QUFDbkMsV0FBSSxJQUFJQyxJQUFFLENBQU4sRUFBUUMsTUFBTVQsTUFBTVUsTUFBeEIsRUFBK0JGLElBQUVDLEdBQWpDLEVBQXFDRCxHQUFyQyxFQUF5QztBQUN2QyxZQUFJRyxNQUFPTCxTQUFTTSxJQUFULENBQWNMLFNBQU8sSUFBckIsRUFBMEJDLENBQTFCLEVBQTRCUixNQUFNUSxDQUFOLENBQTVCLENBQVg7QUFDQSxZQUFJLE9BQU9HLEdBQVAsSUFBYyxXQUFkLElBQTZCQSxHQUFqQyxFQUFxQztBQUFFO0FBQVE7QUFDaEQ7QUFDRjtBQWZNO0FBRGtCLENBQTdCIiwiZmlsZSI6Imhvby51dGlsLmFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgd2luZG93ID0gZ2V0QXBwKCk7IH1cclxudmFyIEhvbyA9IHdpbmRvdy5Ib28gfHwge307XHJcblxyXG5Ib28uZGVmaW5lKCdIb28udXRpbC5BcnJheScsIHtcclxuICBzdGF0aWNzOiB7XHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOaVsOe7hOWvueW6lGluZGV45L2N572u55qE5YWD57Sg5bm26L+U5Zue5paw55qE5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZSA6IGZ1bmN0aW9uKGFycmF5LGluZGV4KXtcclxuICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlT2JqZWN0IDogZnVuY3Rpb24oYXJyYXksb2JqKXtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgZWFjaCA6IGZ1bmN0aW9uKGFycmF5LGNhbGxiYWNrLHNjb3BlKXtcclxuICAgICAgZm9yKHZhciBpPTAsbGVuID0gYXJyYXkubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgICAgdmFyIHJlcyA9ICBjYWxsYmFjay5jYWxsKHNjb3BlfHx0aGlzLGksYXJyYXlbaV0pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzICE9ICd1bmRlZmluZWQnICYmIHJlcyl7IGJyZWFrOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==