import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PLACES_API_KEY = 'AIzaSyDEyfKE59D2PIZug8baS_kzRWz2XtbEQi0';

export default function SearchBar({ cityHandler }) {
  return (
    <View style={styles.searchBarView}>
      <GooglePlacesAutocomplete
        query={{ key: PLACES_API_KEY, language: 'en' }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            borderRadius: 20,
            backgroundColor: '#eee',
            marginTop: 10,
            fontWeight: '700',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}
          >
            <AntDesign
              name="clockcircle"
              size={10}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
