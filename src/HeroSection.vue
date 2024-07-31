<script>
export default {
  name: 'HeroSection'
}
</script>

<template>
  <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Hi, Im Jerry
        </h1>
        <p class="font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
          Fullstack and mobile software engineer.
        </p>
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 font-medium text-center border rounded-lg">
          Download my CV
        </a>
        <button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip click</button>

<div id="tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
      </div>
    </div>
  </section>
</template>