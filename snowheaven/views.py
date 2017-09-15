from django.shortcuts import render


def first(request):
    return render(request, 'mobile_first.html')


def mobile_partner(request):
    return render(request, 'mobile_partner.html')


def mobile_cloud(request):
    return render(request, 'mobile_cloud.html')


def mobile_introduction(request):
    return render(request, 'mobile_introduction.html')


def mobile(request):
    return render(request, 'mobile.html')


def reg(request):
    return render(request, 'mobile_reg.html')


def login(request):
    return render(request, 'mobile_log_in.html')


def welcome(request):
    return render(request, 'mobile_welcome.html')


def pesDemo(request):
    return render(request, 'mobile_pesDemo.html')


def honer(request):
    return render(request, 'mobile_honer.html')


def history(request):
    return render(request, 'mobile_history.html')
