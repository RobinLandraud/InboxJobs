from django.contrib import admin
from .models import Candidature

@admin.register(Candidature)
class CandidatureAdmin(admin.ModelAdmin):
    list_display = ('position', 'company', 'platform', 'status', 'user', 'date')
    list_filter = ('platform', 'status')
    search_fields = ('position', 'company')