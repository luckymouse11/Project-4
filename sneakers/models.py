from django.db import models

# Create your models here.
class Sneaker(models.Model):
    model_name = models.CharField(max_length=50)
    brand = models.CharField(max_length=20)
    description = models.CharField(max_length=300)
    release_date = models.PositiveIntegerField(default=None)
    cost = models.FloatField(default=None)
    image = models.CharField(max_length=200, default=None)

    def __str__(self):
        return f"{self.brand} \"{self.model_name}\" released on {self.release_date} for £{self.cost}"