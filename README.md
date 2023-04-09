# TicToc Regina App
Este repositorio contiene un proyecto para el hotel Club Regina.

# Requisitos funcionales
Para hacer funcionar la aplicación se requiere tener instalado, como requisito lo siguiente:
* Requisitos minimos
  * NodeJS +16.x.x (o superior)
  * npm
  * Browser (Google Chrome, Firefox, etc.)
* Requisitos adicionales
  * docker
  * docker-compose
  * vagrant

## Correr aplicación de forma independiente (Usando npm)
Es necesario ejecutar el siguiente comando desde donde se encuetra el archivo **package.json** de cada respectivo proyecto. 

#### Ejecutar proyecto
Es necesario ejecutar el proyecto backend usando el sig. comando dentro del path **./tictoc-regin-app/**
```shell
    npm run serve
```

## Correr aplicación de forma automatizada (Usando docker-compose)
Es necesario ejecutar el siguiente comando desde donde se encuetra el archivo **docker-compose.yml** 

##### Esto construye y corre la aplicación en segundo plano
```shell
   docker-compose build && docker-compose up -d
```

##### Esto detiene y elimina la aplicación
```shell
   docker-compose stop -f && docker-compose rm -f
```

## Correr aplicación de forma automatizada (Usando vagrant)
#### **Nota**
Es necesario ejecutar el siguiente comando desde la directorio/carpeta raíz donde se encuetra el archivo **Vagranfile** 

Cabe mencionar que el archivo **docker-compose.yml** es creado y configurado especificamente para ejecutarse dentro de vagrant.
Así tambien el comando "vagrant up" o "vagrant reload", levanta los servicios definidas en el archivo **docker-compose.yml** (Por defecto).

##### Crear maquina virtual
Este comando crea una maquina virtual usando **'vagrant'** para correr *docker* y *docker-compose* dentro de ella. <br>
Por tal motivo, este comando se debe ejecutar una sola vez. 
```shell
   vagrant up 
```

##### Construir y levantar el proyecto
Este comando reinicia la maquina virtual usando **'vagrant'**, asi también ejecuta la provision *run-workspace* definida en el archivo *Vagrantfile*. <br>
+ *run-workspace* : Suspende, Elimina, Contruye y Levanta los servicios de *__docker-compose__* en el mismo orden. <br>

Por tal motivo, este comando se puede ejecutar las veces que sean necesarias. 

```shell
   vagrant reload 
```

