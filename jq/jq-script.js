$(document).ready(function () {
  $('.dropdown').click(function () {
    $(this).next(".dropdown-menu").slideToggle("fast");
    $(this).addClass("active");
    $(this).parent("li").siblings("li").children(".dropdown-menu").slideUp("fast");
    $(this).parent("li").siblings("li").children(".dropdown").removeClass("active")
  })
  $("#bar").click(function () {
    $("body").toggleClass("close");
  })
})


//js-api


let dg = document.getElementById("prn");

const dog = () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {

      console.log(data);

      let datamsg = data.message

      for (const key in datamsg) {

        if (datamsg[key].length === 0) {
          a.innerHTML += `
                                <li>${key}</li>
                    `;
        }
        else {
          let sub = `<ul class="dropdown-menu">`
          datamsg[key].forEach(sublist => {
            sub = `<li>
                                        <a href="javascript:void(0)">
                                            <span>${sublist}</span>
                                        </a>
                                    </li>`
          });
          sub = `</ul>`
          a.innerHTML += `<li class="item-list" onclick="return imageList('${key}')"><a href="javascript:void(0)" class="dropdown pos-relative act">${key}</a> ${sub}</li>`
        }
      }


    })
    .catch(error => {
      console.log('Error:', error);
    });
}

dog();

// $(document).ready(function () {
//     $('.dropdown').click(function () {
//         $('.dropdown-menu').slideUp("3000");

//         if($(this).parent().hasClass('active'))
//         {
//             $('.dropdown').parent().removeClass('active')
//             $(this).parent().removeClass('active')
//         }
//         else
//         {
//             $().removeClass("active")
//             $(this).next(".dropdown-menu").slideDown("3000")
//             $(this).parent().addClass("active")
//         }
//     })
// })

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});




var options = {
  series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;

      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


$(document).ready(function () {
  tippy('.tippy', {
    theme: 'light',
    size: 'big',
    arrow: true
  })
});


var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai"],
    datasets: [{
      data: [500, 50, 2424, 14040], // Specify the data values array

      borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
      backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});



document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    events: '/api/demo-feeds/events.json',
    editable: true,
    selectable: true
  });

  calendar.render();
});




var chartLine = new ApexCharts(document.querySelector('#line'), optionsLine);

// a small hack to extend height in website sample dashboard
chartLine.render().then(function () {
  var ifr = document.querySelector("#wrapper");
  if (ifr.contentDocument) {
    ifr.style.height = ifr.contentDocument.body.scrollHeight + 20 + 'px';
  }
});
