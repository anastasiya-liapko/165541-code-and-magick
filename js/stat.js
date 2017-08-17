'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  var getMaxTime = function (i) {
    for (i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
  };
  getMaxTime();

  var histogramHeight = 150;
  var step = histogramHeight / -max;
  var barWidth = 40;
  var indent = 50;
  var initialX = 150;
  var initialY = 250;
  var pos = names.indexOf('Вы');
  var i;

  ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла

  var getBarHeight = function () {
    for (i = 0; i < times.length; i++) {
      if (pos === i) {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
      }
      ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, times[i] * step);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], initialX + (barWidth + indent) * i, histogramHeight + 100);
      ctx.fillText(Math.round(times[i]), 150 + 90 * i, histogramHeight - 70);
    }
  };
  getBarHeight();
};
