"""
URL configuration for tpfinal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views as core_views
from django.conf import settings
from propiedad import views as propiedad_views
from infoutil import views as infoutil_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',propiedad_views.index,name="home"),
    path('nosotros',core_views.nosotros,name="nosotros"),
    path('noticias',core_views.noticias,name="noticias"),
    path('detalle/<int:id>/',propiedad_views.detalle,name="detalle"),
    path('detalle_caracteristicas/<int:id>/',propiedad_views.detalle_caracteristicas,name="detalle_caracteristicas"),
    path('cliente',core_views.cliente,name="cliente"),
    path('infoutil',infoutil_views.infoutil,name="infoutil"),
    path('contacto/',core_views.contacto,name="contacto"),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)