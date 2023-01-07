def runServer() {
  sh 'docker run --name fordastore-web --network fordastore --network-alias fordastore-web -p 3000:3000 -d splitscale/fordastore-web:latest'
}

pipeline {
    agent any

    stages {
        stage('initialize') {
      steps {
        sh 'npm -v'
        sh 'git --version'
        sh 'docker -v'
        sh 'export NODE_ENV=production'
      }
        }

        stage('pull') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/splitscale/fordaStore-frontEnd.git']]])
      }
        }

      stage('install') {
      steps {
        script {
          sh 'npm install'
        }
      }
      }

        stage('build') {
      steps {
        script {
          sh 'npx next build'
        }
      }
        }

        stage('build docker image') {
      steps {
        sh 'docker build -t splitscale/fordastore-web:latest .'
      }
        }

        stage('deploy') {
          steps {
            script {
              try {
            runServer()
                        } catch (Exception e) {
            sh 'docker stop fordastore-web'
            sh 'docker rm fordastore-web'
            runServer()
              }
            }
          }
        }
    }
}
