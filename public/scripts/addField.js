// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão = executar uma ação
.addEventListener('click', cloneField);


function cloneField() {
    // ação: duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos. que campos?
    const fieldInputs = newFieldContainer.querySelectorAll('input');
    //para cada campo, limpar
    fieldInputs.forEach(function (fieldInput){
        //pegar o field do momento e limpa ele
        fieldInput.value = "";
        
    });

    // colocar na página. onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}

function removeField(thisButton) {

    const fields = document.querySelectorAll('.schedule-item')

    const thisField = thisButton.parentNode;

    if (fields.length > 1) {

    thisField.remove();
    
    }
}