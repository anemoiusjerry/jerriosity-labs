<script setup>
</script>

<template>
  <section>
    <div class="ml-32 mr-24 mt-16 flex flex-col justify-between" style="height: 70%;">
      <div class="flex justify-between">
        <div>
          <div class="flex w-max">
            <h1 class="text-4xl mr-5 font-bold self-end">About Me</h1>
            <h2
              class="p-4 text-lg tracking-tight font-medium shadow-lg text-dark-gray bg-white dark:text-off-white dark:bg-light-gray">
              Chinese born, New Zealand raised.<br>Australian trained, Serbia based.  
            </h2>
          </div>
          <p class="mt-4 text-justify text-dark-gray dark:text-off-white" style="width: 35vw;">
            I was born in northeastern China, next to the capital Beijing. At the age of 7, my parents whisked me away
            to New Zealand where I grew up before I went to Australia for tertiary study. My double major in mechatronics and
            computer science at the University of Melbourne made me very good at integrating hardware with software.
            This landed me my first job at an industrial IoT startup. I slowly transitioned to remote work, taking small
            freelance jobs and travelling the world while I'm at it!
            <br><br>Current location: <b>Serbia</b> 🇷🇸.
          </p>
        </div>

        <!-- Accent decor -->
        <div class="mr-32">
          <div class="absolute flex">
            <div class="p-4 mx-1 bg-light-trim dark:bg-sky-blue"></div>
            <div class="p-4 mx-1 bg-light-trim dark:bg-sky-blue"></div>
            <div class="p-4 mx-1 border-2 border-light-trim dark:border-sky-blue"></div>
          </div>
        </div>
      </div>

      <div class="flex self-end">
        <div class="flex items-end self-end">
          <!-- Accent decor -->
          <div class="relative z-10">
            <div class="absolute p-5 border-t-4 border-l-4 border-light-trim dark:border-sky-blue"
              style="margin-top: -255px; margin-left: -20px;"></div>
          </div>

          <a href="https://www.instagram.com/jerriosity/" target="_blank"
            class="p-5 mr-5 shadow-lg transform transition duration-300 hover:scale-105 bg-white dark:bg-light-gray">
            <img src="/instagram-pic.jpg" class="max-w-52 mb-3" />
            <h2 class="flex justify-center text-dark-gray dark:text-off-white ">
              Check out my travels &nbsp
              <img src="/instagram-icon.svg" width="25px" />
            </h2>
          </a>
        </div>

        <div class="text-end">
          <h1 class="text-4xl mb-3 font-bold">Hobbies</h1>
          <p class="mt-4 text-justify text-dark-gray dark:text-off-white " style="width: 30vw;">
            Programmers are seen as boring, but I'm here to prove otherwise! I think I lead a rather creative
            life. From a young age I loved to draw my own comics which now transitioned to pencil sketches. At university I acted in a musical
            production of Footloose and I finally learnt guitar to keep up the singing. On the sports front I play tennis and row. Now that
            Im based in Serbia I finally have a a reason to support Djokovic.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>