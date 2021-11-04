<template>
<div>
  <form action="/action_page.php">
  <label for="nameSubmission">Name:</label>
  <input type="text" id="nameSubmission" name="nameSubmission"><br><br>

<label for="Position">Choose a Position:</label>
<select name="position" id="Position">
  <option value="Position">Quarterback</option>
  <option value="Position">Running Back</option>
  <option value="Position">Wide Receiver</option>
  <option value="Position">Kicker</option>
</select>

  <label for="Team">Team:</label>
  <input type="text" id="Team" name="Team"><br><br>

    <label for="Stat">Projected Points:</label>
  <input type="int" id="Stat" name="Stat"><br><br>

  <input type="submit" value="Submit">
</form>
</div>


</template>

<script>
let position = document.getElementById("positionSubmission");
let name = document.getElementById("nameSubmission");
let teamChoice = document.getElementById("Team");
let statChoice = document.getElementById("Stat");

newProduct = new product(NameSubmission, Position, Team, Stat);
</script>