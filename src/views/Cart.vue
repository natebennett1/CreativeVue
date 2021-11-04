<template>
<div>
  <Cart :products="cart" />
</div>
</template>

<script>
import Cart from "../components/CartList.vue"
export default {
  name: 'Browse',
  components: {
    Cart
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
  }
}
</script>