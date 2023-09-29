var ary1 = ["A", "B", "C", "D", "E", "F"];

var spans = document.querySelectorAll("section div span");

var currentIndex = 0;
var aryElement = 0;
var lastElement=1;
let intervalId = null;

 myFunction = ()=> {


    spans[currentIndex].textContent = ary1[aryElement];

    aryElement++;
    currentIndex++;

     if (currentIndex===ary1.length){

         let s = ary1.pop();
         ary1.unshift(s);

         currentIndex=0;
         aryElement=0;


         for (let i=lastElement; i<ary1.length; i++){

             spans[i].textContent = ary1[i];

         }
         for (j=0; j<lastElement; j++){
             spans[j].textContent = ary1[j];
         }
         lastElement++;

     }


}

$("#start").on('click', () => {

    if (intervalId==null){
        intervalId = setInterval(myFunction, 200);
    }

});

$("#stop").on('click', () => {
    clearInterval(intervalId);
    intervalId=null;
});


