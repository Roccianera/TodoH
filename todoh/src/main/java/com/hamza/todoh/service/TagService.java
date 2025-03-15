package com.hamza.todoh.service;

import com.hamza.todoh.model.Tag;
import com.hamza.todoh.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public Tag findOrAddTag(String tagName){

         var tag = tagRepository.findByName(tagName);
         if(tag.isPresent())
             return  tag.get();

         var saveTag= new Tag();
         saveTag.setName(tagName);
         return tagRepository.save(saveTag);

    }
}
