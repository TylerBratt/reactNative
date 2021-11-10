import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function App() {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([])
  const [gigs, setGigs] = useState([
    {
      description: 'freelance job',
      amount:499.99,
      timestamp: new Date()
    },
    {
      description: 'job 2',
      amount:799.99,
      date: new Date()
    }
  ]);

  useEffect(()=> {

  }, [gigs])

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total+Number(gig.amount), 0));
  },[gigs])

  const addGig = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount,
      timestamp: new Date()
    }]);
    setDescription('');
    setAmount();
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Monthly Earnings</Text>
          
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,


                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      <View>
        <Text style={styles.titleText}>Task List</Text>
      </View>
        <Text>Total Income ${total}</Text>
      <TextInput
        style={styles.todoInput}
        value={description}
        placeholder="Enter a description"
        onChangeText={text => setDescription(text)} 
      />
      <TextInput
        style={styles.todoInput}
        value={amount}
        placeholder="Enter the amount made"
        keyboardType="numeric"
        onChangeText={text => setAmount(text)} 
      />
      <Button 
        disabled={!amount || !description} 
        onPress={addGig} 
        title='Add Gig' />
      {gigs.map(gig => (
        <View>
          <Text key={description.id}>{gig.description}</Text>
          <Text key={amount.id}>${gig.amount}</Text>
        </View>
      ))}
    </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  titleText: {
    backgroundColor: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
  },
  todoInput: {
    margin:20,
    borderColor:'red',
    borderWidth: 2,
    height: 40,
    borderRadius: 3,
  }
})
