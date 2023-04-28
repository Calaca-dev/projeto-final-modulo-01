const cardElementTable = document.querySelector('.mainContent');
const btnSaveInputDate = document.querySelector('.salveBtn');
const formDate = document.querySelector('.formModal')
const modifyBtn = document.querySelector('.btnToEditDate');
const takingDataForPut = document.querySelector('.callDataToMakePut');
const editButton = document.querySelector('.BlueBorder')
let modifyingData = null;


/* Valores de input usados nos 3 form's */
  const cpfValue = document.querySelector('#cpfUser');
  const nameValue = document.querySelector('#nameUser');
  const birthValue = document.querySelector('#dateBirthUser');
  const emailValue = document.querySelector('#emailUser');
  const genderValue = document.querySelector('#userGender');
  const userCountry = document.querySelector('#userNationality');
  const whereUserBorn = document.querySelector('#userNaturalness');
  const profession = document.querySelector('#userProfession');
  const schoolLevel = document.querySelector('#userScholarity');
  const relationshipStatus = document.querySelector('#UsermaritalStatus');
  const momName = document.querySelector('#userMotherName');
  const dadName = document.querySelector('#userFatherName');
  
function changeArrowAndOpenModal() {
  const iconArrowDown = document.querySelector('#arrowDownStyle');
  const iconArrowUp = document.querySelector('#arrowUpStyle')
  const dropDownIsOpen = iconArrowDown.style.display === 'none';


  if (dropDownIsOpen) {
    iconArrowDown.style.display = "inline-block";
    iconArrowUp.style.display = "none";


  }
  else {
    iconArrowDown.style.display = "none";
    iconArrowUp.style.display = "inline-block";
  }

  bubblueModalOpenClose();
}


function bubblueModalOpenClose() {
  const modalbubble = document.querySelector('.bubblueLogOut');
  const dropDownIsOpen = modalbubble.style.display === 'block';

  if (dropDownIsOpen) {
    modalbubble.style.display = "none"
  }
  else {
    modalbubble.style.display = "block"
  }
}
/* fecha modal bubble */
function closeBubblue() {
  const modalbubble = document.querySelector('.bubblueLogOut');
  modalbubble.style.display = "none"
}
/* Fechando bubble modal quando toca fora da bubble */
window.addEventListener('click',(event) =>{
          
  const fechaModalForaDaDiv3 = document.querySelector('.wraper');

  if (event.target === fechaModalForaDaDiv3){
    closeBubblue() 
       
  }
/* consertar bugzin irritando, que ele não fecha quando dou click no mainContent e na logo do menu*/
})  

/* Função do modal de novo cadastro */

function modalInputsNewSubscribe() {
  const modalContainer = document.querySelector('.newSubscribeModal');
  const modalDownPart = document.querySelector('#deleteModalEndPart');
  const backColorModal =  document.querySelector('.backgroundModalInput');
  const titleModify = document.querySelector('#titleModalEditData');  
  const titleView = document.querySelector('#modalViewTitle')
  const titleSubscribe = document.querySelector('#hideInModalShow')
  const btnSaveInputDate = document.querySelector('.salveBtn')

  
/* Resentando titulo para do modal newSubscribe */
titleModify.style.display="none"
titleSubscribe.style.display="flex"
titleView.style.display="none"

  
/* Resetando os campos quando abrir o modal*/
cpfValue.value=""
nameValue.value=""
birthValue.value=""
emailValue.value=""
genderValue.value=""
userCountry.value=""
dadName.value=""
whereUserBorn.value=""
profession.value=""
schoolLevel.value=""
relationshipStatus.value=""
momName.value=""
dadName.value=""
schoolLevel.value=""


/* Voltando a cor normal dos inputs */
  cpfValue.style.backgroundColor="#ffffff";
  nameValue.style.backgroundColor="#ffffff";
  birthValue.style.backgroundColor="#ffffff";
  emailValue.style.backgroundColor="#ffffff";
  genderValue.style.backgroundColor="#ffffff";
  userCountry.style.backgroundColor="#ffffff";
  dadName.style.backgroundColor="#ffffff";
  whereUserBorn.style.backgroundColor="#ffffff";
  profession.style.backgroundColor="#ffffff";
  schoolLevel.style.backgroundColor="#ffffff";
  relationshipStatus.style.backgroundColor="#ffffff";
  momName.style.backgroundColor="#ffffff";
  /* adicionando parte de baixo de volta */
  modalDownPart.style.display ="block"
  modalContainer.style.display === 'none';

/* resentando butão para o do modal de cadastro */
 btnSaveInputDate.style.display="flex"

  if (modalContainer) {
    modalContainer.style.display = 'flex';
    
    backColorModal.style.display = 'flex';
  }
  else {
    modalContainer.style.display = 'none';

    backColorModal.style.display = 'none';
    
  }

}

function closeModal() {
  const modalContainer = document.querySelector('.newSubscribeModal');
  const mainContainer = document.querySelector('.mainContent');
  const backColorModal =  document.querySelector('.backgroundModalInput');
  modalContainer.style.display = 'none';
  mainContainer.style.display = 'flex';
  backColorModal.style.display = 'none';
    
}
 /* Fechando modal de confirmação quando toca fora modal novo cadastro*/
window.addEventListener('click',(event) =>{
          
  const fechaModalForaDaDiv2 = document.querySelector('.backgroundModalInput')
 
  if (event.target === fechaModalForaDaDiv2){

     closeModal(); 
  }
})  

/* modal vizualição */

async function modalShowDataUsers(id) {
  const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';
  const styleChangeToView = document.querySelector('#deleteModalEndPart');
  
  const changingTitleModal = document.querySelector('#hideInModalShow')
  const showTitle = document.querySelector('#modalViewTitle')
  modalInputsNewSubscribe();
 

  /* Usuando dom para tirar uma parte do modal */
  changingTitleModal.style.display="none";
  styleChangeToView.style.display="none";
  
  /*Usuando dom para mudar o title do modal*/
  showTitle.style.display="flex";

  /* OBS não funcionaou pegando só a class de estilização tive que pegar por id */

  
  const apiRequsition = await fetch(apiUrl+`/pacientes/${id}`)
  const newPatient = await apiRequsition.json();
  
  document.querySelector('#cpfUser').value = newPatient.cpf;
  document.querySelector('#nameUser').value = newPatient.name;
  document.querySelector('#dateBirthUser').value = newPatient.birth;
  document.querySelector('#emailUser').value = newPatient.email;
  document.querySelector('#userGender').value = newPatient.gender;  
  document.querySelector('#userNationality').value = newPatient.country;
  document.querySelector('#userNaturalness').value = newPatient.bornIn;
  document.querySelector('#userProfession').value = newPatient.job;
  document.querySelector('#userScholarity').value = newPatient.educationLevel;
  document.querySelector('#UsermaritalStatus').value = newPatient.loveStatus;
  document.querySelector('#userMotherName').value = newPatient.fatherFigure;
  document.querySelector('#userFatherName').value = newPatient.motherFigure;


  /* Usuando dom para mudar cor dos inputs */
  cpfValue.style.backgroundColor="#E0E0E0";
  nameValue.style.backgroundColor="#E0E0E0";
  birthValue.style.backgroundColor="#E0E0E0";
  emailValue.style.backgroundColor="#E0E0E0";
  genderValue.style.backgroundColor="#E0E0E0";
  userCountry.style.backgroundColor="#E0E0E0";
  whereUserBorn.style.backgroundColor="#E0E0E0";
  profession.style.backgroundColor="#E0E0E0";
  schoolLevel.style.backgroundColor="#E0E0E0";
  relationshipStatus.style.backgroundColor="#E0E0E0";
  momName.style.backgroundColor="#E0E0E0";
  dadName.style.backgroundColor="#E0E0E0";
  
  /* Salvando alterações */  


}



/* Modal que confirma sucesso de cadastro */
 function modalConfirmationNewSub() {
  const modalContainer = document.querySelector('.modalSuccess');
  const closeBackModal = document.querySelector('.backgroundModalInput')
  const backColorModal =  document.querySelector('.backgroundSuccessModal');

  modalContainer.style.display === 'none';
  if (modalContainer) {
    modalContainer.style.display = 'flex';
    
    backColorModal.style.display = 'flex';
  }
  else {
    modalContainer.style.display = 'none';

    backColorModal.style.display = 'none';
  }
  //reload p/ atualizar informações
  setTimeout(() => {
    document.location.reload();
  }, 500);
 }

 /* Fechando modal de sucesso*/

  function closeSuccessModal() {
    const modalContainer = document.querySelector('.modalSuccess');
    const mainContainer = document.querySelector('.mainContent');
    const backColorModal =  document.querySelector('.backgroundSuccessModal');
    modalContainer.style.display = 'none';
    mainContainer.style.display = 'flex';
    backColorModal.style.display = 'none';
   
  }
  /* Fechando modal de confirmação quando toca fora modal de sucesso */
  window.addEventListener('click',(event) =>{
          
    const fechaModalForaDaDiv = document.querySelector('.backgroundSuccessModal')
    if (event.target === fechaModalForaDaDiv){
        closeSuccessModal();
         
    }
})  
  

/*modal edição*/

 async function modalModifyData(id) {
  modifyingData  = id;
   modalInputsNewSubscribe();
   
const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

   /* mostrando só titulo certo */
 const titleView = document.querySelector('#modalViewTitle');    
 const titleModify = document.querySelector('#titleModalEditData');  
 const titleSubscribe = document.querySelector('#hideInModalShow');

titleView.style.display="none"
titleSubscribe.style.display="none"
titleModify.style.display="flex"

   btnSaveInputDate.style.display="none";
   modifyBtn.style.display="flex";

  const apiRequsition = await fetch(apiUrl+`/pacientes/${id}`)
  const newPatient = await apiRequsition.json();
  
  document.querySelector('#cpfUser').value = newPatient.cpf;
  document.querySelector('#nameUser').value = newPatient.name;
  document.querySelector('#dateBirthUser').value = newPatient.birth;
  document.querySelector('#emailUser').value = newPatient.email;
  document.querySelector('#userGender').value = newPatient.gender;  
  document.querySelector('#userNationality').value = newPatient.country;
  document.querySelector('#userNaturalness').value = newPatient.bornIn;
  document.querySelector('#userProfession').value = newPatient.job;
  document.querySelector('#userScholarity').value = newPatient.educationLevel;
  document.querySelector('#UsermaritalStatus').value = newPatient.loveStatus;
  document.querySelector('#userMotherName').value = newPatient.fatherFigure;
  document.querySelector('#userFatherName').value = newPatient.motherFigure;
  
 }

/* função async separada para pegar dados  envia-los para editar */






/* Pegando dados dos pacientes */
const getDataPatientsInApi = async () => {

  const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

      const apiRequsition = await fetch (apiUrl+'/pacientes');
      const patientSubscribe = await apiRequsition.json()
     

      const puttingDateInHtml = document.querySelector('.dataSaveHereJSDinamic');

      let dinamicHtmlJS ='';
      patientSubscribe.forEach((userDataValue)=> {
        dinamicHtmlJS = dinamicHtmlJS+ `

    
        <div class="flexIcons">
        <tr class="showIndividualData">
        
          
            <td onclick="modalShowDataUsers(${userDataValue.id})" class="topCell" id="rgPatient">${userDataValue.id}</td>
          <td onclick="modalShowDataUsers(${userDataValue.id})" class="MiddleCellStyle" id="NameCell01">${userDataValue.name}</td>
                        <td onclick="modalShowDataUsers(${userDataValue.id})" class="MiddleCellStyle" id="patientCpf">${userDataValue.cpf}</td>
          
        
                      <td class="lastCellStyle">
                              <figure class=" bordericonstyle  greenBorder">
                              <a href="./medical-record.html" target="_blank"     class="linkMedicalRecordStyle"><img src="./img/calendar-icon.svg" alt=""></a>
                              </figure>
                              <figure class="bordericonstyle blueBorder">
                              <img onclick="modalModifyData(${userDataValue.id})" src="./img/pen-edit.svg" alt=""></figure>
                              <figure class="bordericonstyle redBorder" onclick="removeUserDate(${userDataValue.id})"><img src="./img/trash-icon.svg" alt=""></figure>
                              </div>
                              </tr>
        `
        puttingDateInHtml.innerHTML = dinamicHtmlJS;
      })

    }   

/* Fazendo o método POST */

async function userDateApi(newPatient) {

  const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

  return fetch(apiUrl+'/pacientes', {
   method: 'POST',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type':'application/json'
     }, 
     body: JSON.stringify(newPatient)
 
   })
   
 } 

/* Fazendo método PUT */
const putMethod = async (id,modifyDatePatient) => {
  const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

  await fetch(apiUrl+`/pacientes/${id}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(modifyDatePatient)
  })

}

/* Fazendo o método DELETE */

async function removeUserDate (id) {
  const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

 
  await fetch(apiUrl+`/pacientes/${id}`, {
      method: 'DELETE'
  })
 //reload p/ atualizar informações
  setTimeout(() => {
    document.location.reload();
  }, 500);
} 


/* Pegando dados para modificar */
  const editDataUsers = async () =>{

    const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

    const requisition = await fetch(apiUrl+`/pacientes/${modifyingData}`)
    const editPatient = await requisition.json()


modifyingData = editPatient
/* Criando Objeto para com alterações */
const dataModifyValue = {   

    cpf:cpfValue.value,
    name:nameValue.value,
    birth:birthValue.value,
    email:emailValue.value,
    gender:genderValue.value,
    country:userCountry.value,
    bornIn:whereUserBorn.value,
    job:profession.value,
    educationLevel:schoolLevel.value,
    loveStatus:relationshipStatus.value,
    fatherFigure:momName.value,
    motherFigure:dadName.value,
  }
  console.log(modifyingData.id)
  console.log(dataModifyValue)
  /* Salvando alterações Feitas */
   

   if(modifyingData) {
    putMethod(modifyingData.id,dataModifyValue)
} else {
    userDateApi(dataModifyValue)
}
//reload p/ atualizar informações
setTimeout(() => {
  document.location.reload();
}, 1000);

  }



    



 
/* Função que pega os dados colocados pelos usuários da página de paciente */
async function sendingUserDate () {
  
  const cpfValue = document.querySelector('#cpfUser');
  const nameValue = document.querySelector('#nameUser');
  const birthValue = document.querySelector('#dateBirthUser');
  const emailValue = document.querySelector('#emailUser');
  const genderValue = document.querySelector('#userGender');
  const userCountry = document.querySelector('#userNationality');
  const whereUserBorn = document.querySelector('#userNaturalness');
  const profession = document.querySelector('#userProfession');
  const schoolLevel = document.querySelector('#userScholarity');
  const relationshipStatus = document.querySelector('#UsermaritalStatus');
  const momName = document.querySelector('#userMotherName');
  const dadName = document.querySelector('#userFatherName');

const newPatient = {
     id:"",
     cpf:cpfValue.value,
     name:nameValue.value,
     birth:birthValue.value,
     email:emailValue.value,
     gender:genderValue.value,
     country:userCountry.value,
     bornIn:whereUserBorn.value,
     job:profession.value,
     educationLevel:schoolLevel.value,
     loveStatus:relationshipStatus.value,
     fatherFigure:momName.value,
     motherFigure:dadName.value,

  }
    console.log(newPatient);
  await userDateApi(newPatient);  

}

/* chamando funções e colocando observadores*/
btnSaveInputDate.addEventListener('click',sendingUserDate); 
getDataPatientsInApi(); 
modifyBtn.addEventListener('click',editDataUsers);



