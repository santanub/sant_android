import React from "react";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
    Content, Right, Icon, Button, Text } from "native-base";

    class ShowDistance extends React.Component {
      constructor(props) {
        super(props);
        
        this.state = {
          timer: null,
          distance: 0
        };
      }
      
      componentWillMount() {
        //this.calculateDistance(this.props.lat, this.props.long, "K");
      }

      componentDidMount() {
        //let timer = setInterval(this.calculateDistance(this.props.lat, this.props.long, "K"), 1000);
        //this.setState({timer});
      }

      componentWillUnmount() {
        //clearInterval(this.state.timer);
      }
      
      calculateDistance(lat1, lon1, unit) {
        const destinationLat = 21.661521;
        const destinationLong = 87.697736;
        let lat2 = destinationLat;
        let lon2 = destinationLong;

        if(false) {
          distanceUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ lat1 +","+ lon1 +"&destinations="+ destinationLat +","+ destinationLong+"&key=AIzaSyCRvKAFoW1sqdCsmP6G5Ss9a7pubqKgbug";
          fetch(distanceUrl).then((data) => {
            var response = JSON.parse(data._bodyText);
            this.setState({ distance: response.rows[0].elements[0].distance.value/ 1000});
          })
        }
      	else if(lat1) {
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
					this.setState({ distance: dist });
				} else {
					return "still calculating";
				}
      }

      render() {
        this.calculateDistance(this.props.lat, this.props.long, "K");
        
        return(
            <Card>
              <Text>The remaining distance is</Text>
              <Text>{this.state.distance}</Text>
            </Card>
        );
			}
    }

    export default ShowDistance;