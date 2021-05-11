import React from "react";
import * as mui from '@material-ui/icons';
import FlexSearch from 'flexsearch';
import synonyms from './synonyms';
import Icon from "./Icon";

const searchIndex = FlexSearch.create({
    async: true,
    tokenize: 'full',
});

const allIconsMap = {};
const allIcons = Object.keys(mui)
    .sort()
    .map((importName) => {
        let theme;
        if (importName.indexOf('Outlined') !== -1) {
            theme = 'Outlined';
        } else if (importName.indexOf('TwoTone') !== -1) {
            theme = 'Two tone';
        } else if (importName.indexOf('Rounded') !== -1) {
            theme = 'Rounded';
        } else if (importName.indexOf('Sharp') !== -1) {
            theme = 'Sharp';
        } else {
            theme = 'Filled';
        }

        const name = importName.replace(/(Outlined|TwoTone|Rounded|Sharp)$/, '');
        let searchable = name;
        if (synonyms[searchable]) {
            searchable += ` ${synonyms[searchable]}`;
        }
        searchIndex.add(importName, searchable);

        const icon = {
            importName,
            name,
            theme,
            Component: mui[importName],
        };
        allIconsMap[importName] = icon;
        return icon;
    });


const IconsPicker = () => {

    const [keys, setKeys] = React.useState(null);
    const [theme, setTheme] = React.useState('Filled');

    const icons = React.useMemo(() =>
        (keys === null ? allIcons : keys.map((key) => allIconsMap[key])).filter(
            (icon) => theme === icon.theme,
        ),
        [theme, keys],
    );

    return (
        <>
            {icons.map(icon => (
                <Icon
                    component={icon.Component}
                />
            ))}
        </>
    )
}

export default IconsPicker;