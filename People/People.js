import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { fetchPeopleFromAPI } from '../actions';
import { connect } from 'react-redux';

const People = (props) => {
    const {
        people, isFetching
    } = props.people;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Redux Example</Text>
            <TouchableHighlight style={styles.button} onPress={() => props.getPeople()}><Text>Fetch Data</Text></TouchableHighlight>
            {
                isFetching && <Text>Loading...</Text>
            }
            {
                people.length ? (
                    people.map((person, index) => {
                        return(
                            <View key={index}>
                                <Text>Name: {person.name}</Text>
                                <Text>Birth-Year: {person.birth_year}</Text>
                            </View>
                        )
                    })
                ) : null
            }
        </View>
    )
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getPeople: () => dispatch(fetchPeopleFromAPI())
    }
  }

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'blue',
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});
    
export default connect(mapStateToProps, mapDispatchToProps)(People)