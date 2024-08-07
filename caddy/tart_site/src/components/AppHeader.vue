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
                        <a class="nav-link" href="https://tart.elec.ac.nz/doc/">Docs</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Live Telescopes
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://api.elec.ac.nz/tart/mu-udm/">Mauritius</a></li>
                        <li><a class="dropdown-item" href="https://maxscheel.gitlab.io/tart-vuer/">Alternate Web App</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        API
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://api.elec.ac.nz/tart/mu-udm/doc/">Telescope API</a></li>
                        <li><a class="dropdown-item" href="https://tart.elec.ac.nz/catalog/doc/">Catalog API</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="https://tart.elec.ac.nz/doc/docs/basics/tart-api">Using TART APIs</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/tart-telescope/">Github <i class="bi bi-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mailto:outreach@elec.ac.nz">outreach@elec.ac.nz<i class="bi envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>
