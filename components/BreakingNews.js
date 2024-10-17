import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function BreakingNews() {
  const [newData, setNewData] = useState([]);
  const api_key = "e45c094d4ceb499f8c839514afc06421";
  const news_api_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;

  // Fetch news from the API
  useEffect(() => {
    fetch(news_api_url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching data: " + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setNewData(data.articles);
      })
      .catch(error => console.error("Error:", error));
  }, []); // Run once when the component mounts

  // Render each news item
  const renderItem = ({ item }) => {
    return (
      <View style={styles.newsItem}>
        {/* Display Image if available */}
        {item.urlToImage && (
          <Image
            source={{ uri: item.urlToImage }}
            style={styles.newsImage}
          />
        )}
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsSource}>Source: {item.source.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Display the news list */}
      <FlatList
        data={newData}
        renderItem={renderItem}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  newsItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '100%',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsSource: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  newsImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});
