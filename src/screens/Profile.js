import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import styles from '../styles/styleProfile'
import Axios from 'axios'



export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        Axios.get('https://api.github.com/users/zidniryi')
            .then((response) => {
                console.log(response)
                this.setState({ isLoading: false })
            })
            .catch(err => {
                this.setState({ isLoading: false })
                console.log(err)
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.textSite}>See Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


