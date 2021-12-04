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
          <th>Player Options</th>
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
           <td>
             <button class="auto" @click="uploadToCart(product)">Pickup</button>
             <button class="auto" @click="removeFromList(product)">Delete Player</button>
             <button class="auto" @click="editItem(product)">Edit Name</button>

             <form id="editNameForm">
                 <input v-model="editName" placeholder="Edit Name">
                 
             </form>
           </td>
          </tr>
         </tbody>
    </table>    
  </div> 
</div> 
</template>


<script>
import axios from 'axios';
    export default {
        name: 'ProductList',
        //props: {
        //  products: Array
        //      },
        data() {
            return {
                products: [],
            }
        },
        created() {
            this.getItems();
        },
  methods: {
      async getItems() {
          console.log("opening get items");
          try {
              let response = await axios.get("/api/items");
              this.products = response.data;
              return true;
          } catch (error) {
              console.log(error);
          }
      },
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
      },
      async uploadToCart(product) {
          try {
              let r2 = await axios.post('/api/teamroster', {
                  name: product.name,
                  Position: product.Position,
                  Team: product.Team,
                  Stat: product.Stat,
              });
              this.roster = r2.data;
              console.log("added");
          } catch (error) {
              console.log(error);
          }
      },
      async removeFromList(product) {
          try {
            console.log(product._id);
              await axios.delete("/api/items/" + product._id);
              this.findItem = null;
              this.getItems();
              return true;
          } catch (error) {
              console.log(error);
          }
      },
      async editItem(product) {
          try {
              console.log(this.name);
        await axios.put("/api/items/" + product._id, {
            name: this.editName,
        });
   //     this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
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
  margin: 10px;
}

.auto {
  margin-left: auto;
  padding: 10px;
}

table, th, td {
  border-bottom: 1px solid black;
  text-align: center;
  border-radius: 25px;
  padding: 5px;
}
</style>