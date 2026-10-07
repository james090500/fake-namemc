<template>
    <div class="input-group input-group-lg">
        <input
            id="search-box"
            class="form-control"
            placeholder="Name / UUID / Server / Skin"
            autocomplete="off"
            spellcheck="false"
            v-model="search"
        />
        <button class="btn btn-primary" @click="doSearch" title="Search">
            <FontAwesomeIcon icon="search" />
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: null,
        }
    },
    methods: {
        doSearch() {
            this.$router.push(`/${this.search}`)
        },
    },
}
</script>
