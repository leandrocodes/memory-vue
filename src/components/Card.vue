<template>
  <div class="card">
      <div v-if="flip" class="content" @click="turnCard">
          <img :src="carta.img" alt="">
          <p>{{carta.name}}</p>
          <p>{{flip}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        carta:{
            name: '',
            img: ''
        },
        flip: Boolean
    },
    methods:{
        turnCard(){
            this.$emit('flipCard', ()=>{
                this.flip = true
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