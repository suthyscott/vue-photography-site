<template>
  <div class="home">
    <div v-for="snippet in photos" :key="snippet.id">
      <HomeSnippet v-bind:info="snippet" />
    </div>
    <p>Hello Hi Hello</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSnippet from "@/components/HomeSnippet.vue";

export default {
  name: "Home",
  components: {
    HomeSnippet,
  },
  data() {
    return {
      photos: [
        {
          name: "motorcycle",
          url:
            "https://unsplash.com/photos/doEesnJofn0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
          id: 1,
        },
        {
          name: "city",
          url: "https://unsplash.com/photos/nV7GJmSq3zc",
          id: 2,
        },
        {
          name: "nature",
          url: "https://unsplash.com/photos/78A265wPiO4",
          id: 3,
        },
      ],
    };
  },
};
</script>
