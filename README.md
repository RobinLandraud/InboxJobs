# LinkOut

[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)

**LinkOut** est une plateforme de rencontres sociales qui permet aux utilisateurs de trouver des personnes ou groupes partageant leurs passions et loisirs, favorisant les interactions authentiques et conviviales.

---

## 🏗 Architecture

### Diagramme simplifié

```

┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│  Frontend   │ ---> │ Ingress /   │ ---> │ Backend DRF │
│ React + Vite│      │ Nginx       │      │ PostgreSQL  │
│ Tailwind    │      │ (K8s)       │      │ Redis       │
└─────────────┘      └─────────────┘      └─────────────┘
↑                 ↑
│                 │
Docker Compose        Kubernetes Cluster
│                 │
localhost:3000     Pods exposés via NodePort / Service

````

---

## 🖥️ Composants principaux

### Backend

- **Framework** : Django REST Framework (DRF)  
- **Base de données** : PostgreSQL  
- **Cache / Message broker** : Redis  
- **Orchestration** : Kubernetes  
  - Backend, PostgreSQL et Redis sont **clusterisés** pour haute disponibilité.  
  - Pods exposés via **Services** et **Ingress** pour le routage HTTP.  
  - Manifests Kubernetes : `backend/standalone/`  
- **Scripts de gestion Kubernetes** :  
  - `backend/standalone/launch-k8s-dev.sh` → Lancer cluster dev  
  - `backend/standalone/launch-k8s-prod.sh` → Lancer cluster prod  
  - `backend/standalone/stop-k8s.sh` → Stopper cluster

### Frontend

- **Framework** : React + Vite  
- **Styling** : Tailwind CSS  
- **Dev** : Docker Compose avec volumes pour hot-reload  
- **Prod** : Docker Compose + Nginx pour servir les fichiers statiques et proxy vers le backend

---

## ⚙️ Installation et lancement

### Prérequis

- Docker Desktop avec Kubernetes activé  
- `kubectl`  
- Node.js  
- Docker Compose

---

### Méthode 1 : Tout en Docker Compose (simple)

1. Lancer le projet dev :

```bash
docker compose --profile dev up
````

2. Lancer le projet prod :

```bash
docker compose --profile prod up
```

3. Accès :

* Backend dev : `http://localhost:30001`
* Frontend dev : `http://localhost:3000`
* Frontend prod : `http://localhost` ou `http://linkout.local` si Ingress configuré

---

### Méthode 2 : Frontend en Docker Compose + Backend clusterisé (Kubernetes)

1. **Déployer backend + DB + Redis en K8s**

```bash
cd backend/standalone
./launch-k8s-dev.sh   # ou launch-k8s-prod.sh
```

2. **Lancer le frontend avec Docker Compose**

```bash
docker compose -f frontend/standalone/docker-compose.yml --profile dev up
```

3. Accès :

* Backend : via NodePort (ex : `http://localhost:30001`) ou Ingress (`http://linkout.local`)
* Frontend : `http://localhost:3000`

4. **Arrêt du cluster Kubernetes**

```bash
cd backend/standalone
./stop-k8s.sh
```

---

## 🎨 Fonctionnalités principales

* Rencontres Solo ou en Groupe
* Matchs variés (groupes vs groupes, solo vs solo, mix)
* Planification d’activités conviviales
* Interface responsive et ludique avec animations parallax

---

## 🔧 Structure du projet

```
linkout/
├─ backend/               
│  ├─ Dockerfile.dev
│  ├─ Dockerfile.prod
│  ├─ linkout/          # Django project
│  ├─ requirements.txt
│  └─ standalone/       # Kubernetes manifests et scripts
│      ├─ db.yaml
│      ├─ deployment-dev.yaml
│      ├─ deployment-prod.yaml
│      ├─ ingress.yaml
│      ├─ launch-k8s-dev.sh
│      ├─ launch-k8s-prod.sh
│      ├─ postgres-pvc.yaml
│      ├─ redis.yaml
│      ├─ service.yaml
│      └─ stop-k8s.sh
├─ frontend/              
│  ├─ Dockerfile.dev
│  ├─ Dockerfile.prod
│  ├─ linkout/          # React + Vite project
│  └─ standalone/       # Docker Compose pour front
│      ├─ docker-compose.yml
│      ├─ launch-dev.sh
│      └─ launch-prod.sh
└─ docker-compose.yml    # Compose root pour tout le projet
```

---

## 🔒 Sécurité et bonnes pratiques

* Utilisation de **Secrets Kubernetes** pour credentials PostgreSQL et Redis
* Séparation dev / prod via Dockerfile et profils Docker Compose
* Ingress Controller pour simuler un domaine local (`linkout.local`)
* Volumes Docker pour persistance des données

---

## 📌 Notes

* NodePort permet un accès rapide en dev (`localhost:30001`)
* Ingress Controller permet un accès via nom de domaine local (`linkout.local`)
* Frontend et backend peuvent être déployés et développés indépendamment
