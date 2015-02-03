# coding: utf-8
from __future__ import unicode_literals
from django.views.generic import TemplateView, ListView
from gosy.models import Item
import watson


class Home(ListView):
    template_name = 'index.html'
    model = Item

    def get_queryset(self):
        query = self.request.GET.get('query', None)
        if query:
            search_results = watson.search(query)
            return [item.object for item in search_results]
        return Item.objects.all()
home = Home.as_view()
