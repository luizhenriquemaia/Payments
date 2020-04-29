from rest_framework import routers
from .api import PaymentViewSet


router = routers.DefaultRouter()
router.register('api/payments', PaymentViewSet, 'payments')


urlpatterns = router.urls