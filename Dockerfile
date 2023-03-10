FROM node:alpine

WORKDIR /app
COPY package.json .

#ARG NODE_ENV
#RUN if [ "$NODE_ENV" = "development" ]; \
#    then npm install; \
#    else npm install --only=production; \
#    fi
RUN npm install

COPY . .
EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]