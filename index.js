// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",MyTeam)

function MyTeam(){
    event.preventDefault();

    var matchArr = JSON.parse(localStorage.getItem("schedule")) || []

    var Obj = {
        Num :masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value,
    }

    matchArr.push(Obj)
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    console.log(matchArr)
    // Redirct The New Page 
    window.location.href = "matches.html"


    document.querySelector("#matchNum").value = ""
    document.querySelector("#teamA").value = ""
    document.querySelector("#teamB").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#venue").value = ""


}