<template>
    <div class="card mb-3">
        <div class="card-body text-center p-0">
            <div class="position-relative checkered animation-paused">
                <canvas
                    id="minecraft-skin-viewer"
                    class="skin-3d drop-shadow auto-size align-top"
                    width="276"
                    height="368"
                    style="cursor: move; width: 276px"
                    data-id="697618dfe93b90c7"
                    data-model="classic"
                    data-flip="false"
                    data-cape="8724e22a0e7fee60"
                ></canvas>
                <button
                    id="play-pause-btn"
                    class="btn btn-secondary position-absolute top-0 end-0 m-2 p-0"
                    title="Play"
                    data-play-title="Play"
                    data-pause-title="Pause"
                    style="width: 36px; height: 36px"
                >
                    <font-awesome-icon icon="play" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import MinecraftSkinViewer from 'minecraft-skin-viewer'

export default {
    data() {
        return {
            minecraftSkinViewer: null,
        }
    },
    mounted() {
        this.minecraftSkinViewer = new MinecraftSkinViewer({
            canvas: document.getElementById('minecraft-skin-viewer'),
            animated: true,
            skin: `https://crafthead.net/skin/james090500`,
        })
    },
    methods: {
        loadCape(url) {
            this.minecraftSkinViewer.loadCape(url)
        },
    },
}
</script>
