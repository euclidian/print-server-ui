<template>
  <div class="list-table">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Complexity</h3>
        </v-flex>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Search in Complexity"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn class="white--text" color="primary" depressed>
                  Add Data
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                class="elevation-3"
                color="purple--text"
                item-key="name"
                v-model="complex.selected"
                id="template-table"
              >
                <template slot="items" slot-scope="props" color="primary">
                  <td>{{ props.item.num }}</td>
                  <td>{{ props.item.id_template }}</td>
                  <td>{{ props.item.file_name }}</td>
                  <td>{{ props.item.real_file_name }}</td>
                  <td>{{ props.item.upload_date }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="success" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>get_app</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Items as Users } from "../../api/user"
import Axios from 'axios';
export default {
    created: function(){
        this.token = this.getToken('access_token');
        this.url = this.getBaseUrl();
        var config = {
            body: {},
            headers: {'Authorization': "Bearer "+this.token}
        }
        var bodyParameters = {
            key: ""
        }
        Axios.get(this.url+"/api/allJRXML", config)
                .then(response => {
                    console.log('response jalan');
                    console.log(response.data);
                    this.results = response.data.data;
                    var no=0;
                    this.complex.items.splice(0,  this.complex.items.length);
                    for(var i = 0; i < this.results.length; i++){
                        no = no +1;
                        this.hasil = {
                            num: no,
                            id_template: this.results[i].id,
                            file_name: this.results[i].filename,
                            real_file_name:this.results[i].realfilename,
                            upload_date: this.results[i].updated_at
                        }
                        this.complex.items.push(this.hasil);
                    }

                    console.log(this.results[0]);
                })
                .catch(e =>{
                    console.log('Error Jalan');
                    console.log(e);
                })
    },
  data: function() {
    return {
      results: [],
      hasil: {},
      token: '',
      url: '',
      no: 0,
      search: "",
      complex: {
        selected: [],
        headers: [
          {
            text: "No",
            value: ""
          },
          {
            text: "ID Template",
            value: "id_template"
          },
          {
            text: "File Name",
            value: "file_name"
          },
          {
            text: "Real File Name",
            value: "real_file_name"
          },
          {
            text: "Upload Date",
            value: "upload_date"
          },
          {
            text: "Action",
            value: ""
          }
        ],
        items: []
      },
      basic: {
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        items: [
          {
            value: false,
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            value: false,
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            value: false,
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            value: false,
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            value: false,
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            value: false,
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          },
          {
            value: false,
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%"
          },
          {
            value: false,
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%"
          },
          {
            value: false,
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%"
          },
          {
            value: false,
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%"
          }
        ]
      }
    }
  }
}
</script>
<style>
    #template-table th{
        color: #3AA6B7;
    }
</style>
