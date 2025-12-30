#!/bin/bash
set -e

echo "🚀 Lancement du backend DEV sur Kubernetes..."

# Construire l'image Docker prod
docker build -t linkout-backend:prod -f Dockerfile.prod .

# Déployer PostgreSQL et Redis
kubectl apply -f k8s/db.yaml
kubectl apply -f k8s/redis.yaml

# Déployer le backend prod
kubectl apply -f k8s/deployment-prod.yaml

kubectl apply -f k8s/service.yaml

# Optionnel : Ingress si utilisé
kubectl apply -f k8s/ingress.yaml

echo "✅ Déploiement DEV terminé. Vérifie les pods avec 'kubectl get pods'"
