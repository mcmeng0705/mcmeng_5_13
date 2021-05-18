<template>
  <div>
    FooterGuide
    {{count}}
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FooterGuide",
  computed:mapState({
    count:state => state.count,
  })


}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
