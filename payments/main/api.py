from .models import Payment
from rest_framework import viewsets, permissions
from .serializers import PaymentSerializer


# Payment Viewset
class PaymentViewSet(viewsets.ModelViewSet):
    #permissions_classes = [
    #    permissions.IsAuthenticated
    #]
    serializer_class = PaymentSerializer

    def get_queryset(self):
        return self.request.user.payments.all()

    # Allow us to save the owner when we create a payment
    def perform_create(self, serializer):
        serializer.save()
        #serializer.save(owner=self.request.user)
