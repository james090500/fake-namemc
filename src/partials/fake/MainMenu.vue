<template>
    <nav class="navbar navbar-expand px-0">
        <a class="navbar-brand d-none d-md-block" href="/">
            <img
                style="image-rendering: pixelated"
                class="d-inline-block align-text-middle"
                width="32"
                height="32"
                src="https://s.namemc.com/img/favicon.svg"
            /><span class="ms-2" translate="no">NameMC</span>
        </a>
        <ul class="navbar-nav me-auto d-none d-md-flex">
            <li class="nav-item">
                <a class="nav-link">Skins</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Names</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Servers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Capes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Store</a>
            </li>
            <li class="nav-item d-none d-xl-flex">
                <a class="nav-link">FAQ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Discord</a>
            </li>
        </ul>

        <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-nowrap ps-0" href="#"
                    ><img
                        class="skin-2d skin-2d-inline me-1"
                        :src="`https://crafthead.net/helm/james090500/32`" /><span
                        class=""
                        translate="no"
                        >james090500</span
                    ><img
                        class="emoji"
                        draggable="false"
                        src="https://s.namemc.com/img/emoji/twitter/1f5a5-fe0f.svg"
                        alt="🖥️"
                /></a>
            </li>
            <li class="nav-item">
                <a class="nav-link px-1" href="#"
                    ><img
                        class="emoji"
                        draggable="false"
                        src="https://s.namemc.com/img/emoji/twitter/1f1fa-1f1f8.svg"
                        alt="🇺🇸"
                /></a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link pe-0 light-only"
                    data-bs-theme-value="dark"
                    href="#"
                >
                    <span class="text-warning"
                        ><FontAwesomeIcon icon="moon"
                    /></span>
                </a>
                <a
                    class="nav-link pe-0 dark-only"
                    data-bs-theme-value="light"
                    href="#"
                >
                    <span class="text-warning"
                        ><FontAwesomeIcon icon="sun"
                    /></span>
                </a>
            </li>
        </ul>
    </nav>
</template>
