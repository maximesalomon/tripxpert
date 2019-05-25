import React from 'react';
import Card from './Card';

const destinations = [
    { id: 1, name: "Barcelona & Tenerife", cities: ["Barcelona", "Teneriffe", "Santa Cruz", "Teide"], fromPrice: 700 },
    { id: 2, name: "New york & East Coast", cities: ["Boston", "Niagara Falls", "NYC", "Florida"], fromPrice: 2100 },
    { id: 3, name: "Malta & Mediterranean", cities: ["Valetta", "Birgu", "Mdina", "Gozo"], fromPrice: 1200 }
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
