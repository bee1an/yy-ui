<script setup lang="ts">
import type { DropdownOption } from 'yy-craft'

const basicMenuOptions: DropdownOption[] = [
	{
		label: '选项1',
		key: '选项1'
	}
]
</script>

<template>
	<yy-dropdown :to="false" wrapper :options="basicMenuOptions" wrapper-style="width: 200px;">
		<yy-button>点我</yy-button>
	</yy-dropdown>
</template>
