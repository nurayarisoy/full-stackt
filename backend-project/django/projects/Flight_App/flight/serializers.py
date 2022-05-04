from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Flight, Passenger, Reservation


class FlightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flight
        fields = '__all__'


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    passanger = PassengerSerializer(many=True, required=False)
    flight_id = serializers.IntegerField()
    user = serializers.StringRelatedField()
    user_id = serializers.IntegerField(required=False, write_only=True)

    class Meta:
        model = Reservation
        fields = (
            "id",
            "flight_id",
            "passanger",
            "user",
            "user_id"
        )

    def create(self, validated_data):
        print(validated_data)
        passenger_data = validated_data.pop('passanger')
        print(passenger_data)
        validated_data["user_id"] = self.context['request'].user.id
        reservation = Reservation.objects.create(**validated_data)
        for passenger in passenger_data:
            reservation.passanger.add(Passenger.objects.create(**passenger))
        reservation.save()

        return reservation

class StaffFlightSerializer(serializers.ModelSerializer):
    reservations = ReservationSerializer(many=True, read_only=True)
    
    class Meta:
        model = Flight
        fields = (
            "flightNumber",
            "operatingArilines",
            "departureCity",
            "arrivalCity",
            "dateOfDepature",
            "estimatedTimeOfDeparture",
            "reservations"
        )