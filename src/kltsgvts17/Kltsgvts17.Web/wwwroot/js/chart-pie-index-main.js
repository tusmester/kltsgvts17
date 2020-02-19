// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["Személyi juttatás", "Munkáltatót terhelő járulék", "Dologi kiadás", "Ellátottak pénzbeli juttatásai",
          "egyéb működési célú kiadások", "Tartalékok", "Felújítás", "Beruházás", "Egyéb felhalmozási célú kiadások"],
    datasets: [{
        data: [4507725000, 955440000, 5579564000, 79500000, 793167000, 528381000, 1576400000, 12537759000, 82412],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#ff4d88', '#d9ffb3', '#99d6ff', '#ffc6b3', '#99ffd6'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
        display: true,
        position: 'right'
    },
    cutoutPercentage: 5,
  },
});
