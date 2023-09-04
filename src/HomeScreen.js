import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export  const HomeScreen = ({navigation}) => {
	return (
	  <View>
		<TextInput id="=title" placeholder="title" />
		<TextInput id="debut"  placeholder="date" />
		

		<Button
		title="Enregistrer"
		onPress={() =>
		  alert ("enregistrement")
		}
	  />

		
		<Button
		title="See my activities"
		onPress={() =>
		  navigation.navigate('Profile', {name: 'Jane'})
		}
	  />
	 <Text>blah blah le formulaire</Text> 
	  </View>
	);
  };