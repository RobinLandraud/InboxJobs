from rest_framework.routers import DefaultRouter
from .views import PingViewSet

router = DefaultRouter()
router.register(r'ping', PingViewSet, basename='ping')

urlpatterns = router.urls