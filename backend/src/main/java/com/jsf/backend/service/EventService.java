package com.jsf.backend.service;

import com.jsf.backend.model.Event;
import com.jsf.backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Service
public class EventService {
    EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> allEvents()
    {
        return eventRepository.findAll();
    }

    public Event eventById(Integer userId){
        return eventRepository.findByEventId(userId);
    }

    public void addEvent(Event event) {
        event.setEventId((int) eventRepository.count() + 1);
        event.setClubId((int) eventRepository.count() + 1);
        eventRepository.save(event);
    }

    public List<Event> eventsByClubId(Integer clubId){
        return eventRepository.findEventsByClubId(clubId);
    }
}
