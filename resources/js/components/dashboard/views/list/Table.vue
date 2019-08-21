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
              <div class="text-center">
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
                        <vue-dropzone
                        v-on:vdropzone-complete="getFileStatus"
                         :duplicateCheck="true"
                         ref="myVueDropzone"
                         id="dropzone"
                         :options="dropzoneOptions"
                         :useCustomSlot=true>
                            <div class="dropzone-custom-content">
                              <h3 class="dropzone-custom-title success--text">Drag and drop to upload content!</h3>
                              <div class="subtitle">...or click to select a file from your computer</div>
                            </div>
                        </vue-dropzone>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text depressed v-if="fileStatus == 'error'" v-on:click="clsDrop">Clear Dropzone</v-btn>
                        <v-btn depressed color="primary" v-on:click="processInput">Submit</v-btn>
                    </v-card-actions>

                </v-card>
                </v-dialog>
              </div>
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
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon v-on:click="deleteData(props.item.num, props.item.id_template)">delete</v-icon>
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
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  methods: {
        getAllData: function(){
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
        clsDrop: function(){
          this.$refs.myVueDropzone.removeAllFiles();
          this.fileStatus = '';
        },
        getFileStatus: function(response){
            this.fileStatus = response.status;
        },
        processInput: function(){
            this.$refs.myVueDropzone.processQueue();
        },
        //For Deleting Row
        deleteData: function(no, template_id){
            console.log('No = '+no);
            console.log('Template = '+template_id);
            this.$swal({
                        title: 'Are you sure ?',
                        text: "You won't be able to revert this template with id "+template_id+" !!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                            var config = {
                                body: {},
                                headers: {'Authorization': "Bearer "+this.token}
                            }
                            Axios.get(this.getBaseUrl()+'/api/deleteJRXML/'+template_id, config)
                                .then(response => {
                                    console.log('response jalan');
                                    console.log(response.data);
                                    if(response.data.statusCode == 200){
                                        this.getAllData();
                                        this.$swal({
                                            title: 'Template id '+template_id+' has been Deleted',
                                            showConfirmButton: false,
                                            timer:1500,
                                            type: 'success'
                                        })
                                    }
                                });
                        }
                    })
        }
    },
    watch: {
        fileStatus: function(){
            if(this.fileStatus == 'success'){
                this.dialog = false;
                this.$refs.myVueDropzone.removeAllFiles();
                this.$swal({
                        title: 'Yeay..!',
                        text: 'Data Has been Added',
                        showConfirmButton: false,
                        timer:1500,
                        type: 'success'
                    });
                this.getAllData();
                this.fileStatus = '';
            }
            else if(this.fileStatus == 'error'){
                this.$swal({
                        title: 'Oops..',
                        text: 'Data Extention must be JRXML',
                        showConfirmButton: false,
                        timer:1500,
                        type: 'error'
                    });
            }
        }
    },
    created: function(){
        this.getAllData();
    },
    data: function() {
        return {
            the_file: '',
            fileStatus: '',
            dropzoneOptions: {
                url: this.getBaseUrl() + '/api/addJRXML',
                thumbnailWidth: 200,
                maxFilesize: 2,
                maxFiles: 1,
                paramName: 'template',
                headers: {
                    'Authorization': "Bearer "+this.getToken('access_token'),
                },
                addRemoveLinks: true,
                acceptedFiles: '.jrxml',
                autoProcessQueue: false,
            },
            dialog: false,
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
