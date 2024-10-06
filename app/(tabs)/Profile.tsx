import { Text, View } from "react-native"
import { Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20
  },
  avatar: {
    margin: 20
  },
  settingsIcon: {
    marginTop: 25,
    marginRight: 25
  }
})

function Profile() {
  return (
    <ThemedView>
      <View style={styles.avatarContainer}>
        <Avatar.Image source={require("../../assets/images/gettyimages.jpg")} size={140} style={styles.avatar} />
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
  )
}



export default Profile