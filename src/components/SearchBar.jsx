import React from 'react';
import * as Api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: '', searchResult: [] };
  }
}