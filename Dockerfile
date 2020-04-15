ARG NODE_VERSION=12

FROM node:${NODE_VERSION}-alpine AS builder

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY --chown=node package.json ./
COPY --chown=node package-lock.json ./
RUN npm ci --only=production

# Bundle app source code
COPY --chown=node . .
RUN npm run build:ssr

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 APP_PORT=4000

EXPOSE ${APP_PORT}

ENTRYPOINT ["npm"]
CMD ["run", "serve:ssr"]
