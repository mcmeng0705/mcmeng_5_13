<template>
  <div>
    <router-view></router-view>
    <Order></Order>
    <FooterGuide></FooterGuide>
    <router-link to="/Order">to Order</router-link>


  </div>

</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import Order from "./pages/Order/Order";
export default {
  components: {FooterGuide,Order},
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
