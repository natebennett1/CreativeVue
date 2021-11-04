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
        <button class="auto" @click="removeFromCart(index)">Drop</button>
           </td>
          </tr>
        <tr>
           <td>Total Points:</td>
           <td></td>
           <td></td>
           <td></td>
           <td>{{totalScore}}</td>
           <td>
           </td>
          </tr>
          
         </tbody>
    </table>    
  </div> 
</div> 
</template>

<script>
export default {
  name: 'Cart',
  props: {
    products: Array
  },
  computed: {
    totalScore(){
      let total = 0;
      for(let i = 0; i < this.$root.$data.cart.length; i++){
        total += this.$root.$data.cart[i].Stat;
      }
      total = Math.round(total);
      return total;
    }
  },
  methods: {
      removeFromCart(index) {
          this.$root.$data.cart.splice(index, 1);
      },
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

<!--
//example
  <div>

    <h1>Cart</h1>


    <table>
      <tbody>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Country</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Options</th>
        </tr>

        <tr v-for="item in products" :key="item.id">
          <td><div>
            <img :src="'/images/products/' + item.image">
          </div></td>
          <td>{{item.name}}</td>
          <td>{{item.country}}</td>
          <td>
            <button @click="item.quantity = Math.max(item.quantity - 1, 0)">-</button>
            <span  >{{item.quantity}}</span>
            <button @click="item.quantity++">+</button>
          </td>
          <td>{{item.price}}</td>
          <td><button @click="removeFromCart(item)">Remove Item</button></td>
        </tr>
        <tr>
          <th >Totals:</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
  </div>
  -->