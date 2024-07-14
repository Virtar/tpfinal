from django.shortcuts import render
from .models import InfoUtil

from django.http import JsonResponse


# Create your views here.


def infoutil(request):
    infoutils = InfoUtil.objects.all()
    return render(request, "infoutil/infoutil.html", {'infoutils':infoutils})