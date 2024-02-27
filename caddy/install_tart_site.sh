(cd tart_site && yarnpkg build)
rsync -rv --progress tart_site/dist/ tart@tart.elec.ac.nz:caddy/site
rsync -rv --progress tart_site/src/img tart@tart.elec.ac.nz:caddy/site/src/img
