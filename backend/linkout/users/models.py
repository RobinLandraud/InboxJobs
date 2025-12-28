from django.conf import settings
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )
    age = models.PositiveIntegerField()
    interests = models.JSONField(default=list)
    description = models.TextField()

    def __str__(self):
        return f"{self.user.username}'s profile"