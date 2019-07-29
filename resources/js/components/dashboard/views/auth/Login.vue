<template>
    <v-card class="elevation-3 pa-5 login-card">
        <v-card-text>
            <div class="layout column align-center">
                <img src="../../assets/logo.svg" alt="Vue Material Admin" width="120" height="120" />
                <h1 class="flex my-4 primary--text">Login</h1>
            </div>
            <v-form>
                <v-text-field
                    append-icon="person"
                    name="username"
                    label="Username"
                    type="text"
                    v-model="model.username"
                ></v-text-field>
                <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="model.password"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <div class="login-btn">
            <v-btn block color="accent" @click="login" :loading="loading">Login</v-btn>
        </div>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data: function(){
        return{
            loading: false,
            model: {
                username: "",
                password: ""
            },
            resultnya: {
                token_type: '',
                expires_in: '',
                access_token: '',
                refresh_token: ''
            }
        }
    },

    methods: {
        login: function() {

            axios.post('/api/print/login', this.model)
                .then(response => {
                    this.resultnya = response.data;
                    console.log(this.resultnya.token_type);
                    console.log(this.resultnya.expires_in);
                    console.log(this.resultnya.access_token);
                    console.log(this.resultnya.refresh_token);
                })
                .catch(e => {
                    this.errors.push(e);
                })

            if(this.resultnya != null){
                this.loading = true
                // handle login
                setTimeout(() => {
                    this.$router.push("/dashboard")
                }, 1000)
            }
        }
    }
}
</script>
<style scoped lang="css">

</style>
