let billamount = document.getElementById("billamount").value,
  tipPercentage = document.getElementById("tipPercentage").value,
  tipAmount = document.getElementById("tipAmount"),
  totalBill = document.getElementById("totalBill"),
  total = document.querySelector("#total"),
  clear = document.querySelector("#clear"),
  inputs = document.querySelectorAll("input");

// console.log(button)

total.addEventListener("click", () => {
  let billamount = document.getElementById("billamount").value,
    tipPercentage = document.getElementById("tipPercentage"),
    tipAmount = document.getElementById("tipAmount"),
    totalBill = document.getElementById("totalBill");

  tipAmount.value = (billamount / 100) * tipPercentage.value;
  totalBill.value = parseFloat(billamount) + parseFloat(tipAmount.value);
  
//   calling function to reset the fields 

  reset()
});

// button event to clear the data 

// clear.addEventListener("click", () => {
//     window.location.reload();
//     Array.from(inputs).forEach((Element) => {
//         Element.value = "";
//     });
       
    
// });

// function to auto clear the data after 2 seconds
function reset(){
    setTimeout(()=>{
        Array.from(inputs).forEach(Element=>{
            Element.value = ""
        })
    },2000)
}
