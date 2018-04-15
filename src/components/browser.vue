<template>
    <div class="browser-window-container">
        <div class='browser-window'>
            <div class='top-bar'>
                <div class='circles'>
                    <div class="circle circle-red"></div>
                    <div class="circle circle-yellow"></div>
                    <div class="circle circle-green"></div>
                </div>
            </div>
            <div class='content'>

            </div>
            <div class="dev-tools">
                <div class="bar">
                    <div class="dev-bar-content"></div>
                    <div class="close">X</div>
                    <div class="clear"></div>
                </div>
                <div class="content">
                    <div class="html">

                    </div>
                    <div class="css">

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    $bottomColor: #E2E2E1;
    $topColor: lighten($bottomColor, 2%);

    $border: $bottomColor;

    $height: 500px;


    .browser-window-container{
        padding: 0 1rem;
    }

    .browser-window {
        text-align: left;
        width: 100%;
        height: $height;
        display: inline-block;
        border-radius: 5px;
        background-color: #fff;
    }
    .browser-window .top-bar {
        height: 30px;
        border-radius: 5px 5px 0 0;
        border-top: thin solid lighten($topColor, 1%);
        border-bottom: thin solid darken($bottomColor, 1%);
        background: linear-gradient($topColor, $bottomColor);
    }
    .browser-window .circle {
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        background-color: lighten($topColor, 10%);
    }
    .browser-window .circles { margin: 5px 11px; }
    .browser-window .content {
        margin: 0;
        width: 100%;
        min-height: 50%;
        display: inline-block;
        border-radius: 0 0 5px 5px;
        background-color: #fafafa;
    }

    .browser-window .dev-tools {
        width: 100%;
        min-height: 50%;
        margin: 0;
        padding: 0;
    }

    .browser-window .dev-tools .bar {
        margin-top: -4px;
        border-top: thin solid $topColor;
        border-bottom: thin solid $topColor;
        color: $topColor;
        .dev-bar-content {
            padding: 10px;
            float: left;
        }
        .close {
            float: right;
            border-left: thin solid $topColor;
            padding: 10px;
        }
    }

    .browser-window .dev-tools .content {
        .html {
            height: 100%;
            width: 69%;
            border-right: thin solid $topColor;
        }
        .css {
            float: right;
            height: 100%;
            width: 30%;
        }
    }

    .clear { clear: both; }

</style>

<script>
    export default {
        created() {
            console.log('Hi');
        }
    }
</script>
