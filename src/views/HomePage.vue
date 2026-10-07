<template>
    <main>
        <div class="container py-5">
            <h1 class="text-center">Fake NameMC</h1>
            <SearchCard />
            <hr />
            <p>Make a fake NameMC profile to larp or troll. Up to you.</p>
            <p>The "edit" buttons allow you to choose capes, badges, etc</p>
            <p>
                No links on here work, no code is stolen. We use the hosted CSS
                files from NameMC
            </p>
            <p>We do not rehost any assets or art work.</p>
        </div>
    </main>
</template>

<script>
import SearchCard from '@/partials/fake/SearchCard.vue'

export default {
    components: {
        SearchCard,
    },
}
</script>
