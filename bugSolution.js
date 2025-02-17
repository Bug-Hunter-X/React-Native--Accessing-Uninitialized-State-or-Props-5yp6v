```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null 
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ error: 'Failed to load data' });
      });
  }

  render() {
    const { data, error } = this.state;

    if (error) {
      return <Text>{error}</Text>;
    }

    if (data === null) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        <Text>{data.name}</Text>
      </View>
    );
  }
}
```