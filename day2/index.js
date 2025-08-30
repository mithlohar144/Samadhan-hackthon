function getHighestMarks(marksArray) {
  if (!Array.isArray(marksArray) || marksArray.length === 0) {
    throw new Error("Please provide a valid non-empty array of marks.");
  }

  return Math.max(...marksArray);
}


const marks = [85, 92, 78, 96, 88];
const highest = getHighestMarks(marks);
console.log("Highest Marks:", highest);