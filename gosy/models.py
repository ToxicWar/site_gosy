# coding: utf-8
from __future__ import unicode_literals
from django.db import models
import watson


class Item(models.Model):
    question = models.CharField(max_length=1000)
    answer = models.CharField(max_length=100000)

    def __unicode__(self):
        return self.question

watson.register(Item)
