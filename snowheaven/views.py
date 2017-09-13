from django.shortcuts import render


def first(request):
    return render(request, 'mobile_first.html')


def moblie_partner(request):
    return render(request, 'mobile_partner.html')


def mobile(request):
    return render(request, 'mobile.html')


def reg(request):
    return render(request, 'mobile_reg.html')
