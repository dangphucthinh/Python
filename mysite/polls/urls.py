from django.urls import path

from . import views

#setting path url
urlpatterns = [
    path('', views.index, name='index'),
]