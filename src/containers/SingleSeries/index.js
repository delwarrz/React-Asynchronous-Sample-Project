import React, { Component } from 'react';
import Loader from '../../Components/Common/Loader';
import Header from '../../Components/Common/Header';
import 'whatwg-fetch';
import parse from 'html-react-parser';

class SingleSeries extends Component {
	state = {
		show: null,
		isFetching: false,
		id: this.props.match.params.id
	}

	componentDidMount(){		
		this.setState({isFetching: true});

		fetch('http://api.tvmaze.com/shows/'+this.state.id+'?embed=episodes')
		.then(response => response.json())
	    .then(json => this.setState({show:json, isFetching:false}));	    
	}

	render(){
		const { show } = this.state;

		return(
			<div className="container">
				<Header />
				<div className="row">
					<div className="col-sm-12">
						{show === null && <Loader />}
						{
							show !== null 
							&&
							<div>
							<table className="table table-condensed">
								<tbody>
									<tr>
										<td colSpan="2" className="text-center"><img src={show.image.medium} alt="{show.name}" /></td>
										<td>{parse(show.summary)}</td>
									</tr>
									<tr>
										<td style={{width: '100px'}}>Name</td>
										<td style={{width:'2px'}}>:</td>
										<td>{ show.name }</td>
									</tr>
									<tr>
										<td>Language</td>
										<td>:</td>
										<td>{ show.language }</td>
									</tr>
									<tr>
										<td>Genres</td>
										<td>:</td>
										<td>
											<ul>
												{show.genres.map((genre, index) => <li key={index}>{genre}</li>)}
											</ul>
										</td>
									</tr>
									<tr>
										<td>Available Episodes</td>
										<td>:</td>
										<td>
											{ show._embedded.episodes.length }
										</td>
									</tr>
								</tbody>
							</table>
							</div>
						}						
					</div>
				</div>
			</div>
		)
	}
}

export default SingleSeries;