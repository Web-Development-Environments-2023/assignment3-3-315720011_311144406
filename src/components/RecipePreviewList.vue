<template>
  <b-container class=PreviewList>
    <h3 class="title">
      {{ titleExsits }}:
    </h3>
    <b-card-group class="card-deck">
        <RecipePreview v-for="r in recipes" :key="r.id" 
          class="recipePreview"
          :showFavorite="showFavorite"
          :isOnLastViewd="isOnLastViewd"
          :recipe="r" />
    </b-card-group>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showFavorite: Boolean,
    isOnLastViewd: Boolean
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {

  },
  methods: {
    updateRecipes(recipes) {
      this.recipes = recipes;
    }
  },
  computed: {
    titleExsits() {
      if(this.recipes){
        return this.recipes.length == 0 ? "No Recipes" : this.title;
      }
      else{
        return "No Recipes";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .title{
    padding: 2%;
    position: relative;
    left: 30%;
  }

  .container {
    min-height: 400px;
  }
</style>
