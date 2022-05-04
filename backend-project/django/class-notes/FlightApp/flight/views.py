from .models import Flight, Reservation
from .serializers import FlightSerializer, ReservationSerializer, StaffFlightSerializer
from rest_framework import viewsets
from .permissions import IsStuffOrReadOnly
from datetime import datetime, date


class FlightView(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    permission_classes = (IsStuffOrReadOnly,)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return StaffFlightSerializer
        else:
            return super().get_serializer_class()

    def get_queryset(self):
        now = datetime.now()
        current_time = now.strftime('%H:%M:%S')
        print("current time: ", current_time)
        today = date.today()
        print("Today: ", today)
        if self.request.user.is_staff:
            return super().get_queryset()
        else:
            queryset = Flight.objects.filter(dateOfDeparture__gt=today)
            if Flight.objects.filter(dateOfDeparture=today):
                today_qs = Flight.objects.filter(dateOfDeparture=today).filter(
                    estimatedTimeOfDeparture__gt=current_time)
                queryset = queryset.union(today_qs)
            return queryset


class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        if self.request.user.is_staff:
            return queryset
        return queryset.filter(user=self.request.user)
