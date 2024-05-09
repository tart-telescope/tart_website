# pip install tart_tools tart2ms disko
# tart_download_data --n 1 --vis --file tart_udm.hdf
# tart2ms --hdf tart_udm.hdf --ms tart_udm.ms --rephase "obs-midpoint" --single-field
disko --ms tart_udm.ms --healpix --fov 170deg --res 30arcmin --HDF tart_udm.h5 --lasso --alpha 0.003
disko_draw --SVG tart_udm.svg --show-sources --elevation 30 tart_udm.h5
