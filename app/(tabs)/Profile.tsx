import { Text, View, Dimensions } from "react-native";
import { Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window'); // Get the device width

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
    paddingVertical: 20
  },
  avatar: {
    margin: width * 0.05, // margin based on screen width
  },
  settingsIcon: {
    marginTop: 25,
    marginRight: width * 0.05, // margin based on screen width
  }
});

function Profile() {
  return (
    <ThemedView>
      <View style={styles.avatarContainer}>
        <Avatar.Image source={require("../../assets/images/gettyimages.jpg")}
          size={width * 0.35}  // 35% of screen width
          style={styles.avatar}
        />
        <MaterialCommunityIcons name="cog-outline" size={45} color="#a8a8a8" style={styles.settingsIcon} />
      </View>
      <View>
        {/* Title */}
        {/* Text */}
      </View>
      <View>
        {/* Upgrade Button */}
      </View>
    </ThemedView>
  );
}

export default Profile;
