pipeline {
    agent any
    
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    
    environment {
        NODE_ENV = 'test'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running test suite...'
                sh 'npm test -- --coverage'
            }
        }
        
        stage('Run Calculator') {
            steps {
                echo 'Running calculator...'
                sh 'node calculator.js'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed.'
        }
        
        success {
            echo 'All tests passed successfully!'
        }
        
        failure {
            echo 'Tests failed. Check logs for details.'
        }
        
        cleanup {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
    }
}
