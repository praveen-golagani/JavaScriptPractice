const max_marks = 100
let marks = 35
const min_marks = 0

if ((marks<=max_marks)&& marks>=35){
    console.log("pass ")
}else{
    console.log("fail")
}

let i = 0
while (i<10){
    i++
    console.log(i)
}
i = 10
do{
    console.log(i)
}while(i<5){
    console.log("do while")
    i++
    console.log(i)
}

for (let j=0;j<=5;j++){
    console.log(j)
}
//print odd

for (let j = 1;j<=10;j++){
    if(j%2!=0){
        console.log(j+" is odd")
    }
}

// commom multiples of 2,5 from 1 to 10
for (let k = 1;k<=10;k++){
    if((k%2==0)&& (k%5==0)){
        console.log(k+" is multiple of 2 and 5")
    }
}