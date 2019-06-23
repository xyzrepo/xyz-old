<template>
    <div>
        <div class="ui tablet computer only padded grid">
            <div class="ui borderless fluid huge inverted menu">
                <div class="ui container">
                    <a class="header item" href="#root">Project Name</a>
                    <a class="active item" href="#root">Home</a>
                    <a class="item" href="#root">About</a>
                    <a class="item" href="#root">Contact</a>
                </div>
            </div>
        </div>
        <div class="ui mobile only padded grid">
            <div class="ui borderless fluid huge inverted menu">
                <a class="header item" href="#root">Project Name</a>
                <div class="right menu">
                    <div class="item">
                        <button @click="clickToggle" class="ui icon toggle basic inverted button">
                          <i class="content icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ui vertical borderless fluid inverted menu">
                    <a class="active item" href="#root">Home</a>
                    <a class="item" href="#root">About</a>
                    <a class="item" href="#root">Contact</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickToggle: function() {
            $(".mobile.only.grid .ui.vertical.menu").toggle(100);
        }
    }
}
</script>

<style scoped>
.ui.inverted.menu {
    border-radius: 0;
    flex-wrap: wrap;
    border: none;
    padding-left: 0;
    padding-right: 0;
}

.ui.mobile.only.grid .ui.menu .ui.vertical.menu {
    display: none;
}

.ui.inverted.menu .item {
    color: rgb(157, 157, 157);
    font-size: 18px;
}

.ui.inverted.menu .active.item {
    background-color: #080808;
}
</style>
