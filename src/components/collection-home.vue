<template>
  <div>
  <h2>Collection Heading - {{ accessionNo }} </h2>
  <!--<collection-heading></collection-heading>-->
  <!--<series-heading></series-heading>-->
  <section class="main">
    <series-tree :collectionSlug="accessionNo" ></series-tree>
    <!--<section class="content">-->
    <!--  <content-heading></content-heading>-->
    <!--  <content-tree></content-tree>-->
    <!--</section>-->
  </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      accessionNo: this.$route.params.collectionSlug
    }
  }
}

</script>
