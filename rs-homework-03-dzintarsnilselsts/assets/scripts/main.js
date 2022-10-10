// window.addEventListener("click", (Event) => {
//     console.log("click")
// });

const minValue = document.querySelector(".min-value");
const maxValue = document.querySelector(".max-value");
const btnFizz = document.querySelector(".btn-fizz");
const btnBuzz = document.querySelector(".btn-buzz");
const btnFizzBuzz = document.querySelector(".btn-fizzbuzz");
const btnRefresh = document.querySelector(".btn-refresh");
const btnReset = document.querySelector(".btn-reset");

const Fizz = document.getElementsByClassName('Fizz')
const Buzz = document.getElementsByClassName('Buzz');
const FizzBuzz = document.getElementsByClassName('FizzBuzz')
const Empty = document.getElementsByClassName("Empty")

minValue.value = 1;
maxValue.value = 100;
btnFizz.value = 3;
btnBuzz.value = 5;

let box = document.querySelector(".box");
for (let index = 1; index <= 100; index++) {
    let div = document.createElement("div_");
    let p = document.createElement("p");
    p.innerHTML = "div";
    div.appendChild(p);
    box.appendChild(div).setAttribute("id", "div_" + index);

        if (index % 3 === 0 && index % 5 === 0){
            p.setAttribute("id", "p" + index);
            p.setAttribute("class", "FizzBuzz");
            p.innerHTML = index + " FizzBuzz";
        }
        else if (index % 3 === 0 && index % 5 !== 0) {
            p.setAttribute("id", "p" + index);
            p.setAttribute("class", "Fizz");
            p.innerHTML = index + " Fizz";    
        }
        else if (index % 5 === 0 && index % 3 !== 0){
            p.setAttribute("id", "p" + index);
            p.setAttribute("class", "Buzz");
            p.innerHTML = index + " Buzz";  
        }
        else if (index % 3 !== 0 && index % 5 !== 0){
            p.setAttribute("id", "p" + index);
            p.setAttribute("class", "Empty");
            p.innerHTML = index; 
        }
    }



btnFizz.addEventListener("click", () =>{       // Fizz btn
    console.log("fizz has been pushed")
    for (const B of Buzz){;
        B.style.display = "none";
        }
    for (const FB of FizzBuzz){;
        FB.style.display = "none";
        }
    for (const E of Empty){;
        E.style.display = "none";
        }
})



btnBuzz.addEventListener("click", () =>{       // Buzz btn
    console.log("buzz has been pushed");
    for (const F of Fizz){;
        F.style.display = "none";
        }
    for (const FB of FizzBuzz){;
        FB.style.display = "none";
        }
    for (const E of Empty){;
        E.style.display = "none";
        }
    
})

btnFizzBuzz.addEventListener("click", () =>{       // FizzBuzz btn
    console.log("fizzbuzz has been pushed")
    for (const F of Fizz){;
        F.style.display = "none";
        }
    for (const B of Buzz){;
        B.style.display = "none";
        }
    for (const E of Empty){;
        E.style.display = "none";
        }
})

btnReset.addEventListener("click", () =>{       // reset btn
    console.log("reset has been pushed")
    box.style.display = "none";
})

btnRefresh.addEventListener("click", () =>{       // refresh btn
    console.log("refresh has been pushed")
    location.reload();
    minValue.value = 1;
    maxValue.value = 100;
})