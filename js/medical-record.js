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

    /* fecha modal  protuário*/
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

// pegando dados para cadastrar na api   
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
  
  /*   setTimeout(() => {
        document.location.reload();
      }, 500); */
  }
//   Fazendo o método POST salvar ás    informações.
  async function makingPostMedicalRecordPage(newSectionData) {
    return fetch('http://localhost:3000/prontuarioSessao', {
        method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
          }, 
          body: JSON.stringify(newSectionData)
      
        })
  }
  
  const addHtml = async () =>{

    const apiURL = 'https://projeto-final-arnia-api.onrender.com/';

     const apiRequsition = await fetch(apiURL+'/prontuarioSessao');
     const addPatienSection = await apiRequsition.json();


    const addingHtml = document.querySelector('.positionOfDinamicContent');
    let addingSection ='';
   
    addPatienSection.forEach((userNewSection)=>{
      addingSection = addingSection + `
      <div class="mainAdd">
      <hr class="alineSection">
      <span>Filtrar por:</span>Todos<span><i class="fa-solid fa-caret-down arrowStyle"></i></span>
  </div>
  
  
  
  <div class="flexCardPatient">
    <div>   
        <div class="fixedIcon">
            <div class="bgIcon">
                <figure><img src="./img/icon-section.png" alt=""></figure>
            </div>
        </div>
        <div class="patientSection">
            <div class="flexTopSection">
                <h3 class="txtTitleDescription">${userNewSection.titleValue}</h3>
                <p class="txtDescription">${userNewSection.dateValue}</p>
            </div>
            <button class="dotsToOpenModal"><img src="./img/dots-icon.png" alt=""></button>
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