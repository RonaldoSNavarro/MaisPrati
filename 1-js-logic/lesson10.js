const prompt = require('prompt-sync')()

let thingsList = Array()

thingsList['hardware'] = Array()
thingsList['fruits'] = Array()
thingsList['people'] = Array('Aristóteles', 'Tolkien')

thingsList['hardware'][0] = 'notebook'
thingsList['hardware'][1] = 'mouse'
thingsList['hardware'][2] = 'teclado'
thingsList['fruits'][0] = 'laranja'
thingsList['fruits'][1] = 'maça'

console.table(thingsList)