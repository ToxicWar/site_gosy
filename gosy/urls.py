# coding: utf-8
from django.conf.urls import patterns, url

urlpatterns = patterns('gosy.views',
    url(r'^$', 'home', name='Home'),
)
