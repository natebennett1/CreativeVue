<template>
<div class="wrapper">
  <div class="products">
    <table id=playerTable>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>Total Points</th>
          <th>Add to Team</th>
         </tr>
       </thead>
         <tbody>
          <tr v-for="product in products" :key="product.id">
          <div class="imageContainer">
           <td class="image">
             <img :src="'/images/products/'+product.image">
           </td>
           </div>
           <td>{{product.name}}</td>
           <td>{{product.Position}}</td>
           <td>{{product.Team}}</td>
           <td>{{product.Stat}}</td>
           <td>
             <button class="auto" @click="addtoCart(product)">Pickup</button>
           </td>
          </tr>
         </tbody>
       <!-- <div class="product" v-for="product in products" :key="product.id"> -->
    </table>    
    <!-- <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.position}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.stat}}</h2>
        <h2>{{product.team}}</h2>
        add a function that pushes this button to the cart array -->
  <!-- <button class="auto" @click="addtoCart(product)">Add to Cart</button>
      </div> -->
      
    <!-- </div> -->
  </div> 
</div> 
</template>


<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
      addtoCart(product) {
          // this.$root.$data.cart.forEach(product => {
          //   if (.10px.position === this.$root.$data.cart.product.position) {
          //     window.alert("You already have this position")
          //     return;
          //   }
          // });
          for(let i = 0; i < this.$root.$data.cart.length; i++){
            console.log(product.Position);
            console.log(product);
            console.log(this.$root.$data.cart[i].Position);
            if (product.Position === this.$root.$data.cart[i].Position) {
               window.alert("You already have this position")
               return;
            }
          }
          this.$root.$data.cart.push(product);
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  /* border: 2px solid #333; */
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.imageContainer img{
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  /* border: 2px solid #333; */
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.image{
  /* border: 2px solid #333; */
  height: 50px;
  width: 50px;
  margin-left: 50px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

table, th, td {
  border-bottom: 1px solid black;
  text-align: center;
  border-radius: 25px;
  padding: 5px;
}
</style>