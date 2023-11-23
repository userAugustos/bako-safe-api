FROM node:18.14.0

# Create app directory
WORKDIR api
ADD . /api

# Install app dependencies
RUN yarn install

# Build
RUN yarn build

# Run!
EXPOSE 3333

ENTRYPOINT ["yarn", "start"]