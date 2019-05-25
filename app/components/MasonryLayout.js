import React from 'react';
import Card from './Card';

const destinations = [
    { id: 1, name: "Barcelona & Tenerife", photo: "app/images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG", cities: ["Barcelona", "Teneriffe", "Santa Cruz", "Teide"], fromPrice: 700 },
    { id: 2, name: "New york & East Coast", photo: "app/images/Gallery/New-York-City/Brooklyn-Bridge_Pavlina-Hadjieva_Attraction.JPG", cities: ["Boston", "Niagara Falls", "NYC", "Florida"], fromPrice: 2100 },
    { id: 3, name: "Malta & Mediterranean", photo: "app/images/Gallery/Malta/Bibliotheca-National-Library_Marie-Lan-Nguyen.JPG",cities: ["Valetta", "Birgu", "Mdina", "Gozo"], fromPrice: 1200 }
]

const MasonryLayout = () => {
  return (
        destinations && destinations.map(destination => {
            return (
                <div class="card-container">
                    <Card key={destination.id} destination={destination}/>
                </div>
            )
        })
    )
}

export default MasonryLayout;
