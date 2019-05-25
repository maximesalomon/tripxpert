import React from 'react';

import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter } from '@progress/kendo-react-layout'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'


class DestinationTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        }
    }
    render() {
        return (
            <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
                <TabStripTab title="Overview">
                    <div>
                        <p>Barcelona is an excellent place to discover world-class arts and culture. Bullfighting was officially banned several years ago, but the city remains rich with festivals and events. The sights in Barcelona are second to none. Don’t miss the architectural wonder, Casa Mila—otherwise known as La Pedrera. It’s a modernist apartment building that looks like something out of an expressionist painting. Make your way up to the roof for more architectural surprises. And if you like Casa Mila, you’ll want to see another one of Antoni Gaudi’s architectural masterpieces, Casa Batllo, which is located at the center of Barcelona.
Tenerife, one of the nearby Canary Islands, is the perfect escape once you’ve had your fill of the city. In Los Gigantes, life revolves around the marina. Take a boat out in search of bottlenose dolphins and whales. For the able-bodied visitor, take a climb up “Cardiac Hill” to get a breathtaking view—and workout. While you’re in Tenerife, visit Mount Teide. It’s the highest point in Spain and the third-largest volcano in the world.</p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Attractions">
                </TabStripTab>
                <TabStripTab title="Enquiry Form">

                </TabStripTab>
                
            </TabStrip>
        )
    }
}

export default DestinationTabs;