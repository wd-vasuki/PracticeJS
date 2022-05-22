// const nums = [1, 3, 4 , 9];

// function add (nums){
//     num0

// }


function fun1() {
    console.log("ravi");
}
function fun2() {
    console.log("jitu");
}
function fun3() {
    console.log("rakesh");
}


function caller() {
    fun1();
    fun2();
    fun3();
}
// caller();
function sum(a, b) {
    let ans = a + b
    return ans
}
function multi(x, y) {
    let ans = x * y
    return ans;
}
function process(b, a) {
    let sumAns = sum(a, b);
    let multiAns = multi(a, b);
    console.log(sumAns, multiAns);

}
// process(2,4);






/////////////////////////////////////////////

function processArray(nums) {
    console.log(nums),
        console.log('val  ', 'sums   ', 'updated new sums')
    let sums = 0;

    for (let val of nums) {
        console.log(val, ' + ', sums, ' :  ', sums + val);
        sums = sums + val;

    }
    console.log(sums)
}



function processArray2(nums) {
  
    // console.log(nums);
    let multi = 1;
    for (let val of nums) {
        console.log(val.num);
        multi = multi * val.num;
    } 
    console.log(multi);

}


// const data = [3, 5, 5, 6, 10];
// processArray(data);

const data2 = [
    {
        num: 3,
        name: 'three'
    },
    {
        num: 2,
        name: 'two'
    },
    {
        num: 5,
        name: 'five'
    },
]

// processArray2(data2);



const data3 = [
    5,
    3,
    2,
    1
]
let multiple = 1;
for(let val of data3){

    multiple = multiple * val;
}
console.log(multiple);
// console.log(multiple);
