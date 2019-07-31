<template>
    <v-card class="elevation-0 pa-3 login-card primary">
        <v-card-text>
            <div class="layout column align-center">
                <h3 class="flex white--text">WELCOME TO</h3>
                <h1 class="flex mb-4 white--text font-weight-black display-2">PRINT SERVER</h1>
            </div>
            <v-alert
                v-model="alert"
                type="error"
                close-text="Close Alert"
                color="error"
                dark
                dismissible
                class="mb-3"
                transition="fade-transition"
            >
                Error<br><hr>
                {{ error_type }}
            </v-alert>
            <v-form>
                <v-text-field
                    rounded
                    class="font-weight-black"
                    solo
                    flat
                    prepend-inner-icon="person"
                    name="username"
                    label="Username"
                    placeholder="USERNAME"
                    type="text"
                    v-model="model.username"
                ></v-text-field>
                <v-text-field
                    rounded
                    class="font-weight-black"
                    solo
                    flat
                    prepend-inner-icon="lock"
                    name="password"
                    label="Password"
                    placeholder="PASSWORD"
                    id="password"
                    type="password"
                    v-model="model.password"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <div class="login-btn">
            <v-btn block class="font-weight-black" color="secondary" @click="login" :loading="loading" large>Login</v-btn>
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
            },
            alert: false,
            error_type: ''
        }
    },

    methods: {
        login: function() {
            if(this.model.password != "" && this.model.username != ""){
                axios.post('/api/print/login', this.model)
                .then(response => {
                    this.resultnya = response.data;
                    console.log(response);
                    console.log(this.resultnya.token_type);
                    console.log(this.resultnya.expires_in);
                    console.log(this.resultnya.access_token);
                    console.log(this.resultnya.refresh_token);
                })
                .catch(e => {
                    this.errors.push(e);
                })

                if(this.resultnya.token_type != null){
                    this.loading = true
                    // handle login
                    
                    setTimeout(() => {
                        this.$swal({
                            text: 'Yeay..!',
                            title: 'Login Success',
                            showConfirmButton: false,
                            timer:1500,
                            type: 'success'
                        }); 
                        this.$router.push("/dashboard");
                       
                    }, 100)
                }
            }else{
                this.alert = true;
                this.error_type = "Please input Username and Password";
            }

        }
    }
}
</script>
<style scoped lang="css">

</style>
