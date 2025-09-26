from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

class PingViewSet(viewsets.ViewSet):
    """
    ViewSet simple pour tester l'API.
    """

    @action(detail=False, methods=['get'], url_path='')
    def ping(self, request):
        return Response({"message": "pong"})