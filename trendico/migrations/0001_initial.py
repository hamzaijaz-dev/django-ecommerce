# Generated by Django 4.2.3 on 2023-08-02 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=50)),
                ('img_URL', models.ImageField(upload_to='images')),
                ('price', models.FloatField()),
                ('discount_price', models.FloatField(blank=True, null=True)),
                ('category', models.CharField(choices=[
                 ('L', 'Laptop'), ('T', 'Tab'), ('C', 'Camera'), ('H', 'Headphone')], max_length=1)),
                ('label', models.CharField(choices=[
                 ('P', 'primary'), ('S', 'secondary'), ('D', 'danger')], max_length=1)),
                ('description', models.TextField()),
            ],
        ),
    ]
