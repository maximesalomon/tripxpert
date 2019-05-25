import React from 'react';
import Card from './Card';

const destinations = [
    {id: 1, name: "Barcelona"},
    {id: 2, name: "New york"},
    {id: 3, name: "Warsaw"}
]

console.log(destinations);

const MasonryLayout = () => {
  return (
        destinations && destinations.map(d => {
            return (
                <div class="card-container">
                    <Card key={d.id} d={d}/>
                </div>
            )
        })
    )
}

export default MasonryLayout;
