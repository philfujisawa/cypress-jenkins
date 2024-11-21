pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }    
        stage('Run Tests') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}