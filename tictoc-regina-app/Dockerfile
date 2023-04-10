#### Proyecto
FROM node:14.21.3-slim as build-stage

ENV PORT=$PORT

ENV WORK_SPACE=/home/max98/workspace/tictoc-regina-app

RUN mkdir -p $WORK_SPACE

VOLUME $WORK_SPACE

WORKDIR $WORK_SPACE

COPY package*.json $WORK_SPACE

RUN npm install -g dotenv

#RUN apt-get update && apt-get install -y npm

RUN npm install 

COPY . .

# Declarar variables de entorno obtenidas en `.env`

# Mostrar variables
RUN echo 'PORT=$PORT'
RUN echo 'WORK_SPACE=$WORK_SPACE'

RUN npm run build

#### Servidor
FROM nginx as production-stage

RUN mkdir -p /app

COPY --from=build-stage /home/max98/workspace/tictoc-regina-app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]