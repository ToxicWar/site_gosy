# coding: utf-8
from __future__ import unicode_literals
from django.core.exceptions import ValidationError
from django.core.management import BaseCommand
from gosy.models import Item
import json
import codecs


class Command(BaseCommand):
    def handle(self, *args, **options):
        f = codecs.open(args[0], encoding='utf-8')

        try:
            data = json.loads(f.read())
        except ValueError as e:
            return e.message

        i = 0
        for item in data:
            item, _ = Item.objects.get_or_create(question=item[0], answer=item[1])
            i+=1

        print 'Loads {} elements'.format(i)
