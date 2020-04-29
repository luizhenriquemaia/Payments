from .models import Payment
from rest_framework import viewsets, permissions
from .serializers import PaymentSerializer


# Payment Viewset
class PaymentViewSet(viewsets.ModelViewSet):
    #permissions_classes = [
    #    permissions.IsAuthenticated
    #]
    serializer_class = PaymentSerializer

    # Allow us to save the owner when we create a payment
    def perform_create(self, serializer):
        serializer.save()
        #serializer.save(owner=self.request.user)
