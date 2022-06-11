# Install dependencies only when needed
FROM node:16

WORKDIR /app
COPY package*.json ./

#RUN npm install
RUN yarn
ADD . /app
WORKDIR /app
RUN yarn build

CMD ["yarn", "start"]