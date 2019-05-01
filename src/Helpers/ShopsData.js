// Helpers/ShopsData.js
import React, { Component } from 'react';
import * as firebase from 'firebase';

var data = []
firebase.database().ref('/places').once('value', snap => {
  snap.forEach(elem => {
    data.push({
      id: elem.child('id').val(),
      name: elem.child('name').val(),
      coordinate: {
        latitude: elem.child('coords/latitude').val(),
        longitude: elem.child('coords/longitude').val(),
      },
      image: elem.child('image').val(),
      distance: elem.child('distance').val(),
      busy: elem.child('busy').val(),
    });
  });
})

export default data
