document.getElementById("BMI-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInch = parseInt(document.getElementById("height-inch").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (gender && age && heightFeet && heightInch && weight) {
        const height = (heightFeet * 12 + heightInch) * 0.0254;
        const bmi = weight / (height * height);
        const result = document.getElementById("result");

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        }
        else if (bmi < 25) {
            category = 'Normal';
        }
        else if (bmi < 30) {
            category = 'Overweight';
        }
        else {
            category = 'Obese';
        }

        let resultText = 'BMI : ' + bmi.toFixed(2) + '<br>' + 'Category : ' + category;
        result.innerHTML = resultText;
        document.getElementById("BMI-form").reset();
    }
});

const inputs = document.querySelectorAll("#BMI-form input, #BMI-form select");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        document.getElementById("result").innerHTML = "";
    });
});