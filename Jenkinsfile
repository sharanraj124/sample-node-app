pipeline {
    agent {
        docker {
            image 'node:10'
        }
    }
    environment {
        APP_NAME = "mean-stack-app"
        GIT_REPO = "https://github.com/sharanraj124/sample-node-app.git"
        DO_TOKEN = "your_digital_ocean_api_token"
        DO_DROPLET_NAME = "mean-stack-droplet"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: "${GIT_REPO}"
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                script {
                    def customImage = docker.build("${APP_NAME}:${env.BUILD_ID}")
                    customImage.push()
                }
            }
        }
        // stage('Create Droplet on DigitalOcean') {
        //     steps {
        //         script {
        //             sh "curl -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer ${DO_TOKEN}' -d '{\"name\":\"${DO_DROPLET_NAME}\",\"region\":\"nyc3\",\"size\":\"s-1vcpu-1gb\",\"image\":\"docker\",\"ssh_keys\":[\"your_ssh_key_id\"]}' 'https://api.digitalocean.com/v2/droplets'"
        //         }
        //     }
        // }
        // stage('Deploy to DigitalOcean Droplet') {
        //     steps {
        //         script {
        //             def dropletIp = sh(returnStdout: true, script: "curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer ${DO_TOKEN}' 'https://api.digitalocean.com/v2/droplets?page=1&per_page=1&name=${DO_DROPLET_NAME}' | jq '.droplets[].networks.v4[0].ip_address'").trim()
        //             sh "ssh root@${dropletIp} 'docker stop ${APP_NAME} && docker rm ${APP_NAME}'"
        //             sh "ssh root@${dropletIp} 'docker pull ${APP_NAME}:${env.BUILD_ID} && docker run -d -p 3000:3000 --name ${APP_NAME} ${APP_NAME}:${env.BUILD_ID}'"
        //         }
        //     }
        // }
    }
}
