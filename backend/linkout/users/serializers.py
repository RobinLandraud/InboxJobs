from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile

class RegisterSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(write_only=True, required=True)
    last_name = serializers.CharField(write_only=True, required=True)
    age = serializers.IntegerField(write_only=True, required=True, min_value=1)
    interests = serializers.ListField(
        child=serializers.CharField(),
        write_only=True,
        required=True,
        min_length=1,
        allow_empty=False
    )
    description = serializers.CharField(write_only=True, required=True)

    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, min_length=6)

    class Meta:
        model = User
        fields = (
            "email",
            "password",
            "first_name",
            "last_name",
            "age",
            "interests",
            "description",
        )

    def create(self, validated_data):
        profile_data = {
            "age": validated_data.pop("age"),
            "interests": validated_data.pop("interests"),
            "description": validated_data.pop("description"),
        }

        email = validated_data["email"]
        base_username = email.split("@")[0]
        username = base_username
        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{base_username}{counter}"
            counter += 1

        user = User.objects.create_user(
            username=username,
            email=validated_data["email"],
            password=validated_data["password"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )

        UserProfile.objects.create(user=user, **profile_data)
        return user