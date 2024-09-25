const number = document.querySelectorAll(".number");
const inputDisplay = document.querySelector(".placeholder");
const remove = document.querySelector(".remove");
const removeAll = document.querySelector(".removeAll");
const equal = document.getElementById("equal");
const changeMode = document.querySelector(".fa-regular");
const container = document.querySelector(".calculator")

// numbers buttonns
document.getElementById("1").addEventListener("click", function () {
  inputDisplay.value += "1";
});
document.getElementById("2").addEventListener("click", function () {
  inputDisplay.value += "2";
});
document.getElementById("3").addEventListener("click", function () {
  inputDisplay.value += "3";
});
document.getElementById("4").addEventListener("click", function () {
  inputDisplay.value += "4";
});
document.getElementById("5").addEventListener("click", function () {
  inputDisplay.value += "5";
});
document.getElementById("6").addEventListener("click", function () {
  inputDisplay.value += "6";
});
document.getElementById("7").addEventListener("click", function () {
  inputDisplay.value += "7";
});
document.getElementById("8").addEventListener("click", function () {
  inputDisplay.value += "8";
});
document.getElementById("9").addEventListener("click", function () {
  inputDisplay.value += "9";
});
document.getElementById("0").addEventListener("click", function () {
  inputDisplay.value += "0";
});
document.getElementById("dot").addEventListener("click", function () {
  inputDisplay.value += ".";
});

//actions
document.getElementById("plus").addEventListener("click", function () {
  inputDisplay.value += "+";
});
document.getElementById("minus").addEventListener("click", function () {
  inputDisplay.value += "-";
});
document.getElementById("mult").addEventListener("click", function () {
  inputDisplay.value += "*";
});
document.getElementById("div").addEventListener("click", function () {
  inputDisplay.value += "/";
});
document.getElementById("per").addEventListener("click", function () {
  inputDisplay.value += "%";
});

//clear btn
removeAll.addEventListener("click", function () {
  inputDisplay.value = "";
});
remove.addEventListener("click", function () {
  inputDisplay.value.slice(0, -1);
});

//eval method
equal.addEventListener("click", function () {
  inputDisplay.value = eval(inputDisplay.value);
});
const calc = document.querySelector(".calculator");


const darkMode = function () {
  calc.style.backgroundColor="black";
  inputDisplay.style.backgroundColor="black";
  inputDisplay.style.boxShadow="rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px";
for (let index = 0; index < number.length; index++) {

  number[index].style.boxShadow="rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px";
  number[index].style.backgroundColor = "black"
  number[index].style.color = "#fff"
}
inputDisplay.style.color = "#fff"
changeMode.style.color = "#fff"
};


// changeMode.addEventListener("click", darkMode);

// const lightMode = function () {
  //   calc.style.backgroundColor="white";
  //   inputDisplay.style.backgroundColor="white";
  //   inputDisplay.style.boxShadow="rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px";
  //   for (let index = 0; index < number.length; index++) {
    
  //     number[index].style.boxShadow="rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px";
  //     number[index].style.backgroundColor = "white"
  //     number[index].style.color = "#000"
  //   }
  //   inputDisplay.style.color = "#000"
  // };
  // changeMode.addEventListener("click", lightMode);
  
  
  
  
  
  
  //!tried solve using another method but researched equal method
  //! I will continue this method later
  
  // let inputArray = [];
  // let inputStr = "";
  // for (let index = 0; index < number.length; index++) {
    //   number[index].addEventListener("click", function () {
//     inputDisplay.value += number[index].value;
//     inputArray.push(number[index].value);
//   });
// }

// for (let index = 0; index < number.length; index++) {
  //   number[index].addEventListener("click", function () {
    //     inputDisplay.value += number[index].value;
    //     inputStr += number[index].value;
    //   });
    // }
    
    // const deleteNumber = function () {
      //   inputDisplay.value = inputStr.slice(0, -1);
      //   inputStr = "";
      // };
      
      // const deleteAll = function () {
        //   inputDisplay.value = "";
        //   inputStr = "";
        // };
        
        // remove.addEventListener("click", deleteNumber);
        // removeAll.addEventListener("click", deleteAll);
        
        function toggleDarkMode() {
          container.classList.toggle('dark-mode');

        }
        changeMode.addEventListener("click",toggleDarkMode);