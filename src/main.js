import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  products: mock,
  cart: [  
  //   {
  //   id: 49,
  //   name: "Tear Drop Yellow Tomatoes",
  //   price: "$3.32",
  //   country: "Mexico",
  //   image: 'yellow-tomatoes.jpg'
  // }
]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false
