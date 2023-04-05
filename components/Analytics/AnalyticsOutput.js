import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const AnalyticsOutput = (postsList) => {
  const colors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  let datasetCountry = {
    label: [],
    data: [],
  };

  let dataCountry = [];

  const posts = postsList['postsList'];
  posts.map((post) => {
    if (Object.values(datasetCountry.label).includes(post.country)) {
      let index = datasetCountry.label.indexOf(post.country);
      datasetCountry.data[index] += 1;
    } else {
      datasetCountry.label.push(post.country);
      datasetCountry.data.push(1);
    }
  });

  for (let i = 0; i < datasetCountry['data'].length; i++) {
    dataCountry.push({
      name: datasetCountry['label'][i],
      posts: datasetCountry['data'][i],
      color: colors[i],
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    });
  }

  let datasetMonth = {
    label: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  posts.map((post) => {
    let month = post.date.split(' ')[0];
    let index = datasetMonth.label.indexOf(month);
    datasetMonth.data[index] += 1;
  });

  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <Text style={styles.title}>Number of Posts per Country</Text>
        <PieChart
          data={dataCountry}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor={'posts'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          absolute
        />
      </View>
      <View style={styles.graphContainer}>
        <Text style={styles.title}>Number of Posts per Month</Text>
        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: datasetMonth['data'],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default AnalyticsOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphContainer: {
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
});
