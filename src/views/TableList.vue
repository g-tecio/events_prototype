<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="blue" title="Events" text="">
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.event_name }}</td>
              <td>{{ item.address.city }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.date.formated_date }}</td>
              <router-link :to="{ path: '/view-event/' + item.id }">See details</router-link>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    api_url:
      "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events",
    headers: [
      {
        sortable: false,
        text: "Name",
        value: "event_name"
      },
      {
        sortable: false,
        text: "City",
        value: "address.city"
      },
      {
        sortable: true,
        text: "Status",
        value: "status"
      },
      {
        sortable: true,
        text: "Date",
        value: "date"
      },
      {
        sortable: false,
        text: "See details",
        value: "status"
      }
    ],
    items: [
      {
        event_name: "Event",
        address: {
          city: "dgo"
        },
        date: "none",
        status: "active"
      }
    ]
  }),
  mounted() {
    axios({ method: "GET", url: this.api_url, headers: { "content-type": "application/json" } }).then(
      result => {
        this.items = result.data
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>
