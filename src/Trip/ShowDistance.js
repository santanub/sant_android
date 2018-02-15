import React from "react";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
    Content, Right, Icon, Button, Text } from "native-base";

    class ShowDistance extends React.Component {
        constructor(props) {
          super(props);
        }

        calculateDistance(lat1, lon1, lat2, lon2, unit) {
      			if(lat1) {
							var radlat1 = Math.PI * lat1/180;
							var radlat2 = Math.PI * lat2/180;
            	var theta = lon1 - lon2;
            	var radtheta = Math.PI * theta/180
            	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            	dist = Math.acos(dist)
            	dist = dist * 180/Math.PI
							dist = dist * 60 * 1.1515;

							if(unit==="K") { dist = dist * 1.609344 }
							if (unit=="N") { dist = dist * 0.8684 }
							return dist;
						} else {
							return "still calculating";
						}
        }

        render() {
            const destinationLat = 21.661521;
            const destinationLong = 87.697736;

            return(
                <Card>
                  <Text>The remaining distance is</Text>
                  <Text>{this.calculateDistance(this.props.lat, this.props.long, destinationLat, destinationLong, "K")}</Text>
                </Card>
            );
				}
      }

    export default ShowDistance;