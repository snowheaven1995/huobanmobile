from django.shortcuts import render


def mobile(request):
    return render(request, 'mobile.html')
def reg(request):
    return render(request, 'mobile_reg.html')