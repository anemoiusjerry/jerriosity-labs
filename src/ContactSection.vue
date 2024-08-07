<script>
export default {
  name: 'ContactSection'
}
</script>

<template>
  <section>
    <div class="mx-auto flex flex-col justify-center items-center">
      <h1 class="text-4xl mb-3 font-bold">Message me!</h1>
      <p class="text-center mb-8">Have a project in mind, job offer, or just want to chat? <br> Just flick me a message!</p>
      <form>
        <div class="inline-flex">
          <div class="relative z-0 w-full mb-5 group mr-20">
            <input type="text" name="name" id="name"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-secondary-dark caret-secondary-dark peer"
              placeholder=" " />
            <label for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
              Name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="email" name="name" id="name"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-secondary-dark caret-secondary-dark peer"
              placeholder=" " />
            <label for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
              Email</label>
          </div>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <textarea rows="4" type="email" name="name" id="name"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-secondary-dark caret-secondary-dark peer"
            placeholder=" "></textarea>
          <label for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
            Email</label>
        </div>

        <button class="rounded-full border p-2 w-40">Send</button>
      </form>
    </div>
  </section>
</template>