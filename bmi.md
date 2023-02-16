<script> AOS.init();</script>
<body>
  <div data-aos="fade-right">
    <script src="{{ '/assets/js/bmi.js' | relative_url }}"></script>
    <h1 id="calc">BMI Calculator</h1>
    <div style="padding:5px">
        <label for="feet">Feet</label>
        <input id="feet" type="text">
        <label for="inches">Inches</label>
        <input id = "inches" type="text">
    </div>
    <div style="padding:5px">
        <label for="weight">What is your weight in pounds?</label>
        <input id="weight" type="text">
    </div>
  </div>
  <div data-aos="fade-left">
      <div style="padding: 5px;">
          <input type="button" value="Compute BMI" onclick="bmi()">
          <input type="button" value="Save BMI To Account" onclick="createUser()">
      </div>
      <div style="padding: 5px;" id="result"></div>
  <table id="bmiDisplay" style="padding: 30px;">
    <tr>
      <th>BMI</th>
    </tr>
  </table>
  </div>
</body>

<div data-aos="fade-right">
  <h2>BMI Overview</h2>
  <blockquote>
  <p>General Overview of BMI</p>
  <ul>
    <li>Knowing your BMI range is the first step in your journey toward a heathier life</li>
    <li>BMI stands for body mass index</li>
    <li>The aim of the BMI calculator is to find out if a person is overweight, underweight or have a good weight.</li>
  </ul>
</blockquote>
</div>
<div data-aos="fade-right">
  <h2>First Steps</h2>
  <blockquote>
    <p>Good fitness advice</p>
  <ul>
    <li>Without data about your body your weight loss journey will be exponential harder</li>
    <li>You might have anxiety/insecurity about certain aspect about yourself, which is very normal, and hard to face</li>
    <li>But I promise the feeling of improvement and success will far out way the feelings of insecurity you will have currently</li>
  </ul>
</blockquote>
<div data-aos="fade-right">
  <h2>BMI Calculator</h2>
  <blockquote>
    <p>Information</p>
  <ul>
    <li>A great informational tool to find your BMI along with more info about the topic is this <a href="https://www.calculator.net/bmi-calculator.html">website</a></li>
  </ul>
  </blockquote>
</div>
<div data-aos="fade-right">
  <blockquote>  
  <h2>Next steps</h2>
    <p>What to do with this info</p>
  <ul>
    <li>With this data you just found make a goal for a obtainable range that you will be able to reach in 6-12 months</li>
    <li>And head to the next part of your fitness journey: <a href="https://jakewarren2414.github.io/dolphins2/food">Nutrition</a></li>
  </ul>
</blockquote>
</div>
<div style="padding: 150px;">
</div>