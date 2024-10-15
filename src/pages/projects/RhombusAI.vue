<script lang="ts" setup>
import TypeTextArea from '../../components/TypeTextArea.vue';
import FlipCard from '../../components/FlipCard.vue';
import DesktopMock from '../../components/DesktopMock.vue';
</script>

<template>
  <div class="flex flex-col items-center p-36">
    <type-text-area text='< Rhombus AI />' class="text-2xl" />
    <a href="https://rhombusai.com" class="hover:underline" target="_blank">https://rhombusai.com</a>

    <p class="my-10">
      This was an interesting, albeit small job application project given by Rhombus AI. Premise is to
      create a web page using ReactJS and Django to let users upload a spreadsheet like file and infer the data types
      for the columns making subsequent data cleaning easier. Key is to ensure scalability to very large datasets.
    </p>

    <div class="grid grid-cols-2 gap-x-10">
      <p>
        The Pandas dataframe is the preferred structure to handle most ML datasets. However it often reads data in as
        string type which isn't so helpful. The possible Pandas types are string, float, complex number, boolean,
        datetime and categorical. Floats are the easiest to detect by simply trying type conversion, then bools etc.
        If all other types fail the default is then string.
      </p>
      <div class="text-off-white">
        <span class="font-bold">Some considerations:</span>
        <ul>
          <li class="flex items-center">
            <div class="h-2 w-2 bg-sky-blue rotate-45 mx-3"></div>
            Prevent over classification to categorical class
          </li>
          <li class="flex items-center">
            <div class="h-2 w-2 bg-sky-blue rotate-45 mx-3"></div>
            Parsing different date-time formats (eg day month swap is tricky)
          </li>
          <li class="flex items-center">
            <div class="h-2 w-2 bg-sky-blue rotate-45 mx-3"></div>
            Parsing different number formats ("," vs ".")
          </li>
        </ul>
      </div>
    </div>

    <p class="my-5">
      The last 2 of the considerations were fairly easy to resolve by covering those edge cases. The first one is more
      nuanced as categoricalness is determined by the ratio of unique values versus total rows. This could lead to false
      classification if there is low value variety, eg datetime data but just with the year. Ultimately, I did not
      modify the algorithm, as in these cases it could still be argued that the data is better analysed as categorical.
    </p>

    <p>
      The next challenge was being able to process large files (> 1 million records). The 2 main ways to deal with
      this is by reducing the data that needs to be processed (ie an approximation) and by parallel processing. Here is
      my pipeline:
    </p>

    <div class="flex">
      <flip-card frontClass="h-40 w-40 rounded-xl" backClass="h-40 w-40 rounded-xl p-5">
        <template #front-face>
          <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-sitemap" size="2xl"
              class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>1. Chunkify</span>
          </div>
        </template>
        <template #back-face>
          <p>"Chunkify" the data file to read in large datasets.</p>
        </template>
      </flip-card>

      <flip-card frontClass="h-40 w-40 rounded-xl" backClass="h-40 w-40 rounded-xl p-5">
        <template #front-face>
          <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="2xl"
              class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>2. Sampling</span>
          </div>
        </template>
        <template #back-face>
          <p>Sample a percentage of the chunk if there are too many rows</p>
        </template>
      </flip-card>

      <flip-card frontClass="h-40 w-40 rounded-xl" backClass="h-40 w-40 rounded-xl p-5">
        <template #front-face>
          <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-plus" size="2xl" class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>3. Count</span>
          </div>
        </template>
        <template #back-face>
          <p>Count number of rows that fall into each data type</p>
        </template>
      </flip-card>

      <flip-card frontClass="h-40 w-40 rounded-xl" backClass="h-40 w-40 rounded-xl p-5">
        <template #front-face>
          <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-chart-pie" size="2xl"
              class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>4. Recombine</span>
          </div>
        </template>
        <template #back-face>
          <p>Combine the chunk counts to get the total data type counts for each column</p>
        </template>
      </flip-card>

      <flip-card frontClass="h-40 w-40 rounded-xl" backClass="h-40 w-40 rounded-xl p-5">
        <template #front-face>
          <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-layer-group" size="2xl"
              class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>5. Categorise</span>
          </div>
        </template>
        <template #back-face>
          <p>Use the counts to categorise and convert the data columns</p>
        </template>
      </flip-card>
    </div>

    <p>
      I aggregated the results before determining the final data type as if the type was decided too early at the
      chunk level, resolution is lost and bias could creep in. After step 4, an array of number is generated, where
      each number denotes the data type.
    </p>

    <p class="mt-5 mb-10">
      The project specified that the user should be able to manually correct mistakes. After the initial spreadsheet
      processing, all subsequent reloads will skip straight to step 5 since it already has the predetermined array of
      data types. I added the ability to cancel the process in case it gets stuck. For submission I dockerised both the
      frontend and backend to minimise potential conflicts.
    </p>

    <div>
      <desktop-mock imageUrl="/projects/rhombus/home.png" :size="2"/>
    </div>
  </div>
</template>