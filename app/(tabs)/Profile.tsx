import { View, Dimensions } from "react-native";
import { Avatar } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemedText } from "@/components/ThemedText";

const { width } = Dimensions.get('window'); // Get the device width
const { height } = Dimensions.get('window'); // Get the device width


const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
    paddingVertical: 20
  },
  avatar: {
    margin: width * 0.02, // margin based on screen width
  },
  settingsIcon: {
    marginTop: 25,
    marginRight: width * 0.05, // margin based on screen width
  },
  text: {
    color: "#757575",
    marginLeft: width * .03,
    lineHeight: 30
  },
  subcriptionBox: {
    margin: width * 0.05
  },
  upgradeBox: {
    backgroundColor: "#e8b931",
    width: width * .7,
    flexDirection: 'row',
    padding: width * .05,
    borderRadius: 10,
    justifyContent: 'flex-start',
  },
  upgradeBoxContainer: {
    alignItems: 'center',
    marginTop: height * .02
  },
  upgradeStarIcon: {
    marginRight: width * .04
  }
});

function Profile() {
  return (
    <ThemedView>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => console.log("TAKE ME TO PROFILE VIEW")}>
          <Avatar.Image source={require("../../assets/images/gettyimages.jpg")}
            size={width * 0.35}  // 35% of screen width
            style={styles.avatar}
          />
        </TouchableOpacity>
        {/* TODO: Create settings page / modal*/}
        <TouchableOpacity onPress={() => console.log("TAKE ME TO SETTIGNS")}>
          <MaterialCommunityIcons name="cog-outline" size={45} color="#a8a8a8" style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.subcriptionBox}>
        <ThemedText type="title">Subscription</ThemedText>
        <ThemedText style={styles.text}>Upgrade the Nest</ThemedText>
      </View>
      <View>
        {/* TODO: Create sub details page / modal*/}
        <TouchableOpacity style={styles.upgradeBoxContainer} onPress={() => console.log("TAKE ME TO SUB DETAILS")}>
          <View style={styles.upgradeBox}>
            <MaterialCommunityIcons name="star-outline" size={24} color="black" style={styles.upgradeStarIcon} />
            <ThemedText>Get WOO Plus</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

export default Profile;
