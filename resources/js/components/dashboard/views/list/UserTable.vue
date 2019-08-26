<template>
  <div class="list-table">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>User List</h3>
        </v-flex>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <!-- <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn> -->
              <v-dialog
                v-model="dialog"
                width="600"
                height="400"
                >
                <template v-slot:activator="{ on }">
                    <v-btn class="white--text" color="primary" depressed v-on="on">
                        Add Data
                    </v-btn>
                </template>

                <v-card>
                    <v-toolbar card prominent color="primary" dark="">
                        <v-toolbar-title class="body-1">Add Data</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon v-on:click="dialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        hello
                    </v-card-text>
                    <v-card-actions>

                    </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                class="elevation-1"
                item-key="name"
                v-model="complex.selected"
                id="user-table"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.num }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.secret_id }}</td>
                  <td>{{ props.item.secret_code }}</td>
                  <td>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn depressed outline icon fab dark color="primary" small v-on="on">
                                <i class="fa fa-key"></i>
                            </v-btn>
                        </template>
                        <span>Generate Token</span>
                    </v-tooltip>

                    <v-tooltip top v-if="props.item.user_id == online_id">
                        <template v-slot:activator="{ on }">
                            <v-btn depressed outline icon fab dark color="pink" small v-on="on">
                                <v-icon>accessibility</v-icon>
                            </v-btn>
                        </template>
                        <span>This is Me</span>
                    </v-tooltip>

                    <v-tooltip top v-else-if="props.item.admin == 1">
                        <template v-slot:activator="{ on }">
                            <v-btn depressed outline icon fab dark color="purple" small v-on="on">
                                <i class="fas fa-user-check"></i>
                            </v-btn>
                        </template>
                        <span>Admin</span>
                    </v-tooltip>

                    <v-tooltip top  v-else>
                        <template v-slot:activator="{ on }">
                            <v-btn depressed outline icon fab dark color="warning" small v-on="on">
                                <i class="fa fa-user"></i>
                            </v-btn>
                        </template>
                        <span>Not Admin</span>
                    </v-tooltip>
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
        this.getAllUser();
    },
    data: function() {
        return {
            dialog: false,
            online_id: 0,
            result: [],
            resultExtract: {},
            search: "",
            complex: {
                headers: [
                    {
                        text: "No",
                        value: "num"
                    },
                    {
                        text: "Name",
                        value: "name"
                    },
                    {
                        text: "Email",
                        value: "email"
                    },
                    {
                        text: "Secret ID",
                        value: "secret_id"
                    },
                    {
                        text: "Secret Code",
                        value: "secret_code"
                    },
                    {
                        text: "Action",
                        value: ""
                    }
                ],
                items: []
            }
        }
    },
    methods: {
        getAllUser: function(){
            var config = {
                body: {},
                headers: {'Authorization': "Bearer "+this.getToken('access_token')}
            }
            Axios.get(this.getBaseUrl()+'/api/allUser', config)
                .then(response => {
                    console.log(response.data);
                    this.result = response.data.data;

                    var no = 0;
                    this.complex.items.splice(1, this.complex.items.length);
                    for(var i = 0; i < this.result.length; i++){
                        no = no + 1;
                        this.resultExtract = {
                            num : no,
                            user_id: this.result[i].id,
                            name: this.result[i].name,
                            email: this.result[i].email,
                            admin: this.result[i].admin,
                            created_at: this.result[i].created_at,
                            secret_id: this.result[i].secretid,
                            secret_code: this.result[i].secret
                        }

                        this.complex.items.push(this.resultExtract);
                    }
                })
                .catch(e =>{
                        console.log('Error Jalan');
                        console.log(e);
                    })
            Axios.get(this.getBaseUrl()+'/api/getUser', config)
                .then(response => {
                    console.log(response.data);
                    this.online_id = response.data.id;
                })
                .catch(e =>{
                        console.log('Error Jalan');
                        console.log(e);
                    })

        }
    }
}
</script>
<style>
    #user-table th{
        color:#3AA6B7;
    }
</style>
