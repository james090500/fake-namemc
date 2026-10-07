<template>
    <header id="header" class="pb-3">
        <div class="container">
            <MainMenu />
            <div>
                <div class="input-group input-group-lg">
                    <input
                        id="search-box"
                        class="form-control"
                        placeholder="Name / UUID / Server / Skin"
                        autocomplete="off"
                        spellcheck="false"
                    />
                    <button
                        class="btn btn-primary"
                        type="submit"
                        title="Search"
                    >
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
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
    <main class="container pt-3">
        <div class="row align-items-start flex-wrap-reverse gx-3">
            <div class="col-auto">
                <h1 class="text-nowrap" translate="no" style="">
                    james090500<img
                        class="emoji"
                        draggable="false"
                        src="https://s.namemc.com/img/emoji/twitter/1f5a5-fe0f.svg"
                        alt="🖥️"
                    />
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
                                        ba4161c0-3a42-496c-8ae0-7d13372f3371
                                    </option>
                                    <option value="hyphenless">
                                        ba4161c03a42496c8ae07d13372f3371
                                    </option>
                                    <option value="int-array">
                                        [I;-1170120256,977422700,-1964999405,925840241]
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
                                <tr>
                                    <td width="1" class="text-center fw-bold">
                                        3
                                    </td>

                                    <td
                                        width="100%"
                                        style="max-width: 0"
                                        class="text-nowrap text-ellipsis"
                                    >
                                        <a class="" href="#">james090500</a>
                                    </td>

                                    <td
                                        width="20%"
                                        class="d-none d-lg-table-cell text-end text-nowrap pe-0"
                                    >
                                        <time
                                            datetime="2015-03-07T11:43:51.000Z"
                                            data-type="date"
                                            >07/03/2015</time
                                        >
                                    </td>
                                    <td
                                        width="1"
                                        class="d-none d-lg-table-cell text-center px-1"
                                    >
                                        •
                                    </td>
                                    <td
                                        width="1"
                                        class="d-none d-lg-table-cell text-left text-nowrap p-0"
                                    >
                                        <time
                                            datetime="2015-03-07T11:43:51.000Z"
                                            data-type="time"
                                            >11:43:51</time
                                        >
                                    </td>

                                    <td
                                        class="d-none d-lg-table-cell"
                                        colspan="2"
                                    ></td>

                                    <td
                                        width="10%"
                                        class="d-none d-lg-table-cell text-center"
                                    >
                                        11<small>y</small>
                                    </td>

                                    <td class="text-end text-nowrap px-0"></td>
                                    <td class="text-end text-nowrap ps-0">
                                        <a
                                            class="copy-button px-1"
                                            href="#"
                                            data-clipboard-text="james090500"
                                            >Copy</a
                                        >
                                    </td>
                                </tr>
                                <tr class="d-lg-none border-bottom">
                                    <td colspan="3">
                                        <time
                                            datetime="2015-03-07T11:43:51.000Z"
                                            >07/03/2015 • 11:43:51</time
                                        >
                                    </td>
                                    <td class="text-end">11<small>y</small></td>
                                </tr>

                                <tr>
                                    <td width="1" class="text-center fw-bold">
                                        2
                                    </td>

                                    <td
                                        width="100%"
                                        style="max-width: 0"
                                        class="text-nowrap text-ellipsis"
                                    >
                                        <a href="#">TheSexySlime</a>
                                    </td>

                                    <td
                                        width="20%"
                                        class="d-none d-lg-table-cell text-end text-nowrap pe-0"
                                    >
                                        <time
                                            datetime="2015-02-04T15:44:22.000Z"
                                            data-type="date"
                                            >04/02/2015</time
                                        >
                                    </td>
                                    <td
                                        width="1"
                                        class="d-none d-lg-table-cell text-center px-1"
                                    >
                                        •
                                    </td>
                                    <td
                                        width="1"
                                        class="d-none d-lg-table-cell text-left text-nowrap p-0"
                                    >
                                        <time
                                            datetime="2015-02-04T15:44:22.000Z"
                                            data-type="time"
                                            >15:44:22</time
                                        >
                                    </td>

                                    <td
                                        class="d-none d-lg-table-cell"
                                        colspan="2"
                                    ></td>

                                    <td
                                        width="10%"
                                        class="d-none d-lg-table-cell text-center"
                                    >
                                        30<small>d</small>
                                    </td>

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
                                <tr class="d-lg-none border-bottom">
                                    <td colspan="3">
                                        <time
                                            datetime="2015-02-04T15:44:22.000Z"
                                            >04/02/2015 • 15:44:22</time
                                        >
                                    </td>
                                    <td class="text-end">30<small>d</small></td>
                                </tr>

                                <tr>
                                    <td width="1" class="text-center fw-bold">
                                        1
                                    </td>

                                    <td
                                        width="100%"
                                        style="max-width: 0"
                                        class="text-nowrap text-ellipsis"
                                    >
                                        <a
                                            class=""
                                            translate="no"
                                            href="/search?q=james090500"
                                            >james090500</a
                                        >
                                    </td>

                                    <td
                                        class="d-none d-lg-table-cell"
                                        colspan="6"
                                    ></td>

                                    <td class="text-end text-nowrap px-0"></td>
                                    <td class="text-end text-nowrap ps-0">
                                        <a
                                            class="copy-button px-1"
                                            href="javascript:void(0)"
                                            data-clipboard-text="james090500"
                                            >Copy</a
                                        >
                                    </td>
                                </tr>
                                <tr class="d-lg-none">
                                    <td colspan="2"></td>
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
                                Following (6)
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
                                <a
                                    class="ps-2"
                                    href="/profile/james090500.1/following"
                                    ><font-awesome-icon icon="arrow-right"
                                /></a>
                            </span>

                            <a translate="no" href="/profile/Loorem.2" class=""
                                >Loorem</a
                            >

                            <a
                                translate="no"
                                href="/profile/BooSullivan223.1"
                                class="fw-bold"
                                >BooSullivan223</a
                            >

                            <a translate="no" href="/profile/Faavz.1" class=""
                                >Faavz</a
                            >

                            <a
                                translate="no"
                                href="/profile/CapeCraft.4"
                                class="fw-bold"
                                >CapeCraft</a
                            >

                            <a
                                translate="no"
                                href="/profile/N1nten.4"
                                class="fw-bold"
                                >N1nten</a
                            >

                            <a
                                translate="no"
                                href="/profile/MiniPixie.1"
                                class="fw-bold"
                                >MiniPixie</a
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
                <SkinViewerCard ref="skin-viewer" />
                <SkinCard />
                <CapeCard
                    @load-cape="
                        (url) => this.$refs['skin-viewer'].loadCape(url)
                    "
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
</style>

<script>
import MainMenu from '@/partials/fake/MainMenu.vue'
import SkinViewerCard from '@/partials/fake/SkinViewerCard.vue'
import SkinCard from '@/partials/fake/SkinCard.vue'
import CapeCard from '@/partials/fake/CapeCard.vue'
import OtherCards from '@/partials/fake/OtherCards.vue'

export default {
    components: {
        MainMenu,
        SkinViewerCard,
        SkinCard,
        CapeCard,
        OtherCards,
    },
}
</script>
