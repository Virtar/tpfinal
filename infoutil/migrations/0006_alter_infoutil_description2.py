# Generated by Django 5.0.7 on 2024-07-12 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infoutil', '0005_alter_infoutil_description2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='infoutil',
            name='description2',
            field=models.CharField(default='no disponible', max_length=2000, verbose_name='Descripción2'),
        ),
    ]
