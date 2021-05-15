

function addInput(){
    let unordered = document.querySelector("#myList");
    let value = document.querySelector(".form-control").value;
    
    
    if(value === ""){
        
        alert("You have to enter something!");
    }
    else{

        let li = document.createElement('li');
        let node = document.createTextNode(value);
        li.appendChild(node);
        unordered.appendChild(li);

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        var close = document.getElementsByClassName("close");

for(var i =0 ; i<close.length ; i++){
    close[i].onclick= function(){
        var ele = this.parentElement;
        ele.style.display ="none";
    }
}

}
document.querySelector(".form-control").value ="";
    }












