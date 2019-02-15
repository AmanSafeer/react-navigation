import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,CameraRoll,ScrollView,Image,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      photos:[]
    }
  }

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Home Page</Text>
          <Button title="Load Images" onPress={this._handleButtonPress} />
          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
              <Image key={i} style={{ width: width/1.1, height: height/2,}} source={{ uri: p.node.image.uri }}/>
            );
          })}
          </ScrollView>
          {/* <Button title="Go to About Us" onPress={()=>this.props.navigation.navigate("About")}/> */}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });