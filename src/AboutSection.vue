<script setup>
</script>

<template>
  <section>
    <div class="flex justify-between w-full mx-36" style="height:75%">
      <div>
        <div class="flex w-max">
          <h1 class="text-4xl mr-5 font-bold self-end">About Me</h1>
          <h2 class="p-4 text-lg tracking-tight font-medium shadow-lg text-dark-gray bg-white dark:text-off-white dark:bg-light-gray">
            Chinese born, New Zealand raised,<br>Australian trained, Serbia based!
          </h2>
        </div>
        <p class="mt-4 text-justify text-dark-gray dark:text-off-white" style="max-width: 600px;">
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
        <div class="absolute p-5 border-t-4 border-l-4 border-light-trim dark:border-sky-blue" style="left:-20px; bottom:209px"></div>
      </div>

      <div class="flex items-end self-end">
        <a href="https://www.instagram.com/jerriosity/" target="_blank"
          class="p-5 mr-5 shadow-lg transform transition duration-300 hover:scale-105 bg-white dark:bg-light-gray">
          <img src="/public/instagram-pic.jpg" class="max-w-52 mb-3" />
          <h2 class="flex justify-center text-dark-gray dark:text-off-white ">
            Check out my travels &nbsp
            <img src="/public/instagram-icon.svg" width="25px" />
          </h2>
        </a>

        <div class="text-end">
          <h1 class="text-4xl mb-3 font-bold">Hobbies</h1>
          <p class="mt-4 text-justify text-dark-gray dark:text-off-white " style="max-width: 500px;">
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
          <div class="p-4 mx-1 bg-light-trim dark:bg-sky-blue"></div>
          <div class="p-4 mx-1 bg-light-trim dark:bg-sky-blue"></div>
          <div class="p-4 mx-1 border-2 border-light-trim dark:border-sky-blue"></div>
        </div>
      </div>
    </div>
  </section>
</template>