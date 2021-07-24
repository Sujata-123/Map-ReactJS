import React from 'react';
import MapObjectThroughProps1 from './MapObjectThroughProps1';
const MapObjectThroughProps = props => {
  const arrobj1 = [
    {
      name1: 'sujata1',
      age1: '22',
      role1: 'developer',
      company1: 'appwrk it solutions'
    },
    {
      name1: 'subham1',
      age1: 21,
      role1: 'Data Scientist',
      company1: 'quantiphil'
    },
    {
      name1: 'shashikant1',
      age1: 40,
      role1: 'Team lead',
      company1: 'Gates India PVT'
    },
    {
      name1: 'sandhya1',
      age1: 38,
      role1: 'teacher',
      company1: 'xyz'
    }
  ];
  console.log(arrobj1);
  return (
    <div>
      {arrobj1.map(arr1 => {
        <MapObjectThroughProps1
          name1={arr1.name1}
          age1={arr1.age1}
          role1={arr1.role1}
          company1={arr1.company1}
        />;
      })}
    </div>
  );
};
export default MapObjectThroughProps;
