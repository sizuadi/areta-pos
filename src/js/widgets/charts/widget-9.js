"use strict";

// Class definition
var KTChartsWidget9 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_9");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-400');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-gray-200');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [21, 21, 26, 26, 31, 31, 27]
            }, {
                name: 'Revenue',
                data: [12, 16, 16, 21, 21, 18, 18]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: 220,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['06 Sep', '13 Sep', '15 Sep', '17 Sep', '22 Sep', '26 Sep', '27 Sep'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseLightColor, secondaryLightColor],
                strokeColor: [baseLightColor, secondaryLightColor],
                strokeWidth: 3
            }
        };        
          
        var chart = new ApexCharts(element, options);

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
    module.exports = KTChartsWidget9;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget9.init();
});


 