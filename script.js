
function checkAnswer(task){

    if(task =="earth" && document.getElementById("earth-answer").value =="Take me to the moon"){
        let next = document.createElement("a")
        next.href = "moon.html"
        next.innerHTML = "&#128640"
        document.getElementById("next").appendChild(next);
    }

    if(task =="moon" && document.getElementById("moon-answer").value =="Mars"){
        console.log("Hint: Number of rovers + the most famous roman emperer")
    }
    if(task =="moon" && document.getElementById("moon-answer").value =="Lets go to Mars"){
     
        let next = document.createElement("a")
        next.href = "mars.html"
        next.innerHTML = "&#128640"
        document.getElementById("next").appendChild(next);
    }
    }

