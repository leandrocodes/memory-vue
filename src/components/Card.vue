<template>
	<div class="card" @click="$emit('flip', card.id)">
		<div v-if = "card.flipped" class="content">
			<img :src="card.img" alt />
			<p>{{card.name}}</p>
			<p>{{card.flipped}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['card'],
	methods: {}
}
</script>

<style scoped>
.card {
	height: 150px;
	width: 100px;
	background-color: white;
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
}
img {
	height: 75px;
}
</style>