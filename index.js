const btnCapture = document.querySelector('.btn');

btnCapture.addEventListener('click',function clickEvent(event){
  event.preventDefault();

  //creating empty object
  const empObj = {}

  //creating empty array
  const empArr = []

  //getting username field value from form
  const username = document.getElementById('input-username').value

    //getting password field value from form
  const password = document.getElementById('input-password').value

    //getting email field value from form
  const email = document.getElementById('input-email').value

//pushing username, password, email into empty object
  empObj.username = username;
  empObj.password = password;
  empObj.email = email;
  console.log(empObj)

  console.log(username.length)

   if(username.length == 0) {
    document.getElementById('nameRequired').innerHTML='Username is required'
      //statement
   }
   else {
     console.log('length is not zero')
     document.getElementById('nameRequired').innerHTML=''
    
   }
  
  //pushing values into empty array
  empArr.push(username)
  empArr.push(password)
  empArr.push(email)

  console.log(empArr)

  // console.log(empObj);

  
  
})





