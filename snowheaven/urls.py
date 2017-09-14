"""snowheaven URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
import snowheaven.views as view

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', view.first),
    url(r'^mobile_reg$', view.reg),
    url(r'^mobile_welcome$', view.welcome),
    url(r'^mobile_pesDemo$', view.pesDemo),
    url(r'^mobile_partner$', view.mobile_partner),
    url(r'^mobile_reg$', view.reg),
    url(r'^mobile_honer$', view.honer),
    url(r'^mobile_history$', view.history),
    url(r'^mobile_cloud', view.mobile_cloud),
    url(r'^mobile_introduction', view.mobile_introduction)]
