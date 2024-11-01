
function checkAnswer(task){

    if(task =="earth" && document.getElementById("earth-answer").value =="Take me to the moon"){
        launchRocket()
        let nextTaskLink = document.createElement("a")
        nextTaskLink.href = "moon.html"
        nextTaskLink.id = "rocket"
        nextTaskLink.innerHTML = "&#128640"
        document.getElementById("rocket").appendChild(nextTaskLink);

    }

    if(task =="moon" && document.getElementById("moon-answer").value =="Mars"){
        console.log("Hint: Number of rovers + the most famous roman emperer")
    }
    if(task =="moon" && document.getElementById("moon-answer").value =="Lets go to Mars"){
        launchRocket()
        let nextTaskLink = document.createElement("a")
        nextTaskLink.href = "mars.html"
        nextTaskLink.id = "rocket"
        nextTaskLink.innerHTML = "&#128640"
        document.getElementById("rocket").appendChild(nextTaskLink);

    }
    }

    function launchRocket() {
        const rocket = document.getElementById('rocket');
        rocket.classList.toggle('launched');
      }

