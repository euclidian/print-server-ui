<script>
export default {
    data: function(){
        return{
            base_url: '',
            index: 0
        }
    },
    methods: {
        getBaseUrl: function(){
            var meta = document.getElementsByTagName("meta");

            for(var i = 0; i < meta.length; i++){
                if(meta[i].name == "base-url"){
                    this.index = i;
                }
            }
            this.base_url = meta[this.index].content;
            return this.base_url;
        }
    }
}
</script>
