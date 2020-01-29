import React from 'react';
import { Link } from 'react-router-dom';

const SeriesList = (props) => {
	return (
		<div>
			<ul className="list-group list-group-flush">
				{ props.list.map(series => (
					<li key={series.show.id} className="list-group-item">
						{
							series.show.image !== null 
							&&
							<img src={series.show.image.medium} alt={series.show.name} style={{width: '50px', marginRight: '10px'}} />

						}
						<Link to={'/series/'+series.show.id}>
							{series.show.name}
						</Link>
						<p>Genres: { series.show.genres.map(genre => (
							genre+', '
						))}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SeriesList;