# Generated by Django 3.2.8 on 2021-10-21 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sneaker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model_name', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=300)),
                ('release_date', models.PositiveIntegerField(default=None)),
                ('cost', models.FloatField(default=None)),
                ('image', models.CharField(default=None, max_length=200)),
            ],
        ),
    ]
