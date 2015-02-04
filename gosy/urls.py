# coding: utf-8
from django.conf.urls import patterns, url

urlpatterns = patterns('gosy.views',
    url(r'^(?P<pk>\d+)/$', 'item_detail', name='ItemDetail'),
    url(r'^$', 'home', name='Home'),
)
