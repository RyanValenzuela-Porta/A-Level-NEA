let title = document.getElementById("title")
let startDate = document.getElementById("startDate")
let endDate = document.getElementById("endDate")
let startTime = document.getElementById("startTime")
let endTime = document.getElementById("endTime")
let description = document.getElementById("description")
let allDay = document.getElementById("allDay")
let toggle=document.getElementById("toggle")
let add=document.getElementById("add")
function main(){
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: [
      // {
      //   title: 'All Day Event',
      //   start: '2023-01-01'
      // },
      // {
      //   title: 'Long Event',
      //   start: '2023-01-07',
      //   end: '2023-01-10'
      // },
      // {
      //   groupId: '999',
      //   title: 'Repeating Event',
      //   start: '2023-01-09T16:00:00'
      // },
      // {
      //   groupId: '999',
      //   title: 'Repeating Event',
      //   start: '2023-01-16T16:00:00'
      // },
      // {
      //   title: 'Conference',
      //   start: '2023-01-11',
      //   end: '2023-01-13'
      // },
      // {
      //   title: 'Meeting',
      //   start: '2023-01-12T10:30:00',
      //   end: '2023-01-12T12:30:00'
      // },
      // {
      //   title: 'Lunch',
      //   start: '2023-01-12T12:00:00'
      // },
      // {
      //   title: 'Meeting',
      //   start: '2023-01-12T14:30:00'
      // },
      // {
      //   title: 'Birthday Party',
      //   start: '2023-01-13T07:00:00'
      // },
      // {
      //   title: 'Click for Google',
      //   url: 'http://google.com/',
      //   start: '2023-01-28'
      // }
    ]
  });
  calendar.render();

  add.addEventListener("click",()=>{
    let newEvent = {
      title:title.value,
      start:`${allDay.checked?startDate.value:startDate.value+"T"+startTime.value+":00"}`,
      end:`${!allDay.checked?endDate.value+"T"+endTime.value+":00":startDate.value}`,
      description:description.value,
      url:"/eeeee"
    }
    calendar.addEvent(newEvent);
  })


  allDay.addEventListener("click",()=>{
    if(allDay.checked){
      toggle.classList.add("invisible")
      endDate.value,startTime.value,endTime.value=""
    }else{
      toggle.classList.remove("invisible")
    }
  })
}
document.addEventListener('DOMContentLoaded', main());