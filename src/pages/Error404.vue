<template>
    <div class="container-fluid">
        <div class="container mt-5">
            <h1>Error 404: Page not Found</h1>
            <p>Please head back to <router-link to="/">arryan.github.io</router-link>. There is nothing to see here.</p>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap';
    import 'bootstrap-icons/font/bootstrap-icons.css';

    export default {
        name: "Error404",
        data: function() {
            return {
                timer: null
            }
        },
        mounted: function() {
            document.querySelector('body').style.backgroundColor = 'white';
        }
    }
</script>

<style scoped>

</style>
