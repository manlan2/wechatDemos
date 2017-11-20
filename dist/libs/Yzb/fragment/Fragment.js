'use strict';

//Fragment 碎片基类
var Hoo = require('./../../Hoo.all.js');
if (typeof window == 'undefined') {
  window = getApp();
}

Hoo.define('Yzb.fragment.Fragment', {
  extend: 'Hoo.Base',
  dfCfg: {
    tagName: '',
    model: '',
    page: null,
    options: {}
  },
  data: {},
  scroll: 0,
  init: function init(cfg) {
    this.call('init', arguments);

    var allowProperty = ['page', 'options', 'fragments', 'model'];

    for (var key in cfg || {}) {
      if (allowProperty.indexOf(key) >= 0) this.dfCfg[key] = cfg[key];
    }

    if (this.dfCfg.page == null) {
      throw '请按要求填入page参数.';
    }
  },

  onLoad: function onLoad(options) {
    //console.log('我曲线救国，可以调用父类方法了');
  },
  onShow: function onShow() {
    try {
      if (wx.pageScrollTo) wx.pageScrollTo({ scrollTop: this.scroll });
    } catch (e) {}
  },
  onHide: function onHide() {},

  onReload: function onReload() {},
  onLoadMore: function onLoadMore() {},
  onRefresh: function onRefresh() {},
  onPageScroll: function onPageScroll(params) {
    this.scroll = params.scrollTop;
  },
  //当前setData供对应Page使用
  setData: function setData(data) {
    this.dfCfg.page.setData(data);
  },
  setTagName: function setTagName(tagName) {
    this.dfCfg.tagName = tagName;
  },
  getTagName: function getTagName() {
    return this.dfCfg.tagName;
  }

});

module.exports = window.Yzb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZyYWdtZW50LmpzIl0sIm5hbWVzIjpbIkhvbyIsInJlcXVpcmUiLCJ3aW5kb3ciLCJnZXRBcHAiLCJkZWZpbmUiLCJleHRlbmQiLCJkZkNmZyIsInRhZ05hbWUiLCJtb2RlbCIsInBhZ2UiLCJvcHRpb25zIiwiZGF0YSIsInNjcm9sbCIsImluaXQiLCJjZmciLCJjYWxsIiwiYXJndW1lbnRzIiwiYWxsb3dQcm9wZXJ0eSIsImtleSIsImluZGV4T2YiLCJvbkxvYWQiLCJvblNob3ciLCJ3eCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImUiLCJvbkhpZGUiLCJvblJlbG9hZCIsIm9uTG9hZE1vcmUiLCJvblJlZnJlc2giLCJvblBhZ2VTY3JvbGwiLCJwYXJhbXMiLCJzZXREYXRhIiwic2V0VGFnTmFtZSIsImdldFRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiWXpiIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsTUFBTUMsUUFBUSxrQkFBUixDQUFWO0FBQ0EsSUFBRyxPQUFPQyxNQUFQLElBQWlCLFdBQXBCLEVBQWdDO0FBQUVBLFdBQVNDLFFBQVQ7QUFBb0I7O0FBRXRESCxJQUFJSSxNQUFKLENBQVcsdUJBQVgsRUFBbUM7QUFDL0JDLFVBQVEsVUFEdUI7QUFFL0JDLFNBQVE7QUFDTkMsYUFBUyxFQURIO0FBRU5DLFdBQVMsRUFGSDtBQUdOQyxVQUFNLElBSEE7QUFJTkMsYUFBUztBQUpILEdBRnVCO0FBUS9CQyxRQUFTLEVBUnNCO0FBUy9CQyxVQUFTLENBVHNCO0FBVS9CQyxRQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQixTQUFLQyxJQUFMLENBQVUsTUFBVixFQUFpQkMsU0FBakI7O0FBRUEsUUFBSUMsZ0JBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsV0FBcEIsRUFBZ0MsT0FBaEMsQ0FBcEI7O0FBRUEsU0FBSyxJQUFJQyxHQUFULElBQWlCSixPQUFPLEVBQXhCLEVBQTZCO0FBQzNCLFVBQUlHLGNBQWNFLE9BQWQsQ0FBc0JELEdBQXRCLEtBQThCLENBQWxDLEVBQXFDLEtBQUtaLEtBQUwsQ0FBV1ksR0FBWCxJQUFrQkosSUFBSUksR0FBSixDQUFsQjtBQUN0Qzs7QUFFRCxRQUFJLEtBQUtaLEtBQUwsQ0FBV0csSUFBWCxJQUFtQixJQUF2QixFQUE2QjtBQUFFLFlBQU0sZUFBTjtBQUF3QjtBQUN4RCxHQXBCOEI7O0FBc0IvQlcsVUFBUSxnQkFBVVYsT0FBVixFQUFtQjtBQUN6QjtBQUNELEdBeEI4QjtBQXlCL0JXLFVBQVMsa0JBQVU7QUFDZixRQUFHO0FBQ0QsVUFBSUMsR0FBR0MsWUFBUCxFQUFxQkQsR0FBR0MsWUFBSCxDQUFnQixFQUFFQyxXQUFXLEtBQUtaLE1BQWxCLEVBQWhCO0FBQ3RCLEtBRkQsQ0FFQyxPQUFNYSxDQUFOLEVBQVEsQ0FBRTtBQUNkLEdBN0I4QjtBQThCL0JDLFVBQVMsa0JBQVUsQ0FBRSxDQTlCVTs7QUFnQy9CQyxZQUFhLG9CQUFVLENBQUUsQ0FoQ007QUFpQy9CQyxjQUFhLHNCQUFVLENBQUUsQ0FqQ007QUFrQy9CQyxhQUFhLHFCQUFVLENBQUUsQ0FsQ007QUFtQy9CQyxnQkFBYyxzQkFBVUMsTUFBVixFQUFpQjtBQUM3QixTQUFLbkIsTUFBTCxHQUFjbUIsT0FBT1AsU0FBckI7QUFDRCxHQXJDOEI7QUFzQy9CO0FBQ0FRLFdBQVMsaUJBQVVyQixJQUFWLEVBQWdCO0FBQ3ZCLFNBQUtMLEtBQUwsQ0FBV0csSUFBWCxDQUFnQnVCLE9BQWhCLENBQXdCckIsSUFBeEI7QUFDRCxHQXpDOEI7QUEwQy9Cc0IsY0FBYSxvQkFBVTFCLE9BQVYsRUFBbUI7QUFDOUIsU0FBS0QsS0FBTCxDQUFXQyxPQUFYLEdBQXFCQSxPQUFyQjtBQUNELEdBNUM4QjtBQTZDL0IyQixjQUFhLHNCQUFZO0FBQ3ZCLFdBQU8sS0FBSzVCLEtBQUwsQ0FBV0MsT0FBbEI7QUFDRDs7QUEvQzhCLENBQW5DOztBQW1EQTRCLE9BQU9DLE9BQVAsR0FBaUJsQyxPQUFPbUMsR0FBeEIiLCJmaWxlIjoiRnJhZ21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0ZyYWdtZW50IOeijueJh+Wfuuexu1xyXG52YXIgSG9vID0gcmVxdWlyZShcIi4uLy4uL0hvby5hbGwuanNcIik7XHJcbmlmKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpeyB3aW5kb3cgPSBnZXRBcHAoKTsgfVxyXG5cclxuSG9vLmRlZmluZSgnWXpiLmZyYWdtZW50LkZyYWdtZW50Jyx7XHJcbiAgICBleHRlbmQ6ICdIb28uQmFzZScsXHJcbiAgICBkZkNmZyA6IHtcclxuICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAgIG1vZGVsICA6ICcnLFxyXG4gICAgICBwYWdlOiBudWxsLFxyXG4gICAgICBvcHRpb25zOiB7fVxyXG4gICAgfSxcclxuICAgIGRhdGEgICA6IHt9LFxyXG4gICAgc2Nyb2xsIDogMCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcclxuICAgICAgdGhpcy5jYWxsKCdpbml0Jyxhcmd1bWVudHMpO1xyXG5cclxuICAgICAgdmFyIGFsbG93UHJvcGVydHkgPSBbJ3BhZ2UnLCAnb3B0aW9ucycsICdmcmFnbWVudHMnLCdtb2RlbCddO1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIChjZmcgfHwge30pKSB7XHJcbiAgICAgICAgaWYgKGFsbG93UHJvcGVydHkuaW5kZXhPZihrZXkpID49IDApIHRoaXMuZGZDZmdba2V5XSA9IGNmZ1trZXldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kZkNmZy5wYWdlID09IG51bGwpIHsgdGhyb3cgJ+ivt+aMieimgeaxguWhq+WFpXBhZ2Xlj4LmlbAuJzsgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCfmiJHmm7Lnur/mlZHlm73vvIzlj6/ku6XosIPnlKjniLbnsbvmlrnms5XkuoYnKTtcclxuICAgIH0sXHJcbiAgICBvblNob3cgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGlmICh3eC5wYWdlU2Nyb2xsVG8pIHd4LnBhZ2VTY3JvbGxUbyh7IHNjcm9sbFRvcDogdGhpcy5zY3JvbGwgfSk7XHJcbiAgICAgICAgfWNhdGNoKGUpe31cclxuICAgIH0sXHJcbiAgICBvbkhpZGUgOiBmdW5jdGlvbigpe30sXHJcbiAgICBcclxuICAgIG9uUmVsb2FkICAgOiBmdW5jdGlvbigpe30sXHJcbiAgICBvbkxvYWRNb3JlIDogZnVuY3Rpb24oKXt9LFxyXG4gICAgb25SZWZyZXNoICA6IGZ1bmN0aW9uKCl7fSxcclxuICAgIG9uUGFnZVNjcm9sbDogZnVuY3Rpb24gKHBhcmFtcyl7XHJcbiAgICAgIHRoaXMuc2Nyb2xsID0gcGFyYW1zLnNjcm9sbFRvcDtcclxuICAgIH0sXHJcbiAgICAvL+W9k+WJjXNldERhdGHkvpvlr7nlupRQYWdl5L2/55SoXHJcbiAgICBzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmRmQ2ZnLnBhZ2Uuc2V0RGF0YShkYXRhKTtcclxuICAgIH0sXHJcbiAgICBzZXRUYWdOYW1lIDogZnVuY3Rpb24gKHRhZ05hbWUpIHtcclxuICAgICAgdGhpcy5kZkNmZy50YWdOYW1lID0gdGFnTmFtZTtcclxuICAgIH0sXHJcbiAgICBnZXRUYWdOYW1lIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZkNmZy50YWdOYW1lO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5ZemI7XHJcbiJdfQ==