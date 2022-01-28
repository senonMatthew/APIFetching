window.onload = () => {
    getClassList()
    getRaceList()
    getMonsterList()
}

const getClassList = () => { fetch('https://www.dnd5eapi.co/api/classes/')
    .then(
        function(responseC) {
            if (responseC.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get class list. Status Code: ' + response.status)
                return;
            }

            responseC.json().then(function(data){
                console.log(data)
                printRandomRace(data)
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
}

const getRaceList = () => { fetch('https://www.dnd5eapi.co/api/races/')
    .then(
        function(responseR) {
            if (responseR.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get race list. Status Code: ' + response.status)
                return;
            }

            responseR.json().then(function(data){
                console.log(data)
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
}

const getMonsterList = () => { fetch('https://www.dnd5eapi.co/api/monsters/')
    .then(
        function(responseM) {
            if (responseM.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get monster list. Status Code: ' + response.status)
                return;
            }

            responseM.json().then(function(data){
                console.log(data)
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
}

printRandomRace = (data) => {
    document.getElementById('name').innerText = data.results[0].name
}


