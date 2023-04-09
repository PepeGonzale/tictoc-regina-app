FROM node:16.20-slim

ENV PORT=$PORT

ENV WORK_SPACE=/home/max98/workspace/tictoc-regina-app

RUN mkdir -p $WORK_SPACE

VOLUME $WORK_SPACE

WORKDIR $WORK_SPACE

COPY package*.json $WORK_SPACE

RUN npm install 

COPY . .

# Declarar variables de entorno obtenidas en `.env`

# Mostrar variables
RUN echo 'PORT=$PORT'
RUN echo 'WORK_SPACE=$WORK_SPACE'

EXPOSE $PORT

CMD ["npm","run","serve"]