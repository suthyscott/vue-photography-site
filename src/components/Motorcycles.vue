<template>
  <div class="moto-container">
    <img
      class="motorcycle-image"
      v-for="photo in pics"
      :key="photo.id"
      :src="photo.urls.full"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      pics: []
    };
  },
  beforeMount() {
    this.getMotorcyclePics();
  },
  methods: {
    async getMotorcyclePics() {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=motorcyle`,
        {
          params: {
            client_id: "zwIGZ28bc2vDdUvvR5K-zo94zhLrw-W7vigla90c7Mk",
            count: 2
          }
        }
      );
      console.log(res);
      this.pics = res.data.results;
    }
  }
};
</script>

<style scoped lang="scss">
.moto-container {
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    height: 100vh;
  }
  .motorcycle-image {
    width: 90%;
    margin: 20px auto;

    @media (min-width: 1440px) {
      width: 30%;
      object-fit: contain;
    }
    // margin: 1%;
  }
}
</style>
