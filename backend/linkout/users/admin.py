from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser

    # Champs à afficher dans la liste
    list_display = ('email', 'get_full_name', 'age', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')

    # Champs pour la recherche
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

    # Champs du formulaire d'édition dans l'admin
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informations personnelles', {'fields': ('first_name', 'last_name', 'age', 'interests', 'description')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Dates importantes', {'fields': ('last_login', 'date_joined')}),
    )

    # Champs lors de la création d'un nouvel utilisateur dans l'admin
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )

    # Méthodes pour les champs calculés
    def get_full_name(self, obj):
        return obj.get_full_name()
    get_full_name.short_description = 'Nom complet'
