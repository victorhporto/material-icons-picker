import React from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const Component = styled(({component: Node, ...props})=><Node {...props}/>)`
  font-size: 40px;
  color: ${({color})=>color};
`;

const Icon = ({component, theme}) => {
    return (
        <Component
            color={theme.palette.primary.main}
            component={component}
        />
    )
}

Icon.propTypes = {
    component: PropTypes.node.isRequired
}

export default withTheme(Icon);