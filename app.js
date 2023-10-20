var input = document.getElementById("input")
var list = document.getElementById("list")



function add() {
    var liElement = document.createElement("li")
    var liText = document.createTextNode(input.value)
    liElement.appendChild(liText)
    list.appendChild(liElement)
    liElement.style.paddingRight = "20px"
    liElement.style.marginRight = "20px"
    



    // ************DELETE BUTTON*******************


    var deletbtn = document.createElement("button")
    var deletbtnText = document.createTextNode("Delete")
    deletbtn.appendChild(deletbtnText)
    liElement.appendChild(deletbtn)
    deletbtn.setAttribute("onclick", "deleteBtn(this)")
    deletbtn.style.marginLeft = "20px"
    // deletbtn.style.marginRight = "20px"


    // ************EDIT BUTTON*******************


    var editbtn = document.createElement("button")
    var editbtnText = document.createTextNode("Edit")
    editbtn.appendChild(editbtnText)
    liElement.appendChild(editbtn)
    editbtn.setAttribute("onclick", "editBtn(this)")
    editbtn.style.marginLeft = "20px"
    editbtn.style.marginRight = "-20px"







    input.value = ""
}
function dell() {
    var list = document.getElementById("list")

    list.innerHTML = "";
}

function deleteBtn(x) {
    x.parentNode.remove()
}
function editBtn(f) {
    var input = prompt("Enter Updated Value....")
    f.parentNode.firstChild.nodeValue = input;
}
