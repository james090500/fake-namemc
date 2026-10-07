<template>
    <header id="header" class="pb-3">
        <div class="container">
            <MainMenu />
            <SearchCard />
            <div
                class="d-flex gap-2 align-items-center alert alert-warning fade show mb-0 mt-3"
                role="alert"
            >
                <div style="flex-grow: 1">
                    <strong class="alert-link">Note:</strong> The only official
                    Discord server for NameMC and BlockMania is
                    <u
                        ><a class="alert-link" href="#" target="_blank"
                            >discord.gg/NameMC</a
                        ></u
                    >. Other similar-looking Discord servers are scams. We will
                    never reach out to you directly to resolve an issue with
                    your Minecraft account.
                </div>
                <button
                    style="position: unset"
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                ></button>
            </div>
        </div>
    </header>
    <main class="container pt-3" v-if="this.player">
        <div class="row align-items-start flex-wrap-reverse gx-3">
            <div class="col-auto">
                <h1 class="text-nowrap" translate="no" style="">
                    {{ this.player.username }}
                </h1>
            </div>
        </div>
        <hr class="mt-0" />
        <div class="row">
            <div class="col-md order-md-2 profile-column-right">
                <div class="card mb-3">
                    <div class="card-header py-1">
                        <strong>
                            Profile (<a
                                href="/my-profile/switch?profile=ba4161c0-3a42-496c-8ae0-7d13372f3371&amp;redirect=%2Fmy-profile%2Finfo"
                                >edit</a
                            >)
                        </strong>
                    </div>
                    <div class="card-body py-1">
                        <div class="row g-0 align-items-center">
                            <div class="col order-lg-1 col-lg-3">
                                <label for="uuid-select"
                                    ><strong>UUID</strong></label
                                >
                            </div>
                            <div
                                class="col-auto order-lg-3 col-lg-auto text-nowrap text-end ps-3"
                            >
                                <a
                                    id="uuid-copy-button"
                                    class="copy-button"
                                    href="#"
                                    >Copy</a
                                >
                            </div>
                            <div class="col-12 order-lg-2 col-lg">
                                <select id="uuid-select" class="form-select">
                                    <option value="standard" selected="">
                                        {{ this.player.uuid }}
                                    </option>
                                    <option value="hyphenless">
                                        {{ this.player.uuid.replace(/-/g, '') }}
                                    </option>
                                    <option value="int-array">
                                        {{ uuidToIntArray(this.player.uuid) }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col col-lg-3">
                                <strong>Views</strong>
                            </div>
                            <div class="col-auto">26 / month</div>
                        </div>

                        <hr class="my-1" />

                        <div class="row g-0 align-items-center">
                            <div class="col-auto col-lg-3 pe-3">
                                <strong>Information</strong>
                            </div>
                            <div
                                class="col d-flex flex-wrap justify-content-end justify-content-lg-start"
                                style="margin: 0 -0.25rem"
                            >
                                <a
                                    class="service-link d-inline-block position-relative p-1"
                                >
                                    <img
                                        class="service-icon"
                                        style=""
                                        src="https://s.namemc.com/img/emoji/twitter/1f1ec-1f1e7.svg"
                                    />
                                </a>
                                <a
                                    class="service-link d-inline-block position-relative p-1"
                                >
                                    <img
                                        class="service-icon"
                                        style=""
                                        src="https://s.namemc.com/img/service/discord.svg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <div style="max-width: 530px; margin: auto">
                        <div id="nn_player1"></div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-header py-1">
                        <strong>Name History</strong>
                        (<a href="#">edit</a>)
                    </div>
                    <div
                        class="card-body px-0 py-1"
                        style="max-height: 134px; overflow: auto"
                    >
                        <table class="table table-borderless mb-0">
                            <tbody>
                                <tr
                                    v-for="(username, key) in this.player
                                        .usernames"
                                    :key="username.id"
                                >
                                    <td width="1" class="text-center fw-bold">
                                        {{ this.player.usernames.length - key }}
                                    </td>

                                    <td
                                        width="100%"
                                        style="max-width: 0"
                                        class="text-nowrap text-ellipsis"
                                    >
                                        <a href="#">{{ username.username }}</a>
                                    </td>
                                    <td
                                        v-if="!username.changed_at"
                                        class="d-none d-lg-table-cell"
                                        colspan="6"
                                    ></td>
                                    <td
                                        v-if="username.changed_at"
                                        width="20%"
                                        class="d-none d-lg-table-cell text-end text-nowrap pe-0"
                                    >
                                        <time>{{
                                            dateFormat(username.changed_at)
                                        }}</time>
                                    </td>
                                    <td
                                        v-if="username.changed_at"
                                        width="1"
                                        class="d-none d-lg-table-cell text-center px-1"
                                    >
                                        •
                                    </td>
                                    <td
                                        v-if="username.changed_at"
                                        width="1"
                                        class="d-none d-lg-table-cell text-left text-nowrap p-0"
                                    >
                                        <time>{{
                                            timeFormat(username.changed_at)
                                        }}</time>
                                    </td>

                                    <td
                                        v-if="username.changed_at"
                                        class="d-none d-lg-table-cell"
                                        colspan="2"
                                    ></td>
                                    <td
                                        v-if="username.changed_at"
                                        width="10%"
                                        class="d-none d-lg-table-cell text-center"
                                        v-html="
                                            lengthFormat(
                                                username.changed_at,
                                                player.usernames[key + 1]
                                                    ?.changed_at ?? new Date()
                                            )
                                        "
                                    ></td>

                                    <td class="text-end text-nowrap px-0"></td>
                                    <td class="text-end text-nowrap ps-0">
                                        <a
                                            class="copy-button px-1"
                                            href="javascript:void(0)"
                                            data-clipboard-text="TheSexySlime"
                                            >Copy</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    class="card position-relative mb-3"
                    style="max-height: 195px"
                >
                    <ul class="card-header nav px-2 py-0" role="tablist">
                        <li class="nav-item">
                            <button class="nav-link px-2 py-1 active">
                                Following (1)
                            </button>
                        </li>

                        <li class="nav-item">
                            <button class="nav-link px-2 py-1">
                                Followers (85)
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" style="overflow-y: auto">
                        <div
                            class="tab-pane show card-body player-list py-2 active"
                            id="following"
                            role="tabpanel"
                            aria-labelledby="following-tab"
                        >
                            <span
                                class="position-absolute top-0 end-0 px-3 py-1"
                            >
                                <a class="ps-2" href="#"
                                    ><font-awesome-icon icon="arrow-right"
                                /></a>
                            </span>
                            <a
                                translate="no"
                                href="https://namemc.com/profile/james090500.1"
                                target="_blank"
                                class=""
                                >james090500</a
                            >
                        </div>
                    </div>
                </div>

                <div class="card mb-3" style="max-height: 164px">
                    <div class="card-header py-1">
                        <strong> Favorite Servers (1) </strong>
                    </div>
                    <div class="card-body player-list py-2">
                        <a translate="no" href="/server/play.capecraft.net"
                            ><img
                                class="server-icon me-1"
                                src="https://s.namemc.com/i/67a049143e1034e1.png"
                                width="16"
                                height="16"
                            />play.capecraft.net</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-md-auto order-md-1">
                <SkinViewerCard ref="skin-viewer" :uuid="this.player.uuid" />
                <SkinCard :uuid="this.player.uuid" />
                <CapeCard
                    @load-cape="
                        (url) => this.$refs['skin-viewer'].loadCape(url)
                    "
                    :username="this.player.username"
                />
                <OtherCards />
            </div>
        </div>
    </main>
</template>

<style>
td {
    padding: 0 0.5rem !important;
}

td:first-child {
    padding-left: 1rem !important;
}

td:last-child {
    padding-right: 1rem !important;
}

.player-list > a:not(:last-of-type) {
    margin-right: 0.25rem;
}
</style>

<script>
import MainMenu from '@/partials/fake/MainMenu.vue'
import SearchCard from '@/partials/fake/SearchCard.vue'
import SkinViewerCard from '@/partials/fake/SkinViewerCard.vue'
import SkinCard from '@/partials/fake/SkinCard.vue'
import CapeCard from '@/partials/fake/CapeCard.vue'
import OtherCards from '@/partials/fake/OtherCards.vue'
import axios from 'axios'
import {
    format,
    differenceInYears,
    differenceInMonths,
    differenceInDays,
} from 'date-fns'

export default {
    data() {
        return {
            player: null,
        }
    },
    created() {
        axios
            .get(`https://api.crafty.gg/api/v2/players/${this.user}`)
            .then((response) => {
                this.player = response.data.data
            })
    },
    methods: {
        uuidToIntArray(uuid) {
            const hex = uuid.replace(/-/g, '')

            const array = [
                parseInt(hex.slice(0, 8), 16) | 0,
                parseInt(hex.slice(8, 16), 16) | 0,
                parseInt(hex.slice(16, 24), 16) | 0,
                parseInt(hex.slice(24, 32), 16) | 0,
            ]

            return `[I;${array.join(',')}]`
        },
        dateFormat(date) {
            return format(new Date(date), 'dd/MM/yyyy')
        },
        timeFormat(date) {
            return format(new Date(date), 'HH:mm:SS')
        },
        lengthFormat(oldDate, newDate) {
            const start = new Date(oldDate)
            const end = new Date(newDate)

            const years = differenceInYears(end, start)
            if (years >= 1) return `${years}<small>y</small>`

            const months = differenceInMonths(end, start)
            if (months >= 1) return `${months}<small>m</small>`

            const days = differenceInDays(end, start)
            return `${days}<small>d</small>`
        },
    },
    components: {
        MainMenu,
        SearchCard,
        SkinViewerCard,
        SkinCard,
        CapeCard,
        OtherCards,
    },
    props: {
        user: {
            type: String,
            default: null,
        },
    },
}
</script>
