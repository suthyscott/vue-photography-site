<template>
  <div class="gallery">
    <div class="gallery-container">
      <router-link to="/motorcycles">
        <img
          class="gallery-image"
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </router-link>
      <p class="gallery-label">This is the Motorcycles component</p>
    </div>
    <div class="gallery-container">
      <router-link to="/people">
        <img
          class="gallery-image"
          src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </router-link>
      <p class="gallery-label">This is the People component</p>
    </div>
    <div class="gallery-container">
      <router-link to="/places">
        <img
          class="gallery-image"
          src="https://images.unsplash.com/photo-1472725485116-45d54945b877?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1442&q=80"
        />
      </router-link>
      <p class="gallery-label">this is the Places component</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  components: {},
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
