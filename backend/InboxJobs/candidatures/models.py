from django.db import models
from django.contrib.auth.models import User

class Platform(models.TextChoices):
    LINKEDIN = "LinkedIn"
    INDEED = "Indeed"
    APEC = "APEC"
    OTHER = "Other"

class Candidature(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    platform = models.CharField(max_length=50, choices=Platform.choices)
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    status = models.CharField(max_length=50)  # Ex: "Accepted", "Rejected", "Pending"
    date = models.DateTimeField()
    email_id = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.position} @ {self.company}"
