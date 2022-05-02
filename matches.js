// write js code here corresponding to matches.html

// var MatchData = JSON.parse(localStorage.getItem("schedule"))

// displayData(MatchData)

// function handleFilter() {
//     var selected = document.getElementById("filterVenue").value;
//     console.log(selected);
//     var filteredList = matchArr.filter(function (el) {
//       return el.Venue == selected;
//     });
//     console.log(filteredList);
//     displayData(filteredList);
//   }
var mat = JSON.parse(localStorage.getItem("schedule"))
document.querySelector("#filterVenue").addEventListener("click",filterV)
displayData(mat)
function filterV(){
    var filter =document.querySelector("#filterVenue").value
    console.log(filterV)

    var filterList = mat.filter(function (elem){
        return elem.Venue == filter
    })
    displayData(filterList)
}


  var MatchData = JSON.parse(localStorage.getItem("schedule")) || []

function displayData(data){
    document.querySelector("tbody").innerText = ""
    data.forEach(function(el,index){
        var tr = document.createElement("tr")
    
        var td1 = document.createElement("td")
        td1.innerText = el.Num
    
        var td2 = document.createElement("td")
        td2.innerText = el.TeamA
    
        var td3 = document.createElement("td")
        td3.innerText = el.TeamB
    
        var td4 = document.createElement("td")
        td4.innerText = el.Date
    
        var td5 = document.createElement("td")
        td5.innerText = el.Venue

        var td6 = document.createElement("td")
        td6.innerText  = "favourites"
        td6.style.color = "green" 
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            favMatch(el)
        })
 
        tr.append(td1,td2,td3,td4,td5,td6)
    
        document.querySelector("tbody").append(tr)
    })

}
var favArr = JSON.parse(localStorage.getItem("favourites")) || []

    function favMatch(el){
        favArr.push(el)

        localStorage.setItem("favourites", JSON.stringify(MatchData))
    }




