<template>
    <v-app class="primary split-bg">
        <v-container fluid fill-height>
            <v-layout>
                <v-container fluid fill-height>
                        <v-layout align-center justify-center>
                            <v-flex xs12 sm8 md8 lg8 xl8>
                                <img src="/images/print-server-logo.svg" class="img-fluid">
                            </v-flex>
                        </v-layout>
                </v-container>
                <v-container fluid fill-height>
                        <v-layout align-center justify-center>
                            <v-flex xs12 sm8 md10 lg8 xl8>
                                <router-view :key="$route.path"></router-view>
                            </v-flex>
                        </v-layout>
                </v-container>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
  data: () => ({}),

  methods: {}
}
</script>
<style scoped lang="css">
    .split-bg {
        background: url(/images/bg-login-lg.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
