<template>
  <div class="preview-container">
    <img :src="info.url" class="home-image" />
    <div class="quote-container">
      <p class="quote">{{ info.poem }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSnippet",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      x: 1,
      y: 1
    };
  },
  methods: {
    add() {
      this.y = this.y + 1;
    }
  },
  computed: {
    sum() {
      return this.x + this.info.name + this.y;
    }
  }
};
</script>

<style scoped>
.preview-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.home-image {
  height: 100%;
  width: 50%;
}
.quote-container {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quote {
  line-height: 25px;
}
</style>
