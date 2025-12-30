# LinkOut

[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)

LinkOut est une plateforme qui permet aux utilisateurs de rencontrer d’autres personnes ou groupes partageant leurs passions et loisirs, favorisant les interactions sociales authentiques. L’application met l’accent sur la convivialité et le côté ludique des rencontres.

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

### Backend

- **Framework** : Django REST Framework (DRF)  
- **Base de données** : PostgreSQL  
- **Cache / Message broker** : Redis  
- **Orchestration** : Kubernetes  
  - Backend, DB et Redis sont **clusterisés** pour la haute disponibilité et la résilience.  
  - Les pods sont exposés via **Services** et un **Ingress** pour gérer le routage HTTP.  
  - Manifests Kubernetes : `backend/k8s/`  
- **Scripts de gestion Kubernetes** :  
  - `backend/launch-dev.sh` → Lancer le cluster backend/dev  
  - `backend/launch-prod.sh` → Lancer le cluster backend/prod  
  - `backend/stop.sh` → Stopper le cluster

### Frontend

- **Framework** : React + Vite  
- **Styling** : Tailwind CSS  
- **Mode dev** : Docker Compose avec volumes montés pour le rechargement rapide  
- **Mode prod** : Docker Compose + Nginx pour servir les fichiers statiques et proxy vers le backend

---

## ⚙️ Installation et lancement

### Prérequis

- Docker Desktop avec Kubernetes activé  
- `kubectl`  
- Node.js  
- Docker Compose

### Lancement en développement

1. **Déployer backend + services Kubernetes**

```bash
cd backend
./launch-dev.sh
````

2. **Lancer le frontend avec Docker Compose**

```bash
docker compose -f ../docker-compose.yml --profile dev up
```

3. Accéder à l’application :

   * Backend : `http://localhost:30001` (NodePort)
   * Frontend : `http://localhost:3000`

### Lancement en production

1. **Déployer backend + services Kubernetes**

```bash
cd backend
./launch-prod.sh
```

2. **Lancer le frontend prod avec Docker Compose / Nginx**

```bash
docker compose -f ../docker-compose.yml --profile prod up
```

3. Accéder à l’application :

   * Frontend : `http://localhost` ou `http://linkout.local` si Ingress configuré

### Arrêt de l’application

```bash
cd backend
./stop.sh
```

---

## 🎨 Fonctionnalités principales

* Rencontres Solo ou en Groupe
* Matchs variés (groupes vs groupes, solo vs solo, mix)
* Planification d’activités

---

## 🔧 Structure du projet

```
linkout/
├─ backend/               
│  ├─ Dockerfile.dev
│  ├─ Dockerfile.prod
│  ├─ k8s/                # Manifests Kubernetes (Deployment, Service, Ingress)
│  ├─ launch-dev.sh
│  ├─ launch-prod.sh
│  ├─ stop.sh
│  ├─ linkout/
│  └─ requirements.txt
├─ frontend/              
│  ├─ Dockerfile.dev
│  ├─ Dockerfile.prod
│  └─ src/                # Pages et composants React
├─ docker-compose.yml
└─ README.md
```

---

## 🔒 Sécurité et meilleures pratiques

* Utilisation de **Secrets Kubernetes** pour les credentials (PostgreSQL, Redis)
* Séparation dev / prod via Dockerfile et profiles Docker Compose
* Ingress Controller pour simuler un domaine local (`linkout.local`)

---

## 📌 Notes

* NodePort permet un accès rapide en dev (`localhost:30001`)
* Ingress Controller permet un accès via nom de domaine local (`linkout.local`)
* Frontend et backend peuvent être déployés et développés indépendamment