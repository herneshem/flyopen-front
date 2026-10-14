
pipeline {
    agent any

    stages {
        stage('Comprobar Node y npm') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test -- --watch=false'
            }
        }

        stage('Compilar Angular') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pruebas y compilación de Angular completadas correctamente.'
        }
        failure {
            echo 'Las pruebas o la compilación de Angular han fallado.'
        }
    }
}
