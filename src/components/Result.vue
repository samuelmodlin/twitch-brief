<template>
    <div>
        <b-overlay :show="loadingAnimation" rounded="sm">
            <b-card img-alt="channel logo" img-left>
                <b-card-text>
                    User <b-badge variant="light">{{ user.name }}</b-badge>
                    <b-avatar variant="primary" :src="user.logo"></b-avatar>
                    <hr />
                    Followers <b-badge variant="light">{{ user.followers }}</b-badge>
                    <hr />
                    Views <b-badge variant="light">{{ user.views }}</b-badge>
                    <hr />
                    Created <b-badge variant="light">{{ user.created }}</b-badge>
                    <hr />
                    Current Game <b-badge variant="success">{{ user.game }}</b-badge>
                </b-card-text>
            </b-card>
        </b-overlay>
    </div>
</template>

<script>
import { BCard, 
        BCardText, 
        BOverlay, 
        BBadge } from 'bootstrap-vue';

export default {
  name: 'Result',
  components: {
    BCard,
    BCardText,
    BOverlay,
    BBadge
  },
  props: {
    user: Object,
    loadingAnimation: Boolean
  }
}
</script>

