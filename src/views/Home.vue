<template>
  <div>
    <vue-instant :suggestOnAllWords="true"
 :suggestion-attribute="suggestionAttribute" v-model="value" :disabled="false"  @input="changed" :show-autocomplete="true" :autofocus="false" :suggestions="suggestions" name="rickandmorty" placeholder="Search for the character name" type="google"></vue-instant>

    <span class="card-list">
      <Card
        v-for="character in suggestions" 
        :key="character.id"
        :character-list="character"
      /> 
    </span>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Vue from 'vue'
import VueInstant from 'vue-instant'
import 'vue-instant/dist/vue-instant.css'
import { api } from '../services/API';


Vue.use(VueInstant)
 function getData(pointer, name){
       var that = pointer
      pointer.suggestions = []
      api.getCharacters(name)
          .then(function(response) {
          response.data.results.forEach(function(a) {
             if(that.suggestions.indexOf(a) === -1) {
                that.suggestions.push(a)
             }
      })
    })
 }

export default {
  name: "Home",
  components: {
    Card
  },

  data () {
    return {
        value: '',
        suggestionAttribute: 'name',
        suggestions: [],
        selectedEvent: "",
    }
  },
  created: function () {
      getData(this, '');
  } ,
 
  methods: {
    changed: function() {
      getData(this, this.value);
    },
    

    
    
  }
};
</script>
