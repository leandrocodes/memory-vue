<template>
  <div class="card">
      <img :src="carta.img" alt="">
      <p>{{carta.name}}</p>
  </div>
</template>

<script>
export default {
    props:{
        carta:{
            name: '',
            img: ''
        }
    }

}
</script>

<style scoped>
    .card{
        height: 150px;
        width: 100px;
        background-color: white;
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    img{
        height: 75px;
    }
</style>