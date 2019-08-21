<script>
export default {
    created: function(){
        var d = new Date();

        if(!this.getToken('access_token')){
            this.$router.push("/login");
        }
        else if(this.getToken('expires_in')){
            let expires_in = this.getToken('expires_in');
            let expires_on = parseInt(d.getTime()) + parseInt(expires_in);

            if(parseInt(d.getTime()) > expires_on){
                this.$router.push("/login");
            }
        }

    },
    data: function(){
        return{
            nowTime: ''
        }
    }
}
</script>
