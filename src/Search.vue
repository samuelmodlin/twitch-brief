<template>
  <div style="background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(237,247,255,1) 100%); height: 100vh">
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand tag="h1">
      Twitch Search
    </b-navbar-brand>
  </b-navbar>
  <br>
  <b-container fluid>
    <b-input-group size="lg">
      <b-form-input 
        size="lg" 
        autofocus v-model="searchText" 
        type="search" 
        @keyup.enter="search"
        placeholder="Enter twitch name..."
      ></b-form-input>
        <b-input-group-append>
            <b-button v-on:click="search" block variant="primary">Search</b-button>
        </b-input-group-append>
    </b-input-group>

    <Result
      v-bind:user="user"
      v-bind:loadingAnimation="loadingAnimation"
      v-if="visible"
    ></Result>
  </b-container>
  </div>
</template>

<script>
import Result from './components/Result.vue';
import { BInputGroup, 
        BButton, 
        BFormInput, 
        BInputGroupAppend, 
        BContainer, 
        BNavbar, 
        BNavbarBrand, } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'Search',
  components: {
    BInputGroup,
    BFormInput,
    BButton,
    BInputGroupAppend,
    BContainer,
    Result,
    BNavbar,
    BNavbarBrand
  },
  data() {
    return {
      user: Object,
      loadingAnimation: true,
      searchText: "",
      visible: false,
    }
  },
  methods: {
    search: function() {
      var name = this.searchText;
      /* Public Dev Client ID */
      var clientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";
      var kraken = axios.create({
        baseURL:"https://api.twitch.tv/kraken/",
        headers:{'Client-ID': clientId}
      });
      kraken.get('channels/' + name).then((response) => {
        this.visible = true;
        var data = response.data;
        var profile = {
          name: data.name,
          game: data.game,
          created: data.created_at,
          logo: data.logo,
          followers: data.followers,
          views: data.views,
        }
        this.user = profile;
        }).catch((error) => {
          console.warn(error);
        }).then(() => {this.loadingAnimation = false}
      );
    }
  }
}
</script>

