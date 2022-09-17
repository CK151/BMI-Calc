/* BMI -Kg /m^2
Normal -18.5 - 24.9
underweight - < 18.5
overweight - 25 - 29.9
Obese - >= 30*/

"use strict";

const btn = document.querySelector(".btn"),
 form = document.querySelector("form"),
 reset = document.querySelector(".reset"),
 result = document.querySelector(".result"),
 heightInput = document.getElementById("height"),
 weightInput = document.getElementById("weight");

 form.addEventListener("submit", validateInput);

function validateInput(e) {
    e.preventDefault();

    let height = heightInput.value;
    let weight = weightInput.value;
    

    //display reset button
    reset.style.display = "block";
    result.style.display = "block";


    //validate input

    if (height === "") {
        return result.textContent = "Please enter a valid height!"
    }
    else if (weight == "") {
        return result.textContent = "Please enter a valid weight!"
    }
    else {
        result.innerHTML = `
          <div class="loader-div">
             <img class="loader" src="./images/loader.gif" alt="loading..">
          </div>
        `
        setTimeout(() => {
            calcuclateBMI(height, weight);
        }, 1000);
        
        
    }
}

//calculate BMI

function calcuclateBMI(height, weight) {
    height = height / 100;

    let Bmi = (weight / Math.pow(height, 2)).toFixed(1);
    console.log(Bmi);

    //Categorized results

    if (Bmi < 18.5) {
        showResult("Underweight: " + Bmi, "orange")
    }

    else if (Bmi >= 18.5 && Bmi < 24.9) {
        showResult("Normal: " + Bmi, "green")
    }

    else if (Bmi >= 25.0 && Bmi < 29.9) {
        showResult("Overweight: " + Bmi, "purple")
    }

    else {
        showResult("Obese: " + Bmi, "red")
    }

}


//show results

function showResult(val, color) {
    result.style.backgroundColor = color;
    return result.innerHTML = val
}


reset.addEventListener("click", () => {
    form.reset()
    result.style.display = "none"
    reset.style.display = "none"
})