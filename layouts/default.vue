<template>
    <div>
        <Header/>
        <div class="ui center aligned text container">
            <nuxt/>
        </div>
        <Footer/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
body {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
}

.ui.center.aligned.container {
    margin-top: 4em;
}

</style>