from django.db import models
from django.contrib.auth.models import User


class Flight(models.Model):
    flightNumber = models.CharField(max_length=10)
    operatingAirlines = models.CharField(max_length=25)
    departureCity = models.CharField(max_length=30)
    arrivalCity = models.CharField(max_length=30)
    dateOfDeparture = models.DateField()
    estimatedTimeOfDeparture = models.TimeField()

    def __str__(self):
        return f'{self.flightNumber} - {self.departureCity} - {self.arrivalCity}'


class Passenger(models.Model):
    firstName = models.CharField(max_length=40)
    lastName = models.CharField(max_length=30)
    email = models.EmailField()
    phoneNumber = models.IntegerField()
    updateDate = models.DateTimeField(auto_now=True)
    createDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.firstName} {self.lastName}'


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    passenger = models.ManyToManyField(Passenger, related_name='passenger')
    flight = models.ForeignKey(
        Flight, on_delete=models.CASCADE, related_name='reservations')
