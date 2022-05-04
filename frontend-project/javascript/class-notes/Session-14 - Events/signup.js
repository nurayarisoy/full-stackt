let lastNameInput = document.getElementsByName("last_name")[0];
console.log(lastNameInput);

let span = document.querySelector("#charCount");
console.log(span);

const showRemainChar = () => {
    span.innerText = lastNameInput.value.length + "/40";
}

lastNameInput.addEventListener("keyup", showRemainChar);

let date = document.getElementsByName("birthday")[0];
date.addEventListener("change", ()=>{
    alert(date.value);
});

let selectBox = document.querySelector("#paths");
const getSelectedItem = () =>{
    let selectedName = selectBox.options[selectBox.selectedIndex].innerText;
    alert(selectedName);
}
selectBox.onchange = getSelectedItem;
