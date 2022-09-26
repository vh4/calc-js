const button = document.querySelectorAll('.button')

const kalkulator = {
    displayNumber:'0',
    firstNumber:null,
    isWaiting:false,
    operation:null
}

function DisplayNumber(){
    document.querySelector("#displaydata").innerText = kalkulator.displayNumber;
}

function clearCalculator(){
    kalkulator.displayNumber = '0',
    kalkulator.firstNumber =null,
    kalkulator.isWaiting =false,
    kalkulator.operation =null
}

function inputDisplay(digit){
    if(kalkulator.displayNumber == '0'){
        kalkulator.displayNumber = digit
    }else{
        kalkulator.displayNumber += digit
    }
    
}

function operasi(operation){
    if(!kalkulator.isWaiting){
        console.log("is waitininggg ")
        kalkulator.operation = operation
        kalkulator.isWaiting = true //agar operasi dilakukan sekali saja, tidak berulang kali 1 + 1 + 1...
        kalkulator.firstNumber = kalkulator.displayNumber

         // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
         kalkulator.displayNumber = '0';
    }else{
        alert('Operator sudah ditetapkan');
    }
}

function performCalculation(){
    if (kalkulator.firstNumber == null || kalkulator.operation == null) {
        alert('Anda belum menetapkan operator');
        return;
      }
      let result = 0;
      if (kalkulator.operation === '+') {
        result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber);
      } else {
        result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber);
      }
     
      kalkulator.displayNumber = result;
}

function inverseNumber() {
    if (kalkulator.displayNumber === '0') {
      return;
    }
    kalkulator.displayNumber = kalkulator.displayNumber * -1;
  }

for(const tombol of button){
    tombol.addEventListener('click', (event) =>{
        const target = event.target;

        if(target.classList.contains('clear')){
            clearCalculator()
            DisplayNumber()
            return
        }

        if(target.classList.contains('bagi')){
            inverseNumber()
            DisplayNumber()
            return
        }

        if(target.classList.contains('operasi')){
            operasi(target.innerText)
            return
        }

        if (target.classList.contains('same')) {
            performCalculation();
            DisplayNumber();
            return;
          }
          inputDisplay(target.innerText)
          DisplayNumber();

    })
}