
FROM node:latest as base
WORKDIR /build
EXPOSE 8080

COPY package.json .
# Install dependencies
RUN yarn install

COPY index.html .
COPY vite.config.js .
RUN ls

# Now do interactive development
FROM base as dev
RUN ls
CMD yarn start --host

# Now do build (for installation)
FROM base as build

CMD yarn build

    
