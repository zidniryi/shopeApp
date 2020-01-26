/**
 * 
 * @param {*} postDate 
 * This @function is to comparing date 
 * Compare between today with created/post date and comparing into millyseconds in day
 */
function compareDate(postDate) {
  let today = new Date()
  let createdDate = new Date(postDate)
  let msInDay = 24 * 60 * 60 * 1000
  createdDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  let compareDate = (+today - +createdDate) / msInDay
  return compareDate
}

export default compareDate