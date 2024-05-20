var productContainer = document.getElementById('products')
var search = document.getElementById("search")
var productslist = productContainer.querySelectorAll("div")



search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < productslist.length; count = count + 1) {
        var productname = productslist[count].querySelector('p').textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productslist[count].style.display = "none"
        }
        else {
            productslist[count].style.display = "block"
        }
    }
})



