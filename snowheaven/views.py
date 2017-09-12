from django.shortcuts import render


def mobile(request):
    return render(request, 'mobile.html')
