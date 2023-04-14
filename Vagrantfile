# -*- mode: ruby -*-
# vi: set ft=ruby :

# Ejecute `vagrant up` para iniciar el proyecto actual
# con Docker y docker-compose

Vagrant.configure("2") do |config|
    # Establecer el nombre de la caja 
    config.vm.define "box-tictoc-regina-app"
    #config.vm.hostname = "abc"

    # Usar la caja de Ubuntu 18.04LTS
    config.vm.box = "bento/ubuntu-18.04"

    # Tiempo de espera para que la máquina virtual arranque
    config.vm.boot_timeout=600

    # Configuración de red
    #config.vm.network "public_network"
    #config.vm.network "forwarded_port", guest: 80, host: 8080
    
    # Montar el dicrectorio actual a la ruta absoluta
    config.vm.synced_folder "./", "/home/vagrant/workspace"
    
    # Exponer el puerto interior de la caja ** Para Proyecto React **
    config.vm.network "forwarded_port", guest: 3066 , host: 3066, auto_correct: true
    
    config.vm.provision :shell, inline: "sudo timedatectl set-timezone America/Mexico_City"

    # Actualizar zona horaria de la caja de Ubuntu 18.04LTS
    # En esta configuración, estamos usando el comando 'timedatectl'
    # para establecer la zona horaria, habilitar el control de sincronización de la hora con NTP
    # y deshabilitar el reloj de tiempo local (RTC) en el hardware del sistema.
    config.vm.provision "shell", inline: "sudo timedatectl set-timezone America/Mexico_City && sudo timedatectl set-ntp on && sudo timedatectl set-local-rtc 0"
    
    # Actualizar repositorio la caja de Ubuntu 18.04LTS
    config.vm.provision :shell, inline: "sudo apt-get update -qq -y"
    
    # Instalar docker y descagar imagen de docker (node:16.20-slim)
    # *OJO* : Corre solo una vez usando `vagrant up`
    config.vm.provision "install-docker",
        type: "docker",
        images: ["node:16.20-slim"]
    
    #config.vm.provider "vmware_fusion" do |v|
    #    v.vmx["vhv.enable"] = "TRUE"
    #end

    # Instalar docker-compose
    # *OJO* : Corre solo una vez usando `vagrant up`
    config.vm.provision "install-docker-compose",
        type: "shell",
        inline: <<-SCRIPT 
        sudo rm -rf /usr/local/bin/docker-compose
        sudo rm -rf /usr/bin/docker-compose
        sudo curl -SL https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
        docker-compose --version
        echo 'alias doc=docker-compose' >> ~/.bashrc
        echo 'alias doc-again="docker-compose stop && docker-compose rm --force && docker-compose build --no-cache && docker-compose up"' >> ~/.bashrc
        source ~/.bashrc
        SCRIPT
    
    # Ejecuar el proyecto actual con Docker y docker-compose
    config.vm.provision "run-setup",
    type: "shell",
    path: "./setup.sh"
    
    # Ejecuar el proyecto actual con Docker y docker-compose
    # *OJO* : Siempre corre usando `vagrant up`
    config.vm.provision "run-workspace",
        type: "shell",
        path: "./vagrant.sh",
        run: "always"

end
