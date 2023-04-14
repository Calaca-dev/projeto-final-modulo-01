const cardElementTable = document.querySelector('.mainContent');
const btnSaveInputDate = document.querySelector('.salveBtn');
const formDate = document.querySelector('.formModal')
const modifyBtn = document.querySelector('.btnToEditDate');

function changeInputs() {
  const hideNameEmailCard = document.querySelector('.subscribeCard');
  hideNameEmailCard.style.display = "none";
  const showPaswordCard = document.querySelector('.cardPasssword');
  showPaswordCard.style.display = "block"

}

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
/* Função do modal de novo cadastro */

function modalInputsNewSubscribe() {
  const modalContainer = document.querySelector('.newSubscribeModal');
  
  const backColorModal =  document.querySelector('.backgroundModalInput');
  modalContainer.style.display === 'none';
  if (modalContainer) {
    modalContainer.style.display = 'flex';
    
    backColorModal.style.display = 'flex';
  }
  else {
    modalContainer.style.display = 'none';

    backColorModal.style.display = 'none';
  }

}

/* Função do modal edição */

 function modalModifyData() {
  modalInputsNewSubscribe();
  btnSaveInputDate.style.display="none";
  modifyBtn.style.display="flex";

 }

function closeModal() {
  const modalContainer = document.querySelector('.newSubscribeModal');
  const mainContainer = document.querySelector('.mainContent');
  const backColorModal =  document.querySelector('.backgroundModalInput');
  modalContainer.style.display = 'none';
  mainContainer.style.display = 'flex';
  backColorModal.style.display = 'none';

}
  


/* Pegando dados dos pacientes */
const getDataPatientsInApi = async () => {
      const apiRequsition = await fetch ('http://localhost:3000/pacientes');
      const patientSubscribe = await apiRequsition.json()
     /* pegando id p/ colocar os dados salvo da api na tela do usuário */

   

/* pegando id do usuário */
      const puttingDateInHtml = document.querySelector('.dataSaveHereJSDinamic');
      let dinamicHtmlJS ='';
      patientSubscribe.forEach((questao)=> {
        dinamicHtmlJS = dinamicHtmlJS+ `

    
        <tr>
          <td class="topCell" id="rgPatient">${questao.id}</td>
       
        <td class="MiddleCellStyle" id="NameCell01">${questao.name}</td>
                      <td class="MiddleCellStyle" id="patientCpf">${questao.name}</td>
        
                      <td class="lastCellStyle">
                          <div class="flexIcons">
                              <figure class=" bordericonstyle  greenBorder">
                                      <a href="./medical-record.html" target="_blank" class="linkMedicalRecordStyle"><img src="./img/calendar-icon.svg" alt=""></a>
                              </figure>
                              <figure class="bordericonstyle blueBorder" ><img onclick="modalModifyData()" src="./img/pen-edit.svg" alt=""></figure>
                              <figure class="bordericonstyle redBorder" ><img src="./img/trash-icon.svg" alt=""></figure>
                              </tr>
        `
        puttingDateInHtml.innerHTML = dinamicHtmlJS;
      })

    
      
    }   


/* Fazendo o método POST */

 async function userDateApi(newPatient) {
     return fetch('http://localhost:3000/pacientes', {
      method: 'POST',
        headers: {

          'Accept': 'application/json, text/plain, */*',
          'Content-Type':'application/json'
        }, 
        body: JSON.stringify(newPatient)
    
      })
      
    } 
    
  
/* Fazendo o método PUT */
const modifyDateInput = async (id)=> {
  const apiRequsition = await fetch(`http://localhost:3000/pacientes/${id}`)
  const newPatient = await apiRequsition.json();
  document.querySelector('#cpfUser').value = newPatient.cpf;
  console.log(newPatient.cpf)
  modalModifyData();

  
 }


/* mudando butão c/ js do modalinput */

/* id que está sendo atualizado */
let idAtual = null;

modifyBtn.addEventListener('click', async(date)=>{
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

  if (idAtual) {
      await modifyDateInput(idAtual,newPatient)
      idAtual=null
  }
  else {
    await modifyDateInput(newPatient)
  }

})

 

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
modifyBtn.addEventListener('click',modifyDateInput)
