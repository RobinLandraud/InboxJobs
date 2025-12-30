#!/bin/bash
set -e

echo "🛑 Arrêt du backend et des services Kubernetes..."

# Arrêter le backend
kubectl delete deployment linkout-backend || true
kubectl delete service linkout-service || true
kubectl delete ingress linkout-ingress || true

# Optionnel : arrêter PostgreSQL et Redis
kubectl delete deployment postgres || true
kubectl delete service db || true
kubectl delete deployment redis || true
kubectl delete service redis || true

echo "✅ Tous les pods et services liés au backend sont arrêtés."