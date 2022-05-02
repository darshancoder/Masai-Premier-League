// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites")) || []


displayData(favArr)

function displayData(data){
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
        td6.innerText  = "Delete"
        td6.style.color = "red" 
        td5.setAttribute("class","deleteText")
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            deleteItem(el,index)
        })
 
        tr.append(td1,td2,td3,td4,td5,td6)
    
        document.querySelector("tbody").append(tr)
        
    })

}

    function deleteItem(el,index){
        favArr.splice(index,1)
        localStorage.setItem("favourites", JSON.stringify(favArr))
        window.location.reload()
    }