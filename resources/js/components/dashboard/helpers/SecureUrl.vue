<script>
export default {
    created: function(){
        var currentUrl = window.location.href;
        console.log(currentUrl);
        console.log('Secure Url Success');
        if(currentUrl != 'http://localhost:8000/#/login'){
            if(!this.getToken('access_token')){
                this.$router.push("/login");
            }
        }
    },
    data: function(){
        return{
            fromLocal: ''
        }
    }
}
</script>
