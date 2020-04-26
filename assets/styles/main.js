alert("Hello, welcome to my website!");

const website = {
    comment: null,
    Nama: null,
    Email: null,
    Website: null,
 };
  
 function updateDisplay() {
    document.querySelector("#comment").innerText = website.comment;
 }
 function inputComment(com) {
    if (website.comment === null) {
            website.comment = com;
        }
 }
  
 function performComment() {
    if (website.comment == null || website.Nama == null || website.Email == null || website.Website == null) {
        alert("Silahkan diisi semua!");
        return;
    }
    let result = 0;
    if (website.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }

    // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
    const history = {
        com: website.firstNumber,
        name: website.displayNumber,
        email: website.operator,
        Website: website.Website,
        result:result

    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
 }
  
  
 const buttons = document.querySelectorAll(".button");
 for (let button of buttons) {
    button.addEventListener('click', function(event) {
  
        // mendapatkan objek elemen yang diklik
        const target = event.target;
  
        if (target.classList.contains('submit')) {
            performCalculation();
            updateDisplay();
            return;
        }
  
        inputDigit(target.innerText);
        updateDisplay()
    });
 }