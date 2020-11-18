const price = function () {
    let input = $("#input").val()
    $.get(`priceCheck/${input}`, function (item) {
        $("body").append(`<div> Price is - ${item.price}`)
    })
}

const buy = function () {
    let input = $("#buyinput").val()
    $.get(`buy/${input}`, function (item) {
        $("body").append(`<div> Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`)
    })
}