let input = "pets llams";

const reverseUsingForLoop = (inp) =>{
    let rev = "";
    for(let i = inp.length-1;i>=0;i--){
        rev+=inp.charAt(i);
    }
    return rev;
};

//reverse using split,reverse,join
const reverseSplitJoin = (inp) =>{
    return inp.split('').reverse().join('')};

if(input===""){
    console.log("Input cannot be empty");
}else{
    console.log("For loop :",reverseUsingForLoop(input));
    console.log("reverseSplitJoin :",reverseSplitJoin(input));
};


