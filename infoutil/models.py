from django.db import models


# Create your models here.


class InfoUtil(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descripción")
    description2 = models.TextField(verbose_name="Descripción2",default='no disponible')
    image = models.ImageField(verbose_name="Imagen", upload_to="infoutils")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de modificación")
    
    def __str__(self) :
        return self.title
    
    class Meta:
        verbose_name = "infoutil"
        verbose_name_plural = "infoutils"
        ordering = ["-created"]