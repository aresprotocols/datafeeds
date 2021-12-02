import { Link } from "react-router-dom";

const DataCell = props => {
	return (
		<Link to={"/pair/" + props.data.id} className="dataCellLayout">
			<div className="title">
				<img src={props.data.logo} />
				<span>{props.data.title}/USDT</span>
			</div>

			<div className="price">${props.data.price.toLocaleString()}</div>

			<div className="resourceLabels">
				<div className="tinyTitle">Resources</div>

				<div className="resourcesLine">
					<div className="resources">
						{props.data.weight.map(item => {
							return <img key={item.exchange} src={"/images/resources/" + item.exchange + ".png"} />
						})}
					</div>

					{props.data.isActived ? (<img src="/images/actived.png" />) : (<img src="/images/unactived.png" />)}
				</div>
			</div>
		</Link>);
};

export default DataCell;