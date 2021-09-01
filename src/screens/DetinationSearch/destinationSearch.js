import React , {useState, useEffect} from 'react'
import { View, Text, TextInput } from 'react-native'
import destinationSearchStyles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const DestinationSearch = () => {
    const [Originplace, setOriginplace] = useState(null);
    const [Destinationplace, setDestinationplace] = useState (null);
    useEffect(() => {
        console.warn("Used effect is called");
        if (Originplace && Destinationplace)
        {console.warn ("We redirect to result")};
    }, [Originplace, Destinationplace]);
    return (
        <View style = {destinationSearchStyles.container}>
            <GooglePlacesAutocomplete
                placeholder='Từ'
                onPress=
                {   (data, details = null) => 
                    {
                        setOriginplace ({data,details}); // Because we do not know what the
                        // data is 
                        console.log(data, details);
                    }
                }
                styles = {{textInput  : destinationSearchStyles.textInput}}
                fetchDetails = {true}
                
            query=
            {
                {
                    key: 'AIzaSyDIHl5v5j2I1SDV76lKVkGGhUNRWjsOovk',
                    language: 'en',
                }
            }
    />  
             <GooglePlacesAutocomplete
                placeholder='Đến'
                onPress=
                {   (data, details = null) => 
                    {
                        setDestinationplace ({data,details}); // Because we do not know what the
                        // data is 
                        console.log(data, details);
                    }
                }
                styles = {{textInput  : destinationSearchStyles.textInput}}
                fetchDetails = {true}
                
            query=
            {
                {
                    key: 'AIzaSyDIHl5v5j2I1SDV76lKVkGGhUNRWjsOovk',
                    language: 'en',
                }
            } 
    />
        </View>
    );
};

export default DestinationSearch;
