<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('dark')
document.onclick = () => {
	theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
	<div class="playground">
		<yy-config-provider :theme="theme">
			<yy-icon>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-image-icon lucide-image"
				>
					<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
					<circle cx="9" cy="9" r="2" />
					<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
				</svg>
			</yy-icon>
		</yy-config-provider>
	</div>
</template>

<style scoped>
.playground {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
