import { Col } from 'reactstrap';

import React from 'react';

const Loading = () => {
	return (
		<Col>
			<i className="fa fa-spinner fa-oulse fa-3x fa-fw text-primary" />
			<p>Loading...</p>
		</Col>
	);
};

export default Loading;
