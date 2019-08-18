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

			if(this.cards[index].flipped) return

			this.cards[index].flipped = true
			if(this.first === null) this.first = index
			else if(this.second === null) this.second = index

			if(this.first !== null && this.second !== null){
				if(this.cards[this.first].name != this.cards[this.second].name){
					this.cards[this.first].flipped = this.cards[this.second].flipped = false
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