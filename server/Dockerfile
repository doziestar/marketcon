# Common build stage
FROM node:18-buster as common-build-stage
RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app

RUN npm install --legacy-peer-deps

COPY . /app

EXPOSE 3000

# # Development build stage
FROM common-build-stage as development-build-stage

# RUN chmod +x /app/docker-entrypoint.sh

# ENTRYPOINT [ "docker-entrypoint.sh" ]

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
