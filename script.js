function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }


function submit (){
var checkboxvalue = []
var inputOne = document.querySelector("#firstName").value
var inputTwo= document.querySelector("#lastName").value
var inputThree= document.querySelector("#address").value
var inputFour= document.querySelector("#pincode").value
var inputFive= document.querySelector("#gender").value
var inputSix= document.querySelector("#state").value
var inputSeven= document.querySelector("#country").value

if (document.querySelector("#check1").checked) {
   checkboxvalue.push(document.querySelector("#check1").value)
}
if (document.querySelector("#check2").checked) {
   checkboxvalue.push(document.querySelector("#check2").value)
}
if (document.querySelector("#check3").checked) {
   checkboxvalue.push(document.querySelector("#check3").value)
}
if (document.querySelector("#check4").checked) {
   checkboxvalue.push(document.querySelector("#check4").value)
}
if (document.querySelector("#check5").checked) {
   checkboxvalue.push(document.querySelector("#check5").value)
}
var tableElement =  document.querySelector("#table")
    var row = tableElement.insertRow()
    var td1 = row.insertCell(0)
    var td2 = row.insertCell(1)
    var td3 = row.insertCell(2)
    var td4 = row.insertCell(3)
    var td5 = row.insertCell(4)
    var td6 = row.insertCell(5)
    var td7 = row.insertCell(6)
    var td8 = row.insertCell(7)
    td1.innerText = inputOne
    td2.innerText = inputTwo
    td3.innerText = inputThree
    td4.innerText = inputFour
    td5.innerText = inputFive
    td6.innerText = checkboxvalue
    td7.innerText = inputSix
    td8.innerText = inputSeven

}












 
// var  check1 = document.querySelector("#check1")
//  var  check2 = document.querySelector("#check2")
//  var  check3 = document.querySelector("#check3")
//  var  check4 = document.querySelector("#check4")
//  var  check5 = document.querySelector("#check5")

//  var checkval = []

//  check1.addEventListener("checked" ,function(){
//     if (check1.checked) {
//         checkval.push(check1.value)
//     }
//  })

//  function sample (){
//      c
//      }
//      if (check2.checked) {
//         checkval.push(check2.value)
//     }
//     if (check3.checked) {
//         checkval.push(check3.value)
//     }
//     if (check4.checked) {
//         checkval.push(check4.value)
//     }
//     if (check5.checked) {
//         checkval.push(check5.value)
//     }
//  }
// console.log(checkval)
 
 


//var buttonOne = document.querySelector("#subButton")


       
    //   function validate (form){
    //     var total = ""
    //       for(i=0;i<document.form1.scripts.length;i++)
    //       {
    //           if(document.form1.scripts[i].checked)
    //           total += document.form1.scripts[i].value + '\n'
    //       }
    //       if (total<2) 
    //           alert('select atleast two food items')
    //           else
    //            alert(total)
    //          return false
              
          
    //   }
       






// buttonOne.addEventListener("click", function(){ 
//       var tableElement =  document.querySelector("#table")
//     var row = tableElement.insertRow()
//     var td1 = row.insertCell()
//     td1.innerText = inputOne.value
//     var td2 = row.insertCell()
//     td2.innerText = inputTwo.value
//     var td3 = row.insertCell()
//     td3.innerText =  inputThree.value
//     var td4 = row.insertCell()
//     td4.innerText = inputFour.value
//     var td5 = row.insertCell()
//     td5.innerText = inputFive.value
//    //  var favfoodopt = document.querySelector("#favFood")
//    //  var selectedFood = document.querySelectorAll("#favFoodid")
//    //  selectedFood.innerText= favfoodopt.selected
//     var td6 = row.insertCell()
       
       
        
    
//    //  td6.innerText=selectedFood.value
    
//     var td7 = row.insertCell()
//     td7.innerText = inputSix.value
//     var td8 = row.insertCell()
//     td8.innerText = inputSeven.value   
    
    


    
// })


// const checkNumber = (n1) => {

//     return new Promise((resolved , rejected) => {

// if (n1>10){
//     resolved("number is greater")
// }
// else{
//     rejected("n1 is smaller than 10")
// }

//     })
// }



// console.log(checkNumber(11))







// const getUserData = (n1) => {
//     return new Promise ((resolved,rejected) => {
// if(n1="sakthi"){
// resolved("goldCustomer")
// }
// else
// {
//     rejected("not customer match")
// }

//     })
// }
 

// const getCost = (n1) => {
//     return new Promise ((resolved,rejected) => {
// if(n1="goldCustomer"){
// resolved("freeService")
// }
// else
// {
//     rejected("not valid customer")
// }

//     })
// }
 

// const getService = (n1) => {
//     return new Promise ((resolved,rejected) => {
// if(n1="freeService"){
// resolved("List of services: best offer, speed deleiver")
// }
// else
// {
//     rejected("not customer match")
// }

//     })
// }
 
// getUserData("sakthi")
// .then( 
//     data => {console.log(data)
//     return data
//     }
// )

