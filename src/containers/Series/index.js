import React, { Component } from 'react';
import 'whatwg-fetch';
import SeriesList from '../../Components/SeriesList';
import Header from '../../Components/Common/Header';

class Series extends Component {
	state = {
	    series: [],
	    keyword: '',
	    isFetching: false,
	}

	componentDidMount(){
	    
	}

	handleSearchQuery = (e) => {
	    this.setState({keyword: e.target.value, isFetching: true});
		fetch('http://api.tvmaze.com/search/shows?q='+e.target.value)
	    .then(response => response.json())
	    .then(json => this.setState({series:json,isFetching:false}));
	}

	render(){
		return(		
			<div className="container">
				<Header />
				<div style={{padding: '25px'}}>			
					<div className="row justify-content-center">					
						<div className="col-sm-4">
							<input type="text" name="search" value={this.state.keyword} className="form-control" onChange={this.handleSearchQuery} placeholder="Search Here..." />
						</div>
					</div>
					
					<h3>Search Results</h3>
					{
						this.state.series.length === 0
						&&
						<p className="text-danger">Write on search box to get result...</p>
					}
					<SeriesList list={this.state.series} />
				</div>
			</div>
		);
	}
}

export default Series;