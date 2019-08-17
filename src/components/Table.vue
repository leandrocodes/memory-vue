<template>
  <div class="table">
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  components:{
    Card
  }
}
</script>

<style scoped>
  .table{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 600px;
    width: 700px;
    background-color: #000;
    margin: 0 auto;
    background-image: linear-gradient(to bottom, #503c3a, #5d4642, #6a5149, #775c51, #846758);
  }
</style>