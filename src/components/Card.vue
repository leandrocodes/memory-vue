<template>
  <div class="card">
      <div  class="content">
          <img :src="carta.img" alt="">
          <p>{{carta.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        carta:{
            name: '',
            img: ''
        }
    },
    methods:{
        turnCard(){
            this.$emit('turnCard', (turned)=>{
                this.turned = true
            })
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
        border-radius: .5rem;
    }
    img{
        height: 75px;
    }
</style>