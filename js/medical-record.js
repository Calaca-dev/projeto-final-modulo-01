const apiUrl = 'https://projeto-modulo-um-arnia.onrender.com';

//modal do header que abre o bubblue
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
})  
 //abre modal de adicionar um nova sessão 

  function modalNewSectionMr(){
    const modalContainer = document.querySelector('.modalNewSection');
    const backColorModal =  document.querySelector('.backgroundModalInputMr');
    
    if (modalContainer) {
        modalContainer.style.display = 'flex';
        
        backColorModal.style.display = 'flex';
      }
      else {
        modalContainer.style.display = 'none';
    
        backColorModal.style.display = 'none';
        
      }
    
    }

    /* Fecha modal  protuário*/
function closeModalMr(){
    const fechaModalForaDaDiv4 = document.querySelector('.backgroundModalInputMr');
    fechaModalForaDaDiv4.style.display="none"
  }
  /* fechando modal do protuário fora da janela */
  window.addEventListener('click',(event) =>{
     
    const fechaModalForaDaDiv4 = document.querySelector('.backgroundModalInputMr');
   
    if (event.target === fechaModalForaDaDiv4){
  
        fechaModalForaDaDiv4.style.display="none"
    }
  })  
  /* Fecha modal do fato relevante */
  function closeModalRf(){
    const fechaModalForaDaDiv = document.querySelector('.backgroundModalRf');
    fechaModalForaDaDiv.style.display="none"
  }
  /* fechando modal do protuário fora da janela */
  window.addEventListener('click',(event) =>{
     
    const fechaModalForaDaDiv= document.querySelector('.backgroundModalRf');
   
    if (event.target === fechaModalForaDaDiv){
  
        fechaModalForaDaDiv.style.display="none"
    }
  })  

  function modalRf() {
    document.querySelector('.backgroundModalRf').style.display="flex"

    
  }
// pegando dados da nova sessão que vai ser cadastrada para cadastrar na api   
  async function newSectionData() {
    const dateWhas = document.querySelector('#dateDayMonthYear');
    const begning = document.querySelector('#initialTime');
    const ending = document.querySelector('#endTime');
    const title = document.querySelector('#sectionTitle');
    const notesSection = document.querySelector('#notes');
    const moneyValue = document.querySelector('#howMuchMoney');
    const payType = document.querySelector('#paymentType');
    const chargeOrNot= document.querySelector('[name=debt]:checked')
  
  
    const dataNewSection = {
  
      dateValue: dateWhas.value,
      starTime: begning.value,
      finishTime: ending.value,
      titleValue: title.value,
      notesValue: notesSection.value,
      cashValue: moneyValue.value,
      valueType: payType.value,
      debt: chargeOrNot.value,
      
    }
    
    console.log(dataNewSection)
    await makingPostMedicalRecordPage(dataNewSection)
  
    setTimeout(() => {
        document.location.reload();
      }, 500); 
  }

/* Pegando dados do fato relevante que vai ser cadastrada na api */

async function newRelevantFact() {

  console.log("inicio");
  const date = document.querySelector('#dateOfSection');
console.log("rodou")  ;
  const titleRf = document.querySelector('#titleRf');
console.log("rodou");
  const notesRf = document.querySelector('#keyPoint');
console.log("rodou");

  const revelantFactData = {
    dateValue:date.value,
    titleValue:titleRf.value,
    sectionNotes:notesRf.value,

}
  console.log("meio");
  console.log(revelantFactData)
  await saveDataOfRf(revelantFactData)

  setTimeout(() => {
      document.location.reload();
    }, 500); 
  console.log("fim");
}

//   Fazendo o método POST para salvar ás informações da sessão .
  async function makingPostMedicalRecordPage(newSectionData) {
    return fetch(apiUrl+'/prontuarioSessao', {
        method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
          }, 
          body: JSON.stringify(newSectionData)
      
        })
  }

/* Fazendo o método POST para salvar ás informações dos fatos relevantes  */

async function saveDataOfRf(rfCardData) {
  return fetch(apiUrl+'/FatoRelevante', {
      method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type':'application/json'
        }, 
        body: JSON.stringify(rfCardData)
    
      })
}
  
  const addHtmlRf = async ()=> {

    const apiRequsition = await fetch(apiUrl+'/FatoRelevante');
     const addPatienRf = await apiRequsition.json();

console.log("aaaa")
    const addingCardRf = document.querySelector('.dinamicRelevantFact');
    let addingRf ='';
console.log("aaaa")   
    addPatienRf.forEach((userRelevantFact)=>{
      addingRf = addingRf+ `    
      </div>
  </div>
  <div class="bodyCard">
      <p>Fato Relevante</p>
  </div>
</div>

<div class="flexCardPatientRelevantFact">
<div>
    <div class="fixedIcon">
        <div class="bgIconRelevantFact">
            <figure><img src="./img/thumb-tacks-fact.png" alt="" class="imgFactStyle"></figure>
        </div>
    </div>
    <div class="dotsFlex">   
    <button class="dotsToOpenModal"><img src="./img/dots-icon.png" alt=""></button>      
    </div>
    <div class="patientSection">
        <div class="flexTopSection">
            <h3 class="txtTitleDescription">${userRelevantFact.titleValue}</h3>
            <p class="txtDescription">${userRelevantFact.dateValue}</p>
        </div>
    </div>
</div>
<div class="bodyCard">
    <p>A paciente Saiu no meio da sessão</p>
</div>
</div>
</div>`
addingCardRf.innerHTML = addingRf;
})
console.log("aaaa")

  }
  
  const addHtml = async () =>{
  
  /*   const apiURL = verifcar qual é a url atual; */

     const apiRequsition = await fetch(apiUrl+'/prontuarioSessao');
     const addPatienSection = await apiRequsition.json();


    const addingHtml = document.querySelector('.positionOfDinamicContent');
    let addingSection ='';
  
    addPatienSection.forEach((userNewSection)=>{
      addingSection = addingSection + `
 
  
  <div class="flexCardPatient" onclick="showMedicalRecord()"(${userNewSection.id})">
    <div>   
        <div class="fixedIcon">
            <div class="bgIcon">
                <figure><img src="./img/icon-section.png" alt=""></figure>
            </div>
        </div>
       <div class="dotsFlex">   
       <button class="dotsToOpenModal"><img src="./img/dots-icon.png" alt=""></button>      
       </div>
        <div class="patientSection">
            <div class="flexTopSection">
                <h3 class="txtTitleDescription">${userNewSection.titleValue}</h3>
                <p class="txtDescription">${userNewSection.dateValue}</p>
            </div>
         
        </div>
    </div>
    <div class="bodyCard">
        <p>${userNewSection.notesValue}</p>
    </div>
  </div>
  
      `
      addingHtml.innerHTML = addingSection;
     
    })
    }

   function showMedicalRecord(){
      const toVanish = document.querySelector('#toNotDisplay')
      const toVanishContent = document.querySelector('#vanishContent')
      const apperBtn = document.querySelector('.backMrPart')
      const apperCardRm = document.querySelector('.sectionCard')
      
      toVanish.style.display="none"
      toVanishContent.style.display="none"
      apperBtn.style.display="flex"
      apperCardRm.style.display="flex"
      
    }

  function vinishMedicalRecord(){
    const toVanish = document.querySelector('#toNotDisplay')
    const toVanishContent = document.querySelector('#vanishContent')
    const apperBtn = document.querySelector('.backMrPart')
    const apperCardRm = document.querySelector('.sectionCard')
    
    toVanish.style.display="flex"
    toVanishContent.style.display="flex"
    apperBtn.style.display="none"
    apperCardRm.style.display="none"
  }


    document.querySelector('.ModalMedicalRecordBtn').addEventListener('click', addHtml)
    /* chamando função para renderizar na tela os card's de sessão */
     addHtml(); 
       /* chamando função para renderizar na tela os card's  do fato relevante*/
     addHtmlRf();