

export const formatDate = ( dateString: Date ) =>{
  const date = new Date(dateString)
  const month = date.toLocaleDateString(undefined, { month: "short" })
  const day = date.getDate()
  const year = date.getFullYear()
  const processedDate = `${ month } ${ day }, ${ year }`

  return processedDate
}

export const compareDate = ( date1: Date, date2: Date ) => {
  const newDate1 = new Date(date1)
  const newDate2 = new Date(date2)

  return newDate1.getTime()===newDate2.getTime()
}
