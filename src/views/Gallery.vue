<template>
  <div class="gallery">
    <Motorcycles />
    <People />
    <Places />
  </div>
</template>

<script>
import Motorcycles from "../components/Motorcycles.vue";
import People from "../components/People.vue";
import Places from "../components/Places.vue";
export default {
  name: "Gallery",
  components: {
    Motorcycles,
    People,
    Places
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.gallery {
  .gallery-container {
    width: 100%;
    display: flex;
    align-items: center;

    .gallery-image {
      height: 100%;
      width: 100%;
      display: block;
    }
  }

  .gallery-container:nth-child(2) {
    flex-direction: row-reverse;
  }

  .gallery-label {
    margin: auto;
  }

  a {
    display: block;
    width: 50%;
    text-decoration: none;
    margin: none;
    padding: none;
  }
}
</style>
