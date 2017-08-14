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
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 150;
  var initialY = 100;
  var pos = names.indexOf('Вы');

  ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, times[i] * step);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, pos * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, histogramHeight + 100);
    ctx.fillText(~~times[i], 150 + 90 * i, histogramHeight - 70);
  }
};
