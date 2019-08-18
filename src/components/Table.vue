<template>
	<div class="table">
		<card 
			@click='!flip' :flip='flip' :carta="{name: 'lupa',
      		img: 'https://image.flaticon.com/icons/svg/1150/1150626.svg'}"/>

		<card 
			:carta="{name: 'comp',
     		img: 'https://image.flaticon.com/icons/svg/1149/1149168.svg'}"/>

		<card 
			:carta="{name: 'config',
      		img: 'https://image.flaticon.com/icons/svg/148/148909.svg'}"/>

		<card 
			:carta="{name: 'lupa',
      		img: 'https://image.flaticon.com/icons/svg/1150/1150626.svg'}"/>

		<card 
			:carta="{name: 'comp',
      		img: 'https://image.flaticon.com/icons/svg/1149/1149168.svg'}"/>

		<card 
			:carta="{name: 'config',
      		img: 'https://image.flaticon.com/icons/svg/148/148909.svg'}"/>

		<card 
			:carta="{name: 'idea',
      		img: 'https://image.flaticon.com/icons/svg/427/427735.svg'}"/>

		<card 
			:carta="{name: 'brain',
      		img: 'https://image.flaticon.com/icons/svg/791/791072.svg'}"/>

		<card
			:carta="{name: 'pencils',
      		img: 'https://image.flaticon.com/icons/svg/1497/1497726.svg'}"/>

		<card
			:carta="{name: 'idea',
      		img: 'https://image.flaticon.com/icons/svg/427/427735.svg'}"/>

		<card
			:carta="{name: 'brain',
      		img: 'https://image.flaticon.com/icons/svg/791/791072.svg'}"/>

		<card
			:carta="{name: 'pencils',
      		img: 'https://image.flaticon.com/icons/svg/1497/1497726.svg'}"/>
    
	</div>
</template>

<script>
import Card from "./Card";
export default {
	components: {
		Card
  },
  data(){
    return{
      flip: false
    }
  }
};
</script>

<style scoped>
.table {
	border-radius: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 600px;
	width: 700px;
	background-color: #000;
	margin: 0 auto;
	background-image: linear-gradient(
		to bottom,
		#503c3a,
		#5d4642,
		#6a5149,
		#775c51,
		#846758
	);
}
</style>