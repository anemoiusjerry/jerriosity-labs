<script setup>
import { ref } from 'vue'
import { EMAIL, NUMBER } from '../constants'
import AnimatedIcon from './AnimatedIcon.vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'

const contactEmail = ref(EMAIL)
const contactNumber = ref(NUMBER)
</script>

<template>
	<div class="flex justify-center">
		<nav
			class="fixed backdrop-blur-sm rounded-full z-20 my-5 p-4 flex justify-between text-off-white bg-dark-gray/80 dark:text-dark-gray dark:bg-off-white/80"
			style="width: 450px;">
			<div class="flex">
				<div class="flex items-center">
					<img src="../assets/jlabs-logo.svg" class="absolute mx-2 w-8" />
				</div>
				<h1 class="font-bold ml-11 mr-3">J-Labs</h1>
				<dark-mode-toggle-button size="1.5px" />
			</div>

			<div>
				<animated-icon iconName="fa-brands fa-github" iconSize="xl" urlLink="https://github.com/anemoiusjerry"
					class="mx-1.5" />
				<animated-icon iconName="fa-brands fa-linkedin" iconSize="xl"
					urlLink="https://www.linkedin.com/in/anemoiusjerry/" class="mx-1.5" />
				<animated-icon iconName="fa-solid fa-envelope" iconSize="xl" class="mx-1.5" tooltipId="email-tooltip"
					:tooltipMsg="contactEmail" />
				<animated-icon iconName="fa-brands fa-whatsapp" iconSize="xl" class="mx-1.5" tooltipId="whatsapp-tooltip"
					:tooltipMsg="contactNumber" />
			</div>
		</nav>
	</div>
</template>