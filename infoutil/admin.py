from django.contrib import admin
from .models import InfoUtil
# Register your models here.

class InfoUtilAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

admin.site.register(InfoUtil, InfoUtilAdmin)
