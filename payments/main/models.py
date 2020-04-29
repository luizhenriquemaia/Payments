from django.db import models
from django.contrib.auth.models import User


class Status(models.Model):
    description = models.CharField(max_length=100)
    alerta = models.PositiveSmallIntegerField()
    objects = models.Manager()

class Payment(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500, null=True)
    # add a status forignkey
    venc = models.DateField()
    date_of_creation = models.DateField(auto_now=True)
    # when the project go to production null=False
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    objects = models.Manager()
