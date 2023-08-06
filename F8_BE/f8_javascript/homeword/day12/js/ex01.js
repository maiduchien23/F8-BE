//Bai 1
function convertMilliseconds(milliseconds) {
  const timeUnits = [
    { label: "day", ms: 24 * 60 * 60 * 1000 },
    { label: "hour", ms: 60 * 60 * 1000 },
    { label: "minute", ms: 60 * 1000 },
    { label: "second", ms: 1000 },
    { label: "millisecond", ms: 1 },
  ];

  let result = timeUnits
    .map((unit) => {
      const count = Math.floor(milliseconds / unit.ms);
      milliseconds %= unit.ms;
      return count > 0 ? `${count} ${unit.label}${count > 1 ? "s" : ""}` : null;
    })
    .filter(Boolean);

  return result.join(", ");
}

console.log(convertMilliseconds(1001));
console.log(convertMilliseconds(34325055574));

console.log("..................................................");

//bai 2

function calculateDateDifference(startDate, endDate) {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const timeDifference = endDateObj.getTime() - startDateObj.getTime();

  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return dayDifference;
}

const startDate = "2020-01-01";
const endDate = "2020-01-22";

const result = calculateDateDifference(startDate, endDate);
console.log(result);
