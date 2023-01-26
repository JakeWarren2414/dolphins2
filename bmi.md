<!--Login Frontmatter-->



<body>
    <script src="{{ '/assets/css/bmi.js' | relative_url }}"></script>
    <h1 id="calc">BMI Calculator</h1>
    <div style="padding:5px">
        <label for="feet">feet</label>
        <label for="inches">(inches)</label>
        <input id="feet" type="text">
        <input id = "inches" type="text">
    </div>
    <div style="padding:5px">
        <label for="weight">Your Weight(pound)</label>
        <input id="weight" type="text">
    </div>
    <div>
        <input type="button" value ="compute BMI" onclick = "bmi()">
    </div>
    <div id="result"></div>
</body>




## BMI Overview
> Generall Overview of BMI
- Knowing your BMI range is the first step in your joureny toward a heathier life
- BMI stands for body mass index
- The aim of the BMI calculator is to find out if a person is overweight, underweight or have a good weight.

## First Steps
> Good fitness advice
- Without data about your body your weight loss journey will be exponential harder
- You might have anxiety/insecurity about certin aspect about yourself, which is very normal, and hard to face
- But I promise the feeling of improvement and succes will far out way the feelings of insecurity you will have currently

## BMI Calculator
> Information
- A great informational tool to find your BMI along with more info about the topic is this [website](https://www.calculator.net/bmi-calculator.html)
- Here is the code that implements it:

```python
user_data = (70, 1.75)
weight = user_data[0]
height = user_data[1]
bmi = weight / (height ** 2)
print("Your BMI is: ", bmi)
```

## Next steps
> What to do with this info
- With this data you just found make a goal for a obtainable range that you will be able to reach in 6-12 months
- And head to the next part of your fitness joureney: [Nutrition](https://jakewarren2414.github.io/dolphins2/food)
<div style="padding: 150px;">
</div>