import React from 'react';
import * as Api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      categoriesList: [],
    };
  }

  componentDidMount() {
    Api.getCategories().then((responseList) => {
      this.setState({
        isLoading: false,
        categoriesList: responseList,
      });
    });
  }

  render() {
    const { isLoading, categoriesList } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return categoriesList.map((category) => (
      <label htmlFor={category.id} key={category.name}>
        <input
          id={category.id}
          type="radio"
          name="category"
          data-testid="category"
          value={category.id}
        />
        {category.name}
      </label>
    ));
  }
}

export default Categories;
