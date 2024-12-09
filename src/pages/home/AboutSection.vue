<script setup>
import StickyNote from '../../components/StickyNote.vue';
</script>

<template>
  <section>
    <div id="about-section" class="mt-10 flex flex-col justify-between">
      <div class="flex justify-between mb-10">
        <div>
          <div class="flex-for-mobile flex justify-between">
            <h4 class="mr-5 font-bold">About Me</h4>
            <sticky-note class="text-lg tracking-tight font-bold" text="Chinese born, New Zealand raised. 
            Australia based." />
          </div>
          <p class="mt-4 text-justify text-dark-gray dark:text-off-white">
            I was born in northeastern China, next to the capital Beijing. At the age of 7, my parents whisked me away
            to New Zealand where I grew up before I went to Australia for tertiary study. My double major in mechatronics 
            and computer science at the University of Melbourne made me very good at integrating hardware with software.
            This landed me my first job at an industrial IoT startup. I slowly transitioned to remote work, taking small
            freelance jobs and travelling the world while I'm at it!
            <br><br>Current location: <b>New Zealand</b> 🇳🇿
          </p>
        </div>

        <!-- Accent decor -->
        <div class="hide-for-mobile mr-32">
          <div class="absolute flex">
            <div class="p-4 mx-1 bg-blood-orange dark:bg-sky-blue"></div>
            <div class="p-4 mx-1 bg-blood-orange dark:bg-sky-blue"></div>
            <div class="p-4 mx-1 border-2 border-blood-orange dark:border-sky-blue"></div>
          </div>
        </div>
      </div>

      <div class="flex self-end">
        <div class="flex items-end hide-for-mobile">
          <!-- Accent decor -->
          <div class="relative">
            <div class="absolute p-5 border-t-4 border-l-4 border-blood-orange dark:border-sky-blue"
              style="margin-top: -255px; margin-left: -20px;"></div>
          </div>

          <a class="p-5 mr-5 shadow-lg transform transition duration-300 hover:scale-105 bg-white dark:bg-light-gray"
            href="https://www.instagram.com/jerriosity/" target="_blank">
            <img src="/instagram-pic.jpg" class="max-w-52 mb-3"/>
            <span class="flex justify-center text-dark-gray dark:text-off-white ">
              Check out my travels &nbsp
              <img src="/instagram-icon.svg" width="25px" />
            </span>
          </a>
        </div>

        <div>
          <div class="flex flex-row justify-between">
            <a href="https://www.instagram.com/jerriosity/" target="_blank"
              class="hide-for-desktop p-5 mr-5 shadow-lg transform transition duration-300 hover:scale-105 bg-white dark:bg-light-gray">
              <span class="flex justify-center text-dark-gray dark:text-off-white ">
                Check out my travels &nbsp
                <img src="/instagram-icon.svg" width="25px" />
              </span>
            </a>
            <h4 class="font-bold self-end">Hobbies</h4>
          </div>
          
          <p class="text-justify text-dark-gray dark:text-off-white">
            Programmers are seen as boring, but I'm here to prove otherwise! I think I lead a rather creative
            life. From a young age I loved to draw my own comics which now transitioned to pencil sketches. At
            university I acted in a musical production of Footloose and I finally learnt guitar to keep up the singing. 
            On the sports front I play tennis and row. Now that I have lived in Serbia for a year, I finally have a a 
            reason to support Djokovic.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  @include breakpoint-up(medium) {
    width: 35vw;
  }
}

#about-section {
  width: 80vw;
  @include breakpoint-down(small) {
    width: auto;
    padding-left: 2em;
    padding-right: 2em;
  }
}
</style>