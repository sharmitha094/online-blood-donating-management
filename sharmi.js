
document.querySelector(".nav-btn").addEventListener("click", function () {
    alert("Welcome to LifeDrop! You can register as a blood donor.");
});
document.querySelector(".hero .primary-btn").addEventListener("click", function () {
    alert("Thank you for choosing to donate blood ❤️");
});

document.querySelector(".secondary-btn").addEventListener("click", function () {
    let bloodGroup = prompt("Enter your required blood group (A+, A-, B+, B-, O+, O-, AB+, AB-):");

    if (bloodGroup) {
        bloodGroup = bloodGroup.toUpperCase();

        let validGroups = [
            "A+", "A-", "B+", "B-",
            "O+", "O-", "AB+", "AB-"
        ];

        if (validGroups.includes(bloodGroup)) {
            alert("Blood group " + bloodGroup + " is available. Please contact us for more details.");
        } else {
            alert("Invalid blood group!");
        }
    }
});
document.querySelector(".donate .primary-btn").addEventListener("click", function () {
    let name = prompt("Enter your name:");

    if (name) {
        let blood = prompt("Enter your blood group:");

        if (blood) {
            alert(
                "Registration Successful! ❤️\n\n" +
                "Donor Name: " + name +
                "\nBlood Group: " + blood.toUpperCase()
            );
        }
    }
});

let bloodBoxes = document.querySelectorAll(".blood-box");

bloodBoxes.forEach(function (box) {

    box.addEventListener("click", function () {

        let group = box.querySelector("h3").innerText;

        alert(
            "Blood Group: " + group +
            "\nStatus: Available 🩸"
        );

    });

});