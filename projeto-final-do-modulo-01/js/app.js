function changeInputs() {
  const hideNameEmailCard = document.querySelector('.subscribeCard'); 
  hideNameEmailCard.style.display="none";
  const showPaswordCard = document.querySelector('.cardPasssword');
  showPaswordCard.style.display="block"
  
}

function changeArrowAndOpenModal() {
  const iconArrowDown = document.querySelector('#arrowDownStyle');
    const iconArrowUp = document.querySelector('#arrowUpStyle')
    const dropDownIsOpen = iconArrowDown.style.display==='none';
  
      
    if (dropDownIsOpen) {
      iconArrowDown.style.display="inline-block";
      iconArrowUp.style.display="none";

      
    }
    else {
      iconArrowDown.style.display="none";
      iconArrowUp.style.display="inline-block";
    }
   
    bubblueModalOpenClose();
  }
   

  function bubblueModalOpenClose() {
    const modalbubble = document.querySelector('.bubblueLogOut');
    const dropDownIsOpen = modalbubble.style.display==='block';
  
    if (dropDownIsOpen){
        modalbubble.style.display="none"
    }
    else {
      modalbubble.style.display="block"
    }


  }


  function modalInputsNewSubscribe() {
    const modalContainer = document.querySelector('.newSubscribeModal');
    const mainContainer = document.querySelector('.mainContent');
    modalContainer.style.display==='none';
    if (modalContainer) {
      modalContainer.style.display='flex';
      mainContainer.style.display='none';
    }
    else {
      modalContainer.style.display='none';
      mainContainer.style.display='flex';
    }

    console.log(mainContainer.style.display)
    console.log(modalContainer.style.display)
  }