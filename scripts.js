function generateNumber() {

    const min = Math.ceil(Number(document.querySelector('.input-min').value))
    const max = Math.floor(Number(document.querySelector('.input-max').value))

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min

        alert(result)
    } else {
        alert('O valor mínimo deve ser menor que o valor máximo.')
    }

}