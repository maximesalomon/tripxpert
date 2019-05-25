import React, { Component } from 'react';
import styled from 'styled-components';

import DestinationInfos from './DestinationInfos';

import { DateRangePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'

class DestinationsPage extends Component {
  render() {
    return (
      <>
        <DestinationsHeader>
          <DatePickerContainer>
            <DateRangePicker />
          </DatePickerContainer>
        </DestinationsHeader>
        <DestinationInfos id={this.props.match.params.id}/>
      </>
    )
  }
}

const DestinationsHeader = styled.div`
  width: 100%;
  height: 480px;
  background-image: url("https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  position: relative;
`

const DatePickerContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 32px;
`

export default DestinationsPage;