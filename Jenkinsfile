node {
    
    stage ("Checkout React Client"){
        git branch: 'main', url: 'https://github.com/bknauff/MSD-Project-Client.git'
    }
    
    stage ("Install dependencies - react client") {
        sh 'npm install'
    }
    
    stage ("Containerize the app-docker build - react client") {
        sh 'docker build --rm -t msdevent-reactclient:v1.0 .'
    }
    
    stage ("Inspect the docker image - react client"){
        sh "docker images msdevent-reactclient:v1.0"
        sh "docker inspect msdevent-reactclient:v1.0"
    }
    
    stage ("Run Docker container instance - react client"){
        sh "docker run -d --rm --name msdevent-reactclient -p 3000:3000 msdevent-reactclient:v1.0"
     }
    
    stage('User Acceptance Test - react client') {
	
	  def response= input message: 'Is this build good to go?',
	   parameters: [choice(choices: 'Yes\nNo', 
	   description: '', name: 'Pass')]
	
	  if(response=="Yes") {
	    stage('Deploy to Kubenetes cluster - react client') {
	      sh "kubectl create deployment msdevent-reactclient --image=msdevent-reactclient:v1.0"
	      sh "kubectl expose deployment msdevent-reactclient --type=LoadBalancer --port=80"
	    }
	  }
    }

    stage("Production Deployment View"){
        sh "kubectl get deployments"
        sh "kubectl get pods"
        sh "kubectl get services"
    }
}