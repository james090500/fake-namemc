<template>
    <div class="card mb-3">
        <div class="card-header py-1">
            <strong>
                Capes ({{ this.capes.filter((cape) => cape.active).length }})
                (<a class="btn-link text-decoration-none" @click="editCapes">{{
                    this.edit ? 'done' : 'edit'
                }}</a
                >)
            </strong>
        </div>
        <div class="card-body" style="padding: 2px" v-if="capes.length > 0">
            <div
                style="width: 324px; margin: auto; text-align: center"
                v-if="!edit"
            >
                <a v-for="cape in this.capes" :key="cape.title" href="#"
                    ><canvas
                        class="cape-2d align-top skin-button"
                        :class="{ 'd-none': !cape.active }"
                        width="40"
                        height="64"
                        :data-cape-url="cape.url"
                        @mouseover="$emit('load-cape', cape.url)"
                    ></canvas
                ></a>
            </div>
            <div style="width: 324px; margin: auto" v-else>
                <div v-for="cape in this.capes" :key="cape.title">
                    <input type="checkbox" v-model="cape.active" />
                    {{ cape.title }}
                </div>
            </div>
        </div>
    </div>

    <div class="card mb-3">
        <div class="card-header py-1">
            <strong
                ><a
                    href="https://optifine.net/home"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    >OptiFine</a
                >
                Cape</strong
            >
        </div>
        <div class="card-body text-center" style="padding: 3px">
            <a
                id="optifine-cape"
                href="#"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <canvas
                    class="cape-2d align-top skin-button"
                    width="40"
                    height="64"
                    data-optifine-cape="f390d94d6a05403e"
                ></canvas>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    emits: ['load-cape'],
    data() {
        return {
            edit: false,
            capes: [],
        }
    },
    mounted() {
        this.loadCapes()
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
        loadCapes() {
            axios.get('https://capes.me/api/capes').then((response) => {
                this.capes = response.data.map((cape) => ({
                    title: cape.title,
                    url: cape.url,
                    active: true,
                }))

                this.$nextTick(() => this.renderCapes())
            })
        },
        editCapes() {
            this.edit = !this.edit
            if (!this.edit) {
                this.$nextTick(() => this.renderCapes())
            }
        },
        renderCapes() {
            const elements = document.querySelectorAll('.cape-2d')

            for (const element of elements) {
                const image = new Image()

                image.onload = () => {
                    const cape = this.toCanvas(image, 1, 1, 10, 16)

                    const ctx = element.getContext('2d')
                    ctx.imageSmoothingEnabled = false

                    ctx.drawImage(cape, 0, 0, element.width, element.height)
                }

                image.src = element.dataset.capeUrl
            }
        },
    },
}
</script>
