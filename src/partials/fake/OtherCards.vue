<template>
    <div class="card mb-3">
        <div class="card-header py-1">Locator Bar Color</div>
        <div class="card-body text-center p-2">
            <a
                class="copy-button d-inline-block text-black mono rounded px-3 py-1"
                @click="changeColor"
                :style="{ 'background-color': this.color }"
                >{{ this.color.toUpperCase() }}</a
            >
            <input
                type="color"
                v-model="this.color"
                class="d-none"
                ref="hidden-locator-color"
            />
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header py-1">Head Command</div>
        <div class="card-body px-2 py-0">
            <div class="input-group input-group-sm my-2">
                <select
                    id="head-command-select"
                    class="form-select"
                    style="max-width: 7em"
                >
                    <option value="26-1">26.1</option>
                </select>

                <input
                    class="head-command version-26-1 version-1-21 version-1-20.5 form-control"
                    style="font-family: 'Cascadia Mono', Consolas, monospace"
                />
                <button
                    class="head-command version-26-1 version-1-21 version-1-20.5 btn btn-outline-secondary copy-button rounded-end"
                    type="button"
                >
                    Copy
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: '#E372E6',
        }
    },
    methods: {
        changeColor() {
            this.$refs['hidden-locator-color'].click()
        },
    },
}
</script>
