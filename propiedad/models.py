from django.db import models

# Create your models here. usuario : ironmario pass: admin

class Propiedad(models.Model):
    direccion = models.CharField(max_length=200)
    imagen1 = models.ImageField(upload_to="publicacion")
    imagen2 = models.ImageField(upload_to="publicacion")
    imagen3 = models.ImageField(upload_to="publicacion")
    imagen4 = models.ImageField(upload_to="publicacion")
    presentacion = models.TextField()
    precio= models.DecimalField(max_digits=10, decimal_places=2)
    mapa=models.TextField(default='mapa no disponible') 
    descripcion = models.TextField(default='Sin descripción') 
    caracteristicas = models.CharField(max_length=200,default='no disponible')