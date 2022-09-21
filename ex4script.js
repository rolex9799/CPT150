// function submitForm(){

//     let form = document.getElementById("form_submit");
//     form.submit();


// }

function divide(){

    let a = document.formSubmit.numberA.value;
    let b = document.formSubmit.numberB.value;
    let c = a/b;   
    document.formSubmit.result.value = c;
    alert(c);

    let primeNumber = true;

    if (c == 1){
        alert("The number is less than 2!");
    } else if (c > 1){
    
        for (let i = 2; i < c; i++){
    
            if (c % i == 0){
                primeNumber = false;
            }
        }
        if (primeNumber){
        
            alert(c + " is a prime number");
        
        }else{
            alert(c + " is not a prime number");
        }
        
    }else {
        alert("This is not a prime number");
    }
    }

    divide();



