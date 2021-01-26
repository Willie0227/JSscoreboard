let vars = {
    homePoints: 0,
    guestPoints: 0,
    periods:0,
    name1:"",
    name2:"",
    name3:"",
    name4:""
}

function addPT(selector, name) {
    vars[name]++;
    document.querySelector(selector).innerHTML = vars[name]
}

function deductPT(selector, name) {
    vars[name]--;
    document.querySelector(selector).innerHTML = vars[name]
}

function addName(selector,name) {
    vars [name] = prompt("Please enter the player's name")
    document.querySelector(selector).innerHTML = vars[name]
}

function removeName(selector,name) {
    vars[name] = ""
    document.querySelector(selector).innerHTML = vars[name]
}

function reset() {
    vars = {
        homePoints: 0,
        guestPoints: 0,
        periods:0,
        name1:"",
        name2:"",
        name3:"",
        name4:""
    }

    document.querySelector('.home').innerHTML = vars ["homePoints"]
    document.querySelector('.guest').innerHTML = vars["guestPoints"]
    document.querySelector('.periodBox').innerHTML= vars ["periods"]
    document.querySelector('.person1').innerHTML = vars["name1"]
    document.querySelector('.person2').innerHTML = vars["name2"]
    document.querySelector('.person3').innerHTML = vars["name3"]
    document.querySelector('.person4').innerHTML = vars["name4"]

}
