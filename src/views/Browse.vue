<template>
<div>
  <form action="/action_page.php" v-on:submit.prevent="onSubmit">
  <label for="nameSubmission">Name:  </label>
  <input type="text" id="nameSubmission" name="nameSubmission">
  <br><br>

<label for="Position">Choose a Position:  </label>
<select name="Position" id="Position">
  <option type="text" value="Quarterback">Quarterback</option>
  <option value="Running Back">Running Back</option>
  <option value="Wide Receiver">Wide Receiver</option>
  <option value="Kicker">Kicker</option>
</select>
<br><br>

  <label for="Team">Team:  </label>
  <input type="text" id="Team" name="Team">
  <br><br>

    <label for="Stat">Projected Points:  </label>
    <input type="int" id="Stat" name="Stat">
    <br><br>

<!-- //  <input type="submit" value="Submit" @click="createPlayer()"> -->
  <button class="auto" @click="createPlayer()">Add to the League</button> <br><br>
  <button class="auto" @click="addNewToTeam()">Add to the league + add to my team</button>
</form>
</div>


</template>

<script>


//newProduct = new product(NameSubmission, Position, Team, Stat);
export default{
  methods: {
    createPlayer(){
      console.log("here");
       const positionChoice = document.getElementById("Position").value;
       let name = document.getElementById("nameSubmission").value;
       let teamChoice = document.getElementById("Team").value;
       let statChoice = document.getElementById("Stat").value;
       let userPlayer = {id: this.$root.$data.products.length + 1, name: name, Position: positionChoice, Team: teamChoice, Stat: statChoice, image: 'logo.png'};
       console.log(userPlayer);
       this.$root.$data.products.push(userPlayer);
    },
        addNewToTeam(){
      console.log("here");
       const positionChoice = document.getElementById("Position").value;
       let name = document.getElementById("nameSubmission").value;
       let teamChoice = document.getElementById("Team").value;
       let statChoice = document.getElementById("Stat").value;
       let userPlayer = {id: this.$root.$data.products.length + 1, name: name, Position: positionChoice, Team: teamChoice, Stat: statChoice, image: 'logo.png'};
       console.log(userPlayer);
       this.$root.$data.products.push(userPlayer);
       this.$root.$data.cart.push(userPlayer);
    }
  },
}
</script>