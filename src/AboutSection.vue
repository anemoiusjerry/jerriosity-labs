<script setup>
</script>

<template>
  <section>
    <div class="flex justify-between w-full mx-36" style="height:75%">
      <div>
        <div class="flex">
          <h1 class="text-4xl mr-5 font-bold self-end" style="font-family: 'Rowdies', sans-serif;">About Me</h1>
          <h2 class="text-lg tracking-tight font-medium text-off-white bg-light-gray w-max p-4">
            Chinese born, New Zealand raised,<br>Australian trained, Serbia based!
          </h2>
        </div>
        <p class="text-off-white mt-4 text-justify" style="max-width: 600px;">
          I was born in northeastern China, next to the capital Beijing. At the age of 7, my parents whisked me away to
          New Zealand before I went to Australia for tertiary study. My double major in mechatronics and
          computer science at the University of Melbourne made me very good at integrating hardware with software. This
          landed me my first job at an industrial IoT startup. I slowly transitioned to remote work and taking small
          freelance jobs and travelling the world while I'm at it!
          <br><br>Current location: <b>Serbia</b> 🇷🇸.
        </p>
      </div>

      <!-- Accent decor -->
      <div class="relative">
        <div class="absolute p-5 border-t-4 border-l-4 border-sky-blue" style="left:-20px; bottom:209px"></div>
      </div>

      <div class="flex items-end self-end">
        <a href="https://www.instagram.com/jerriosity/" target="_blank"
          class="p-5 mr-5 bg-light-gray hover:scale-105 transform transition duration-300">
          <img src="./assets/instagram-pic.jpg" class="max-w-52 mb-3" />
          <h2 class="text-off-white flex justify-center">
            Check out my travels &nbsp
            <img src="./assets/instagram-icon.svg" width="25px" />
          </h2>
        </a>

        <div class="text-end">
          <h1 class="text-4xl mb-3 font-bold" style="font-family: 'Rowdies', sans-serif;">Hobbies</h1>
          <p class="text-off-white mt-4 text-justify" style="max-width: 500px;">
            Programmers are seen as boring, but I'm here to prove otherwise! Outside work, I live a rather creative
            life. From a young age I loved to draw, mostly pencil sketches. In University I acted in a musical
            production of Footllose and I still sing with guitar. On the sports front I play tennis and row. Now that Im
            based in Serbia I finally have a a reason to support Djokovic.
          </p>
        </div>
      </div>

      <!-- Accent decor -->
      <div class="relative justify-self-end">
        <div class="absolute flex right-10 top-20">
          <div class="bg-sky-blue p-4 mx-1"></div>
          <div class="bg-sky-blue p-4 mx-1"></div>
          <div class="border-sky-blue p-4 border-2 mx-1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-bg {
  background: linear-gradient(#833ab4, #fd1d1d, #fcb045);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 6px;
}
</style>