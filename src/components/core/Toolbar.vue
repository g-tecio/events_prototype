<template>
  <v-img
    :src="image"
    max-height="450px"
    max-widht="100%"
    :aspect-ratio="3"
    position="center"
    transition="auto"
  >
    <v-toolbar
      id="core-toolbar"

      flat
      prominent
      style="background: #eee;"
    >
      <div class="v-toolbar-title">
        <v-toolbar-title
          class="tertiary--text font-weight-light"
        >
          <v-btn
            v-if="responsive"
            class="default v-btn--simple"
            dark
            icon
            @click.stop="onClickBtn"
          >
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          {{ title }}
        </v-toolbar-title>
      </div>

      <v-spacer />
      <v-toolbar-items>
        <v-flex
          align-center
          layout
          py-2
        >
          <v-text-field
            v-if="responsiveInput"
            class="mr-4 mt-2 purple-input"
            label="Search..."
            hide-details
            color="purple"
          />
          <router-link
            v-ripple
            class="toolbar-items"
            to="/"
          >
            <v-icon color="tertiary">mdi-view-dashboard</v-icon>
          </router-link>
          <v-menu
            bottom
            left
            content-class="dropdown-menu"
            offset-y
            transition="slide-y-transition">
            <router-link
              v-ripple
              slot="activator"
              class="toolbar-items"
              to="/notifications"
            >
              <v-badge
                color="error"
                overlap
              >
                <template slot="badge">
                  {{ notifications.length }}
                </template>
                <v-icon color="tertiary">mdi-bell</v-icon>
              </v-badge>
            </router-link>
            <v-card>
              <v-list dense>
                <v-list-tile
                  v-for="notification in notifications"
                  :key="notification"
                  @click="onClick"
                >
                  <v-list-tile-title
                    v-text="notification"
                  />
                </v-list-tile>
              </v-list>
            </v-card>
          </v-menu>
          <router-link
            v-ripple
            class="toolbar-items"
            to="/user-profile"
          >
            <v-icon color="tertiary">mdi-account</v-icon>
          </router-link>
        </v-flex>
      </v-toolbar-items>
    </v-toolbar>
    <h2 class="event_label">Events</h2>
  </v-img>
</template>

<script>

import {
  mapMutations,
  mapState
} from 'vuex'


export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    responsiveInput: false
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 90091) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  },
  computed:{
    ...mapState('app', ['image', 'color'])
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }

  .event_label{
    border-bottom: 1px solid white;
    color: white;
    margin-left: 10px;
    width: 35%;
    bottom: 0;
    position: absolute;

  }
</style>
