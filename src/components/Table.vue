<template>
	<div class="table">
		<card :index='index' :card="card" v-for="(card, index) in cards" :key="index" @flip="onFlip"></card>
	</div>
</template>

<script>
import Card from "./Card";
import cards from "../cards";
import { setTimeout } from 'timers';
export default {
	components: {
		Card
	},
	created() {},
	data() {
		return {
			cards,
			first: null,
			second: null,
		};
	},
	methods: {
		onFlip(index) {
			
			let cardList = this.cards

			if(cardList[index].flipped) return

			cardList[index].flipped = true
			
			if(this.first === null) this.first = index
			else if(this.second === null) this.second = index

			let firstCard = this.first
			let secondCard = this.second

			if(firstCard !== null && secondCard !== null){
				if(cardList[firstCard].name != cardList[secondCard].name){
					setTimeout(()=>{
						cardList[firstCard].flipped = false
						cardList[secondCard].flipped = false
					}, 500)
				}
				this.first = this.second = null
			}
		}
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