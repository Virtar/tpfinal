from django.shortcuts import render, get_object_or_404
from .models import Propiedad
from django.http import JsonResponse
# Create your views here.
def index(request):
    publicaciones = Propiedad.objects.all()
    return render(request,"propiedad/index.html",{'publicaciones':publicaciones})
    #  publicaciones = list(Propiedad.objects.all().values('id', 'imagen1', 'presentacion'))
    #  return JsonResponse(publicaciones, safe=False)
    
#def detalle(request):
#    return render(request,"core/detalle.html") 
def detalle(request, id):
    publicacion = get_object_or_404(Propiedad, id=id)
    return render(request, 'propiedad/detalle.html', {'publicacion': publicacion})


    """ def detalle_caracteristicas(request, id):
    publicaciones = list(Propiedad.objects.all().values('id', 'imagen1', 'presentacion'))
    return JsonResponse(publicaciones, safe=False) """
def detalle_caracteristicas(request, id):
      # Obtener la propiedad con el ID dado
    propiedad = get_object_or_404(Propiedad, id=id)
  
    # Obtener solamente el campo 'caracteristicas' de la propiedad
    caracteristicas = propiedad.caracteristicas
    
    # Devolver las características como JSON
    return JsonResponse({'caracteristicas': caracteristicas}) 
    