const idtheme1 = document.getElementById("theme1");
const idtheme2 = document.getElementById("theme2");
const idtheme3 = document.getElementById("theme3");
const divdestheme = document.querySelector(".Letheme")
const divtheme1  = document.querySelector(".Theme1")
const divtheme2  = document.querySelector(".Theme2")
const divtheme3 = document.querySelector(".Theme3")
const bady = document.querySelector(".body1");
const input = document.getElementById("input");
const divdesbuttons = document.querySelector(".Divnumber")
const lesbuttons = document.querySelectorAll(".btn1")
const span = document.querySelector(".span")
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const text = document.querySelector(".texte")
const buttonsdelete = document.querySelector(".delete")
const egalebuttons = document.querySelector(".btnegale")
const resetbuttons = document.querySelector(".Reset")
const laclassinput = document.querySelector(".inputText")


idtheme1.addEventListener('click',function (event) {
   if(event){


    // ================= buttons et input theme2 ================================
    input.classList.remove("colorinput2")
    divdesbuttons.classList.remove("colorpourladivdesbuttons")  
    for (let i = 0; i < lesbuttons.length; i++) {
      lesbuttons[i].classList.remove("colordesbuttons")
     }  
     span.classList.remove("colortext")
     span1.classList.remove("colortext")
     span2.classList.remove("colortext")
     span3.classList.remove("colortext")
     text.classList.remove("colortext")
     resetbuttons.classList.remove("deletecolor")
     buttonsdelete.classList.remove("deletecolor")
     egalebuttons.classList.remove("egalebuttons")
   // ================= buttons et input theme2 ================================


  //  =================================pour le theme3 ===============================
   for (let i = 0; i < lesbuttons.length; i++) {
    lesbuttons[i].classList.remove("colortheme3")
   } 
   for (let i = 0; i < lesbuttons.length; i++) {
    lesbuttons[i].classList.remove("buttonsbacgroudtheme3")
   } 
   span.classList.remove("colortheme3")
   span1.classList.remove("colortheme3")
   span2.classList.remove("colortheme3")
   span3.classList.remove("colortheme3")
   text.classList.remove("colortheme3")
   input.classList.remove("bacgroudtheme3")
   resetbuttons.classList.remove("resestheme3")
   buttonsdelete.classList.remove("resestheme3")
   divdesbuttons.classList.remove("bacgroudtheme3")
   egalebuttons.classList.remove("egalecolortheme3")
  //  =================================pour le theme3 ===============================




    // ================== pour les boby ===============================
    bady.classList.remove("bodynext3")
    bady.classList.add("bodynext")
    bady.classList.remove("bodynext2")
    bady.classList.add("bodynext")
    // ================== pour les boby ===============================


    // ================== pour les theme ===============================
    divtheme1.classList.remove("divtheme2") 
    divdestheme.classList.remove("divtheme2")
    divtheme3.classList.remove("divtheme2")
    divtheme3.classList.remove("divtheme3")
    divtheme3.classList.remove("bacgroudtheme3")
    divdestheme.classList.remove("bacgroudtheme3")
    divtheme3.classList.remove("divbacgroud3")
    divtheme2.classList.remove("bacgroudtheme3")
    divtheme1.classList.remove("bacgroudtheme3")

    divtheme2.classList.add("divtheme1") 
    divdestheme.classList.add("divtheme1")
    divtheme3.classList.add("divtheme1")
      // ================== pour les theme ========================= 
   }

      laclassinput.classList.add("inputText1")
      laclassinput.classList.remove("inputText3")
      laclassinput.classList.remove("inputText2")

})




idtheme2.addEventListener('click',function (event) {
    if (event) {
         // ================= buttons et input theme2 ================================
        input.classList.add("colorinput2")
        divdesbuttons.classList.add("colorpourladivdesbuttons")    
        for (let i = 0; i < lesbuttons.length; i++) {
         lesbuttons[i].classList.add("colordesbuttons")
        }
        span.classList.add("colortext")
        span1.classList.add("colortext")
        span2.classList.add("colortext")
        span3.classList.add("colortext")
        text.classList.add("colortext")
        resetbuttons.classList.add("deletecolor")
        buttonsdelete.classList.add("deletecolor")
        egalebuttons.classList.add("egalebuttons")
      // ================= buttons et input theme2 ================================


      // ======================== pour les body ============================
        bady.classList.remove("bodynext3")
        bady.classList.add("bodynext2")
        bady.classList.add("bodynext")
        // ================== pour les boby ===============================


          // ================== pour les theme =========================
            divtheme1.classList.add("divtheme2") 
            divdestheme.classList.add("divtheme2")
            divtheme3.classList.add("divtheme3")
        
   
            divtheme2.classList.remove("divtheme1") 
            divdestheme.classList.remove("divtheme1")
            divtheme3.classList.remove("divtheme1")
            divdestheme.classList.remove("bacgroudtheme3")
            divtheme3.classList.remove("divbacgroud3")
            divtheme2.classList.remove("bacgroudtheme3")
            divtheme1.classList.remove("bacgroudtheme3")
         // ================== pour les theme =========================
    }

    laclassinput.classList.remove("inputText3")
    laclassinput.classList.add("inputText2")
    laclassinput.classList.remove("inputText1")
});





idtheme3.addEventListener('click',function (event) {
    if (event) {

         // ================= buttons et input theme2 ================================
             input.classList.remove("colorinput2")
             divdesbuttons.classList.remove("colorpourladivdesbuttons") 
             for (let i = 0; i < lesbuttons.length; i++) {
               lesbuttons[i].classList.remove("colordesbuttons")
              }  
              span.classList.remove("colortext") 
              span1.classList.remove("colortext")
              span2.classList.remove("colortext")
              span3.classList.remove("colortext")
              text.classList.remove("colortext")
              resetbuttons.classList.remove("deletecolor")
              buttonsdelete.classList.remove("deletecolor")
              egalebuttons.classList.remove("egalebuttons")
        // ================= buttons et input theme2 ================================

  //  =================================pour le theme3 ===============================
        for (let i = 0; i < lesbuttons.length; i++) {
          lesbuttons[i].classList.add("colortheme3")
         } 
         for (let i = 0; i < lesbuttons.length; i++) {
          lesbuttons[i].classList.add("buttonsbacgroudtheme3")
         } 

         span.classList.add("colortheme3")
         span1.classList.add("colortheme3")
         span2.classList.add("colortheme3")
         span3.classList.add("colortheme3")
         text.classList.add("colortheme3")

         input.classList.add("bacgroudtheme3")
         divdesbuttons.classList.add("bacgroudtheme3")
         resetbuttons.classList.add("resestheme3")
         buttonsdelete.classList.add("resestheme3")
         egalebuttons.classList.add("egalecolortheme3")
  //  =================================pour le theme3 ===============================




      // ================== pour les boby ===============================
        bady.classList.remove("bodynext2")
        bady.classList.add("bodynext3")
        bady.classList.add("bodynext2")
        // ================== pour les boby ===============================


          // ================== pour les theme =========================
             divdestheme.classList.add("bacgroudtheme3")
             divtheme3.classList.add("divbacgroud3")
             divtheme2.classList.add("bacgroudtheme3")
             divtheme1.classList.add("bacgroudtheme3")
          // ================== pour les theme =========================
    }
    laclassinput.classList.add("inputText3")
    laclassinput.classList.remove("inputText2")
    laclassinput.classList.remove("inputText1")
});


let inputResult = document.getElementById("input");
let btn_number = document.querySelectorAll('.btn-number');
let btn_operator = document.querySelectorAll('.btn-operation');
let clear = document.getElementById('reset');
let backspace = document.getElementById('delete');
let equal = document.querySelector("#egale");


let screenText = ""
let screenContent;
let num1 = ""
let num2 = ""
let resultFinal = 0;
let operation = ""
let operationCheck =""
let isInIfisInIfCount = 0;
let opdDive = ""
let num2Chek = ""
let checkedText2 = false;
let checkDot = false; 

btn_number.forEach((element)=>{
element.addEventListener('click',function (event) {

  let buttonText = event.target.textContent;
 
  if(!operation){     
    num1 += buttonText;
    inputResult.innerText = num1
    //temporary memory 1
    screenNum = num1;
  }else{
     num2 += event.target.textContent;
     console.log(num2);
     inputResult.innerText = num2
     //temporary memory 2
    screenNum = num2;
}
})
});






btn_operator.forEach((element) =>{
    element.addEventListener('click', (event) =>{
      if(operation && num2){

          switch(operation) {
              case "+":
                  console.log(resultFinal);
                  resultFinal = resultFinal
                                                                                                                                          
                  ? resultFinal + Number(num2)
                  : Number(num1) + Number(num2)
                  num1 ="";
                  num2 ="";
                   inputResult.textContent = resultFinal; 
                  console.log(isInIfisInIfCount ); 
                  break;
              case "-":
                  resultFinal = resultFinal 
                  ?resultFinal - Number(num2)
                  :Number(num1) - Number(num2)
                  num1 = "";
                  num2 = ""
                  inputResult.textContent = resultFinal
                  break;
              case "x":
                  resultFinal = resultFinal 
                  ? resultFinal * Number(num2)
                  : Number(num1) * Number(num2)
                  num1 = "";
                  num2 = ""
                  inputResult.textContent = resultFinal

                  break;
              case "/":
                  checkedText2 = true;
                  num2Chek = num2;
                   opdDive = operation;
                  resultFinal = resultFinal 
                  ? resultFinal / Number(num2)
                  : Number(num1) / Number(num2)
                  num1 = "";
                  num2 = ""
                  inputResult.textContent = resultFinal
                  break;
              case "=":
              console.log("yes");

                  if(operation === "+"){
                      resultFinal = resultFinal 
                      ? resultFinal + Number(num2)
                      : Number(num1) + Number(num2) 
                  }else if(operation === "-"){
                      resultFinal = resultFinal 
                      ? resultFinal - Number(num2)
                      : Number(num1) - Number(num2) 
                  }else if(operation === "/"){
                      console.log("divise /");
                      resultFinal = resultFinal 
                      ? resultFinal / Number(num2)
                      : Number(num1) / Number(num2) 
                  }else if(operation === "x"){
                      resultFinal = resultFinal 
                      ? resultFinal * Number(num2)
                      : Number(num1) * Number(num2) 
                  }
                  num1 = "";
                  num2 = "" 
                  inputResult.textContent = resultFinal
                  break;
          }
      }
      operation = event.target.textContent;
      console.log(operation);
     
  })

});
equal.addEventListener("click", (e) =>{
  if((num2Chek === "0" && opdDive === "/" && checkedText2) ){
      checkedText2 = false;
      inputResult.textContent = "Error";
      num1 = ""
      num2 = ""
      screenText = ""
      operation = ""
      resultFinal = 0;
  }

})
//change value
clear.addEventListener('click', ()=>{
  num1 = ""
  num2 = ""
  screenText = ""
  operation = ""
  resultFinal = 0;
  inputResult.textContent = 0;
})
backspace.addEventListener('click', () =>{
  checkDot = false;
   if(num1 !=="" && num2 === ""){
      
      num1 = num1.toString().slice(0,-1)
      inputResult.textContent = inputResult.textContent.slice(0,-1);
      console.log("num1 " + num1);
  }else if(num2 !== ""){
      num2 = num2.toString().slice(0,-1)
      inputResult.textContent = inputResult.textContent.slice(0,-1);
  }
  
});

backspace.addEventListener('click',function () {
   inputResult.value.slice(0, -1);
});


const thePoint = document.getElementById("point");

thePoint.addEventListener("click", (e) =>{
   
  if(num1 === "" && !checkDot){
      checkDot = true;
      num1 = "0."
      inputResult.textContent = num1
  }else 
  if(!operation && num1 !== "" && !num1.includes(".") && !checkDot ){
      checkDot = true;
     
      num1 = num1 + "."
      inputResult.textContent=num1;
  }else if( num2 === ""  && operation){
      isInIfisInIfCount = 0;
      num2 = "0."
      inputResult.textContent = num2;
  }else if(e.target.textContent === "." && num2 !== "" && !num2.includes(".")){
      num2 = num2 + "."
      inputResult.textContent = num2;
  }
})