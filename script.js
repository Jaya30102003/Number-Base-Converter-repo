//Accessing all the ids from the index.html
var txtNumber = document.getElementById('txtNumber');
var baseDDL = document.getElementById('base');
var convertBtn = document.getElementById('btnConvert');
var spanEl = document.getElementById('convertedValue');

//initialising a function to be provoken upon clicking the button
convertBtn.addEventListener('click',function(){
    let num = +txtNumber.value;
    let base = +baseDDL.value;
    if(isNaN(num)){
        spanEl.textContent = 'Please enter a valid number';
        spanEl.style.color = '#EF5350';
    }
    else{
        let convertedValue = num.toString(base);
        spanEl.textContent = convertedValue.toUpperCase();
        spanEl.style.color = '#81C784';
        spanEl.style.fontWeight = 'bold';
    }     
})
