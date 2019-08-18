<template>
	<div class="table">
		<card :card="card" v-for="(card, index) in cards" :key="index" @flip="onFlip"></card>
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
			clickCount: -0
		};
	},
	methods: {
		onFlip(id) {
			console.log(id);
			if (id === this.first || this.second) return;

			if (!this.first) {
				this.first = id
				this.cards.find(i => i.id === id).flipped = !this.cards.find(i => i.id === id).flipped
				this.clickCount++
			} else {
				this.second = id
				this.cards.find(i => i.id === id).flipped = !this.cards.find(i => i.id === id).flipped
				this.clickCount++
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