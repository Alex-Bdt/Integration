function buttonColor(element,color,bkcolor){
    clearButton();
    element.style.backgroundColor = color;
    element.style.color = '#fff';
    document.getElementById("p1").style.backgroundColor = bkcolor;
}

function clearButton(){
    document.getElementById("buttonRec").style.backgroundColor = '#fff';
    document.getElementById("buttonInt").style.backgroundColor = '#fff';
    document.getElementById("buttonPer").style.backgroundColor = '#fff';
    document.getElementById("buttonTra").style.backgroundColor = '#fff';
    document.getElementById("buttonRec").style.color = '#000';
    document.getElementById("buttonInt").style.color = '#000';
    document.getElementById("buttonPer").style.color = '#000';
    document.getElementById("buttonTra").style.color = '#000';
}






