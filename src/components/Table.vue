<template>
	<div class="table">
		<card :card="card" v-for="(card, index) in cards" :key="index" @flip='card.flipped = !card.flipped'>
		</card>
	</div>
</template>

<script>
import Card from './Card'
import cards from '../cards'
export default {
	components: {
		Card
	},
	data() {
		return {
			cards
		}
	},
	computed:{

	}
}
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