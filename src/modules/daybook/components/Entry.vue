<template>
  <div 
    class="entry-container  mb-3 pointer p2"
    @click="$router.push( {name:'entry', params:{ id:10 }})"
  >

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold ms-1">9</span>
        <span class="mx-1 fs-5">Septiembre</span>
        <span class="mx-2 fw-light">2022, viernes</span>
    </div>
    <div class="entry-description">
        Ea in elit adipisicing cillum enim deserunt ea dolor ea ad non voluptate nostrud proident. In id dolor officia ullamco fugiat. Aute enim occaecat eiusmod nostrud labore et. Et irure ipsum mollit esse.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom:  1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color:  lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>