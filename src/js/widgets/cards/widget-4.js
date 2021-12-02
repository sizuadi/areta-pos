"use strict";

// Class definition
var KTCardsWidget4 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_4_chart'); 

        if (!el) {
            return;
        }

        var options = {
            percent:  el.getAttribute('data-percent'),
            size: el.getAttribute('data-size') || 70,
            lineWidth: el.getAttribute('data-line') || 11,
            rotate: el.getAttribute('data-rotate') || 145
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        drawCircle(KTUtil.getCssVariableValue('--bs-gray-300'), options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--bs-primary'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--bs-success'), options.lineWidth, 100 / 250);    

        var chart = new ApexCharts(el, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget4.init();
});
   
        
        
        
           