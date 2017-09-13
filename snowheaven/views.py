from django.shortcuts import render


def mobile(request):
    return render(request, 'mobile.html')
def reg(request):
    return render(request, 'mobile_reg.html')
def welcome(request):
    return render(request, 'mobile_welcome.html')
def pesDemo(request):
    return render(request, 'mobile_pesDemo.html')