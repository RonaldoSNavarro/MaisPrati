function test(description, callback){
    try {
        callback()
        console.log(`Teste aprovado: ${description}`)
    } catch (error) {
        console.error(`Teste falhou: ${description}`)
    }
}

function assertEquals(actual, expected) {
    if(actual !== expected) {
        throw new Error(`Esperava: ${expected}, mas chegou ${actual}`)
    }
}


function isEven(num) {
    return num % 2 === 0
}

test("Deve retornar 'false' para numeros ímpares", () => {
    assertEquals(isEven(1), false)
    assertEquals(isEven(5), false)
})

test("Deve retornar 'true' para numeros pares", () => {
    assertEquals(isEven(2), true)
    assertEquals(isEven(4), true)
})