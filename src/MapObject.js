import React from 'react';
import MapObjectThroughProps from './MapObjectThroughProps';
const MapObject = () => {
  const arrobj = [
    {
      name: 'sujata',
      age: '22',
      role: 'developer',
      company: 'appwrk it solutions'
    },
    {
      name: 'subham',
      age: 21,
      role: 'Data Scientist',
      company: 'quantiphil'
    },
    {
      name: 'shashikant',
      age: 40,
      role: 'Team lead',
      company: 'Gates India PVT'
    },
    {
      name: 'sandhya',
      age: 38,
      role: 'teacher',
      company: 'xyz'
    }
  ];
  console.log(arrobj);

  return (
    <div>
      {arrobj.map(arr => {
        const { name, age, role, company } = arr;
        return (
          <div>
            <h1>{`Name is ${name},Age is ${age},Role is ${role},Company is ${company}`}</h1>
          </div>
        );
      })}
      <MapObjectThroughProps />
    </div>
  );
};
export default MapObject;
