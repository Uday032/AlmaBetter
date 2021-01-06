from django.db import models

# Create your models here.
class StudentMarks(models.Model):
    roll_no = models.IntegerField()
    name = models.CharField(max_length=30)
    physicsmarks = models.IntegerField()
    mathsmarks = models.IntegerField()
    chemistrymarks = models.IntegerField()