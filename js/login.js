 //const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';
 
const apiUrl ='http://localhost:3000'
/* Busca os usuários cadastrados */
const filterToEnter = async() => {
    
    try{
        const requisition = await fetch(apiUrl+'/cadastrosNovos');
        const userInDataBase = await requisition.json();
        return userInDataBase;
    
    }catch(error){
     console.log('ocorreu um erro, que é '+ error);
    }
    
    
    }

/* enviado o email  para saber se está cadastrado */
const ifResgiterEnter = async() =>{

const loginEmail = document.querySelector('#loginInput');
const loginPassword = document.querySelector('#pasSword');

 const userCheckEmail = loginEmail.value
 const userCheckPassword = loginPassword.value

console.log(userCheckEmail);


const dataApi = await chekingToInputToEnter(userCheckEmail);

console.log(dataApi)

if(dataApi.length === 0){
    window.alert('Login ou senha não cadastrados!');
}
else{dataApi.forEach(atribute => {
    
    if (userCheckEmail.length ===0 || userCheckPassword.length===0 ){
        window.alert('Algum campo vazio, por favor preencher!')
    }

   else if(userCheckEmail === atribute.emailNewSub && userCheckPassword === atribute.passwordNewSub){
      window.location.assign("./patients.html");
      /* window.location.href= `./patients.html?nameNewSub=${atribute.id}` */
}

else {
 window.alert('Senha ou Login Incorretos!')
}
    
})
}

}

/* Checando se o email colocado está resgistrado  */
const chekingToInputToEnter = async(data)=> {
    try{
        const requisition = await fetch(apiUrl+`/cadastrosNovos?emailNewSub=${data}`)
        const apiOutput = await requisition.json()
        return apiOutput;
    }catch(error){
        console.log('ocorreu um erro, que é '+ error);
       }
    
}