<script setup>
import DarkModeToggleButton from './DarkModeToggleButton.vue';
import AnimatedIcon from './AnimatedIcon.vue';
</script>

<template>
	<div class="flex justify-center">
		<nav class="my-5 fixed bg-opacity-75 backdrop-blur-sm z-20 flex p-4 text-off-white bg-light-gray rounded-full ">
			<h1 class="font-bold mr-2">J-Labs</h1>
			<dark-mode-toggle-button size="1.5px" />
			<div class="ml-32">
				<animated-icon iconName="fa-brands fa-github" iconSize="xl" urlLink="https://github.com/anemoiusjerry" />
				<animated-icon iconName="fa-brands fa-linkedin" iconSize="xl"
					urlLink="https://www.linkedin.com/in/anemoiusjerry/" />

				<animated-icon iconName="fa-solid fa-envelope" iconSize="xl" data-tooltip-target="tooltip-email"
					data-tooltip-placement="bottom" @click="copyEmail" @mouseleave="copied = false" />
				<div id="tooltip-email" role="tooltip"
					class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-full opacity-0 tooltip">
					{{ EMAIL }}
					<font-awesome-icon :icon="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'" class="ml-1"
						:class="copied && 'text-green-400'" />
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
			</div>
		</nav>
	</div>
</template>