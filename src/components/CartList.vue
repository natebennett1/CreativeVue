
<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" @click="removeFromCart(index)">Remove from Cart</button>
      </div>
      <div class="price">
        <button class="auto" @click="product.quantity--"> Minus Quantity </button>
        <h2>{{product.quantity}}</h2>
        <button class="auto" @click="product.quantity++"> Plus Quantity</button>
      </div>
    </div>
  </div>
</div>
</template> 

<script>
export default {
  name: 'Cart',
  props: {
    products: Array
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
  border: 2px solid #333;
  height: 250px;
  width: 200px;
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