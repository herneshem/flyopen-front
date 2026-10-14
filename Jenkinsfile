
stage('Analizar con SonarCloud') {
    steps {
        script {
            def scannerHome = tool 'SonarScanner'

            withSonarQubeEnv('SonarCloud') {
                withCredentials([
                    string(
                        credentialsId: 'sonarcloud-token',
                        variable: 'SONAR_TOKEN'
                    )
                ]) {
                    bat """
                        "${scannerHome}\\bin\\sonar-scanner.bat" ^
                        -Dsonar.projectKey=herneshem_flyopen-front ^
                        -Dsonar.organization=herneshem ^
                        -Dsonar.host.url=https://sonarcloud.io ^
                        -Dsonar.token=%SONAR_TOKEN%
                    """
                }
            }
        }
    }
}
