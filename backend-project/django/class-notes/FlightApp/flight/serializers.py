from asyncore import write
from dataclasses import field
from importlib_metadata import requires
from rest_framework import serializers
from .models import Flight, Passenger, Reservation


class FlightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flight
        fields = (
            "id",
            "flightNumber",
            "operatingAirlines",
            "departureCity",
            "arrivalCity",
            "dateOfDeparture",
            "estimatedTimeOfDeparture",
        )


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = (
            "id",
            "firstName",
            "lastName",
            "email",
            "phoneNumber",
        )


class ReservationSerializer(serializers.ModelSerializer):
    passenger = PassengerSerializer(many=True, required=False)
    flight = serializers.PrimaryKeyRelatedField(queryset=Flight.objects.all())
    # flight_id = serializers.IntegerField()
    user = serializers.StringRelatedField()
    user_id = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Reservation
        fields = (
            "id",
            "flight",
            "passenger",
            "user",
            "user_id",
        )

    def create(self, validated_data):
        print(validated_data)
        passenger_data = validated_data.pop('passenger')
        print(passenger_data)
        validated_data["user_id"] = self.context['request'].user.id
        reservation = Reservation.objects.create(**validated_data)
        for passenger in passenger_data:
            pas = Passenger.objects.create(**passenger)
            reservation.passenger.add(pas)
        reservation.save()

        return reservation


class StaffFlightSerializer(serializers.ModelSerializer):
    reservations = ReservationSerializer(many=True, read_only=True)

    class Meta:
        model = Flight
        fields = (
            "flightNumber",
            "operatingAirlines",
            "departureCity",
            "arrivalCity",
            "dateOfDeparture",
            "estimatedTimeOfDeparture",
            "reservations",
        )
