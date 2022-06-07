import React from 'react';
import {Weather} from '../../App';
import ReactTestRenderer from 'react-test-renderer';

test('the fetch data has weather and temparature', () => {
  return fetch("https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=356e3bde964b8eb6e1412d5c1c144f23&units=metric")
  .then(res => res.json()).then(data => {
    expect(data).toHaveProperty('weather');
    expect(data).toHaveProperty(['main', 'temp']);
  });
});
