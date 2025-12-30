#!/bin/bash
set -e

echo "🚀 Lancement du backend DEV sur Kubernetes..."

# Construire l'image Docker dev
docker build -t linkout-backend:dev -f Dockerfile.dev .

# Déployer PostgreSQL et Redis
kubectl apply -f k8s/postgres-pvc.yaml
kubectl apply -f k8s/db.yaml
kubectl apply -f k8s/redis.yaml

# Déployer le backend dev
kubectl apply -f k8s/deployment-dev.yaml

kubectl apply -f k8s/service.yaml

# Optionnel : Ingress si utilisé
kubectl apply -f k8s/ingress.yaml

echo "✅ Déploiement DEV terminé."
echo "Vérifie les pods avec 'kubectl get pods'"
echo "Acces aux logs avec 'kubectl logs -f <pod-name>'"
