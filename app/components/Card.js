import React from 'react';
import styled from 'styled-components';

const Card = ({destination}) => {
  return (
      <CardHover>
          <div><img width="100%" src="app/images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG"></img></div>
          <div class="card-infos-container">
              <p class="card-destinations">{destination.name}</p>
              <div class="card-destinations-more">
                {
                    destination.cities.map(city => {
                        return (
                            <p class="card-destinations-city">{city}</p>
                        )
                    })
                }

              </div>
              <CardDetails>
                <CardPrice>From $700</CardPrice>
                <CardLink>View details</CardLink>
              </CardDetails>
          </div>
    </CardHover>
  )
}

const CardHover = styled.div `
    border: 1px solid #f2f2f2;
    box-shadow: 0px 4px 4px rgba(61, 64, 72, 0.04);
    :hover {
        box-shadow: 0px 4px 4px rgba(61, 64, 72, 0.23);
    }
`

const CardDetails = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    position: relative;
    width: 100%;
`

const CardPrice = styled.p `
    color: #ea0058;
`
const CardLink = styled.p `
    position: absolute;
    right: 0px;
    color: #0072ef;
    :hover {
        cursor: pointer;
    }
`

export default Card;