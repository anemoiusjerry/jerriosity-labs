<script setup>
import { ref } from 'vue'
import {EMAIL, NUMBER} from '../constants'
import AnimatedIcon from './AnimatedIcon.vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'

const contactEmail = ref(EMAIL)
const contactNumber = ref(NUMBER)
</script>

<template>
	<div class="flex justify-center">
		<nav class="fixed backdrop-blur-sm z-20 my-5 flex justify-between p-4 text-dark-gray bg-off-white/80 rounded-full" style="width: 450px;">
			<div class="flex">
				<h1 class="font-bold mr-2">J-Labs</h1>
				<dark-mode-toggle-button size="1.5px" />
			</div>

			<div>
				<animated-icon iconName="fa-brands fa-github" iconSize="xl" urlLink="https://github.com/anemoiusjerry"
					class="mx-2" />
				<animated-icon iconName="fa-brands fa-linkedin" iconSize="xl"
					urlLink="https://www.linkedin.com/in/anemoiusjerry/" class="mx-2" />
				<animated-icon iconName="fa-regular fa-envelope" iconSize="xl" class="mx-2" tooltipId="email-tooltip"
					:tooltipMsg="contactEmail" />
				<animated-icon iconName="fa-brands fa-whatsapp" iconSize="xl" class="mx-2" tooltipId="whatsapp-tooltip"
					:tooltipMsg="contactNumber" />
			</div>
		</nav>
	</div>
</template>