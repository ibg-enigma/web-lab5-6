function logIn(evt) {
    deleteHidden();
    fields = document.getElementsByClassName('field');
    for (let elem of fields) {
        if (elem.value.trim() == '') {
            let errorMsg = document.createElement('div');
            errorMsg.className = 'hide';
            errorMsg.textContent = 'Empty field';
            errorMsg.style.color = 'red';
            console.log(elem);
            elem.after(errorMsg);
            
        }
    }
}

function deleteHidden() {
    hidden = document.getElementsByClassName('hide');
    console.log(hidden.length);
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].remove();
    }
}