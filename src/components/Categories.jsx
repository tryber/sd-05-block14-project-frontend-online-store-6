import React from 'react';
import * as Api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      categoriesList: [],
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount() {
    Api.getCategories().then((responseList) => {
      this.setState({
        isLoading: false,
        categoriesList: responseList,
      });
    });
  }

  changeCategory(ev) {
    const { onChangeCategory } = this.props;
    onChangeCategory(ev.target.value);
  }

  render() {
    const { isLoading, categoriesList } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <form className="categories">
        <p>Categorias:</p>
        {
          categoriesList.map((category) => (
            <label htmlFor={category.id} key={category.name}>
              <input
                id={category.id}
                type="radio"
                name="category"
                data-testid="category"
                value={category.id}
                onChange={this.changeCategory}
              />
              {category.name}
            </label>
          ))
        }
      </form>
    );
  }
}

export default Categories;
