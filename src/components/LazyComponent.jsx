import { Suspense } from "react";
import PropTypes from 'prop-types';

const LazyComponent = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...rest} />
        </Suspense>
    )
}

LazyComponent.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyComponent;