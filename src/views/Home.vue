<template>
  <div class="home">
    <h2 id="home-header">
      This is a mock photography website that I built to learn Vue. All of the
      images are from Unsplash:)
    </h2>
    <div>
      <div
        class="home-preview-container"
        v-for="snippet in photos"
        :key="snippet.id"
      >
        <HomeSnippet :info="snippet" />
      </div>
    </div>
    <p>There will probably end up being a footer here.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSnippet from "@/components/HomeSnippet.vue";

export default {
  name: "Home",
  components: {
    HomeSnippet
  },
  data() {
    return {
      photos: [
        {
          name: "motorcycle",
          url:
            "https://images.unsplash.com/photo-1550966871-47324cfb6278?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80",
          id: 1,
          poem: `“You are on your own. You are not protected by two tons of steel, rubber, foam padding and safety glass. Neither are you steering two tons of guided missile toward other cars, people and property. If you are prepared to accept the responsibility of your own actions, then motorcycling can be both safe and thrilling. Riding is an art as well as a craft and no amount of explanation can take the place of experience." \n
― Theresa Wallach, Easy Motorcycle Riding, 1970`
        },
        {
          name: "macedonia",
          url:
            "https://images.unsplash.com/photo-1587730339392-111b0330ee63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1304&q=80",
          id: 3,
          poem: `“Through every generation of the human race there has been a constant war, a war with fear. Those who have the courage to conquer it \nare made free and those who are conquered by it are made to suffer until they have the courage to defeat it, or death takes them.” 
          ― Alexander the Great`
        },
        {
          name: "karate",
          url:
            "https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          id: 2,
          poem: `“I come to you with only Karate, empty hands. I have no weapons, but should I be forced to defend myself, my principles or my honor, should it be a matter of life or death, of right or wrong; then here are my weapons, Karate, my empty hands.” – Ed Parker.`
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../reset.css";
.home {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#home-header {
  height: 5vh;
  padding: 20px;
  background: rgb(154, 178, 197);
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-preview-container {
  width: 100%;

  &:nth-child(2) > div {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
