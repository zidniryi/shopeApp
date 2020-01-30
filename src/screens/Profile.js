import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import styles from '../styles/styleProfile'
import Axios from 'axios'



export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            data: {}
        }
    }

    componentDidMount() {
        Axios.get('https://api.github.com/users/zidniryi')
            .then((response) => {
                console.log(response.data.login)
                this.setState({ isLoading: false, data: response.data })
            })
            .catch(err => {
                this.setState({ isLoading: false })
                console.log(err)
            })

    }

    render() {
        const userProfile = this.state.data
        console.log(userProfile)
        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator size='large' color='green' />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: userProfile.avatar_url }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>{userProfile.login}</Text>
                        <Text style={styles.info}>{userProfile.id} / {userProfile.location}</Text>
                        <Text style={styles.description}>{userProfile.bio}</Text>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.textSite}>See Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


