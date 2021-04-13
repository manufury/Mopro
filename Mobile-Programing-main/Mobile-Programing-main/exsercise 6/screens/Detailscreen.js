import * as React from 'react';
import { View, Text, Button, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

// export default function DetailsScreen() {
//     const url = 'https://jsonplaceholder.typicode.com/users';

  
//     );
// }

class DetailsScreen extends React.Component {

    constructor() 
    {
        super() 
        this.state= {
            data:[]
        }
    }

    componentDidMount()
    {
        this.getapiData()
    }
    async getapiData()
    {
        let resp = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        // console.warn(resp.data);
        
        this.setState({data:resp.data})

    }

    render() {
        return(
            <View style={{flex: 1, margin: 70}}>
                {
                    
                    <View>
                        {
                            <Text>Name : {this.state.data.name}</Text>
                        } 
                        {
                            <Text>User name : {this.state.data.username}</Text>
                        }
                        {
                            <Text>Email : {this.state.data.email}</Text>
                        }
                        {
                            <Text>phone : {this.state.data.phone}</Text>
                        }
                    </View> 
                }
            </View>
        )
    }
}

export default DetailsScreen;