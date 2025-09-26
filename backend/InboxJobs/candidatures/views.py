from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Candidature
from .serializers import CandidatureSerializer

class CandidatureViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CandidatureSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retourne uniquement les candidatures de l'utilisateur connecté
        return Candidature.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Associe automatiquement la candidature à l'utilisateur connecté
        serializer.save(user=self.request.user)