<template>
  <header
    class="
      flex
      justify-content-between
      align-items-md-center
      pb-3
      mb-5
      border-bottom
    "
  >
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="">
              <img :src="'../img/logo.svg'" width=30>
              Home
            </a>
            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarDocs"
                    aria-controls="navbarDocs">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                 id="navbarDocs">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://tart.elec.ac.nz/doc/">TART documentation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://tart.elec.ac.nz/signal/doc/">Telescope API</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://tart.elec.ac.nz/catalog/doc/">Source Catalogue API</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/tart-telescope/">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>
