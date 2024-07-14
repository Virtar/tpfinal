from django.shortcuts import render,HttpResponse


# Create your views here.



def nosotros(request):
    return render(request,"core/nosotros.html")
def noticias(request):
    return render(request,"core/noticias.html")
def cliente(request):
    return render(request,"core/cliente.html")
def contacto(request):
    return render(request,"core/contacto.html")
