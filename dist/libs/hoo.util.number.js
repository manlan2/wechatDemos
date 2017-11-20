'use strict';

if (typeof window == 'undefined') {
  window = getApp();
}
var Hoo = window.Hoo || {};

Hoo.define('Hoo.util.Number', {
  statics: {
    /**
     * 数字千位符格式化
     * @param {Number} num
     * @param {Number} decimals 保留小数点后几位
     * @param {String} point 小数点符号,默认 '.'
     * @param {String} thousands_sep 千分位符号 默认 ','
     */
    format: function format(num, decimals, point, thousands_sep) {
      num = (num + '').replace(/[^0-9+-Ee.]/g, '');
      var n = !isFinite(+num) ? 0 : +num,
          prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
          sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
          dec = typeof point === 'undefined' ? '.' : point,
          s = '',
          toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.ceil(n * k) / k;
      };

      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
      var re = /(-?\d+)(\d{3})/;
      while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }
      return s.join(dec);
    },
    /**
     * 随机生成[min,max)整数
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     */
    random: function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvby51dGlsLm51bWJlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnZXRBcHAiLCJIb28iLCJkZWZpbmUiLCJzdGF0aWNzIiwiZm9ybWF0IiwibnVtIiwiZGVjaW1hbHMiLCJwb2ludCIsInRob3VzYW5kc19zZXAiLCJyZXBsYWNlIiwibiIsImlzRmluaXRlIiwicHJlYyIsIk1hdGgiLCJhYnMiLCJzZXAiLCJkZWMiLCJzIiwidG9GaXhlZEZpeCIsImsiLCJwb3ciLCJjZWlsIiwicm91bmQiLCJzcGxpdCIsInJlIiwidGVzdCIsImxlbmd0aCIsIkFycmF5Iiwiam9pbiIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksT0FBT0EsTUFBUCxJQUFpQixXQUFyQixFQUFrQztBQUFFQSxXQUFTQyxRQUFUO0FBQW9CO0FBQ3hELElBQUlDLE1BQU1GLE9BQU9FLEdBQVAsSUFBYyxFQUF4Qjs7QUFFQUEsSUFBSUMsTUFBSixDQUFXLGlCQUFYLEVBQThCO0FBQzVCQyxXQUFTO0FBQ1A7Ozs7Ozs7QUFPQUMsWUFBUSxnQkFBVUMsR0FBVixFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUFnQ0MsYUFBaEMsRUFBOEM7QUFDcERILFlBQU0sQ0FBQ0EsTUFBTSxFQUFQLEVBQVdJLE9BQVgsQ0FBbUIsY0FBbkIsRUFBbUMsRUFBbkMsQ0FBTjtBQUNBLFVBQUtDLElBQUcsQ0FBQ0MsU0FBUyxDQUFDTixHQUFWLENBQUQsR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBQ0EsR0FBL0I7QUFBQSxVQUNFTyxPQUFNLENBQUNELFNBQVMsQ0FBQ0wsUUFBVixDQUFELEdBQXVCLENBQXZCLEdBQTJCTyxLQUFLQyxHQUFMLENBQVNSLFFBQVQsQ0FEbkM7QUFBQSxVQUVFUyxNQUFPLE9BQU9QLGFBQVAsS0FBeUIsV0FBMUIsR0FBeUMsR0FBekMsR0FBK0NBLGFBRnZEO0FBQUEsVUFHRVEsTUFBTyxPQUFPVCxLQUFQLEtBQXlCLFdBQTFCLEdBQXlDLEdBQXpDLEdBQStDQSxLQUh2RDtBQUFBLFVBSUlVLElBQUksRUFKUjtBQUFBLFVBS0VDLGFBQWEsU0FBYkEsVUFBYSxDQUFVUixDQUFWLEVBQWFFLElBQWIsRUFBbUI7QUFDOUIsWUFBSU8sSUFBSU4sS0FBS08sR0FBTCxDQUFTLEVBQVQsRUFBYVIsSUFBYixDQUFSO0FBQ0EsZUFBTyxLQUFLQyxLQUFLUSxJQUFMLENBQVVYLElBQUlTLENBQWQsSUFBbUJBLENBQS9CO0FBQ0QsT0FSSDs7QUFVQUYsVUFBSSxDQUFDTCxPQUFPTSxXQUFXUixDQUFYLEVBQWNFLElBQWQsQ0FBUCxHQUE2QixLQUFLQyxLQUFLUyxLQUFMLENBQVdaLENBQVgsQ0FBbkMsRUFBa0RhLEtBQWxELENBQXdELEdBQXhELENBQUo7QUFDQSxVQUFJQyxLQUFLLGdCQUFUO0FBQ0EsYUFBT0EsR0FBR0MsSUFBSCxDQUFRUixFQUFFLENBQUYsQ0FBUixDQUFQLEVBQXNCO0FBQ3BCQSxVQUFFLENBQUYsSUFBT0EsRUFBRSxDQUFGLEVBQUtSLE9BQUwsQ0FBYWUsRUFBYixFQUFpQixPQUFPVCxHQUFQLEdBQWEsSUFBOUIsQ0FBUDtBQUNEOztBQUVELFVBQUksQ0FBQ0UsRUFBRSxDQUFGLEtBQVEsRUFBVCxFQUFhUyxNQUFiLEdBQXNCZCxJQUExQixFQUFnQztBQUM5QkssVUFBRSxDQUFGLElBQU9BLEVBQUUsQ0FBRixLQUFRLEVBQWY7QUFDQUEsVUFBRSxDQUFGLEtBQVEsSUFBSVUsS0FBSixDQUFVZixPQUFPSyxFQUFFLENBQUYsRUFBS1MsTUFBWixHQUFxQixDQUEvQixFQUFrQ0UsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBUjtBQUNEO0FBQ0QsYUFBT1gsRUFBRVcsSUFBRixDQUFPWixHQUFQLENBQVA7QUFDRCxLQS9CTTtBQWdDUDs7Ozs7QUFLQWEsWUFBUyxnQkFBU0MsR0FBVCxFQUFhQyxHQUFiLEVBQWlCO0FBQ3hCLGFBQU9sQixLQUFLbUIsS0FBTCxDQUFXbkIsS0FBS2dCLE1BQUwsTUFBaUJFLE1BQU1ELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0Q7QUF2Q007QUFEbUIsQ0FBOUIiLCJmaWxlIjoiaG9vLnV0aWwubnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcpIHsgd2luZG93ID0gZ2V0QXBwKCk7IH1cclxudmFyIEhvbyA9IHdpbmRvdy5Ib28gfHwge307XHJcblxyXG5Ib28uZGVmaW5lKCdIb28udXRpbC5OdW1iZXInLCB7XHJcbiAgc3RhdGljczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDlrZfljYPkvY3nrKbmoLzlvI/ljJZcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBudW1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFscyDkv53nlZnlsI/mlbDngrnlkI7lh6DkvY1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwb2ludCDlsI/mlbDngrnnrKblj7cs6buY6K6kICcuJ1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRob3VzYW5kc19zZXAg5Y2D5YiG5L2N56ym5Y+3IOm7mOiupCAnLCdcclxuICAgICAqL1xyXG4gICAgZm9ybWF0OiBmdW5jdGlvbiAobnVtLCBkZWNpbWFscywgcG9pbnQsIHRob3VzYW5kc19zZXApe1xyXG4gICAgICBudW0gPSAobnVtICsgJycpLnJlcGxhY2UoL1teMC05Ky1FZS5dL2csICcnKTtcclxuICAgICAgdmFyICBuPSAhaXNGaW5pdGUoK251bSkgPyAwIDogK251bSxcclxuICAgICAgICBwcmVjPSAhaXNGaW5pdGUoK2RlY2ltYWxzKSA/IDAgOiBNYXRoLmFicyhkZWNpbWFscyksXHJcbiAgICAgICAgc2VwID0gKHR5cGVvZiB0aG91c2FuZHNfc2VwID09PSAndW5kZWZpbmVkJykgPyAnLCcgOiB0aG91c2FuZHNfc2VwLFxyXG4gICAgICAgIGRlYyA9ICh0eXBlb2YgcG9pbnQgICAgICAgICA9PT0gJ3VuZGVmaW5lZCcpID8gJy4nIDogcG9pbnQsXHJcbiAgICAgICAgICBzID0gJycsXHJcbiAgICAgICAgdG9GaXhlZEZpeCA9IGZ1bmN0aW9uIChuLCBwcmVjKSB7XHJcbiAgICAgICAgICB2YXIgayA9IE1hdGgucG93KDEwLCBwcmVjKTtcclxuICAgICAgICAgIHJldHVybiAnJyArIE1hdGguY2VpbChuICogaykgLyBrO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBzID0gKHByZWMgPyB0b0ZpeGVkRml4KG4sIHByZWMpIDogJycgKyBNYXRoLnJvdW5kKG4pKS5zcGxpdCgnLicpO1xyXG4gICAgICB2YXIgcmUgPSAvKC0/XFxkKykoXFxkezN9KS87XHJcbiAgICAgIHdoaWxlIChyZS50ZXN0KHNbMF0pKSB7XHJcbiAgICAgICAgc1swXSA9IHNbMF0ucmVwbGFjZShyZSwgXCIkMVwiICsgc2VwICsgXCIkMlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKChzWzFdIHx8ICcnKS5sZW5ndGggPCBwcmVjKSB7XHJcbiAgICAgICAgc1sxXSA9IHNbMV0gfHwgJyc7XHJcbiAgICAgICAgc1sxXSArPSBuZXcgQXJyYXkocHJlYyAtIHNbMV0ubGVuZ3RoICsgMSkuam9pbignMCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzLmpvaW4oZGVjKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuueUn+aIkFttaW4sbWF4KeaVtOaVsFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDmnIDlsI/lgLxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg5pyA5aSn5YC8XHJcbiAgICAgKi9cclxuICAgIHJhbmRvbSA6IGZ1bmN0aW9uKG1pbixtYXgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19