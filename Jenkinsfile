
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

        stage('Analizar con SonarCloud') {
            steps {
                withSonarQubeEnv('SonarCloud') {
                    withCredentials([string(
                        credentialsId: 'sonarcloud-token',
                        variable: 'SONAR_TOKEN'
                    )]) {
                        bat '''
                            sonar-scanner.bat ^
                              -Dsonar.projectKey=herneshem_flyopen-front ^
                              -Dsonar.organization=herneshem ^
                              -Dsonar.host.url=https://sonarcloud.io ^
                              -Dsonar.token=%SONAR_TOKEN%
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pruebas, compilación y análisis completados correctamente.'
        }
        failure {
            echo 'Ha fallado alguna etapa del pipeline.'
        }
    }
}
