var divArray = [];

divArray.push(document.getElementById('el1'));
divArray.push(document.getElementById('el2'));
divArray.push(document.getElementById('el3'));
divArray.push(document.getElementById('el4'));
divArray.push(document.getElementById('el5'));
divArray.push(document.getElementById('el6'));

var currentIndex = 0;
var aryElement = 0;
var lastElement=1;
let intervalId = null;

var style = {
    background:"#f5ef42"
}
var style2 = {
    background:"#f5428a"
}
var style3 = {
    background:"#6342f5"
}
var style4 = {
    background:"#42f56f"
}
var style5 = {
    background:"#f5a442"
}
var style6 = {
    background:"#f54242"
}

var styles = [style, style2, style3, style4, style5, style6];


 myFunction = ()=> {

     var currentStyle = styles[aryElement];

     divArray[currentIndex].style.background = currentStyle.background;

     aryElement++;
     currentIndex++;

     if (currentIndex === divArray.length) {
         let s = styles.pop();
         styles.unshift(s);

         currentIndex = 0;
         aryElement = 0;

         for (let i = lastElement; i < divArray.length; i++) {
             divArray[i].style.background = styles[i].background;
         }
         for (let j = 0; j < lastElement; j++) {
             divArray[j].style.background = styles[j].background;
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


