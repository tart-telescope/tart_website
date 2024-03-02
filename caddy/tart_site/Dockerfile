
FROM node:latest as base
WORKDIR /build
EXPOSE 3000

FROM base as dev

COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code

COPY . .
RUN ls -a
CMD yarn start --host


# FROM base as prod
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev
# USER node
# COPY . .
# CMD node src/index.js
