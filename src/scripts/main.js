const jumpStop = [];
const chatten = [];
const polar = [];

function createBluegrassArtist(name, age){
    let artist = {
        name: name,
        age: age
    }
    chatten.push(artist)
    return console.log("country", chatten)
}

function createFunkArtist(name, age){
    let artist = {
        name: name,
        age: age
    }
    jumpStop.push(artist)
    return console.log("R&B", jumpStop)
}

function createPopArtist(name, age){
    let artist = {
        name: name,
        age: age
    }
    polar.push(artist)
    return console.log("Pop", polar)
}

createBluegrassArtist("Bruce Atikins", "23 years old")
createBluegrassArtist("Bartholomew Danielson", "23 years old")
createBluegrassArtist("Avilee Dallas ", "19 years old")
createPopArtist("Jenson Brown", "20 years old")
createPopArtist("Austin Kinkaid", "22 years old")
createFunkArtist("Dre Funkz", "25 years old")
createFunkArtist("Dusta Grimes", "21 years old")
createFunkArtist("Loyoncé Branis", "27 years old")