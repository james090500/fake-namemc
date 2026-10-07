<template>
    <div class="card mb-3">
        <div class="card-header py-1">
            <strong> Skins (<a href="#">1</a>) (<a href="#">edit</a>) </strong>
        </div>
        <div class="card-body" style="padding: 2px">
            <div style="width: 324px; margin: auto; text-align: center">
                <a href="#"
                    ><canvas
                        ref="skin-card-image"
                        class="skin-2d align-top title-time skin-button skin-button-selected"
                        width="32"
                        height="32"
                    ></canvas
                ></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.renderSkin()
    },
    methods: {
        toCanvas(image, x, y, w, h) {
            const canvas = document.createElement('canvas')
            canvas.width = w
            canvas.height = h

            canvas
                .getContext('2d', { willReadFrequently: true })
                .drawImage(image, x, y, w, h, 0, 0, w, h)

            return canvas
        },
        renderSkin() {
            const element = this.$refs['skin-card-image']
            const image = new Image()

            image.onload = () => {
                const skin = this.toCanvas(image, 0, 0, 32, 32)

                const ctx = element.getContext('2d')
                ctx.imageSmoothingEnabled = false

                ctx.drawImage(skin, 0, 0, element.width, element.height)
            }

            image.src = `https://crafthead.net/helm/james090500/32`
        },
    },
}
</script>
