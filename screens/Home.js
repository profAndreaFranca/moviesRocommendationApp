import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "react-native-vector-icons";
import axios from "axios";
import Star from "react-native-star-view";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {},
      ngrok_url: "",
    };
  }

  componentDidMount(){
    this.getMovie()
  }

  getMovie = () => {
    //recuperar os filmes
  };

  likedMovie = () => {
    //curtidos
  };

  dislikedMovie = () => {
    //não curtidos
  };

  notWatched = () => {
    //não assistidos
  };

  render() {
    const { movieDetails } = this.state;
    if (movieDetails.poster_link) {
        const { poster_link, original_title, release_date, duration, rating } = movieDetails;
        return (
            <View style={styles.container}>
              <ImageBackground
                source={require("../assets/bg.png")}
                style={{ flex: 1 }}
              >
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>Recomendação de Filmes</Text>
                  <TouchableOpacity
                    onPress={() => {
                      // this.props.navigation.navigate("Movies");
                    }}
                  >
                    <Ionicons name="caret-forward-circle" size={RFValue(30)} />
                  </TouchableOpacity>
                </View>
      
                <View style={styles.subContainer}>
                  <View style={styles.posterContainer}>
                    {/* incluir poster do filme */}
                    {/* <Image style={styles.posterImage} source={{  }} /> */}
                  </View>
      
                  <View style={{ flex: 0.15 }}>
                    <View style={styles.detailsContainer}>
                      <Text style={styles.title}>
                        {/* Exibir o título do filme */}
                        
                      </Text>
                      <Text style={styles.subtitle}>
                        {/* Exibir a data e duração do filme */}
                        
                      </Text>
                    </View>
                  </View>
      
                  <View style={styles.ratingContainer}>
                    {/* Exibir avaliação do filme */}
                    <Star score={5} style={styles.starStyle} />
                  </View>
      
                  <View style={styles.iconButtonContainer}>
                    <TouchableOpacity onPress={this.likedMovie}>
                      <Image
                        style={styles.iconImage}
                        source={require("../assets/like.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.dislikedMovie}>
                      <Image
                        style={styles.iconImage}
                        source={require("../assets/dislike.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.notWatched}>
                      <Image
                        style={styles.iconImage}
                        source={require("../assets/didNotWatch.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
    } else {
        return null
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 0.07,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#182854",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18),
    fontFamily: "monospace",
    textAlign: "center",
    flex: 1,
  },
  subContainer: {
    flex: 0.9,
  },
  posterContainer: {
    flex: 0.65,
    marginBottom: RFValue(10),
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: RFValue(280),
    height: RFValue(380),
    resizeMode: "stretch",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(5),
  },
  detailsContainer: {
    width: RFValue(280),
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    padding: RFValue(10),
    borderColor: "#182854",
    borderWidth: RFValue(2),
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  subtitle: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  ratingContainer: {
    flex: 0.1,
    alignItems: "center",
  },
  overview: {
    fontSize: RFValue(13),
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  iconButtonContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconImage: {
    width: RFValue(50),
    height: RFValue(50),
  },
  starStyle: {
    width: RFValue(200),
    height: RFValue(40),
  },
});
