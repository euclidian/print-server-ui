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
            var meta = document.head.querySelector('meta[name="base-url"]');
            this.base_url = meta.content;
            return this.base_url;
        }
    }
}
</script>
