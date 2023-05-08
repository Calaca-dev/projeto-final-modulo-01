const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';
//const apiUrl ='http://localhost:3000'

     const nameUser = document.querySelector('#userName');
     const emailUser = document.querySelector('#email');
     const password = document.querySelector('#userPassword');
     const confPassword = document.querySelector('#confirmation');

     let toKnowLegth = [nameUser.value,emailUser.value]

function changeInputs() {
    const hideNameEmailCard = document.querySelector('.subscribeCard');
    const showPaswordCard = document.querySelector('.cardPasssword');
    hideNameEmailCard.style.display = "none";
    let nameUserValue = nameUser.value;
    let emailUserValue = emailUser.value;

    if(nameUserValue.length <=0 || emailUserValue.length <=0){
      window.alert('Algum Campo, não está preenchido, por favor preencha!')

      setTimeout(() => {
        document.location.reload();
      }, 500); 
    
     }

     else {
      showPaswordCard.style.display="block"
     }
  
  }

 async function catchingDataNewSubscribe(){

  let toKnowLegth2 = [password.value,confPassword.value]

console.log('aaaaaa')
     const dataSave = {    
        nameNewSub: nameUser.value, 
        emailNewSub: emailUser.value,               
        passwordNewSub: password.value,           
        confPasswordNewSub: confPassword.value,           
     }
     console.log(dataSave)
  console.log('aaaaaa')  

   if(password.value === confPassword.value){  
   console.log('aaaaaa') 
    if(toKnowLegth2[0].length >=8 && toKnowLegth2[1].length >=8){
      await sendingToApi(dataSave);
         window.location.assign("./index.html")
         console.log('aaaaaa')
    } 
   else{
window.alert('Senha menor que 8 caracteres, digitar uma senha mais forte!');
console.log('aaaaaa')
     }
    }

 else {
  window.alert('A senha não estão iguais!, escreva a mesma senha nos dois campos.');console.log('aaaaaa')
 }console.log('aaaaaa')
  }


  async function sendingToApi(newSubscribe) {
    
    return  fetch('http://localhost:3000/cadastrosNovos',{
    method:'POST',
    headers:{
      'Accept': 'application/json,text/plain, */*',
       'Content-Type':'application/json'
    },
    body: JSON.stringify(newSubscribe)
    })
  }
