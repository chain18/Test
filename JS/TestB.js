const data = [
  {
    id: 1,
    roomId: "A101",
    startTime: "2019-09-28 13:00:00",
    endTime: "2019-09-28 14:00:00",
    title: "Lunch with Petr",
  },
  {
    id: 2,
    roomId: "A101",
    startTime: "2019-09-28 14:00:00",
    endTime: "2019-09-28 15:00:00",
    title: "Sales Weekly Meeting",
  },
  {
    id: 3,
    roomId: "A101",
    startTime: "2019-09-28 16:00:00",
    endTime: "2019-09-28 18:00:00",
    title: "Anastasia Website Warroom",
  },
  {
    id: 4,
    roomId: "A101",
    startTime: "2019-09-29 13:00:00",
    endTime: "2019-09-29 14:00:00",
    title: "One-on-One Session",
  },
  {
    id: 5,
    roomId: "A101",
    startTime: "2019-09-29 16:00:00",
    endTime: "2019-09-29 18:00:00",
    title: "UGC Sprint Planning",
  },
  {
    id: 6,
    roomId: "A102",
    startTime: "2019-09-30 09:00:00",
    endTime: "2019-10-04 18:00:00",
    title: "5-Day Design Sprint Workshop",
  },
  {
    id: 7,
    roomId: "Auditorium",
    startTime: "2019-09-19 09:00:00",
    endTime: "2019-09-23 19:00:00",
    title: "Thai Tech Innovation 2019",
  },
  {
    id: 8,
    roomId: "A101",
    startTime: "2019-09-28 10:00:00",
    endTime: "2019-09-28 13:00:00",
    title: "Raimonland project",
  },
  {
    id: 9,
    roomId: "A102",
    startTime: "2019-09-30 18:00:00",
    endTime: "2019-09-30 20:00:00",
    title: "Management Meetinng",
  },
  {
    id: 10,
    roomId: "A101",
    startTime: "2019-10-04 14:00:00",
    endTime: "2019-10-06 11:00:00",
    title: "3-day workshop Corgi costume",
  },
];

function getBookingsByRoom(data, roomId) {
  let currentBookings = [];
  let thisWeekBookings = [];
  let nextWeekBookings = [];

  let currentDate = new Date();
  let currentWeekStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );
  let currentWeekEnd = new Date(
    currentWeekStart.getFullYear(),
    currentWeekStart.getMonth(),
    currentWeekStart.getDate() + 6
  );
  let nextWeekStart = new Date(
    currentWeekEnd.getFullYear(),
    currentWeekEnd.getMonth(),
    currentWeekEnd.getDate() + 1
  );
  let nextWeekEnd = new Date(
    nextWeekStart.getFullYear(),
    nextWeekStart.getMonth(),
    nextWeekStart.getDate() + 6
  );

  for (let i = 0; i < data.length; i++) {
    if (data[i].roomId === roomId) {
      let eventStart = new Date(data[i].startTime);
      let eventEnd = new Date(data[i].endTime);

      if (eventStart >= currentDate && eventEnd <= currentDate) {
        currentBookings.push(data[i]);
      } else if (eventStart >= currentWeekStart && eventEnd <= currentWeekEnd) {
        thisWeekBookings.push(data[i]);
      } else if (eventStart >= nextWeekStart && eventEnd <= nextWeekEnd) {
        nextWeekBookings.push(data[i]);
      }
    }
  }

  return {
    current: currentBookings,
    thisWeek: thisWeekBookings,
    nextWeek: nextWeekBookings,
  };
}

let bookings = getBookingsByRoom(data, "A101");
console.log(bookings);
