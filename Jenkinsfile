#!groovy
pipeline {
    agent any
  stages {
    stage('Npm Install') {
        agent {
        docker {
            image 'node:10'
        }
      }
      steps {
        sh 'npm install'
      }
    }
  }
}