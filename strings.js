let day = 'friday '
console.log(day.length)
console.log(day.slice(1,5))
console.log(day[2])
let spl = day.split('i')
console.log(spl)
console.log(spl[1].length)
console.log(spl[1].trim().length)

let cur_date = '24'
let next_date = '29'
let diff =  parseInt(next_date)- parseInt(cur_date)
console.log(diff)
// conv to string
console.log(diff.toString())
console.log(cur_date+next_date)
 let quote = "all is well all is well god is great"
 console.log(quote.indexOf("well"))
 console.log(quote.indexOf('well',11))
 console.log(quote.indexOf('hero')) // returns -1 if no index
 let count = 0
 let req = quote.indexOf("well")
 while(req!=-1){
    count++
    req = quote.indexOf("well",req+1)
 }
 console.log(count)
