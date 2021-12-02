"use strict";

// Class definition
var KTChartsWidget4 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_4");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-primary');

        var options = {
            series: [{
                name: 'Net Profit',
                data: [34,34,35,35,36,36,35,35,36,36,35,35,34,34,34.5,34.5,35,35,34]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: 320,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.7,
                stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 25'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    rotate: -45,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
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
            colors: [lightColor],
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
                strokeColor: baseColor,
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
    module.exports = KTChartsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget4.init();
});
