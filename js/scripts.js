$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        function flavor() {
            var pizzaFlavor = document.getElementById("flavor").value;
            return parseInt(pizzaFlavor);
        }
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }
        function topping() {
            var pizzaTopping = document.getElementById("topping").value;
            return parseInt(pizzaTopping);
        }
        function number() {
            var pizzaNumber = document.getElementById("number").value;
            return parseInt(pizzaNumber);
        }
        

        function Order(flavor, size, crust, topping, number) {
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = number;
        }

        var userInput = new Order(flavor(), size(), crust(), topping(), number());

        var totalCost =
            (userInput.newSize +
                userInput.newCrust +
                userInput.newTopping +
                userInput.newFlavor) +
            userInput.newQuantity;

        var customerName = prompt("Please enter your name");
        var phoneNumber = prompt("Enter your phone number");
        var newCost = totalCost + 0;

        var newCustomerName = customerName.toUpperCase();
        var recipt = (newCustomerName + phoneNumber + location);

        if (recipt != null) {
            document.getElementById("demo").innerHTML =
                "Name: " + newCustomerName + "-"+ " " + phoneNumber;
            document.getElementById("demo3").innerHTML =
                "FOR CONSIDERATION " ;
            document.getElementById("demo2").innerHTML =
                "Pay Ksh " + newCost ;
            document.getElementById("demo1").innerHTML =
                " M-pesa No 0743 350 280      -     Felix"
            document.getElementById("demo5").innerHTML =
                "Get a Job for Ksh " + newCost +" ONLY!";
            document.getElementById("demo6").innerHTML =
                "Submitted Successfully.!!"
        }

        $("#formorder").reset();
        

    });
})