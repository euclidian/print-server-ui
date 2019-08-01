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
            <v-btn block class="font-weight-black" color="secondary" @click="login" :loading="loading" large :disabled="btn_disabled">Login</v-btn>
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
            result: {
                token_type: '',
                expires_in: '',
                access_token: '',
                refresh_token: ''
            },
            alert: false,
            error_type: '',
            btn_disabled: false
        }
    },

    methods: {
        login: function() {
            if(this.model.password != "" && this.model.username != ""){
                this.loading = true;
                this.btn_disabled = true;
                axios.post('/api/print/login', this.model)
                .then(response => {
                    this.result = response.data;
                    console.log(response);
                    console.log(this.result.token_type);
                    console.log(this.result.expires_in);
                    console.log(this.result.access_token);
                    console.log(this.result.refresh_token);
                })
                .catch(e => {
                    this.loading = true;
                    this.btn_disabled = true;
                    this.errors.push(e);
                })

                if(this.result.token_type != null){
                    // handle login
                    this.$router.push("/dashboard");
                    this.$swal({
                            text: 'Yeay..!',
                            title: 'Login Success',
                            showConfirmButton: false,
                            timer:1500,
                            type: 'success'
                        });
                }else{
                    this.alert = true;
                    this.error_type = "Username or Password are Incorrect";
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
