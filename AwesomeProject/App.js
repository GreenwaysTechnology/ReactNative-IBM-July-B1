import { StyleSheet, View, Text, Button } from "react-native";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
//declare state
const initialState = {
    value: 10
}
//holds biz logic with immutable pattern but it internally uses immer js
const counterSlice = createSlice({
    initialState,
    name: 'counter',
    //biz logic :reducers
    reducers: {
        //apis
        increment(state) {
            //immer logic
            state.value++
        },
        decrement(state) {
            //immer logic
            state.value--
        }
    }
})
//extract reducers , actions
const CounterReducer = counterSlice.reducer

//create store object: UI communicates via store
const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

const Counter = props => {
    //grab the data from redux
    const value = useSelector(state => {
        //appState.reducerName.stateValue
        return state.counter.value
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send action to redux
        dispatch({ type: 'counter/increment' })
    }

    return <View>
        <Text>{value}</Text>
        <Button title="+" onPress={onIncrement} />
        <Button title="-" onPress={() => {
            dispatch({ type: 'counter/decrement' })
        }} />

    </View>
}

/////////////////////////////////////////////////////////////////////////////
const App = () => {
    return <Provider store={store}>
        <View style={styles.container}>
            <Counter />
        </View>
    </Provider>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 24,
        color: 'blue'
    },
    elementsContainer: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,
        justifyContent: 'center',
        marginBottom: 24
    }

})

