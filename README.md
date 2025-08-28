# BMI Calculator
This is a responsive BMI Calculator built with HTML, CSS, and JavaScript that allows users to calculate their Body Mass Index by entering age, gender, height, and weight. It instantly displays the BMI value along with the corresponding health category such as Underweight, Normal, Overweight, or Obese.

## 📍Tech Stack :
1) **HTML5**
   - Provides the basic structure of the application.
   - Contains input fields, dropdowns, and the calculate button.
2) **CSS3**
   - Styles the BMI calculator to make it visually appealing.
   - Includes background gradients, shadows, and rounded corners.
   - Adds hover effects and spacing for better readability.
3) **JavaScript (Vanilla JS)**
   - Handles the logic behind BMI calculation.
   - Dynamically updates the DOM to display BMI results and categories.

## 📍Features :
- **Interactive User Interface** - A clean and modern design that is easy to use.
- **Form Validation** - Ensures that no required field is left empty.
- **Accurate BMI Calculation** - Uses the standard BMI formula :
  - BMI = Weight (kg) / (Height (m) ^ 2)
  - Provides results instantly upon clicking the calculate button.
- **Result Categorization** - Once BMI is calculated, the result is shown with both numeric BMI value and weight category :
  - Underweight (BMI < 18.5)
  - Normal (18.5 ≤ BMI < 25)
  - Overweight (25 ≤ BMI < 30)
  - Obese (BMI ≥ 30)
- **Responsive Design** - Works seamlessly across different screen sizes. The layout adjusts for desktops, tablets, and mobile devices.
- **User Experience Enhancements** - Input fields reset automatically after calculation, making it ready for new entries.

## 📍Working :
1) **User Input Stage**
   - The user selects Gender and enters their Age.
   - The user provides Height in feet and inches and Weight in kilograms.
2) **Validation Stage**
   - JavaScript checks if all required fields are filled.
   - If a field is missing, an alert or browser-based message is displayed.
3) **Calculation Stage**
   - Height is converted into meters :
     - Height (m) = (Feet × 12 + Inches) × 0.0254
   - BMI is calculated using :
     - BMI = Weight (kg) / (Height (m) ^ 2)
4) **Result Display Stage**
   - The calculated BMI value appears at the bottom of the form.
   - The BMI Category (Normal, Underweight, Overweight, Obese) is displayed alongside the numeric value.
5) **Reset Stage**
   - After the result is shown, the form is reset automatically so that new values can be entered without refreshing the page.

## 📍Project Screenshots :
<img width="49.5%" height="893" alt="Img 1" src="https://github.com/user-attachments/assets/c6d12442-4c41-4b58-811a-1972f032db17" />
<img width="49.5%" height="893" alt="Img 2" src="https://github.com/user-attachments/assets/248c8b31-a4bc-4762-a2fc-17f47945e00a" />
<img width="49.5%" height="893" alt="Img 3" src="https://github.com/user-attachments/assets/3a36b232-4248-4e2a-a9be-259d4e677b33" />
<img width="49.5%" height="893" alt="Img 4" src="https://github.com/user-attachments/assets/01fb4a95-9f3b-44b8-976f-ab10a964da5c" />
