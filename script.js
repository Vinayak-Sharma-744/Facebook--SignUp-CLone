function submitFunction(){
    let x = document.forms ["myForm"] ["input"].value
    const y = document.querySelectorAll(".warning")

    let text;
    if(x === ""){
        text = "*field required!"
        console.log(text)
    }
    else{

        for(var i=0; i <y.length ; i++){
            y[i].style.display ="none"
        }
            
    }

    for(var i=0; i <y.length ; i++){
        y[i].innerHTML = text
    }
   
    


}