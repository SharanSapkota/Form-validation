// const btnCapture = document.querySelector('.btn');

// btnCapture.addEventListener('click',function clickEvent(event){
//   event.preventDefault();

//   //creating empty object
//   const empObj = {}

//   //creating empty array
//   const empArr = []

//   //getting username field value from form
//   const username = document.getElementById('input-username').value

//     //getting password field value from form
//   const password = document.getElementById('input-password').value

//     //getting email field value from form
//   const email = document.getElementById('input-email').value

// //pushing username, password, email into empty object
//   empObj.username = username;
//   empObj.password = password;
//   empObj.email = email;
//   console.log(empObj)

//   console.log(username.length)

  
//    if(username.length == 0) {
//     document.getElementById('nameRequired').innerHTML='Username is required'
//       //statement
//    }
//    else {
//      console.log('length is not zero')
//      document.getElementById('nameRequired').innerHTML=''
    
//    }
  
  //pushing values into empty array
  // empArr.push(username)
  // empArr.push(password)
  // empArr.push(email)

  // console.log(empArr)

  // console.log(empObj);

  
  
// })

// const arr = [
//   {
//     name: "sharan",
//     address: "teku"
//   },
//   {
//     name: "sharan1",
//     address: "teku"
//   },
//   {
//     name: "sharan2",
//     address: "teku"
//   },
// ]

// arr1=[1,2,3]

// const mapF = arr.filter((val, i, arrr) =>{
// val.name == "sharan1"
// // console.log(val.name)
// return val.name

// })

// const a =[]

// const so = arr1.some((val)=> {return val=2})
// const forEach1 = arr1.forEach((val) => {
//   if (arr1[0] = 1){
//     a.push(arr1[0])
//   }
// })
// console.log(so)
// console.log(a)
// console.log(mapF)


const arr = [{
  color: "purple",
  type: "minivan",
  registration: new Date('2017-01-03'),
  capacity: 7
},
{
  color: "red",
  type: "station wagon",
  registration: new Date('2018-03-03'),
  capacity: 5
},
{
  color: "purple",
  type: "minivan",
  registration: new Date('2017-01-03'),
  capacity: 7
},
{
  color: "red",
  type: "station wagon",
  registration: new Date('2018-03-03'),
  capacity: 5
},
]

arrNum = [1,2,3,4,5]
arrStr = ['a', 'b', 'c', 'd']

// arrStr.forEach doest not return value instead its values can only be played inside callback
arrStr.forEach((val) => {
          console.log(val)
  }
  )

  // These are higher order functions. They accept 3 parameters. 
  // first: The values inside of the array
  // second: index of values i.e which array position does it hold
  // third: the array itself


// arr.map returns array of desired value
const mappedVal = arr.map((val, i, arrVal) => {
 dateR = val.registration
 console.log(dateR)
 return val.registration
})
 console.log(mappedVal)

//arrNum.some returns only boolean. If condition is satisfied, it immediately returns true else return false
const somedVal = arrNum.some((val) => {
  return val == 2
})
console.log(somedVal)

// arr.filter returns a filtered value (as per the condition)
const filteredVal = arr.filter((val, i, arrVal) => {
  if(val.color == 'red'){
   val.type="abc"
  }
  return val
})

console.log(filteredVal)