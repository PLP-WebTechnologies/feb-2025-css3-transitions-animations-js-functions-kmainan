<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Favorite Color Animation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      transition: background-color 0.5s ease;
    }

    .box {
      width: 150px;
      height: 150px;
      margin: 20px auto;
      background-color: #ccc;
      border-radius: 10px;
      transition: background-color 0.5s ease;
    }

    .animate {
      animation: pop 0.4s ease;
    }

    @keyframes pop {
      0%   { transform: scale(1); }
      50%  { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    label, select {
      font-size: 16px;
      display: block;
      text-align: center;
      margin: 10px auto;
    }
  </style>
</head>
<body>

  <h2 style="text-align:center">🎨 Select Your Favorite Color</h2>
  <div class="box" id="colorBox"></div>

  <label for="colorSelect">Choose color:</label>
  <select id="colorSelect">
    <option value="skyblue">Sky Blue</option>
    <option value="salmon">Salmon</option>
    <option value="lightgreen">Light Green</option>
    <option value="plum">Plum</option>
    <option value="gold">Gold</option>
  </select>

  <script>
    const colorBox = document.getElementById('colorBox');
    const colorSelect = document.getElementById('colorSelect');

    // Load stored preference
    const storedColor = localStorage.getItem('favoriteColor');
    if (storedColor) {
      colorBox.style.backgroundColor = storedColor;
      colorSelect.value = storedColor;
    }

    // On change, update color and animate
    colorSelect.addEventListener('change', () => {
      const newColor = colorSelect.value;
      localStorage.setItem('favoriteColor', newColor);
      colorBox.style.backgroundColor = newColor;

      // Trigger animation
      colorBox.classList.remove('animate');
      void colorBox.offsetWidth; // force reflow
      colorBox.classList.add('animate');
    });
  </script>

</body>
</html>
