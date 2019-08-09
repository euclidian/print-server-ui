<script>
// To Use This in any component just write
// the_method('token_name');
export default {
    data: function(){
        return{
            save_token: ''
        }
    },
    methods: {
        getToken: function(the_token){
            if(localStorage.getItem(the_token)){
                this.save_token = localStorage.getItem(the_token);
                return this.save_token;
            }
        },
        deleteToken: function(the_token){
            if(localStorage.getItem(the_token)){
                localStorage.removeItem(the_token);
            }
        }
    }
}
</script>
