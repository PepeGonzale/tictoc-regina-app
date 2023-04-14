FROM node:16.20-slim

ENV PORT=$PORT

ENV API_CORS_ORIGIN=$API_CORS_ORIGIN

ENV API_MONGO_URI=$API_MONGO_URI

ENV WORK_SPACE=/home/max98/workspace/api

RUN mkdir -p $WORK_SPACE

VOLUME $WORK_SPACE

WORKDIR $WORK_SPACE

COPY package*.json /home/max98/workspace/api

RUN npm install -g cross-env

RUN npm install 

COPY . .

# Declarar variables de entorno obtenidas en `.env`
RUN echo 'API_CORS_ORIGIN=$API_CORS_ORIGIN'
RUN echo 'API_MONGO_URI=$API_MONGO_URI'

# Mostrar variables
RUN echo 'PORT=$PORT'
RUN echo 'WORK_SPACE=$WORK_SPACE'

EXPOSE $PORT

CMD ["npm","run","dev"]