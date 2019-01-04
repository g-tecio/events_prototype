<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md12>
        <material-card color="blue" title="Event" text="Details about the event">
           <v-img :src="event.event_image" aspect-ratio="3" class="img-event"></v-img>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field disabled label="Event Name" v-model="event.event_name"/>
                </v-flex>
                <!-- Addresss -->
                <v-flex xs12 md8>
                  <v-text-field disabled v-model="event.address.line_address1" label="Line address 1"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field disabled v-model="event.address.line_address2" label="Line address 2"/>
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field disabled v-model="event.address.country" label="Country"/>
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field disabled v-model="event.address.state" label="State"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field disabled v-model="event.address.city" label="City"/>
                </v-flex>
                <v-flex xs12 md2>
                  <v-text-field disabled v-model="event.address.zip_code" label="Zip code"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field disabled v-model="event.address.description" label="Address Description"/>
                </v-flex>

                <!-- Event generalities -->
                <v-flex xs12 md3>
                  <v-text-field disabled v-model="event.event_type" label="Event Type"/>
                </v-flex>
                <v-flex xs12 md3>
                  <v-text-field disabled v-model="event.event_attire" label="Attire"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field disabled v-model="event.revenue_generation" label="Revenue generation"/>
                </v-flex>
                <v-flex xs12 md2>
                  <v-text-field disabled v-model="event.capacity" label="Capacity"/>
                </v-flex>
                
                <v-flex xs12>
                  <v-textarea disabled v-model="event.description" label="Description"/>
                </v-flex>
                <v-flex xs12 md9>
                  <v-date-picker
                    class="dark-text"
                    color="blue"
                    v-model="event.date.formated_date"
                    :reactive="reactive"
                    :disabled="true"
                  ></v-date-picker>
                </v-flex>
                <v-flex xs12 md3>
                  <v-select disabled v-model="event.status" :items="status" item-text="event.status" ></v-select>
                </v-flex>

                <!-- image area -->
                

                <!-- <v-flex xs12 text-xs-right>
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="submitData()"
                  >Save Event</v-btn>
                </v-flex> -->
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      api_url:
        "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events/",
      event: {
        event_name: "",
        address: {
          line_address1: "",
          line_address2: "",
          city: "",
          state: "",
          country: "",
          zip_code: "",
          description: ""
        },
        venue_name: "asd",
        capacity: 0,
        description: "",
        location: {
          latitude: 24,
          longitude: 102
        },
        date: {
          day: "07",
          formated_date: "",
          month: "07",
          time: "456",
          time_zone: "123",
          year: "123"
        },
        status: "",
        pictures: ["none"],
        event_image: "",
        event_attire: "",
        event_type: "",
        revenue_generation: ""
      },
      landscape: true,
      reactive: true,
      status: ["Pending", "Not started", "In progress", "Finished"],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$http.get(this.api_url + this.id).then(res => {
      this.event = res.data;
    });
  }
};
</script>

<style lang="stylus">
  .img-event
    border radius 4px
</style>

